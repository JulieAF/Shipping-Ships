import { useEffect, useState } from "react";
import { getHaulerByDock } from "../../services/shipperService";

export const Docks = () => {
  const [getDocks, setDocks] = useState([]);

  useEffect(() => {
    getHaulerByDock().then((data) => {
      setDocks(Object.values(data));
    });
  }, []);

  return (
    <>
      <h2 className="page-title">Shipping Assets</h2>
      <h2 className="page-sub-title">Docks</h2>
      <article className="shippers-container">
        <div className="shippers">
          {getDocks.map((dock) => {
            return (
              <section className="shipper" key={dock.id}>
                <div className="shipper-info">
                  <h2>Location: {dock.location}</h2>
                  <h2>Tonnage: {dock.capacity}</h2>
                  <ul>
                    {dock.haulers.map((hauler, index) => (
                      <li key={index}>{hauler.name}</li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
};
