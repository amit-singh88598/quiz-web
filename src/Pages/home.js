import { TextField } from "@mui/material";
import React from "react";
import "../Sass/style.scss";

const data = [
  {
    question: `Which among the following example is a right combination?`,
    date: "15/12/2021",
    time: "12:30 PM",
    answer: `Marble : Metamorphic Rock`,
    textAnswer: `Marble : Metamorphic Rock`,
  },
  {
    question: `Which among the following example is a right combination?`,
    date: "15/12/2021",
    time: "12:30 PM",
    answer: `Marble : Metamorphic Rock`,
    textAnswer: `Marble : Metamorphic Rock`,
  },
  {
    question: `Which among the following example is a right combination?`,
    date: "15/12/2021",
    time: "12:30 PM",
    answer: `Marble : Metamorphic Rock`,
    textAnswer: `Marble : Metamorphic Rock`,
  },
];

function Home(props) {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        paddingBlock: 20,
      }}
    >
      <div style={{ fontSize: "2.2em", fontWeight: 600, padding: 20 }}>
        Results
      </div>
      {data.map((item, index) => (
        <div className="root__card" key={index}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 10 }}>Question :</div>
              <div>{item.question}</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex" }}>
              <div style={{ marginRight: 20 }}>{item.date}</div>
              <div>{item.time}</div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <div style={{ marginRight: 10 }}>Selected Answer :</div>
            <div>{item.answer}</div>
          </div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={item.textAnswer}
            style={{ display: "flex", marginTop: 20 }}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
