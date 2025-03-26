import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('Verify that calculateCanvasSize should calculate perimeter correctly when length is positive and width is zero', () => {
    expect(calculateCanvasDiagonal('3', '0')).toBe(6);
  });
});
