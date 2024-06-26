/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsImport } from './routes/projects'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as ProjectsIndexImport } from './routes/projects.index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as DashboardUsersImport } from './routes/dashboard.users'
import { Route as DashboardInvoicesImport } from './routes/dashboard.invoices'
import { Route as DashboardInvoicesInvoiceIdImport } from './routes/dashboard.invoices.$invoiceId'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProjectsRoute = ProjectsImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProjectsIndexRoute = ProjectsIndexImport.update({
  path: '/',
  getParentRoute: () => ProjectsRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardUsersRoute = DashboardUsersImport.update({
  path: '/users',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardInvoicesRoute = DashboardInvoicesImport.update({
  path: '/invoices',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardInvoicesInvoiceIdRoute = DashboardInvoicesInvoiceIdImport.update(
  {
    path: '/$invoiceId',
    getParentRoute: () => DashboardInvoicesRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/invoices': {
      preLoaderRoute: typeof DashboardInvoicesImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/users': {
      preLoaderRoute: typeof DashboardUsersImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/projects/': {
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof ProjectsImport
    }
    '/dashboard/invoices/$invoiceId': {
      preLoaderRoute: typeof DashboardInvoicesInvoiceIdImport
      parentRoute: typeof DashboardInvoicesImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  DashboardRoute.addChildren([
    DashboardInvoicesRoute.addChildren([DashboardInvoicesInvoiceIdRoute]),
    DashboardUsersRoute,
    DashboardIndexRoute,
  ]),
  ProjectsRoute.addChildren([ProjectsIndexRoute]),
  AboutLazyRoute,
])

/* prettier-ignore-end */
