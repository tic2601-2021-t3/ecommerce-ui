/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const LoginTab = () => {
  const [tabItem, setTabItem] = useState('1');

  const onTabItemChange = (newValue) => {
    setTabItem(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabItem}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={onTabItemChange} aria-label="tabs">
            <Tab label="New Customer" value="1" />
            <Tab label="Existing Customer" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">New Customer</TabPanel>
        <TabPanel value="2">Existing Customer</TabPanel>
      </TabContext>
    </Box>
  );
}

export default LoginTab;