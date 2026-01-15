
import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("btn", "btn-primary");
    expect(result).toBe("btn btn-primary");
  });

  it("handles conditional classes", () => {
    const result = cn("btn", false && "hidden", "active");
    expect(result).toBe("btn active");
  });
});
