import * as React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Shell from "../../src/components/Shell";
import TestImport from "@/components/ImportTest";
export var Route = createRootRoute({
    component: Root,
});
function Root() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Shell, null,
            React.createElement(Outlet, null),
            React.createElement(TestImport, null)),
        React.createElement(TanStackRouterDevtools, null)));
}
