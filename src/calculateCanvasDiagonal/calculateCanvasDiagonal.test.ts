import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('Verify that calculateCanvasDiagonal should calculate the correct diagonal when length is positive and width is zero', () => {
    expect(calculateCanvasDiagonal('3', '0')).toBe(6);
  });
  it ('Verify that calculateCanvasSize should calculate perimeter correctly when length is zero and width is positive', () => {
    expect(calculateCanvasDiagonal('0', '4')).toBe(8);
  });
  it('Verify that calculateCanvasSize should handle negative length correctly (absolute value)', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBe(2);
  });
  it('Verify that calculateCanvasSize should handle non-numeric length by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN(); 
  });
  it('Verify that calculateCanvasSize should handle decimal length correctly', () => {
    expect(calculateCanvasDiagonal('1.5', '2')).toBeCloseTo(7, 2);
  });
});
