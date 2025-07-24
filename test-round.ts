// import { Chart } from '@antv/g2/src/runtime/chart';
import { Chart } from '@antv/g2';

// 创建容器
const container = document.createElement('div');
container.style.width = '300px';
container.style.height = '300px';
document.body.appendChild(container);

// 创建图表
const chart = new Chart({
  container,
  autoFit: true,
  padding: 0,
});

// 数据
const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
];

// 配置
chart.data(data);

chart
  .coordinate('polar', {
    startAngle: -9 / 8 * Math.PI,
    endAngle: 1 / 8 * Math.PI,
    radius: 0.75,
  })
  .axis(false);

chart
  .interval()
  .adjust('stack')
  .position('1*value')
  .color('type', ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'])
  .shape('gauge-round')
  .animate(false);

// 渲染
chart.render();

// 导出 SVG 用于验证
const svg = chart.getCanvas().get('el').outerHTML;
console.log('Generated SVG:', svg); 