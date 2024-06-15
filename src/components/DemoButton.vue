<template>
  <div class="frame-8"><div class="boek-een-demo-1 arimo-normal-white-20px">Boek een demo</div></div>
</template>

<script>
export default {
  name: "Frame8",
};
</script>

<style lang="sass">
@import '../../variables'

.frame-8,
.frame-8-1,
.frame-8-2,
.frame-8-3
  align-items: center
  background-color: $malachite
  border-radius: 11px
  display: flex
  gap: 10px
  height: 40px
  justify-content: center
  margin-left: 42px
  overflow: hidden
  padding: 12px 41px
  position: relative
  width: 189px

.boek-een-demo-1,
.boek-een-demo-2,
.boek-een-demo-3,
.boek-een-demo-4
  letter-spacing: 0
  line-height: normal
  margin: -4.50px -17.23px -2.50px
  position: relative
  text-align: right
  white-space: nowrap
  width: fit-content
</style>
