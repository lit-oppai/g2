import { Chart } from "/node_modules/@antv/g2/src/index.ts";
// import { Chart } from "@antv/g2";
import { Renderer as CanvasRenderer } from "@antv/g-canvas";
import { Renderer as SVGRenderer } from "@antv/g-svg";
import { Renderer as WebGLRenderer } from "@antv/g-webgl";

const chart = new Chart({
  container: "2",
  //   autoFit: true,
  height: 300,
  width: 300,
  renderer: new SVGRenderer(),
});

chart
  .gauge()
  .data({
    value: {
      target: 500,
      total: 500,
      name: "score",
      //   thresholds: [100, 200, 400],
    },
  })
  //   .scale('color', {
  //     range: ['#F4664A', '#FAAD14', 'green'],
  //   })
  .style({
    // arcShape: "round",
    arcLineWidth: 2,
    arcStroke: "#fff",
    pointerStrokeOpacity: 0,
    pinStrokeOpacity: 0,
  })
  .style(
    "textContent",
    (target, total) => `得分：${target}\n占比：${(target / total) * 100}%`
  )
  .legend(false);

chart.render();
