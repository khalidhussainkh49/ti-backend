import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";

import { useState } from "react";
import SourceGrading from "./SourceGrading";

import { CLASSIFICATION } from "../../constants/intelligenceClassification";

export default function IntelligenceForm({
  onSubmit,
}) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    command: "",
    location: "",
    subject: "",
    commodity: "",
    route: "",
    details: "",
    action: "",

    classification:
      CLASSIFICATION.RESTRICTED,

    reliability: "",
    credibility: "",
  });

  const handleChange = (
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Report Title"
            value={form.title}
            onChange={(e) =>
              handleChange(
                "title",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Category"
            value={form.category}
            onChange={(e) =>
              handleChange(
                "category",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Command"
            value={form.command}
            onChange={(e) =>
              handleChange(
                "command",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            value={form.location}
            onChange={(e) =>
              handleChange(
                "location",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid item xs={12}>
          <SourceGrading
            values={form}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Classification"
            value={form.classification}
            onChange={(e) =>
              handleChange(
                "classification",
                e.target.value
              )
            }
          >
            {Object.values(
              CLASSIFICATION
            ).map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            rows={6}
            fullWidth
            label="Intelligence Details"
            value={form.details}
            onChange={(e) =>
              handleChange(
                "details",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() =>
              onSubmit(form)
            }
          >
            Submit Report
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}