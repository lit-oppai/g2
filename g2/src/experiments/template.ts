/**
 * 实验名称：多图对比实验模板
 * 实验说明：演示柱状图、折线图、饼图、仪表盘对比
 * 创建日期：2025-07-25
 * 作者：hengx
 */

import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";

// Extend Window interface to include custom methods
declare global {
  interface Window {
    createExperimentContainer(id: string): HTMLElement;
    destroyCharts?: () => void;
  }
}

// 创建4个容器，分别用于对比
const containerA = window.createExperimentContainer("containerA");
const containerB = window.createExperimentContainer("containerB");
const containerC = window.createExperimentContainer("containerC");
const containerD = window.createExperimentContainer("containerD");

// 图表1：柱状图
const chart1 = new Chart({
  container: containerA,
  renderer: new SVGRenderer(),
});
chart1
  .interval()
  .data([
    { type: "A", value: 30 },
    { type: "B", value: 80 },
    { type: "C", value: 45 },
  ])
  .encode("x", "type")
  .encode("y", "value")
  .style({ fill: "#1890ff" });
chart1.render();

// 图表2：折线图
const chart2 = new Chart({
  container: containerB,
  renderer: new SVGRenderer(),
});
chart2
  .line()
  .data([
    { x: 1, y: 10 },
    { x: 2, y: 30 },
    { x: 3, y: 20 },
  ])
  .encode("x", "x")
  .encode("y", "y")
  .style({ stroke: "#f5222d" });
chart2.render();

// 图表3：饼图
const chart3 = new Chart({
  container: containerC,
  renderer: new SVGRenderer(),
});
chart3
  .interval()
  .data([
    { type: "A", value: 40 },
    { type: "B", value: 60 },
  ])
  .transform({ type: "stackY" })
  .encode("x", "type")
  .encode("y", "value")
  .coordinate({ type: "theta", innerRadius: 0.4 })
  .style({ fill: ["#52c41a", "#faad14"] });
chart3.render();

// 图表4：仪表盘
const chart4 = new Chart({
  container: containerD,
  renderer: new SVGRenderer(),
});
chart4
  .gauge()
  .data({ value: { target: 75, total: 100 } })
  .style({ arcLineWidth: 10, arcStroke: "#1890ff" });
chart4.render();

// 销毁方法（推荐挂到 window 以便 index 调用）
window.destroyCharts = function () {
  chart1.destroy();
  chart2.destroy();
  chart3.destroy();
  chart4.destroy();
};
