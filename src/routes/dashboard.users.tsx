import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/dashboard/users")({
  component: () => <div>Hello /dashboard/users! users page</div>,
});
