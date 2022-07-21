<template lang="pug">
.editor
  .editor_engine#ois(ref='container')
  .editor_tree
  .editor_props
  .editor_tools
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { create } from "engine";
import { config } from "./config";
const container = ref<HTMLDivElement | null>(null);
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
.editor
  display: grid
  grid-template-columns: 300px 1fr 300px
  grid-template-rows: auto 1fr
  width: 100%
  height: 100%
  &_engine
    grid-area: 1/1/3/4
    z-index: 1
    background: rgb(var(--bg_200))
  &_tree, &_props, &_tools
    background: rgb(var(--bg_100))
    margin: 20px
    z-index: 2
    border-radius: 16px
    border: 1px solid rgba(255,255,255,0.08)
  &_tree
    grid-area: 1/1/3/2
  &_props
    grid-area: 1/3/3/4
  &_tools
    height: 40px
    grid-area: 1/2/2/3
</style>
