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
          text: '% of Sales of Returning Customers',
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
          data: [82.98, 43.35, 10.36],
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