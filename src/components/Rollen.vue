<template>
  <div :class="[`group-217`, className || ``]">
    <div class="flex-row-6">
      <div class="verschillende-rollen arimo-normal-black-32px">{{ verschillendeRollen }}</div>
      <img
        class="bxup-arrow"
        src="../../public/img/bx-up-arrow@2x.png"
        alt="bx:up-arrow"
      />
    </div>
    <img
      class="vector-12"
      src="../../public/img/vector-1-1.png"
      alt="Vector 1"
    />
  </div>
</template>

<script>
export default {
  name: "Group217",
  props: ["verschillendeRollen", "className"],
};
</script>

<style lang="sass">
.group-217
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  gap: 24px
  margin-top: 73px
  min-height: 63px
  width: 622px

.flex-row-6
  align-items: flex-start
  display: flex
  gap: 212px
  min-width: 577px

.verschillende-rollen
  letter-spacing: 0
  line-height: normal
  margin-top: 0
  min-height: 37px
  min-width: 326px
  white-space: nowrap

.bxup-arrow
  height: 38px
  width: 39px

.vector-12
  height: 1px
  object-fit: cover
  width: 620px

.group-217.group-218
  margin-top: 25px

.group-217.group-218 .flex-row-6
  gap: 360px

.group-217.group-218 .verschillende-rollen
  min-width: 178px

.group-217.group-219
  margin-top: 26px

.group-217.group-219 .flex-row-6
  gap: 281px

.group-217.group-219 .verschillende-rollen
  min-width: 257px
</style>
