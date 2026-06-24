import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Dashboard() {
  const stats = [
    {
      title: "Active Cases",
      value: 245,
    },
    {
      title: "High Risk Cargo",
      value: 128,
    },
    {
      title: "Watchlisted Entities",
      value: 74,
    },
    {
      title: "Cyber Alerts",
      value: 15,
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((item) => (
        <Grid item xs={3} key={item.title}>
          <Card>
            <CardContent>
              <Typography>
                {item.title}
              </Typography>

              <Typography variant="h4">
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}