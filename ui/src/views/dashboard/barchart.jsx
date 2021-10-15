/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const colors = ['#1101ED'];

const BarChart = () => {
    const getChartOpts = () => {
      return {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 5 Product Sales by Revenue for Last Month',
            style: {
                fontFamily: 'Roboto Condensed',
            },
        },
        xAxis: {
            categories: [
                'Google Pixel 5',
                'Men Dior Underwear',
                'Ribena',
                'Thyme',
                'Basil',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sales'
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
            data: [7200, 6400, 5500, 4000, 3900],
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

export default BarChart;