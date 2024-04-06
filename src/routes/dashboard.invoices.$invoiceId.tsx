import { createFileRoute, useParams } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard/invoices/$invoiceId")({
  component: () => {
    // get the invoiceId from the URL
    const invoiceId = useParams({
      from: "/dashboard/invoices/$invoiceId",
    }).invoiceId;
    return <div>{`This is ${invoiceId} single invoice page`}</div>;
  },
});
