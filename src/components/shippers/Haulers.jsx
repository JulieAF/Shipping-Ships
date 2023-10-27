import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/shipperService";
import { Link } from "react-router-dom";

export const HaulingShips = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulerArr) => {
      setAllHaulers(haulerArr);
    });
  }, []);

  return (
    <>
      <h2 className="page-sub-title">Haulers</h2>
      <article className="shippers-container">
        <div className="shippers">
          {allHaulers.map((hauler) => {
            return (
              <section className="shipper" key={hauler.id}>
                <div className="shipper-info">
                  <h2>{hauler.name}</h2>
                </div>
                <div className="my-btn-container">
                  <button className="my-btn-1">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(79, 17, 146)",
                      }}
                      hauler={hauler}
                      key={hauler.id}
                      to={`/haulingships/editHauler${hauler.id}`}
                    >
                      Edit
                    </Link>
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
