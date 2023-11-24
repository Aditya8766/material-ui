import React, { useState } from 'react';
import {
  IconButton,
  Popover,
  Container,
  TextField,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

import RangeSlider from './SliderComponent';
import { Divider } from '@mui/material';
import { StackIconPopover } from './StackIconComponent';

const FilterPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [deviceStatus, setDeviceStatus] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [rangeSlider, setRangeSlider] = useState([20, 37]);
  const [dlp, setDlp] = useState('');

  const handleChange = (event, newValue) => {
    setRangeSlider(newValue);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleDeviceStatusChange = (event) => {
    setDeviceStatus(event.target.value);
    setDlp(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleReset = () => {
    setDeviceStatus('');
    setRadioValue('');
  };

  const handleApply = () => {
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;
  

  return (
    <div style={{display:'flex', width:'10px'}}>
      <Container>
      <IconButton onClick={handleOpen}>
        <FilterListIcon />
      </IconButton>
    
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperComponent={(props) => (
          <Paper {...props} style={{ marginBottom: '10px', padding: '16px' }} />
        )}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Filter By </Typography>
              <Divider/>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField select value={deviceStatus} onChange={handleDeviceStatusChange}>
                  <MenuItem value="deviceStatus">Device Status</MenuItem>
                  <MenuItem value="dlp">DLP</MenuItem>
                  <MenuItem value="randomVal2">Value 2</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {dlp === "dlp" && (
              <Grid item xs={12}>
                <MenuItem value="rangeSlider"><RangeSlider handleChange={handleChange} rangeSlider={rangeSlider} /></MenuItem>
              </Grid>
            )}
            {deviceStatus === "deviceStatus" && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <RadioGroup value={radioValue} onChange={handleRadioChange}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="connected" control={<Radio />} label="Connected" />
                    <FormControlLabel value="disconnected" control={<Radio />} label="Disconnected" />
                    <FormControlLabel value="needingAttention" control={<Radio />} label="Needing Attention" />
                    <FormControlLabel value="spectrumUnassigned" control={<Radio />} label="Spectrum unassigned" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            )}
            <Grid item xs={3}>
              <Button onClick={handleClose} fullWidth>
                Close
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleReset} fullWidth>
                Reset
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={handleApply} fullWidth>
                Apply
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Popover>
    </Container>
    <Container>
        <StackIconPopover />
    </Container>
    </div>
  );
};

export default FilterPopover;
