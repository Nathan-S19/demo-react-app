import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard/")({
  component: () => <div>Hello /dashboard/! home dashboard</div>,
});
