import React from "react";
import ReactDOM from "react-dom";
// import botkit from 'botkit';


let { Botkit } = require("botkit");

// const controller = new Botkit(MY_CONFIGURATION);

// controller.hears("hello", "direct_message", function (bot, message) {
//   bot.reply(message, "Hello yourself!");
// });

function Root() {
  return (
    <div>
      buyzzz
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("main"));
});
