// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Generals from './General';
// import Security from './Security';
// import Session from './Session';
// import Verify from './Verify';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs({ value, onChange }) {
//   return (
//     <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={onChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider' }}
//       >
//         <Tab label="General" {...a11yProps(0)} />
//         <Tab label="Security" {...a11yProps(1)} />
//         <Tab label="Session" {...a11yProps(2)} />
//         <Tab label="Verify" {...a11yProps(3)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <Generals />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Security />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Session />
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <Verify />
//       </TabPanel>
//     </Box>
//   );
// }