export default function calculateCanvasSize(
  length: string,
  width: string
) {
  return 2 * (parseFloat(length) + parseFloat(width));
}
