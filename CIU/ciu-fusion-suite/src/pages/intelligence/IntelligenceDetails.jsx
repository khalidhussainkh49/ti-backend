import { useEffect, useState } from "react";

import {
  getReportById,
} from "../../services/intelligenceApi";

import {
  getVersions,
} from "../../services/versionApi";

import ConvertToCaseButton from "../../components/intelligence/ConvertToCaseButton";
import WatchlistAction from "../../components/intelligence/WatchlistAction";
import GisCapture from "../../components/intelligence/GisCapture";
import IntelligenceVersions from "../../components/intelligence/IntelligenceVersions";

import WorkflowActions from "../../components/intelligence/WorkflowActions";
import EvidenceUpload from "../../components/intelligence/EvidenceUpload";
import AuditTimeline from "../../components/intelligence/AuditTimeline";

export default function IntelligenceDetails({
  reportId,
}) {
  const [report, setReport] =
    useState(null);

  const [versions, setVersions] =
    useState([]);

  const load = async () => {
    const data =
      await getReportById(reportId);

    const v =
      await getVersions(reportId);

    setReport(data);
    setVersions(v);
  };

  useEffect(() => {
    load();
  }, [reportId]);

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h2>{report.title}</h2>

      {/* WORKFLOW */}
      <WorkflowActions
        reportId={reportId}
        status={report.status}
        onRefresh={load}
      />

      {/* CASE CONVERSION */}
      {report.status === "Approved" && (
        <ConvertToCaseButton
          reportId={reportId}
          onDone={load}
        />
      )}

      {/* WATCHLIST */}
      <WatchlistAction
        entityId={report.entityId}
      />

      {/* GIS */}
      <GisCapture
        onChange={(coords) =>
          console.log(coords)
        }
      />

      {/* EVIDENCE */}
      <EvidenceUpload
        onUpload={() => load()}
      />

      {/* AUDIT */}
      <AuditTimeline
        logs={report.auditLogs || []}
      />

      {/* VERSION HISTORY */}
      <IntelligenceVersions
        versions={versions}
      />
    </div>
  );
}