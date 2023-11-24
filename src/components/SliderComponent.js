import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider(props) {
    const { handleChange, rangeSlider } = props
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={rangeSlider}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}
