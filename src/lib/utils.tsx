import * as React from "react";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string, locale = "en-US"): string {
  const value = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(value.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
  }).format(value);
}

export function isServerComponent(): boolean {
  return typeof window === "undefined";
}

export function isValidReactNode(value: unknown): value is React.ReactNode {
  return value !== undefined && value !== null && value !== false;
}
