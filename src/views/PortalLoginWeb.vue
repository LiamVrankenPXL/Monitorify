<template>
  <div class="container-center-horizontal">
    <div class="portalloginweb screen">
      <div class="overlap-group">
        <div class="group-327">
          <div class="rectangle-32"></div>
        </div>
        <div class="rectangle-27"></div>
        <div class="rectangle-31"></div>
        <img class="image-18" src="../../public/img/image-18.png" alt="image 18" />
        <div class="aanmelden">{{ aanmelden }}</div>
        <div class="login-nummer-studentpxlbe">{{ loginNummerStudentPxlBe }}</div>
        <img class="vector-9" src="../../public/img/vector-9-2@2x.png" alt="Vector 9" />
        <p class="hebt-u-geen-toegang-tot-het-account">{{ hebtUGeenToegangTotHetAccount }}</p>
        <div class="rectangle-28"></div>
        <div class="rectangle-29"></div>
        <div class="volgende">{{ volgende }}</div>
        <div class="vorige arial-regular-normal-black-14px">{{ vorige }}</div>
        <div class="rectangle-30"></div>
        <p class="login-studenten-lo arial-regular-normal-black-14px" v-html="loginStudentenLo"></p>
        <img
          class="signin-options_3e3f6"
          src="../../public/img/signin-options-3e3f6b73c3f310c31d2c4d131a8ab8c6-1@2x.png"
          alt="signin-options_3e3f6b73c3f310c31d2c4d131a8ab8c6 1"
        />
        <div class="aanmeldingsopties arial-regular-normal-black-14px">{{ aanmeldingsopties }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortalLoginWeb",
  props: [
    "group327",
    "image18",
    "aanmelden",
    "loginNummerStudentPxlBe",
    "vector9",
    "hebtUGeenToegangTotHetAccount",
    "volgende",
    "vorige",
    "loginStudentenLo",
    "signinOptions_3E3F6B73C3F310C31D2C4",
    "aanmeldingsopties",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.group-327
  background-image: url("../../public/img/image-15-1.png")


.portalloginweb
  align-items: flex-start
  background-color: $white
  display: flex
  height: 1080px
  overflow: hidden
  width: 1920px

.overlap-group
  height: 1347px
  margin-left: -17px
  margin-top: -134px
  position: relative
  width: 1955px

.group-327
  align-items: flex-end
  background-position: 50% 50%
  background-size: cover
  display: flex
  height: 1347px
  left: 0
  min-width: 1955px
  padding: 133px 17px
  position: absolute
  top: 0

.rectangle-32
  background-color: #0000008c
  height: 1080px
  width: 1920px

.rectangle-27
  background-color: $white
  height: 378px
  left: 770px
  position: absolute
  top: 453px
  width: 416px

.rectangle-31
  background-color: $white
  height: 44px
  left: 768px
  position: absolute
  top: 850px
  width: 418px

.image-18
  height: 34px
  left: 811px
  object-fit: cover
  position: absolute
  top: 494px
  width: 153px

.aanmelden
  color: $black
  font-family: $font-family-didact_gothic
  font-size: $font-size-m
  font-weight: 700
  left: 803px
  letter-spacing: 0
  line-height: 28.6px
  position: absolute
  text-align: center
  top: 543px
  white-space: nowrap
  width: 134px

.login-nummer-studentpxlbe
  color: #8f8f8f
  font-family: $font-family-didact_gothic
  font-size: 14px
  font-weight: 400
  left: 810px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  text-align: center
  top: 587px
  white-space: nowrap

.vector-9
  height: 1px
  left: 810px
  object-fit: cover
  position: absolute
  top: 614px
  width: 332px

.hebt-u-geen-toegang-tot-het-account
  color: #428ec9
  font-family: $font-family-didact_gothic
  font-size: 13px
  font-weight: 400
  left: 810px
  letter-spacing: 0
  line-height: 16.9px
  position: absolute
  top: 632px
  white-space: nowrap

.rectangle-28
  background-color: #d9d9d9
  height: 30px
  left: 934px
  position: absolute
  top: 664px
  width: 103px

.rectangle-29
  background-color: #0067b8
  height: 30px
  left: 1040px
  position: absolute
  top: 664px
  width: 103px

.volgende
  color: $white
  font-family: $font-family-didact_gothic
  font-size: 14px
  font-weight: 400
  left: 1062px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 669px
  white-space: nowrap

.vorige
  left: 965px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  text-align: center
  top: 669px
  white-space: nowrap

.rectangle-30
  background-color: #f2f2f2
  height: 95px
  left: 770px
  position: absolute
  top: 736px
  width: 416px

.login-studenten-lo
  left: 810px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 759px

.signin-options_3e3f6
  height: 31px
  left: 809px
  position: absolute
  top: 857px
  width: 31px

.aanmeldingsopties
  left: 851px
  letter-spacing: 0
  line-height: 18.2px
  position: absolute
  top: 863px
  white-space: nowrap
</style>
