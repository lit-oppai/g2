import { Chart } from "@antv/g2";
import { Renderer as SVGRenderer } from "@antv/g-svg";

// ========== Chart 1 配置 ==========
const container1 = document.createElement("div");
container1.id = "container1";
container1.style.width = "600px";
container1.style.height = "600px";
document.body.appendChild(container1);

const dataArray = [
  {
    time: "2025-06-20T10:07:16+08:00",
    value: 2.16,
  },
  {
    time: "2025-06-20T10:07:25+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:07:34+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:07:43+08:00",
    value: 2.47,
  },
  {
    time: "2025-06-20T10:07:52+08:00",
    value: 2.47,
  },
  {
    time: "2025-06-20T10:08:01+08:00",
    value: 1.12,
  },
  {
    time: "2025-06-20T10:08:10+08:00",
    value: 1.24,
  },
  {
    time: "2025-06-20T10:08:19+08:00",
    value: 1.24,
  },
  {
    time: "2025-06-20T10:08:28+08:00",
    value: 3.35,
  },
  {
    time: "2025-06-20T10:08:37+08:00",
    value: 3.35,
  },
  {
    time: "2025-06-20T10:08:46+08:00",
    value: 2.6,
  },
  {
    time: "2025-06-20T10:08:55+08:00",
    value: 1.63,
  },
  {
    time: "2025-06-20T10:09:04+08:00",
    value: 1.63,
  },
  {
    time: "2025-06-20T10:09:13+08:00",
    value: 5.7,
  },
  {
    time: "2025-06-20T10:09:22+08:00",
    value: 5.7,
  },
  {
    time: "2025-06-20T10:09:31+08:00",
    value: 1.08,
  },
  {
    time: "2025-06-20T10:09:40+08:00",
    value: 1.55,
  },
  {
    time: "2025-06-20T10:09:49+08:00",
    value: 1.55,
  },
  {
    time: "2025-06-20T10:09:58+08:00",
    value: 0.82,
  },
  {
    time: "2025-06-20T10:10:07+08:00",
    value: 0.82,
  },
  {
    time: "2025-06-20T10:10:16+08:00",
    value: 0.86,
  },
  {
    time: "2025-06-20T10:10:25+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:10:34+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:10:43+08:00",
    value: 0.99,
  },
  {
    time: "2025-06-20T10:10:52+08:00",
    value: 0.99,
  },
  {
    time: "2025-06-20T10:11:01+08:00",
    value: 1.28,
  },
  {
    time: "2025-06-20T10:11:10+08:00",
    value: 0.86,
  },
  {
    time: "2025-06-20T10:11:19+08:00",
    value: 0.86,
  },
  {
    time: "2025-06-20T10:11:28+08:00",
    value: 0.84,
  },
  {
    time: "2025-06-20T10:11:37+08:00",
    value: 0.84,
  },
  {
    time: "2025-06-20T10:11:46+08:00",
    value: 0.99,
  },
  {
    time: "2025-06-20T10:11:55+08:00",
    value: 1.13,
  },
  {
    time: "2025-06-20T10:12:04+08:00",
    value: 1.13,
  },
  {
    time: "2025-06-20T10:12:13+08:00",
    value: 1.22,
  },
  {
    time: "2025-06-20T10:12:22+08:00",
    value: 1.22,
  },
  {
    time: "2025-06-20T10:12:31+08:00",
    value: 3.54,
  },
  {
    time: "2025-06-20T10:12:40+08:00",
    value: 0.84,
  },
  {
    time: "2025-06-20T10:12:49+08:00",
    value: 0.84,
  },
  {
    time: "2025-06-20T10:12:58+08:00",
    value: 0.83,
  },
  {
    time: "2025-06-20T10:13:07+08:00",
    value: 0.83,
  },
  {
    time: "2025-06-20T10:13:16+08:00",
    value: 1.09,
  },
  {
    time: "2025-06-20T10:13:25+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:13:34+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:13:43+08:00",
    value: 1.65,
  },
  {
    time: "2025-06-20T10:13:52+08:00",
    value: 1.65,
  },
  {
    time: "2025-06-20T10:14:01+08:00",
    value: 0.7,
  },
  {
    time: "2025-06-20T10:14:10+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:14:19+08:00",
    value: 0.95,
  },
  {
    time: "2025-06-20T10:14:28+08:00",
    value: 0.85,
  },
  {
    time: "2025-06-20T10:14:37+08:00",
    value: 0.85,
  },
  {
    time: "2025-06-20T10:14:46+08:00",
    value: 1.09,
  },
  {
    time: "2025-06-20T10:14:55+08:00",
    value: 1.29,
  },
  {
    time: "2025-06-20T10:15:04+08:00",
    value: 1.29,
  },
  {
    time: "2025-06-20T10:15:13+08:00",
    value: 0.82,
  },
  {
    time: "2025-06-20T10:15:22+08:00",
    value: 0.82,
  },
  {
    time: "2025-06-20T10:15:31+08:00",
    value: 0.92,
  },
  {
    time: "2025-06-20T10:15:40+08:00",
    value: 0.88,
  },
  {
    time: "2025-06-20T10:15:49+08:00",
    value: 0.88,
  },
  {
    time: "2025-06-20T10:15:58+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:16:07+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:16:16+08:00",
    value: 1.08,
  },
  {
    time: "2025-06-20T10:16:25+08:00",
    value: 2.39,
  },
  {
    time: "2025-06-20T10:16:34+08:00",
    value: 2.39,
  },
  {
    time: "2025-06-20T10:16:43+08:00",
    value: 0.72,
  },
  {
    time: "2025-06-20T10:16:52+08:00",
    value: 0.72,
  },
  {
    time: "2025-06-20T10:17:01+08:00",
    value: 0.88,
  },
  {
    time: "2025-06-20T10:17:10+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:17:19+08:00",
    value: 1,
  },
  {
    time: "2025-06-20T10:17:28+08:00",
    value: 1.1,
  },
  {
    time: "2025-06-20T10:17:37+08:00",
    value: 1.1,
  },
  {
    time: "2025-06-20T10:17:46+08:00",
    value: 0.91,
  },
  {
    time: "2025-06-20T10:17:55+08:00",
    value: 0.78,
  },
  {
    time: "2025-06-20T10:18:04+08:00",
    value: 0.78,
  },
  {
    time: "2025-06-20T10:18:13+08:00",
    value: 0.93,
  },
  {
    time: "2025-06-20T10:18:22+08:00",
    value: 0.93,
  },
  {
    time: "2025-06-20T10:18:31+08:00",
    value: 1.11,
  },
  {
    time: "2025-06-20T10:18:40+08:00",
    value: 1.41,
  },
  {
    time: "2025-06-20T10:18:49+08:00",
    value: 1.41,
  },
  {
    time: "2025-06-20T10:18:58+08:00",
    value: 2.03,
  },
  {
    time: "2025-06-20T10:19:07+08:00",
    value: 2.03,
  },
  {
    time: "2025-06-20T10:19:16+08:00",
    value: 1.67,
  },
  {
    time: "2025-06-20T10:19:25+08:00",
    value: 0.66,
  },
  {
    time: "2025-06-20T10:19:34+08:00",
    value: 0.66,
  },
  {
    time: "2025-06-20T10:19:43+08:00",
    value: 0.97,
  },
  {
    time: "2025-06-20T10:19:52+08:00",
    value: 0.97,
  },
  {
    time: "2025-06-20T10:20:01+08:00",
    value: 0.86,
  },
  {
    time: "2025-06-20T10:20:10+08:00",
    value: 1.03,
  },
  {
    time: "2025-06-20T10:20:19+08:00",
    value: 1.03,
  },
  {
    time: "2025-06-20T10:20:28+08:00",
    value: 3,
  },
  {
    time: "2025-06-20T10:20:37+08:00",
    value: 3,
  },
  {
    time: "2025-06-20T10:20:46+08:00",
    value: 0.77,
  },
  {
    time: "2025-06-20T10:20:55+08:00",
    value: 1.83,
  },
  {
    time: "2025-06-20T10:21:04+08:00",
    value: 1.83,
  },
  {
    time: "2025-06-20T10:21:13+08:00",
    value: 1.53,
  },
  {
    time: "2025-06-20T10:21:22+08:00",
    value: 1.53,
  },
  {
    time: "2025-06-20T10:21:31+08:00",
    value: 1.37,
  },
  {
    time: "2025-06-20T10:21:40+08:00",
    value: 0.7,
  },
  {
    time: "2025-06-20T10:21:49+08:00",
    value: 0.7,
  },
  {
    time: "2025-06-20T10:21:58+08:00",
    value: 0.63,
  },
  {
    time: "2025-06-20T10:22:07+08:00",
    value: 0.63,
  },
  {
    time: "2025-06-20T10:22:16+08:00",
    value: 1.1,
  },
];

const chart1LineColor = "#859FFE";
const chart1AreaStartColor = "#e2e7fa";
const chart1AreaEndColor = "#FFFFFF";
const chart1TextColor = "#1A1A1A";
const chart1TitleColor = "#535862";

const chart1 = new Chart({
  container: "container1",
  autoFit: true,
  // paddingLeft: 6,
  // paddingRight: 6,
  margin: 0,
  renderer: new SVGRenderer(),
});

chart1
  .title({
    align: "left",
    x: 20,
    y: 6,
    title: "123321",
    titleFontSize: 12,
    titleFontFamily: "UnifiedFont",
    titleFontWeight: 400,
    titleFill: chart1TitleColor,
  })
  .encode({
    x: "time",
    y: ["value", 0],
  })
  .animate("enter", { type: "fadeIn" })
  // .axis(false)
  .data(dataArray);

chart1.line().encode("color", chart1LineColor).style({ lineWidth: 2.5 });

chart1
  .area()
  .style(
    "fill",
    `linear-gradient(-90deg, ${chart1AreaEndColor} 0%, ${chart1AreaStartColor} 100%)`
  );

chart1
  .text()
  .encode("text", (d: { value: number }) => d.value.toFixed(2))
  .transform({
    type: "selectY",
    selector: "last",
  })
  .style({
    textAlign: "right",
    textBaseline: "top",
    fontWeight: 500,
    fontFamily: "UnifiedFont",
    y: -30,
    fontSize: 16,
    fill: chart1TextColor,
  });

chart1.render();

// ========== Chart 2 配置 ==========
const container2 = document.createElement("div");
container2.id = "container2";
container2.style.width = "600px";
container2.style.height = "600px";
document.body.appendChild(container2);

const zeroArray = [
  {
    time: "2025-06-20T10:07:16+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:07:25+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:07:34+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:07:43+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:07:52+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:01+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:10+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:19+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:28+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:37+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:46+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:08:55+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:04+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:13+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:22+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:31+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:40+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:49+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:09:58+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:07+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:16+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:25+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:34+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:43+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:10:52+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:01+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:10+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:19+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:28+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:37+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:46+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:11:55+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:04+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:13+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:22+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:31+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:40+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:49+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:12:58+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:07+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:16+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:25+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:34+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:43+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:13:52+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:01+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:10+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:19+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:28+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:37+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:46+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:14:55+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:04+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:13+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:22+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:31+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:40+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:49+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:15:58+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:07+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:16+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:25+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:34+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:43+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:16:52+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:01+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:10+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:19+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:28+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:37+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:46+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:17:55+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:04+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:13+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:22+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:31+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:40+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:49+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:18:58+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:07+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:16+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:25+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:34+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:43+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:19:52+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:01+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:10+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:19+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:28+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:37+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:46+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:20:55+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:04+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:13+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:22+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:31+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:40+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:49+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:21:58+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:22:07+08:00",
    value: 0,
  },
  {
    time: "2025-06-20T10:22:16+08:00",
    value: 0,
  },
];

const chart2LineColor = "#b961e5";
const chart2AreaStartColor = "#efdff7";
const chart2AreaEndColor = "#fafafa";
const chart2TextColor = "#1A1A1A";
const chart2TitleColor = "#535862";

const chart2 = new Chart({
  container: "container2",
  autoFit: true,
  // paddingLeft: 6,
  // paddingRight: 6,
  margin: 0,
  renderer: new SVGRenderer(),
});

chart2
  .title({
    align: "left",
    x: 20,
    y: 6,
    title: "123321",
    titleFontSize: 12,
    titleFontFamily: "UnifiedFont",
    titleFontWeight: 400,
    titleFill: chart2TitleColor,
  })
  .encode({
    x: "time",
    y: ["value", 0],
  })
  .animate("enter", { type: "fadeIn" })
  // .axis(false)
  // .axis({
  //   x: {
  //     label: false,
  //     position: "bottom",
  //   },
  //   y: {
  //     domain: [0, 10],
  //   },
  // })
  .data(zeroArray)
  .scale({
    x: { padding: 0.5 },
    y: {
      type: "linear", // 指定类型
      // nice: true,
      domain: [0, 100], // 指定定义域
      // range: [0, 1], // 指定值域
    },
  });

// chart2
//   .line()
//   .encode("color", chart2LineColor)
//   .style({ lineWidth: 2.5 });

chart2
  .area()
  // .encode("color", chart2LineColor)
  .style(
    "fill",
    `linear-gradient(-90deg, ${chart2AreaEndColor} 0%, ${chart2AreaStartColor} 100%)`
  );

chart2
  .text()
  .encode("text", (d: { value: number }) => d.value.toFixed(2))
  .transform({
    type: "selectY",
    selector: "last",
  })
  .style({
    textAlign: "right",
    textBaseline: "top",
    fontWeight: 500,
    fontFamily: "UnifiedFont",
    y: -30,
    fontSize: 16,
    fill: chart2TextColor,
  });

chart2.render();
