<template>
  <footer class="footer">
    <img
      class="laag_1-2"
      src="../../public/img/laag-1-6.svg"
      alt="Laag_1"
    />
    <div class="flex-row-7 didactgothic-normal-sonic-silver-25px">
      <div class="overvie-w">overview</div>
      <div class="about-us">about us</div>
      <div class="place-3">contact</div>
      <div class="place-4">Portal</div>
      <div class="boek-een-demo-5">Boek een demo</div>
    </div>
    <img
      class="vector-4-1"
      src="../../public/img/vector-4-1.png"
      alt="Vector 4"
    />
    <group91 :phCopyrightThin="group91Props.phCopyrightThin" />
  </footer>
</template>

<script>
import Group91 from "./CopyRight.vue";
export default {
  name: "XFooter2",
  components: {
    Group91,
  },
  props: ["group91Props"],
};
</script>

<style lang="sass">
.footer,
.footer-1,
.footer-2,
.footer-3
  align-items: center
  background-color: transparent
  display: flex
  flex-direction: column
  height: auto
  justify-content: flex-start
  left: 0
  min-height: 243px
  position: absolute
  top: 234px
  width: 1196px

.laag_1-2,
.laag_1-3,
.laag_1-4,
.laag_1-5
  height: 38px
  margin-right: 1.0px
  width: 189px

.flex-row-7,
.flex-row-8,
.flex-row-9,
.flex-row-10
  align-items: flex-start
  display: flex
  gap: 61px
  height: 33px
  margin-top: 64px
  min-width: 734px

.overview,
.overview-1,
.overview-2,
.overview-3
  letter-spacing: 0
  line-height: normal
  min-height: 33px
  min-width: 94px

.about-us,
.about-us-1,
.about-us-2,
.about-us-3
  letter-spacing: 0
  line-height: normal
  min-height: 33px
  min-width: 93px

.place-3,
.place-5,
.place-7,
.place-9
  letter-spacing: 0
  line-height: normal
  min-height: 33px
  min-width: 79px

.place-4,
.place-6,
.place-8,
.place-10
  letter-spacing: 0
  line-height: normal
  min-height: 33px
  min-width: 61px

.boek-een-demo-5,
.boek-een-demo-6,
.boek-een-demo-7,
.boek-een-demo-8
  letter-spacing: 0
  line-height: normal
  min-height: 33px

.vector-4-1,
.vector-4-2,
.vector-4-3,
.vector-4-4
  align-self: flex-start
  height: 1px
  margin-top: 40px
  object-fit: cover
  width: 1186px
</style>
