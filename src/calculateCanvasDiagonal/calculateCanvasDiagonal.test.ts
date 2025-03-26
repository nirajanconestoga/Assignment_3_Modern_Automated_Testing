import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('Verify that calculateCanvasSize should calculate perimeter correctly when length is positive and width is zero', () => {
    expect(calculateCanvasDiagonal('3', '0')).toBe(6);
  });
  test('Verify that calculateCanvasSize should calculate perimeter correctly when length is zero and width is positive', () => {
    expect(calculateCanvasDiagonal('0', '4')).toBe(8); // 2 * (0 + 4) = 8
  });
});
