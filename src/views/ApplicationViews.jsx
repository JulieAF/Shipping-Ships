import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { AllShippers } from "../components/shippers/AllShippers";
import { Ships } from "../components/shippers/Ships";
import { Haulers } from "../components/shippers/Haulers";
import { EditHauler } from "../components/forms/EditHauler";
import { Docks } from "../components/shippers/Docks";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllShippers />} />
        <Route path="allshippers" element={<AllShippers />} />
        <Route path="shipingships" element={<Ships />} />
        <Route path="shippinghaulers" element={<Outlet />}>
          <Route index element={<Haulers />} />
          <Route path=":editHauler" element={<EditHauler />} />
        </Route>
      </Route>
      <Route path="docks" element={<Docks />} />;
    </Routes>
  );
};
