/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const colors = ['#1101ED']

const LineChart2 = () => {
    const getChartOpts = () => {
      return {
        title: {
          text: 'Average Shipping Date',
          style: {
            fontFamily: 'Roboto Condensed',
          },
        },
        yAxis: {
          title: {
            text: 'Number of Hours'
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
          data: [91.48, 46.91, 33.16],
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

export default LineChart2;