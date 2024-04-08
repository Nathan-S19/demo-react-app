import * as React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Shell from "../../src/components/Shell";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Shell>
        <Outlet />
      </Shell>
      <TanStackRouterDevtools />
    </>
  );
}
