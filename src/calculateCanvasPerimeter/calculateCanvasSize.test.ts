import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  it("Verify that calculateCanvasSize should return the correct canvas size for positive length and width", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(220);
  });
  it("Verify that calculateCanvasSize should return 0 when both length and width are zero", () => {
    const result = calculateCanvasSize("0", "0");
    expect(result).toEqual(0);
  });
});
