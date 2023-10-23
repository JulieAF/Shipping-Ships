import { useEffect, useState } from "react";
import { getHaulersByShips } from "../../services/shipperService";

export const Ships = () => {
  const [allShips, setAllShips] = useState([]);

  useEffect(() => {
    getHaulersByShips().then((shipArr) => {
      setAllShips(shipArr);
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
                  <h2>Is being carried by {ship.hauler.name}</h2>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
};
