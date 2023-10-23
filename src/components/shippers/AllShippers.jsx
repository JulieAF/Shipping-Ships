import { useState, useEffect } from "react";
import {
  getAllDocks,
  getAllHaulers,
  getAllShips,
} from "../../services/shipperService";
import "./AllShippers.css";
export const AllShippers = () => {
  const [allShips, setAllShips] = useState([]);
  const [allHaulers, setAllHaulers] = useState([]);
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getAllShips().then((shipArr) => {
      setAllShips(shipArr);
    });
  }, []);

  useEffect(() => {
    getAllHaulers().then((haulerArr) => {
      setAllHaulers(haulerArr);
    });
  }, []);

  useEffect(() => {
    getAllDocks().then((dockArr) => {
      setAllDocks(dockArr);
    });
  }, []);

  return (
    <>
      <h2 className="page-title">Shipping Assets</h2>
      <h2 className="page-sub-title">Ships</h2>
      <article className="shippers-container">
        <div className="shippers">
          {allShips.map((ship) => {
            return (
              <section className="shipper" key={ship.id}>
                <div className="shipper-info">
                  <h2>{ship.name}</h2>
                </div>
              </section>
            );
          })}
        </div>
      </article>
      <h2 className="page-sub-title">Haulers</h2>
      <article className="shippers-container">
        <div className="shippers">
          {allHaulers.map((hauler) => {
            return (
              <section className="shipper" key={hauler.id}>
                <div className="shipper-info">
                  <h2>{hauler.name}</h2>
                </div>
              </section>
            );
          })}
        </div>
      </article>
      <h2 className="page-sub-title">Docks</h2>
      <article className="shippers-container">
        <div className="shippers">
          {allDocks.map((dock) => {
            return (
              <section className="shipper" key={dock.id}>
                <div className="shipper-info">
                  <h2>{dock.location}</h2>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
};
