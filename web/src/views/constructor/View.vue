<template lang="pug">
.constructor
  .block
  .block
  .block
</template>

<script lang="ts" setup></script>

<style lang="sass">
.constructor
  display: grid
  grid-template-columns: 40px 300px 1fr
  grid-template-rows: 1fr
  width: 100%
  height: 100%
.block
  border: var(--border)
  background: var(--bg)
</style>
