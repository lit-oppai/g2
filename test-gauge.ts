import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";

// 创建两个容器
const container1 = document.createElement('div');
container1.id = 'container1';
container1.style.width = '600px';
container1.style.height = '600px';
document.body.appendChild(container1);

const container2 = document.createElement('div');
container2.id = 'container2';
container2.style.width = '600px';
container2.style.height = '600px';
document.body.appendChild(container2);

// 测试用例1：使用默认arc
const chart1 = new Chart({
  container: "container1",
  renderer: new SVGRenderer(),
});

chart1
  .gauge()
  .data({
    value: {
      target: 450,
      total: 500,
    },
  })
  .style({
    arcLineWidth: 2,
    arcStroke: "#fff",
  });

// 测试用例2：使用round
const chart2 = new Chart({
  container: "container2",
  renderer: new SVGRenderer(),
});

chart2
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

chart1.render();
chart2.render(); 