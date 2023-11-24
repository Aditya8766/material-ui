import { Button, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, IconButton, Paper, Popover, Typography } from "@mui/material";
import { useState } from "react";
import LayersIcon from '@mui/icons-material/Layers';

export const StackIconPopover = () => {
    const [layersAnchorEl, setLayersAnchorEl] = useState(null);
    const [counter, setCounter] = useState(1);

    const layersOpen = Boolean(layersAnchorEl);
    const layersId = layersAnchorEl ? 'layers-popover' : undefined;

    const handleLayersOpen = (event) => {
        setLayersAnchorEl(event.currentTarget);
    };

    const handleLayersClose = () => {
        setLayersAnchorEl(null);
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setCounter((prevCounter) => (isChecked ? prevCounter + 1 : prevCounter - 1));
    };
    return (
        <Container>
            <IconButton onClick={handleLayersOpen}>
                <LayersIcon />
                {counter > 0 && <span>{counter}</span>}
            </IconButton>
            <Popover
                id={layersId}
                open={layersOpen}
                anchorEl={layersAnchorEl}
                onClose={handleLayersClose}
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
                            <Typography>Overlay</Typography>
                            <Divider/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked onChange={handleCheckboxChange} />}
                                label="HostNames"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleCheckboxChange} />}
                                label="Clusters"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleCheckboxChange} />}
                                label="BNS only"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={handleLayersClose} fullWidth>
                            Close
                        </Button>
                    </Grid>
                </Container>
            </Popover>
        </Container>
    )
}