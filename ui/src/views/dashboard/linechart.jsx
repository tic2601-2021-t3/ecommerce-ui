/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const colors = ['#1101ED']

const LineChart = () => {
    const getChartOpts = () => {
      return {
        title: {
          text: 'Month-on-Month Sales for Past 3 Months',
          style: {
            fontFamily: 'Roboto Condensed',
          },
        },
        yAxis: {
          title: {
            text: 'Sales'
          }
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 10,
            dataLabels: {
              enabled: true
            },
          },
        },
        credits: {
          enabled: false,
        },
        series: [{
          name: 'Month',
          data: [1662.5, -38.65, 45.09],
          color: colors[0],
        }],
      };
    };
    
    // if (isLoading) {
    //     return <Loading />;
    // } else if (_.isEmpty(data)) {
    //     return <Empty text='No chart data found.' />;
    // }
    
    return <HighchartsReact options={getChartOpts()} highcharts={Highcharts} />;
};

export default LineChart;