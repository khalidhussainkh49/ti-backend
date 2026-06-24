import { useState } from "react";
import {
  Button,
  Stack,
  Typography,
} from "@mui/material";

export default function EvidenceUpload({
  onUpload,
}) {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    onUpload(formData);
  };

  return (
    <Stack spacing={2}>
      <Typography>
        Upload Evidence (Images, Video, Docs)
      </Typography>

      <input
        type="file"
        multiple
        onChange={handleChange}
      />

      <Button
        variant="contained"
        onClick={handleUpload}
      >
        Upload Evidence
      </Button>
    </Stack>
  );
}