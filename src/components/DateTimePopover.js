import React from "react";
import { Button, Container, FormControlLabel, Grid, IconButton, Paper, Popover, RadioGroup, FormControl, Radio, TextField } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState } from "react";

export const DateTimePopover = () => {
    const [DatePickerAnchorEl, setDatePickerAnchorEl] = useState(null);
    const [radioValue, setRadioValue] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedLabel, setSelectedLabel] = useState('');

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
        setSelectedLabel(event.target.labels[0].innerText);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        updateSelectedLabel(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        updateSelectedLabel(startDate, date);
    };

    const updateSelectedLabel = (start, end) => {
        if (start && end) {
            setSelectedLabel(`Custom: ${start.toLocaleString()} - ${end.toLocaleString()}`);
        } else if (start) {
            setSelectedLabel(`Custom: ${start.toLocaleString()}`);
        } else if (end) {
            setSelectedLabel(`Custom: ${end.toLocaleString()}`);
        } else {
            setSelectedLabel('');
        }
    };

    const DateTimePicker = Boolean(DatePickerAnchorEl);
    const DatePickerId = DatePickerAnchorEl ? 'DatePicker-popover' : undefined;

    const handleDateTimePickerOpen = (event) => {
        setDatePickerAnchorEl(event.currentTarget);
    };

    const handleCancelButtonClick = () => {
        setDatePickerAnchorEl(null);
    };

    const handleApplyButtonClick = () => {
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        handleCancelButtonClick();
    };

    return (
        <Container>
            <IconButton onClick={handleDateTimePickerOpen} style={{borderRadius: 0}}>
                <DateRangeIcon />
            {selectedLabel && <span style={{ marginLeft: 8 }}>{selectedLabel}</span>}
            </IconButton>
            <Popover
                id={DatePickerId}
                open={DateTimePicker}
                anchorEl={DatePickerAnchorEl}
                onClose={handleCancelButtonClick}
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
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <RadioGroup value={radioValue} onChange={handleRadioChange}>
                                <FormControlLabel value="lastOneHour" control={<Radio />} label="Last 1 hour" />
                                <FormControlLabel value="lastTwentyFourHour" control={<Radio />} label="Last 24 hours" />
                                <FormControlLabel value="lastOneWeek" control={<Radio />} label="Last 1 week" />
                                <FormControlLabel value="lastTwoWeeks" control={<Radio />} label="Last 2 weeks" />
                                <FormControlLabel value="custom" control={<Radio />} label="Custom" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {radioValue === "custom" && (
                        <>
                            <Grid item xs={12}>
                                <label>Start Date:</label>
                                <TextField
                                    type="datetime-local"
                                    value={startDate ? startDate.toISOString().slice(0, -8) : ''}
                                    onChange={(e) => handleStartDateChange(new Date(e.target.value))}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <label>End Date:</label>
                                <TextField
                                    type="datetime-local"
                                    value={endDate ? endDate.toISOString().slice(0, -8) : ''}
                                    onChange={(e) => handleEndDateChange(new Date(e.target.value))}
                                    fullWidth
                                />
                            </Grid>
                        </>
                    )}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button onClick={handleCancelButtonClick} fullWidth>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleApplyButtonClick} fullWidth>
                                Apply
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Popover>
        </Container>
    );
};
