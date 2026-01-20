import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import OpportunitiesPage from '@/components/pages/OpportunitiesPage';
import InternshipsPage from '@/components/pages/InternshipsPage';
import JobsPage from '@/components/pages/JobsPage';
import CompetitionsPage from '@/components/pages/CompetitionsPage';
import WorkshopsPage from '@/components/pages/WorkshopsPage';
import BlogsPage from '@/components/pages/BlogsPage';
import BlogDetailPage from '@/components/pages/BlogDetailPage';
import ContactPage from '@/components/pages/ContactPage';
import PartnerPage from '@/components/pages/PartnerPage';
import PrivacyPage from '@/components/pages/PrivacyPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "opportunities",
        element: <OpportunitiesPage />,
        routeMetadata: {
          pageIdentifier: 'opportunities',
        },
      },
      {
        path: "internships",
        element: <InternshipsPage />,
        routeMetadata: {
          pageIdentifier: 'internships',
        },
      },
      {
        path: "jobs",
        element: <JobsPage />,
        routeMetadata: {
          pageIdentifier: 'jobs',
        },
      },
      {
        path: "competitions",
        element: <CompetitionsPage />,
        routeMetadata: {
          pageIdentifier: 'competitions',
        },
      },
      {
        path: "workshops",
        element: <WorkshopsPage />,
        routeMetadata: {
          pageIdentifier: 'workshops',
        },
      },
      {
        path: "blogs",
        element: <BlogsPage />,
        routeMetadata: {
          pageIdentifier: 'blogs',
        },
      },
      {
        path: "blogs/:id",
        element: <BlogDetailPage />,
        routeMetadata: {
          pageIdentifier: 'blog-detail',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "partner",
        element: <PartnerPage />,
        routeMetadata: {
          pageIdentifier: 'partner',
        },
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
        routeMetadata: {
          pageIdentifier: 'privacy',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
