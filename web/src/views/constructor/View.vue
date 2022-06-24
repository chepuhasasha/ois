<template lang="pug">
.constructor
  .block
  .block {{ test }}
  .block
    #ois(ref='scheme')
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import * as PIXI from "pixi.js";
import { create } from "@/../../lib/";
import { config } from "@/config.ts";

const scheme = ref<HTMLDivElement | null>(null);
const selected = ref<string>("test");
const test = computed(() => selected.value);
onMounted(() => {
  let width = 100;
  let height = 100;
  if (scheme.value) {
    width = scheme.value.getBoundingClientRect().width;
    height = scheme.value.getBoundingClientRect().height - 10;
    console.log(scheme.value.getBoundingClientRect());
  }
  const ois = create("#ois", {
    width: width,
    height: height,
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
      console.log(ois.refs);
      selected.value = JSON.stringify(ois.refs["server #1"].config, null, 2);
    },
    true
  );
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
</style>
