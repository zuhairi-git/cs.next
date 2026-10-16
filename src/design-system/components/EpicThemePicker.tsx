"use client";
import { useEffect, useId, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { epicThemes } from "../epicThemes";

export function ThemeMark({ dune = false }: { dune?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="theme-mark"
    >
      {dune ? (
        <>
          <circle cx="23" cy="9" r="4" stroke="currentColor" />
          <path d="M3 27 13 10 29 27ZM9 27l4-17 6 17" stroke="currentColor" />
        </>
      ) : (
        <>
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="5"
            stroke="currentColor"
            transform="rotate(-30 16 16)"
          />
          <circle cx="16" cy="16" r="9" stroke="currentColor" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

export default function EpicThemePicker() {
  const { epicTheme, setEpicTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const current = epicThemes.find((t) => t.id === epicTheme)!;
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    options.current[epicThemes.findIndex((t) => t.id === epicTheme)]?.focus();
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open, epicTheme]);
  return (
    <div
      className="epic-picker"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="epic-trigger"
        ref={trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={`Epic theme: ${current.name}`}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <ThemeMark dune={epicTheme === "dune"} />
        <span>
          <span className="epic-label">Epic theme</span>
          <span className="epic-name">{current.name}</span>
        </span>
        <FiChevronDown
          className={open ? "chevron is-open" : "chevron"}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="epic-popover">
          <div className="micro popover-title">
            CHOOSE YOUR WORLD <span>02</span>
          </div>
          <div
            role="listbox"
            id={id}
            aria-label="Epic themes"
            onKeyDown={(event) => {
              const index = options.current.indexOf(
                document.activeElement as HTMLButtonElement,
              );
              if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                options.current[
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? epicThemes.length - 1
                      : (index +
                          (event.key === "ArrowDown" ? 1 : -1) +
                          epicThemes.length) %
                        epicThemes.length
                ]?.focus();
              } else if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                close();
              }
            }}
          >
            {epicThemes.map((item, index) => (
              <button
                type="button"
                role="option"
                key={item.id}
                ref={(element) => {
                  options.current[index] = element;
                }}
                aria-selected={epicTheme === item.id}
                tabIndex={-1}
                className={`epic-option epic-option--${item.id}`}
                onClick={() => {
                  setEpicTheme(item.id);
                  close();
                }}
              >
                <span className="epic-option-top">
                  <ThemeMark dune={item.id === "dune"} />
                  <span>
                    <span className="micro">{item.chapter}</span>
                    <strong>{item.name}</strong>
                  </span>
                  {item.id === epicTheme && (
                    <FiCheck className="selected-check" aria-hidden="true" />
                  )}
                </span>
                <span className="epic-story">{item.story}</span>
                <span className="epic-design">{item.design}</span>
              </button>
            ))}
          </div>
          <p className="epic-footnote">Two worlds. The same human ambition.</p>
        </div>
      )}
    </div>
  );
}
