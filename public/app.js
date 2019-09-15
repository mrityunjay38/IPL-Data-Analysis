function fetchAndVisualizeData() {
    fetch('./data4.json')
    .then(r => r.json())
    .then(data => {
        console.log(Object.keys(data));
        console.log(Object.values(data));
        visualizeData(data);
    })
}



function visualizeData(data) {


  // Create the chart
Highcharts.chart('container4', {
  chart: {
      type: 'column',
  },
  title: {
      text: 'Matches played per year'
  },
  xAxis: {
    categories: Object.keys(data),
    title: {
      text: 'Years'
  }
  },
  yAxis: {
      title: {
          text: 'Matches played'
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
