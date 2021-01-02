import { useState, useEffect } from "react";
import "./App.css";
import Webix from "./Webix";
import axios from "axios";

const ui = {
  view: "calendar",
  id: "my_calendar",
  weekHeader: true,
  width: 300,
  height: 250,
};

function App() {
  const v1 = "v1";
  const database = "Eikonsys ADV Online";
  const presentacion = "CalendarEvents.List";
  const [url, setURL] = useState(
    `https://eikonsysleon.com/fmi/data/${v1}/databases/${database}/layouts/${presentacion}/_find`
  );
  const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: "OK" });

  const config = {
    method: "post",
    url:
      "https://eikonsysleon.com/fmi/data/v1/databases/Eikonsys ADV Online/layouts/CalendarEvents.List/_find",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer c8bead59a994043c6d699667ad112bcf04147087ccf15f1d5a89",
    },
    data: "data",
  };

  const getAllEvents = () => {
    axios
      .post(url)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>App Calendar Eikonsys</h1>
        <Webix ui={ui} />
      </header>
    </div>
  );
}

export default App;
