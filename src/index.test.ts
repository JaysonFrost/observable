import track from ".";

describe("Test track", () => {
  describe("track params", () => {
    it("track calls if eventType is wrong with click event", () => {
      const observer = track({
        targetSelector: "button",
        eventType: "gdf",
      });

      expect(observer).toBeTruthy());
    });

    it("default eventType 'click' if it not passed", () => {
      const observer = track({
        targetSelector: "button",
      });

      expect(observer).toBeTruthy();
    });
  });
});