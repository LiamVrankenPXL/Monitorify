<template>
  <div :class="[`component-2`, className || ``]">
    <div class="footer-container">
      <img class="img-footer" :src="imgFooter" alt="Img footer" /><x-footer2
        :group91Props="xFooter2Props.group91Props"
      />
    </div>
  </div>
</template>

<script>
import XFooter2 from "./Footer.vue";
export default {
  name: "xFooter",
  components: {
    XFooter2,
  },
  props: ["imgFooter", "className", "xFooter2Props"],
};
</script>

<style lang="sass">
.component-2
  align-items: flex-start
  align-self: flex-end
  display: flex
  height: 696px
  margin-right: -156px
  margin-top: 214px
  min-width: 1711px

.footer-container
  height: 513px
  position: relative
  width: 1555px

.img-footer
  height: 513px
  left: 1179px
  position: absolute
  top: 0
  width: 376px

.component-2.component-2-1
  align-self: unset
  left: 0
  margin-right: unset
  margin-top: unset
  position: absolute
  top: 841px

.component-2.component-2-1 .footer-container
  height: 527px
  width: 1551px

.component-2.component-2-1 .img-footer
  height: 527px
  width: 372px

.component-2.component-2-2
  align-self: unset
  left: 369px
  margin-right: unset
  margin-top: unset
  position: absolute
  top: 244px

.component-2.component-2-2 .footer-container
  height: 525px
  width: 1551px

.component-2.component-2-2 .img-footer
  height: 525px
  width: 372px

.component-2.component-2-3
  align-self: unset
  margin-right: -160px
  margin-top: unset

.component-2.component-2-3 .footer-container
  height: 518px
  width: 1551px

.component-2.component-2-3 .img-footer
  height: 518px
  width: 372px
</style>
