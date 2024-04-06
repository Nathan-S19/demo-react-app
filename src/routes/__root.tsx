import * as React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "@/components/ui/button";
import Shell from "@/components/Shell";

export const Route = createRootRoute({
  component: () => (
    <>
      <Shell>
        <Outlet />
      </Shell>
      {/*<div className="p-2 flex gap-2">*/}
      {/*  <Button>*/}
      {/*    <Link to="/" className="[&.active]:font-bold">*/}
      {/*      Home*/}
      {/*    </Link>{" "}*/}
      {/*  </Button>*/}
      {/*  <Button>*/}
      {/*    <Link to="/about" className="[&.active]:font-bold">*/}
      {/*      About*/}
      {/*    </Link>*/}
      {/*  </Button>*/}
      {/*  <Button>*/}
      {/*    <Link to="/dashboard" className="[&.active]:font-bold">*/}
      {/*      Dashboard*/}
      {/*    </Link>*/}
      {/*  </Button>*/}
      {/*  <Button>This is the root layout</Button>*/}
      {/*</div>*/}
      {/*<hr />*/}
      <TanStackRouterDevtools />
    </>
  ),
});
