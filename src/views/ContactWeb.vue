<template>
  <div class="container-center-horizontal">
    <div class="contactweb screen">
      <div class="overlap-group6-1">
        <div class="openings-uren arimo-semi-bold-gray-16px">{{ openingsUren }}</div>
        <div class="maandag-vrijdag arimo-semi-bold-black-16px">{{ maandagVrijdag }}</div>
        <div class="x900 arimo-semi-bold-black-16px">{{ x900 }}</div>
        <div class="weekend arimo-semi-bold-black-16px">{{ weekend }}</div>
        <div class="closed arimo-semi-bold-black-16px">{{ closed }}</div>
        <div class="unknown arimo-semi-bold-black-16px">{{ unknown }}</div>
        <div class="overlap-group4-3 arimo-semi-bold-black-16px">
          <div class="unknowngmailcom">{{ unknownGmailCom }}</div>
          <div class="phone">{{ phone }}</div>
        </div>
        <div class="adress arimo-semi-bold-gray-16px">{{ adress }}</div>
        <div class="support arimo-semi-bold-gray-16px">{{ support }}</div>
        <h1 class="hoe-kunnen-we-je-helpen arimo-semi-bold-black-38px" v-html="hoeKunnenWeJeHelpen"></h1>
        <p class="zeg-hallo-tegen-het-team arimo-semi-bold-black-16px">{{ zegHalloTegenHetTeam }}</p>
        <div class="overlap-group3-2">
          <p class="voel-je-vrij-om-cont arimo-normal-black-18px">{{ voelJeVrijOmCont }}</p>
          <div class="naam arimo-normal-gray-18px">{{ naam }}</div>
          <div class="voornaam arimo-normal-gray-18px">{{ voornaam }}</div>
          <img
            class="vector-6-1"
            src="../../public/img/vector-6-1@2x.png"
            alt="Vector 6"
          />
          <img
            class="vector-9-1"
            src="../../public/img/vector-6-1@2x.png"
            alt="Vector 9"
          />
        </div>
        <div class="email-adress arimo-normal-gray-18px">{{ emailAdress }}</div>
        <p class="vertel-ons-van-welke-school-je-bent arimo-normal-gray-18px">{{ vertelOnsVanWelkeSchoolJeBent }}</p>
        <div class="wie-bent-je arimo-normal-gray-18px">{{ wieBentJe }}</div>
        <p class="vertel-ons-over-het-probleem arimo-normal-gray-18px">{{ vertelOnsOverHetProbleem }}</p>
        <img
          class="vector-7-1"
          src="../../public/img/vector-6-1@2x.png"
          alt="Vector 7"
        />
        <img
          class="vector-11-1"
          src="../../public/img/vector-6-1@2x.png"
          alt="Vector 11"
        />
        <img
          class="vector-10-1"
          src="../../public/img/vector-6-1@2x.png"
          alt="Vector 10"
        />
        <img
          class="vector-8-1"
          src="../../public/img/vector-6-1@2x.png"
          alt="Vector 8"
        />
        <div class="frame-container-5">
          <div class="frame-8-4">
            <div class="verstuur arimo-normal-white-20px">{{ verstuur }}</div>
          </div>
          <div class="frame-9"></div>
        </div>
        <img
          class="vector-26"
          src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-21.svg"
          alt="Vector"
        />
        <div class="overlap-group5-2">
          <div class="group-container-3">
            <img class="group-169" src="../../public/img/group-169.png" alt="Group 169" /><img
              class="mask-group-16"
              src=""
              alt="Mask group"
            />
          </div>
          <x-nav :className="xNavProps.className" />
        </div>
      </div>
      <x-footer
        :imgFooter="xFooterProps.imgFooter"
        :className="xFooterProps.className"
        :xFooter2Props="xFooterProps.xFooter2Props"
      />
    </div>
  </div>
</template>

<script>
import xNav from "../components/Nav.vue";
import xFooter from "../components/FooterImg.vue";
export default {
  name: "ContactWeb",
  components: {
    xNav,
    xFooter,
  },
  props: [
    "openingsUren",
    "maandagVrijdag",
    "x900",
    "weekend",
    "closed",
    "unknown",
    "unknownGmailCom",
    "phone",
    "adress",
    "support",
    "hoeKunnenWeJeHelpen",
    "zegHalloTegenHetTeam",
    "voelJeVrijOmCont",
    "naam",
    "voornaam",
    "emailAdress",
    "vertelOnsVanWelkeSchoolJeBent",
    "wieBentJe",
    "vertelOnsOverHetProbleem",
    "verstuur",
    "group169",
    "maskGroup",
    "xNavProps",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.contactweb
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  gap: 19px
  height: 1528px
  overflow: hidden
  position: relative
  width: 1920px

.overlap-group6-1
  height: 991px
  margin-right: -410px
  position: relative
  width: 2253px

.openings-uren
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 258px
  white-space: nowrap

.maandag-vrijdag
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 283px
  white-space: nowrap

.x900
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 304px
  white-space: nowrap

.weekend
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 339px
  white-space: nowrap

.closed
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 360px
  white-space: nowrap

.unknown
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 433px
  white-space: nowrap

.overlap-group4-3
  height: 41px
  left: 790px
  position: absolute
  top: 531px
  width: 162px

.unknowngmailcom
  left: 0
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 0
  white-space: nowrap

.phone
  left: 0
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 20px
  white-space: nowrap

.adress
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 412px
  white-space: nowrap

.support
  left: 790px
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 506px
  white-space: nowrap

.hoe-kunnen-we-je-helpen
  left: 0
  letter-spacing: 0
  line-height: 49.4px
  position: absolute
  top: 279px

.zeg-hallo-tegen-het-team
  left: 0
  letter-spacing: 0
  line-height: 20.8px
  position: absolute
  top: 258px
  white-space: nowrap

.overlap-group3-2
  height: 132px
  left: 96px
  position: absolute
  top: 415px
  width: 374px

.voel-je-vrij-om-cont
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 0
  width: 374px

.naam
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 96px
  white-space: nowrap

.voornaam
  left: 187px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 96px
  white-space: nowrap

.vector-6-1
  height: 1px
  left: 0
  object-fit: cover
  position: absolute
  top: 128px
  width: 158px

.vector-9-1
  height: 1px
  left: 187px
  object-fit: cover
  position: absolute
  top: 128px
  width: 187px

.email-adress
  left: 96px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 597px
  white-space: nowrap

.vertel-ons-van-welke-school-je-bent
  left: 96px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 678px
  white-space: nowrap

.wie-bent-je
  left: 283px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 597px
  white-space: nowrap

.vertel-ons-over-het-probleem
  left: 96px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 759px
  white-space: nowrap

.vector-7-1
  height: 1px
  left: 96px
  object-fit: cover
  position: absolute
  top: 628px
  width: 158px

.vector-11-1
  height: 1px
  left: 96px
  object-fit: cover
  position: absolute
  top: 709px
  width: 372px

.vector-10-1
  height: 1px
  left: 283px
  object-fit: cover
  position: absolute
  top: 628px
  width: 187px

.vector-8-1
  height: 1px
  left: 96px
  object-fit: cover
  position: absolute
  top: 790px
  width: 374px

.frame-container-5
  height: 75px
  left: 96px
  position: absolute
  top: 856px
  width: 388px

.frame-8-4
  align-items: center
  background-color: $malachite
  border-radius: 11px
  display: flex
  gap: 10px
  height: 66px
  justify-content: center
  left: 0
  overflow: hidden
  padding: 12px 41px
  position: absolute
  top: 9px
  width: 374px

.verstuur
  letter-spacing: 0
  line-height: normal
  position: relative
  text-align: right
  white-space: nowrap
  width: fit-content

.frame-9
  border: 1px solid
  border-color: $malachite
  border-radius: 11px
  height: 66px
  left: 14px
  position: absolute
  top: 0
  width: 374px

.vector-26
  height: 14px
  left: 448px
  position: absolute
  top: 602px
  width: 20px

.overlap-group5-2
  height: 991px
  left: 41px
  position: absolute
  top: 0
  width: 2212px

.group-container-3
  height: 991px
  left: 1018px
  position: absolute
  top: 0
  width: 784px

.group-169
  height: 991px
  left: 266px
  position: absolute
  top: 0
  width: 518px

.mask-group-16
  height: 518px
  left: 0
  position: absolute
  top: 248px
  width: 328px
</style>
