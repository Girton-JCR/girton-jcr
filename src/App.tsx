import { createBrowserRouter, RouterProvider, redirect, Outlet } from 'react-router-dom';
import './App.css';
import './index.css';
import SiteHeader from './SiteHeader/SiteHeader';
import SiteFooter from './SiteFooter/SiteFooter';
import ITResources from './CollegeLife/ITResources/ITResources';
import Accommodation from './CollegeLife/Accommodation/Accommodation';
import BookingFacilities from './CollegeLife/BookingFacilities/BookingFacilities';
import Catering from './CollegeLife/Catering/Catering';
import ClubsAndSocieties from './CollegeLife/ClubsAndSocieties/ClubsAndSocieties';
import Freshers from './CollegeLife/Freshers/Freshers';
import Transport from './CollegeLife/Transport/Transport';
import EventsCalendar from './CollegeLife/EventsCalendar/EventsCalendar';
import Welfare from './Welfare/Welfare';
import WhatIsJCR from './JCRCommittee/WhatIsJCR/WhatIsJCR';
import Home from './Home/Home';
import Societies from './Societies/Societies';
import MeetCommittee from './JCRCommittee/MeetCommittee/MeetCommittee';
import CharityCommitments from './JCRCommittee/CharityCommitments/CharityCommitments';
import AdminDashboard from './Admin/Dashboard';
import ErrorPage from './ErrorPage';

const routes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "accommodation",
    element: <Accommodation />
  },
  {
    path: "booking-facilities",
    element: <BookingFacilities />
  },
  {
    path: "catering",
    element: <Catering />
  },
  {
    path: "clubs-and-societies",
    element: <ClubsAndSocieties />
  },
  {
    path: "events-calendar",
    element: <EventsCalendar />
  },
  {
    path: "freshers",
    element: <Freshers />
  },
  {
    path: "jcr-news",
    loader: async () => redirect("https://girtonjcr.blogspot.com")
  },
  {
    path: "it-resources",
    element: <ITResources />
  },
  {
    path: "meet-the-committee",
    element: <MeetCommittee />
  },
  {
    path: "charity-commitments",
    element: <CharityCommitments />
  },
  {
    path: "societies-list",
    element: <Societies />
  },
  {
    path: "transport",
    element: <Transport />
  },
  {
    path: "welfare",
    element: <Welfare />
  },
  {
    path: "what-is-the-jcr",
    element: <WhatIsJCR />
  },
  {
    path: "admin",
    element: <AdminDashboard />
  }
];

const RootLayout = () => {
  return (
    <>
    <SiteHeader>
      <div />
    </SiteHeader>
    <main className="Main">
      <Outlet />
    </main>
    <SiteFooter />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: routes
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
