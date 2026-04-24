// lib/useSheetSubmit.ts
// Shared hook used by all 4 forms to submit data to Google Sheets via Apps Script

"use client";

import { useState } from "react";

// ✅ REPLACE THIS with your deployed Google Apps Script Web App URL
export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJVHAGRMFPfVpLC2rZiErn8dFcRY7E_1yqlKniUKe3aO5LiAADO_XEDS1EBpTuNpzxUA/exec";

export type FormSource = "Hero Form" | "Popup Form" | "Sticky Enquiry" | "Floating Widget";

export type LeadPayload = {
  source: FormSource;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export function useSheetSubmit() {
  const [state, setState] = useState<SubmitState>("idle");

  const submit = async (payload: LeadPayload) => {
    setState("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // NOTE: Apps Script Web Apps require no-cors mode
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // no-cors means we can't read the response — assume success if no throw
      setState("success");
    } catch {
      setState("error");
    }
  };

  const reset = () => setState("idle");

  return { state, submit, reset };
}
