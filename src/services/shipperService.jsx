export const getAllShips = () => {
  return fetch(`http://localhost:8000/ships`).then((res) => res.json());
};

export const getAllHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};

export const getAllDocks = () => {
  return fetch(`http://localhost:8000/docks`).then((res) => res.json());
};

export const getHaulersByShips = () => {
  return fetch(`http://localhost:8000/ships?_expand=hauler`).then((res) =>
    res.json()
  );
};

export const deleteShip = (ship) => {
  return fetch(`http://localhost:8000/ships/${ship.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ship),
  }).then(() => {
    console.log("Deleted!");
  });
};

export const getHaulerById = (haulerId) => {
  return fetch(
    `http://localhost:8000/haulers?id=${haulerId}&_expand=dock`
  ).then((res) => res.json());
};

export const editedHauler = (hauler) => {
  return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hauler),
  });
};

export const getHaulerByDock = () => {
  return fetch(`http://localhost:8000/docks?_embed=haulers`).then((res) =>
    res.json()
  );
};
