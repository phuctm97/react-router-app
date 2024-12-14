import "@mantine/core/styles.css";

import type { PropsWithChildren, ReactNode } from "react";

import type { Route } from "./+types/root";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import rtlDetect from "rtl-detect";

import config from "~/config.json";

export function Layout({ children }: PropsWithChildren): ReactNode {
  return (
    <html dir={rtlDetect.getLangDir(config.locale)} lang={config.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <ColorSchemeScript defaultColorScheme="auto" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps): ReactNode {
  let message = "Sorry, an error occurred.";
  if (typeof error === "string") message = error;
  else if (error instanceof Error) message = error.message;
  return <div>{message}</div>;
}

export default function Component(): ReactNode {
  return <Outlet />;
}
