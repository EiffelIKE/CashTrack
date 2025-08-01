/**
 * 
 * @param color must be hex color
 * @param percent percent of modification to original color
 * @returns modified color
 */

export const shadeColor = (color: string, percent: number) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, R + R * percent));
  G = Math.min(255, Math.max(0, G + G * percent));
  B = Math.min(255, Math.max(0, B + B * percent));

  return `rgb(${Math.round(R)}, ${Math.round(G)}, ${Math.round(B)})`;
}