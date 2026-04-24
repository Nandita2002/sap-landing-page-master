"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  interactive: boolean;
  pressed: boolean;
};

export default function PremiumCursor() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasFinePointer =
      window.matchMedia("(any-pointer: fine)").matches ||
      window.matchMedia("(pointer: fine)").matches;
    const hasHover =
      window.matchMedia("(any-hover: hover)").matches ||
      window.matchMedia("(hover: hover)").matches;
    return (
      hasFinePointer &&
      hasHover &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    interactive: false,
    pressed: false,
  });

  useEffect(() => {
    document.body.classList.toggle("cursor-premium-enabled", enabled && visible);

    return () => {
      document.body.classList.remove("cursor-premium-enabled");
    };
  }, [enabled, visible]);

  useEffect(() => {
    if (!enabled) return;

    const onPointerMove = (event: PointerEvent) => {
      if (!visible) setVisible(true);
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest(
          "a,button,input,textarea,select,label,[role='button'],[data-cursor='interactive']"
        )
      );

      setCursor((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        interactive,
      }));
    };

    const onPointerDown = () => {
      setCursor((prev) => ({ ...prev, pressed: true }));
    };

    const onPointerUp = () => {
      setCursor((prev) => ({ ...prev, pressed: false }));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [enabled, visible]);

  if (!enabled || !visible) return null;

  const ringScale = cursor.interactive ? 1.35 : cursor.pressed ? 0.92 : 1;
  const dotScale = cursor.pressed ? 0.78 : 1;

  return (
    <>
      <div
        className={`premium-cursor-ring ${cursor.interactive ? "is-hover" : ""}`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: `translate(-50%, -50%) scale(${ringScale})`,
        }}
      />
      <div
        className={`premium-cursor ${cursor.interactive ? "is-hover" : ""} ${cursor.pressed ? "is-down" : ""}`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: `translate(-50%, -50%) scale(${dotScale})`,
        }}
      />
    </>
  );
}
