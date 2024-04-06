import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/projects/")({
  component: () => (
    <div className="p-4 bg-green-300">
      Hello /projects/! This is the index component of projects
    </div>
  ),
});
