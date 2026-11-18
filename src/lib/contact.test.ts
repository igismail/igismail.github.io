import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "./contact";

const valid = { name: "Jane Recruiter", email: "jane@company.com", message: "We'd love to chat about a Flutter role." };

describe("contact form", () => {
  it("sends messages to Mohammed's Gmail address", () => {
    expect(buildMailto(valid).startsWith("mailto:mohammodismail2020@gmail.com?")).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects an empty message", () => {
    expect(contactSchema.safeParse({ ...valid, message: "   " }).success).toBe(false);
  });

  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
});
