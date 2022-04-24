import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "./notes";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {notes.map((noteItem) => {
      return (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      );
    })}
    
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
