import track from ".";

describe("Test track", () => {
  describe("track params", () => {
    it("track doesnt call with wrong eventType", () => {
      const observer = track({
        targetSelector: "button",
        eventType: "gdf",
      });

      expect(observer).toBe(undefined);
    });

    it("default eventType 'click' if it not passed", () => {
      const observer = track({
        targetSelector: "button",
      });

      expect(observer).toBeTruthy();
    });
  });
});