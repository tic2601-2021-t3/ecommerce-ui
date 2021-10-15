/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const colors = ['#1101ED'];

const BarChart2 = () => {
    const getChartOpts = () => {
      return {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sales by Day of Week',
            style: {
                fontFamily: 'Roboto Condensed',
            },
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Day of Week'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                dataLabels: {
                    enabled: true
                }
            },
        },
        credits: {
            enabled: false,
        },
        series: [{
            name: 'Sales',
            data: [7300, 12600, 15250, 8500, 6400, 9700, 12550],
            color: colors[0],
        }]};
    };
    // if (isLoading) {
    //     return <Loading />;
    // } else if (_.isEmpty(data)) {
    //     return <Empty text='No chart data found.' />;
    // }
    
    return <HighchartsReact options={getChartOpts()} highcharts={Highcharts} />;
};

export default BarChart2;