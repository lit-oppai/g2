import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";

// 通过 id 获取容器，假设 id 一定存在
const container1 = document.getElementById('container1')!;
container1.style.width = '600px';
container1.style.height = '600px';

const container2 = document.getElementById('container2')!;
container2.style.width = '600px';
container2.style.height = '600px';

// 测试用例1：使用默认arc
const chart1 = new Chart({
  container: container1,
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
  container: container2,
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

// 销毁并清空容器内容
function destroyCharts() {
  chart1.destroy();
  chart2.destroy();
  container1.innerHTML = '';
  container2.innerHTML = '';
}

// 挂到 window，方便全局调用
(window as any).destroyCharts = destroyCharts;