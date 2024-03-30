import "./App.css";
import Navbar from "./components(TextBara)/Navbar";
import About from "./components(TextBara)/About";
import TextForm from "./components(TextBara)/TextForm";
import React, { useState } from "react";
import { message } from "antd";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [msg, Alert] = message.useMessage();

  const showAlert = (message, type) => {
    console.log("type", type);

    msg.open({
      type: type,
      content: message,
    });
  };
  document.title = "TextBara";
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextBara - Darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "grey";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextBara - Lightmode";
    }
  };
  return (
    <>
      {Alert}
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Routes>
        <Route
          path="/*"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the Text to analyze"
              mode={mode}
            />
          }
        />

        <Route
          path="/about"
          element={<About toggleMode={toggleMode} mode={mode} />}
        />
      </Routes>
    </>
  );
}

export default App;
