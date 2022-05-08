/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {toast} from 'react-toastify'

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

const colors = ['#1101ED'];

const SalesByDay = () => {
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';
    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);

    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.DASHBOARD_URL, {
        verb: 'post',
        params: {
            userId: authUser === true ? JSON.parse(sessionStorage.getItem('email')).userId : '',
            chart: 'week_sales', 
        },
    });

    useEffect(() => {
        makeRequest();
        return () => {
            source.cancel();
        };
    }, []);

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

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
            categories: (status === SUCCESS && response.dashboard.categories),
            crosshair: true,
            title: {
                text: 'Day of Week'
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sales ($)'
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
            data: (status === SUCCESS && response.dashboard.data),
            color: colors[0],
        }]};
    };
    return <HighchartsReact options={getChartOpts()} highcharts={Highcharts} />;
};

export default SalesByDay;