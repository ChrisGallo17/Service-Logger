import { useState } from "react";
import { Stack, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button, Typography, Container } from "@mui/material";

export default function ServiceForm() {
  const [vehicle, setVehicle] = useState('');

  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Box sx={{ minWidth: 120 }}>

          <FormControl fullWidth margin="normal">
            <Typography variant="h4" margin="normal" textAlign="left">Record Service</Typography>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vehicle}
              label="Vehicle"
              onChange={handleChange}
            >
              <MenuItem value={10}>Suzuki GSXR 600</MenuItem>
              <MenuItem value={20}>Audi S5</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth id="outlined-basic" label="Odometer" variant="outlined" margin="normal" required/>

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="demo-simple-select-label">Service</InputLabel>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value={vehicle}
              label="Service"
              // onChange={handleChange}
            >
              <MenuItem>Oil change</MenuItem>
              <MenuItem>Brake pad replacement</MenuItem>
              <MenuItem>DSG Service</MenuItem>
            </Select>
          </FormControl>

          <TextField
            multiline
            label="Service notes" 
            rows={4}
            maxRows={4}
            fullWidth 
            margin="normal"
          />

          <Button 
            variant="contained" 
            sx={{ mt: 2 }} 
          >
            Add Service
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
