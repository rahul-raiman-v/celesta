import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { routes } from "..";
import { Layout } from "../../components";
import HomePage from "../../pages/HomePage";
import EventsPage from "../../pages/EventsPage";
import NotFoundPage from "../../pages/NotFoundPage";
import SchedulePage from "../../pages/SchedulePage";
import ComboPage from "../../pages/ComboPage";
import TeamPage from "../../pages/TeamPage";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.events} element={<EventsPage />} />
            <Route path={routes.schedule} element={<SchedulePage />} />
            <Route path={routes.combo} element={<ComboPage />} />
            <Route path={routes.team} element={<TeamPage />} />
            <Route path={routes.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
