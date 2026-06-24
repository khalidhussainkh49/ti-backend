import {
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

export default function IntelligenceReports() {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Report Title"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            select
            label="Classification"
          >
            <MenuItem value="Restricted">
              Restricted
            </MenuItem>

            <MenuItem value="Confidential">
              Confidential
            </MenuItem>

            <MenuItem value="Secret">
              Secret
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Details"
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">
            Submit Report
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}