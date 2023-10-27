import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editedHauler,
  getAllDocks,
  getHaulerById,
} from "../../services/shipperService";

export const EditHauler = () => {
  const { editHauler } = useParams();
  const [hauler, setHauler] = useState({});
  const [getDockLocations, setDockLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerById(editHauler).then((data) => {
      const haulerObj = data[0];
      setHauler(haulerObj);
    });
  }, [editHauler]);

  useEffect(() => {
    getAllDocks().then((dockArr) => {
      setDockLocations(dockArr);
    });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editedHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <>
      <div className="form-container">
        <form>
          <h2 className="page-sub-title">Edit Hauler</h2>
          <fieldset>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={hauler.name ? hauler.name : ""}
                onChange={(event) => {
                  const copy = { ...hauler };
                  copy.name = event.target.value;
                  setHauler(copy);
                }}
                required
                className="form-control"
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-dock-select-container">
              <div>Docks:</div>
              <select
                className="form-dock-select"
                name="dock_id"
                value={hauler.dock_id ? hauler.dock_id : ""}
                onChange={(event) => {
                  console.log(event.target.value);
                  const copy = { ...hauler };
                  copy.dock_id = parseInt(event.target.value);
                  setHauler(copy);
                }}
              >
                <option value={0}>Please select a Dock</option>
                {getDockLocations.map((dockArr) => {
                  return (
                    <option key={dockArr.id} value={dockArr.id}>
                      {dockArr.location}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-btn-container">
              <button className="form-btn" onClick={handleUpdate}>
                Update Hauler
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
