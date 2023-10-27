import { useEffect, useState } from "react";
import { deleteShip, getHaulersByShips } from "../../services/shipperService";

export const ShippingShips = () => {
  const [allShips, setAllShips] = useState([]);

  useEffect(() => {
    getHaulersByShips().then((shipArr) => {
      setAllShips(shipArr);
    });
  }, []);

  const handleDelete = (ship) => {
    deleteShip(ship).then(() => {
      getHaulersByShips().then((shipArr) => {
        setAllShips(shipArr);
      });
    });
  };

  return (
    <>
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
                <div className="my-btn-container">
                  <button
                    className="my-btn-2"
                    value={ship.id}
                    onClick={() => handleDelete(ship)}
                  >
                    Delete
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
};
