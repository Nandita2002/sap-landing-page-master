import { NextRequest, NextResponse } from "next/server";

const FALLBACK_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL?.trim() || FALLBACK_APPS_SCRIPT_URL;

export async function POST(req: NextRequest) {
  try {
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        { status: "error", message: "APPS_SCRIPT_URL is not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let response;
    try {
      const payload = JSON.stringify(body);
      response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
        signal: controller.signal,
      });

      const redirectedUrl = response.headers.get("location");
      const isAppsScriptRedirect =
        response.status >= 300 &&
        response.status < 400 &&
        redirectedUrl?.includes("script.googleusercontent.com/macros/echo");

      if (isAppsScriptRedirect && redirectedUrl) {
        // Apps Script commonly returns a redirect after accepting the POST.
        // Try to read the redirected JSON response; if unavailable, treat the
        // accepted redirect as success to avoid false-negative UI errors.
        try {
          const redirectedResponse = await fetch(redirectedUrl, {
            method: "GET",
            headers: {
              "Accept": "application/json",
            },
            signal: controller.signal,
          });

          if (redirectedResponse.ok) {
            const redirectedText = await redirectedResponse.text();
            try {
              const redirectedData = JSON.parse(redirectedText);
              if (redirectedData?.status === "success") {
                return NextResponse.json(redirectedData, { status: 200 });
              }
              if (redirectedData?.status === "error") {
                return NextResponse.json(redirectedData, { status: 500 });
              }
            } catch {
              return NextResponse.json({ status: "success" }, { status: 200 });
            }
          }
        } catch {
          return NextResponse.json({ status: "success" }, { status: 200 });
        }
      }
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          status: "error",
          message: `Apps Script failed with ${response.status}`,
        },
        { status: 500 }
      );
    }

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = {
        status: "error",
        message:
          "Apps Script did not return JSON. Verify deployment access and /exec URL.",
        raw: text.slice(0, 400),
      };
    }

    return NextResponse.json(
      data,
      { status: data?.status === "success" ? 200 : 500 }
    );

  } catch (err: unknown) {
    console.error("Proxy error:", err);

    let message = "Unknown error";

    if (err instanceof Error) {
      message = err.message;
    }

    return NextResponse.json(
      {
        status: "error",
        message,
      },
      { status: 500 }
    );
  }
}