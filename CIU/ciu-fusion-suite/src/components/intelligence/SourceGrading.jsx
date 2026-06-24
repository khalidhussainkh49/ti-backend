import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

export default function SourceGrading({
  values,
  onChange,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          select
          label="Source Reliability"
          value={values.reliability}
          onChange={(e) =>
            onChange(
              "reliability",
              e.target.value
            )
          }
        >
          {["A", "B", "C", "D", "E"].map(
            (item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            )
          )}
        </TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          select
          label="Information Credibility"
          value={values.credibility}
          onChange={(e) =>
            onChange(
              "credibility",
              e.target.value
            )
          }
        >
          {[1, 2, 3, 4, 5].map(
            (item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            )
          )}
        </TextField>
      </Grid>
    </Grid>
  );
}