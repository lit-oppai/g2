import { Chart, G2Spec } from "@antv/g2";
import { PointShape } from "@antv/g2/lib/shape/index";
import { Renderer as CanvasRenderer } from "@antv/g-canvas";
import { Renderer as SVGRenderer } from "@antv/g-svg";
import { Renderer as WebGLRenderer } from "@antv/g-webgl";

const chart = new Chart({
  container: "container",
  // height: 116,
  // width:114,
  renderer: new SVGRenderer(),
});

let options: G2Spec = {
  type: "gauge",
  autoFit: true,
  data: {
    value: { target: 500, total: 500,},
  },
  scale: {
    color: { range: ["#1890FF", "#EEE"] },
  },
  style: {
    // 启用中心数值显示
    textContent: (target, total) => `${target}`, // 只显示目标值
    textY: '50%',
    textFontSize: 24,
    arcLineWidth: 2,
    arcStroke: "#fff",
    // pointerShape: pointerShape as any, // 暂时忽略类型警告
    PointShape: ()=>{
      return {
        type: 'point',
        encode:{
          y: 'target',
          x: 0,
          size: 20,
          shape: 'hollow',
        }
      }
    },
    pointerStrokeOpacity: 0,
    pinStrokeOpacity: 0,
  },
  coordinate: {
    innerRadius: 0.8,
  },
  axis: false,
  legend: false,
};

chart.options(options);
chart.render();