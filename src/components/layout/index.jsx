import { Outlet } from "react-router";
import { Header } from "./header";

export function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
