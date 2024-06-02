<template>
  <div class="container-center-horizontal">
    <div class="portalweb screen">
      <div class="overlap-group2-2">
        <h1 class="title-1 arimo-semi-bold-black-38px">{{ title }}</h1>
        <div class="overlap-group1">
          <img class="group-168" :src="group168" alt="Group 168" /><x-footer
            :imgFooter="xFooterProps.imgFooter"
            :className="xFooterProps.className"
            :xFooter2Props="xFooterProps.xFooter2Props"
          />
        </div>
        <router-link to="/portalloginweb">
          <div class="school_1"><img class="image-21" :src="image21" alt="image 21" /></div
        ></router-link>
        <div class="school_2"><img class="image-22" :src="image22" alt="image 22" /></div>
        <div class="school_3"><img class="image-23" :src="image23" alt="image 23" /></div>
        <div class="school_4"><img class="image-24" :src="image24" alt="image 24" /></div>
        <div class="school_6"><img class="image-25" :src="image25" alt="image 25" /></div>
        <div class="school_5"><img class="image-26" :src="image26" alt="image 26" /></div>
        <x-nav :className="xNavProps.className" />
      </div>
    </div>
  </div>
</template>

<script>
import xFooter from "../components/FooterImg.vue";
import xNav from "../components/Nav.vue";
export default {
  name: "PortalWeb",
  components: {
    xFooter,
    xNav,
  },
  props: [
    "title",
    "group168",
    "image21",
    "image22",
    "image23",
    "image24",
    "image25",
    "image26",
    "xFooterProps",
    "xNavProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.portalweb
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1368px
  overflow: hidden
  width: 1920px

.overlap-group2-2
  height: 1537px
  margin-left: 118px
  position: relative
  width: 1962px

.title-1
  left: 718px
  letter-spacing: 0
  line-height: 49.4px
  position: absolute
  text-align: center
  top: 229px
  white-space: nowrap

.overlap-group1
  height: 1537px
  left: 251px
  position: absolute
  top: 0
  width: 1711px

.group-168
  height: 912px
  left: 1089px
  position: absolute
  top: 0
  width: 462px

.school_1
  align-items: center
  background-color: $malachite
  cursor: pointer
  display: flex
  height: 179px
  left: 426px
  min-width: 178px
  padding: 0 46px
  position: absolute
  top: 361px

.image-21
  height: 85px
  object-fit: cover
  width: 85px

.school_2
  align-items: flex-end
  background-color: $malachite
  display: flex
  height: 179px
  left: 644px
  min-width: 178px
  padding: 46px
  position: absolute
  top: 361px

.image-22
  height: 86px
  object-fit: cover
  width: 86px

.school_3
  align-items: center
  background-color: $malachite
  display: flex
  height: 179px
  left: 862px
  min-width: 178px
  padding: 0 13px
  position: absolute
  top: 361px

.image-23
  height: 67px
  object-fit: cover
  width: 151px

.school_4
  align-items: flex-end
  background-color: $malachite
  display: flex
  height: 179px
  left: 1080px
  min-width: 178px
  padding: 63px 21px
  position: absolute
  top: 361px

.image-24
  height: 52px
  object-fit: cover
  width: 136px

.school_6
  align-items: flex-end
  background-color: $malachite
  display: flex
  height: 179px
  justify-content: flex-end
  left: 644px
  min-width: 178px
  padding: 15px
  position: absolute
  top: 580px

.image-25
  height: 120px
  object-fit: cover
  width: 126px

.school_5
  align-items: flex-end
  background-color: $malachite
  display: flex
  height: 179px
  left: 426px
  min-width: 178px
  padding: 34px
  position: absolute
  top: 580px

.image-26
  height: 110px
  object-fit: cover
  width: 110px
</style>
