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

const colors = ['#1101ED']

const ShippingTime = () => {
  const bytes =
    sessionStorage.getItem('email') &&
    sessionStorage.getItem('email') !== 'undefined';
  const curUser = bytes && JSON.parse(bytes);
  const [authUser] = useState(curUser);

  const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.DASHBOARD_URL, {
    verb: 'post',
    params: {
        userId: authUser === true ? JSON.parse(sessionStorage.getItem('email')).userId : '',
        chart: 'avg_shipping', 
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
      title: {
        text: 'Average Shipping Time',
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
          pointStart: (status === SUCCESS && response.dashboard.categories[0]),
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
        data: (status === SUCCESS && response.dashboard.data),
        color: colors[0],
      }],
    };
  };
  return <HighchartsReact options={getChartOpts()} highcharts={Highcharts} />;
};

export default ShippingTime;