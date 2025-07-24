import { omit } from '@antv/util';
import type { Vector2, ShapeComponent as SC } from '@antv/g2/src/runtime';

export type RoundOptions = Record<string, any>;

// 改进半径计算
const getOptimalRadius = (points, center) => {
  const distances = points.map(p => 
    Math.sqrt(Math.pow(p[0] - center[0], 2) + Math.pow(p[1] - center[1], 2))
  );
  return Math.min(...distances) * 0.1; // 使用最小距离的10%作为小圆弧半径
};

// 改进方向判断
const getArcDirection = (start, end, center) => {
  const startAngle = Math.atan2(start[1] - center[1], start[0] - center[0]);
  const endAngle = Math.atan2(end[1] - center[1], end[0] - center[0]);
  const angleDiff = endAngle - startAngle;
  return angleDiff > 0 ? 1 : 0;
};

// Gauge round.
export const Round: SC<RoundOptions> = (options, context) => {
  if (!context) return;
  const { coordinate } = context;
  if (!coordinate?.getCenter) return;
  // Get coordinate center point.
  const center = coordinate.getCenter() as Vector2;

  return (points, cfg, defaultCfg) => {
    const { document } = context.canvas;
    const { color, index } = cfg;

    const g = document.createElement('g', {});

    const minR = getOptimalRadius(points, center);
    const maxR = Math.sqrt(
      Math.pow(points[0][0] - center[0], 2) + 
      Math.pow(points[0][1] - center[1], 2)
    );

    const roundPath = document.createElement('path', {
      style: {
        d: [
          ['M', ...points[0]],
          ['A', minR, minR, 0, 1, getArcDirection(points[0], points[1], center), ...points[1]],
          ['A', maxR, maxR, 0, 0, getArcDirection(points[1], points[2], center), ...points[2]],
          ['A', minR, minR, 0, 1, getArcDirection(points[2], points[3], center), ...points[3]],
          ['A', maxR, maxR, 0, 0, getArcDirection(points[3], points[0], center), ...points[0]],
          ['Z'],
        ],
        ...defaultCfg,
        ...omit(options, ['shape', 'last', 'first']),
        fill: color || defaultCfg.color,
      },
    });

    g.appendChild(roundPath);

    return g;
  };
}; 