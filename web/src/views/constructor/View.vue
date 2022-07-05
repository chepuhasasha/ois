<template lang="pug">
#ois(ref='scheme')
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { create } from "../../../../lib";
import { config } from "./config";

onMounted(() => {
  const ois = create("#ois").load(config, (ois) => {
    // ois.on("select", (e) => {
    //   console.log(e);
    // });
    // ois.tools.move = true;
    setInterval(() => {
      if (Math.random() > 0.5) {
        ois.refs["server #1"].color = "#8fff00";
        ois.refs["plane #1"].color = "#8fff00";
        ois.refs["line #1"].color = "#8fff00";
        ois.refs["text #1"].color = "#8fff00";
        ois.refs["text #1"].text = "UP";
      } else {
        ois.refs["server #1"].color = "#ff0000";
        ois.refs["plane #1"].color = "#ff0000";
        ois.refs["line #1"].color = "#ff0000";
        ois.refs["text #1"].text = "DOWN";
        ois.refs["text #1"].color = "#ff0000";
      }
    }, 1000);
  });
});
</script>

<style lang="sass">
.constructor
  display: grid
  grid-template-columns: 40px 300px 1fr
  grid-template-rows: 1fr
  width: 100%
  height: 100%
.block
  color: white
  border: var(--border)
  background: var(--bg)
#ois
  width: 100%,
  height: 100%
  max-width: 100%,
  max-height: 100%
</style>
