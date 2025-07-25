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

const data = [
  {
    time: "2025-05-06T15:45:24.5825698+08:00",
    value: 96,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-05-13T15:45:24.5825698+08:00",
    value: 96,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-05-20T15:45:24.5825698+08:00",
    value: 98,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-05-27T15:45:24.5825698+08:00",
    value: 99,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-06-03T15:45:24.5825698+08:00",
    value: 97,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-06-10T15:45:24.5825698+08:00",
    value: 96,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-06-17T15:45:24.5825698+08:00",
    value: 95,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-06-24T15:45:24.5825698+08:00",
    value: 95,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-07-01T15:45:24.5825698+08:00",
    value: 97,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-07-08T15:45:24.5825698+08:00",
    value: 99,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-07-15T15:45:24.5825698+08:00",
    value: 97,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-07-22T15:45:24.5825698+08:00",
    value: 95,
    type: "能耗变化趋势",
    color: "#16a34a",
  },
  {
    time: "2025-05-06T15:45:24.5763619+08:00",
    value: 97,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-05-13T15:45:24.5763619+08:00",
    value: 97,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-05-20T15:45:24.5763619+08:00",
    value: 96,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-05-27T15:45:24.5763619+08:00",
    value: 96,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-06-03T15:45:24.5763619+08:00",
    value: 95,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-06-10T15:45:24.5763619+08:00",
    value: 97,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-06-17T15:45:24.5763619+08:00",
    value: 99,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-06-24T15:45:24.5763619+08:00",
    value: 99,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-07-01T15:45:24.5763619+08:00",
    value: 99,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-07-08T15:45:24.5763619+08:00",
    value: 98,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-07-15T15:45:24.5763619+08:00",
    value: 99,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-07-22T15:45:24.5763619+08:00",
    value: 98,
    type: "性能变化趋势",
    color: "#06b6d4",
  },
  {
    time: "2025-05-06T15:45:24.5825698+08:00",
    value: 97,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-05-13T15:45:24.5825698+08:00",
    value: 96,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-05-20T15:45:24.5825698+08:00",
    value: 96,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-05-27T15:45:24.5825698+08:00",
    value: 94,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-06-03T15:45:24.5825698+08:00",
    value: 94,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-06-10T15:45:24.5825698+08:00",
    value: 96,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-06-17T15:45:24.5825698+08:00",
    value: 96,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-06-24T15:45:24.5825698+08:00",
    value: 98,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-07-01T15:45:24.5825698+08:00",
    value: 98,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-07-08T15:45:24.5825698+08:00",
    value: 99,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-07-15T15:45:24.5825698+08:00",
    value: 99,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
  {
    time: "2025-07-22T15:45:24.5825698+08:00",
    value: 99,
    type: "可靠性变化趋势",
    color: "#f59e42",
  },
];

// 创建4个容器，分别用于对比
const containerA = window.createExperimentContainer("containerA");
// const containerB = window.createExperimentContainer("containerB");
// const containerC = window.createExperimentContainer("containerC");
// const containerD = window.createExperimentContainer("containerD");

const chart1 = new Chart({
  container: containerA,
  autoFit: true,
  renderer: new SVGRenderer(),
});

const multiOptions = {
  type: "view",
  children: [
    {
      type: "line",
      encode: {
        x: (d: any) => new Date(d.time),
        y: ["value", 50],
        // color: 'color',
        color: "type",
      },
      scale: {
        y:{
          // type: "linear",
          // min: 0,
          // max: 100,
          // nice: true,
          // alias: "数值",
          type: "pow",
          exponent: 10,
        },
        x: {
          type: "time",
          mask: "DD HH:mm",
          utc: true,
        },
        color: {
          range: ["#16a34a", "#06b6d4", "#f59e42"],
        },
      },
      axis: {
        x: false,
        // x: {
        //     title: null,
        //     label: true,
        //     line: true,
        //     labelTransform: 'rotate(0)',
        // },
        y: {
          label: true,
          title: null,
          grid: true,
          gridStroke: "#E6E6E6",
          gridStrokeOpacity: 1,
          gridLineWidth: 2,
        },
      },
      style: {
        lineWidth: 2,
      },
      legend: false,
      // color: ['#16a34a', '#06b6d4', '#f59e42'],
      tooltip: {
        items: [
            (d) => {
                return {
                    value: d.value,
                    name: d.type,
                }
            },
        ], // 数据项
        // items: ["value"],
      },
    },
  ],
};

chart1.options(multiOptions).data(data).render();

// 销毁方法（推荐挂到 window 以便 index 调用）
window.destroyCharts = function () {
  chart1.destroy();
  // chart2.destroy();
  // chart3.destroy();
  // chart4.destroy();
};
