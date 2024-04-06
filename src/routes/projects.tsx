import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectComponent,
});

function ProjectComponent() {
  return (
    <div className="p-4 bg-red-300">
      <p>Hello from ProjectComponent Root!</p>
      <span>Hiii</span>
      <Outlet />
    </div>
  );
}
