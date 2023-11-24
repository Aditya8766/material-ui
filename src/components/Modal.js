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

const FilterPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deviceStatus, setDeviceStatus] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeviceStatusChange = (event) => {
    setDeviceStatus(event.target.value);
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
              <Typography>Filter By</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField select value={deviceStatus} onChange={handleDeviceStatusChange}>
                  <MenuItem value="deviceStatus">Device Status</MenuItem>
                  <MenuItem value="randomVal1">Value 1</MenuItem>
                  <MenuItem value="randomVal2">Value 2</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {deviceStatus && (
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
  );
};

export default FilterPopover;
