var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

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
      [0.5, {
        linearGradient: {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 1
        },
        stops: [
          [0, '#005CBF'],
          [1, '#112B48']
        ]
      }]
    ],
    minorTickInterval: null,
    tickWidth: 0,
    gridLineWidth: 0,
    gridLineColor: 'transparent',
    lineWidth: 0,
    labels: {
      enabled: false
    },
    title: {
      y: 75,
      text: 'second',
      useHTML: true,
      style: {
        color: '#ffffff',
        fontSize: '20px'
      }
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
  },
  series: [{ data: [10] }]
});
