import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Stack spacing={12} direction="row" size="medium" mt={2}>
        <Button variant="contained" style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                        }}>Refresh</Button>
        <Button variant="contained" style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            marginLeft: '10px',
                        }}>Flush</Button>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />} style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            marginLeft: '10px',
                        }}>Delete All</Button>
      </Stack>
      </Box>
    </Box>
  );
}