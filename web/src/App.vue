<template lang="pug">
//- router-view
#ois
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as PIXI from "pixi.js";
import { create } from "../../lib/";
import { config } from "./config.ts";
onMounted(() => {
  create("#ois", {
    width: innerWidth,
    height: innerHeight,
  }).load(
    config,
    (ois) => {
      setInterval(() => {
        if (Math.random() > 0.5) {
          ois.refs["server #1"].color = "#8fff00";
          ois.refs["plane #1"].color = "#8fff00";
          ois.refs["line #1"].color = "#8fff00";
          // ois.refs["server #3"].select();
          ois.refs["text #1"].color = "#8fff00";
          ois.refs["text #1"].text = "UP";
        } else {
          ois.refs["server #1"].color = "#ff0000";
          ois.refs["plane #1"].color = "#ff0000";
          ois.refs["line #1"].color = "#ff0000";

          ois.refs["text #1"].text = "DOWN";
          ois.refs["text #1"].color = "#ff0000";
        }
        // console.log(ois.makeConfig());
      }, 1000);
    },
    true
  );
});
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background: var(--bg);
}
</style>
