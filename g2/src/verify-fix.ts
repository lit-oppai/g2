import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";

// 创建测试容器
const container = document.createElement('div');
container.id = 'verify-container';
container.style.width = '300px';
container.style.height = '300px';
document.body.appendChild(container);

// 创建图表
const chart = new Chart({
  container: "verify-container",
  renderer: new SVGRenderer(),
});

// 测试不同角度的仪表盘
chart
  .gauge()
  .data({
    value: {
      target: 500,
      total: 500,
    },
  })
  .style({
    arcShape: "round",
    arcLineWidth: 2,
    arcStroke: "#fff",
  });

chart.render();

// 导出SVG用于验证
const svg = chart.getContainer().get('el').outerHTML;
console.log('Generated SVG:', svg); 