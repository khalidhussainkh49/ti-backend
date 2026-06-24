import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";

export default function AuditTimeline({
  logs,
}) {
  return (
    <Timeline>
      {logs.map((log, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>

          <TimelineContent>
            <strong>{log.action}</strong>
            <br />
            {log.user} • {log.timestamp}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}