function fetchAndVisualizeData() {
    fetch('./data3.json')
    .then(r => r.json())
    .then(data => {
      console.log([Object.keys(data)]);
      console.log(Object.values(data));
        visualizeData(data);
    })
}


function visualizeData(data) {


  // Create the chart
Highcharts.chart('container', {
  chart: {
      type: 'column',
  },
  title: {
      text: 'Extra runs conceded by each team in 2016'
  },
  xAxis: {
    categories: Object.keys(data),
    title: {
      text: 'Teams'
  }
  },
  yAxis: {
      title: {
          text: 'Extra runs'
      }

  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
  },

  series: [
      {
        data : Object.values(data)
          
      }
  ]
});

}



fetchAndVisualizeData();