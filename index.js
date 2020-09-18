var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

 Highcharts.chart('container', {
  chart: {
    type: "solidgauge"
  },
  title: null,
  pane: {
    center: ["50%", "85%"],
    size: "140%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc"
    }
  },
  yAxis: {
    stops: [
      [
        0.5,
        {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [[0, "#0000ff"], [1, "#e3e3f4"]]
        }
      ]
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickPixelInterval: 400,
    tickWidth: 0,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }
});
