import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard/invoices")({
  component: () => (
    <div>
      Hello /dashboard/invoices! invoices page
      <div>
        <a href="/dashboard/invoices/1">/dashboard/invoices/1</a>
      </div>
      <div>
        <a href="/dashboard/invoices/2">/dashboard/invoices/2</a>
      </div>
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  ),
});
