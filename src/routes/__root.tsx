import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "@mui/material";
import { useEffect, Suspense, type ReactNode } from "react";

import appCss from "../styles.css?url";
import mainCss from "../main.css?url";
import theme from "../styles/theme";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ErrorBoundary from "../components/ErrorBoundary";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL, DEFAULT_OG_IMAGE } from "../lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Ideal Bath Renovations",
  legalName: "Ideal Bath Renovations Ltd.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Langley's trusted bathroom remodeler. Full-service renovations, tub-to-shower conversions, curbless walk-in showers, custom vanities and tile, and Schluter waterproofing across Langley Twp and the Fraser Valley.",
  telephone: "+1-672-273-0434",
  email: "info@idealbathrenovations.ca",
  priceRange: "$$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, Financing",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20819 78B Avenue",
    addressLocality: "Langley Twp",
    addressRegion: "BC",
    postalCode: "V2Y 0A1",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.1453, longitude: -122.6586 },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Langley Twp" },
    { "@type": "City", name: "Langley" },
    { "@type": "City", name: "Surrey" },
    { "@type": "City", name: "Abbotsford" },
    { "@type": "AdministrativeArea", name: "Fraser Valley" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/idealbathrenovations",
    "https://www.instagram.com/idealbathrenovations",
    "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function RouteErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "qd5l9a8aM1hvCXteZq3L4FgOUHkQ9huZV3QDvjinGz8" },
      { property: "og:site_name", content: "Ideal Bath Renovations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: mainCss },
      { rel: "icon", href: "/fav-icon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM Site Summary" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RouteErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <NavBar />
        <main>
          <ErrorBoundary>
            <Suspense fallback={null}>
              {/* Required: nested routes render here. */}
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
