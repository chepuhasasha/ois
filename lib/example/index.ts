import config from "./config.json";
import { create } from "../src";
create("#muup", {
  width: innerWidth,
  height: innerHeight,
}).load(
  config,
  (muup) => {
    setInterval(() => {
      if (Math.random() > 0.5) {
        muup.refs["server #1"].color = "#8fff00";
        muup.refs["plane #1"].color = "#8fff00";
        muup.refs["line #1"].color = "#8fff00";
        // muup.refs["server #3"].select();
        muup.refs["text #1"].color = "#8fff00";
        muup.refs["text #1"].text = "UP";
      } else {
        muup.refs["server #1"].color = "#ff0000";
        muup.refs["plane #1"].color = "#ff0000";
        muup.refs["line #1"].color = "#ff0000";

        muup.refs["text #1"].text = "DOWN";
        muup.refs["text #1"].color = "#ff0000";
      }
      // console.log(muup.makeConfig());
    }, 1000);
  },
  true
);

