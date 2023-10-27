import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { AllShippers } from "../components/shippers/AllShippers";
import { HaulingShips } from "../components/shippers/Haulers";
import { EditHauler } from "../components/forms/EditHauler";
import { Docks } from "../components/shippers/Docks";
import { ShippingShips } from "../components/shippers/ShippingShips";

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

        <Route path="shippingships" element={<ShippingShips />} />
        <Route path="haulingships" element={<Outlet />}>
          <Route index element={<HaulingShips />} />
          <Route path=":editHauler" element={<EditHauler />} />
        </Route>
      </Route>
      <Route path="docks" element={<Docks />} />;
    </Routes>
  );
};
