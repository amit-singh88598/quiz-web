import React from "react";
import "../Sass/style.scss";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import Slide from "@mui/material/Slide";

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

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Home(props) {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      {/* <HideOnScroll {...props}> */}
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div">
            Quiz App
          </Typography>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Container>
        <div
          style={{
            minHeight: "100vh",
            paddingBlock: 60,
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
                disabled
                id="outlined-basic"
                variant="outlined"
                value={item.textAnswer}
                style={{ display: "flex", marginTop: 20 }}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
