import track from ".";

describe("Test track", () => {
  describe("track params", () => {
    it("track doesnt call with wrond eventType", () => {
      const observer = track({
        targetSelector: "button",
        eventType: "gdf"
      });

      expect(observer).toBe(undefined);
    });
  });
});
