import React from "react";
import ReactDOM from "react-dom";


let { Botkit } = require("botkit");

const controller = new Botkit(MY_CONFIGURATION);

controller.hears("hello", "direct_message", function (bot, message) {
  bot.reply(message, "Hello yourself!");
});

function Root() {
  return (
    <div>
      sup
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root controller={controller}/>, document.getElementById("main"));
});
