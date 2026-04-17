import { beforeEach, describe, it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";

function loadHTML() {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../index.html"),
    "utf-8",
  );
  document.documentElement.innerHTML = html;
}

describe("Todo Card Component", () => {
  beforeEach(async () => {
    loadHTML();
    vi.resetModules();
    await import("../script.js");

    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  it("should render initial task status as pending", () => {
    const status = document.querySelector('[data-testid="test-todo-status"]');
    expect(status.textContent).toBe("pending");
  });
  it("should render title correctly", () => {
    const title = document.querySelector('[data-testid="test-todo-title"]');
    expect(title.textContent).toBe("implement oAuth2 flow");
  });
  it("should mark task as done when checkbox is checked", () => {
    const checkbox = document.querySelector(
      '[data-testid="test-todo-complete-toggle"]',
    );

    const status = document.querySelector('[data-testid="test-todo-status"]');

    checkbox.checked = true;
    checkbox.dispatchEvent(new Event("change"));

    expect(status.textContent).toBe("done");
    expect(status.getAttribute("aria-label")).toBe("completed-status");
  });
  it("should mark task as done when checkbox is checked", () => {
    const checkbox = document.querySelector(
      '[data-testid="test-todo-complete-toggle"]',
    );

    const status = document.querySelector('[data-testid="test-todo-status"]');

    checkbox.checked = true;
    checkbox.dispatchEvent(new Event("change"));

    expect(status.textContent).toBe("done");
    expect(status.getAttribute("aria-label")).toBe("completed-status");
  });
  it("should log edit clicked when edit button is pressed", () => {
    const consoleSpy = vi.spyOn(console, "log");

    const editBtn = document.querySelector(
      '[data-testid="test-todo-edit-button"]',
    );

    editBtn.click();

    expect(consoleSpy).toHaveBeenCalledWith("Edit Clicked");
  });
  it("should show alert when delete button is clicked", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    const deleteBtn = document.querySelector(
      '[data-testid="test-todo-delete-button"]',
    );

    deleteBtn.click();

    expect(alertMock).toHaveBeenCalledWith("Delete Clicked");
  });
  it("should show overdue text when date is in the past", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-20")); // after due date

    loadHTML();
    vi.resetModules();
    import("../script.js");

    const time = document.querySelector(
      '[data-testid="test-todo-time-remaining"]',
    );

    expect(time.textContent).toContain("overdue by");

    vi.useRealTimers();
  });
});
