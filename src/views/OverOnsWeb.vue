<template>
  <div class="container-center-horizontal">
    <div class="overonsweb screen">
      <div class="flex-row-11">
        <div class="flex-col-8">
          <x-nav :className="xNavProps.className" />
          <h1 class="title-2 arimo-bold-black-45px">{{ title }}</h1>
          <div class="overlap-group-container-6">
            <div class="overlap-group3-1">
              <img
                class="vector-15"
                src="../../public/img/vector-12@2x.png"
                alt="Vector"
              />
              <div class="onze-waarden didactgothic-normal-white-25px" v-html="onzeWaarden"></div>
            </div>
            <div class="overlap-group1-1">
              <div class="ons-team didactgothic-normal-white-25px" v-html="onsTeam1"></div>
            </div>
            <div class="overlap-group2-3">
              <div class="galerij-1 didactgothic-normal-white-25px">{{ galerij1 }}</div>
            </div>
          </div>
        </div>
        <div class="overlap-group-7"><img class="mask-group-14" src="../../public/img/mask-group-2.png" alt="Mask group" /></div>
      </div>
      <div class="flex-row-12">
        <div class="flex-col-9">
          <div class="waar-staan-we-voor arimo-bold-black-45px">{{ waarStaanWeVoor }}</div>
          <div class="overlap-group4-2">
            <div class="rectangle-8"></div>
            <div class="rectangle-9-1"></div>
            <p class="wij-streven-naar-een arimo-bold-white-32px">{{ wijStrevenNaarEen }}</p>
          </div>
        </div>
        <div class="overlap-group5-1">
          <div class="rectangle-8-1"></div>
          <div class="rectangle-9-2"></div>
          <p class="wij-geloven-in-de-kr arimo-bold-white-32px">{{ wijGelovenInDeKr }}</p>
        </div>
      </div>
      <div class="flex-col-10">
        <div class="flex-row-13">
          <div class="group-container-2">
            <div class="vector-container">
              <img
                class="vector-16"
                src="../../public/img/vector-1@2x.png"
                alt="Vector"
              />
              <img
                class="vector-17"
                src="../../public/img/vector-2@2x.png"
                alt="Vector try"
              />
            </div>
            <img class="mask-group-15" src="../../public/img/mask-group-1@2x.png" alt="Mask group" />
          </div>
          <div class="flex-col-11">
            <div class="overlap-group18-1">
              <img
                class="vector-18"
                src="../../public/img/vector-9@2x.png"
                alt="Vector"
              />
              <div class="name">{{ name1 }}</div>
              <img
                class="vector-19"
                src="../../public/img/vector-10@2x.png"
                alt="Vector"
              />
              <p class="to-reach-great-heig">{{ toReachGreatHeig }}</p>
            </div>
            <div class="ons-team-1 arimo-bold-black-45px">{{ onsTeam2 }}</div>
          </div>
        </div>
        <div class="flex-row-14">
          <div class="flex-col-12">
            <div class="team_1">
              <div class="overlap-group-5">
                <img
                  class="vector-13"
                  src="../../public/img/vector-15@2x.png"
                  alt="Vector"
                />
                <img class="mask-group-13" src="../../public/img/mask-group-3.png" alt="Mask group" />

              </div>
              <div class="name-1 arimo-bold-black-32px">{{ name2 }}</div>
              <div class="lead-dev didactgothic-normal-black-22px">{{ leadDev }}</div>
            </div>
            <div class="team_4">
              <div class="overlap-group-5">
                <img
                  class="vector-13"
                  src="../../public/img/vector-15@2x.png"
                  alt="Vector"
                />
                <img class="mask-group-13" src="../../public/img/mask-group-5.png" alt="Mask group" />

              </div>
              <div class="overlap-group11-1">
                <div class="developer didactgothic-normal-black-22px">{{ developer1 }}</div>
                <div class="name-2 arimo-bold-black-32px">{{ name3 }}</div>
              </div>
            </div>
            <img class="galerij_1" src="../../public/img/galerij-4.png" alt="Galerij_1" /><img

              class="galerij"
              src="../../public/img/galerij-5.png"
              alt="Galerij_4"
            />
          </div>
          <div class="flex-col-13">
            <div class="team_2">
              <div class="overlap-group-6">
                <img
                  class="vector-14"
                  src="../../public/img/mask-group-6@2x.png"
                  alt="Vector"
                />
                <img class="mask-group-13" src="../../public/img/vector-15@2x.png" alt="Mask group" />
              </div>
              <div class="sigrid-vanderstreaten arimo-bold-black-32px">{{ sigridVanderstreaten }}</div>
              <div class="office-manager didactgothic-normal-black-22px">{{ officeManager }}</div>
            </div>
            <div class="team_5">
              <div class="overlap-group-6">
                <img
                  class="vector-14"
                  src="../../public/img/mask-group@2x.png"
                  alt="Vector"
                />
                <img class="mask-group-13" src="../../public/img/vector-15@2x.png" alt="Mask group" />
              </div>
              <div class="overlap-group9">
                <div class="developer-1 didactgothic-normal-black-22px">{{ developer2 }}</div>
                <div class="name-3 arimo-bold-black-32px">{{ name4 }}</div>
              </div>
            </div>
            <div class="galerij-2 arimo-bold-black-45px">{{ galerij2 }}</div>
            <img class="galerij_2" src="../../public/img/galerij-1.png" alt="Galerij_2" /><img
              class="galerij"
              src="../../public/img/galerij-2.png"
              alt="Galerij_5"
            />
          </div>
          <div class="flex-col-14">
            <div class="team_3">
              <div class="overlap-group-6">
                <img
                  class="vector-14"
                  src="../../public/img/mask-group-4.png"
                  alt="Vector"
                />
                <img class="mask-group-13" src="../../public/img/vector-15@2x.png" alt="Mask group" />
              </div>
              <div class="mirthe-siemens arimo-bold-black-32px">{{ mirtheSiemens }}</div>
              <div class="lead-performance didactgothic-normal-black-22px">{{ leadPerformance }}</div>
            </div>
            <div class="overlap-group21-1">
              <div class="overlap-group17-1">
                <img
                  class="vector-20"
                  src="../../public/img/vector-3@2x.png"
                  alt="Vectorrrr"
                />
                <img
                  class="vector-21"
                  src="../../public/img/vector-8@2x.png"
                  alt="Vector"
                />
                <img class="galerij_3" src="../../public/img/galerij-3.png" alt="Galerij_3" />
              </div>
              <div class="team_6">
                <div class="overlap-group-6">
                  <img
                    class="vector-14"
                    src="../../public/img/mask-group-7.png"
                    alt="Vector"
                  />
                  <img class="mask-group-13" src="../../public/img/vector-15@2x.png" alt="Mask group" />
                </div>
                <div class="overlap-group13">
                  <div class="uiu-xer didactgothic-normal-black-22px">{{ uiUxer }}</div>
                  <div class="leen-bergen arimo-bold-black-32px">{{ leenBergen }}</div>
                </div>
              </div>
            </div>
            <img class="galerij" src="../../public/img/galerij-6@2x.png" alt="Galerij_6" />
          </div>
        </div>
        <div class="overlap-group16-1">
          <img
            class="vector-22"
            src="../../public/img/vector-4@2x.png"
            alt="Vectorr"
          />
          <img
            class="vector-23"
            src="../../public/img/vector-5@2x.png"
            alt="Vector"
          />
          <img
            class="vector-24"
            src="../../public/img/vector-6@2x.png"
            alt="Vector"
          />
          <img
            class="vector-25"
            src="../../public/img/vector-7@2x.png"
            alt="Vector"
          />
          <x-footer
            :imgFooter="xFooterProps.imgFooter"
            :className="xFooterProps.className"
            :xFooter2Props="xFooterProps.xFooter2Props"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xNav from "../components/Nav.vue";
import xFooter from "../components/FooterImg.vue";

export default {
  name: "OverOnsWeb",
  components: {
    xNav,
    xFooter,
  },
  props: [
    "title",
    "onzeWaarden",
    "onsTeam1",
    "galerij1",
    "maskGroup1",
    "waarStaanWeVoor",
    "wijStrevenNaarEen",
    "wijGelovenInDeKr",
    "maskGroup2",
    "name1",
    "toReachGreatHeig",
    "onsTeam2",
    "maskGroup3",
    "name2",
    "leadDev",
    "maskGroup4",
    "developer1",
    "name3",
    "galerij_1",
    "galerij_4",
    "maskGroup5",
    "sigridVanderstreaten",
    "officeManager",
    "maskGroup6",
    "developer2",
    "name4",
    "galerij2",
    "galerij_2",
    "galerij_5",
    "maskGroup7",
    "mirtheSiemens",
    "leadPerformance",
    "galerij_3",
    "maskGroup8",
    "uiUxer",
    "leenBergen",
    "galerij_6",
    "xNavProps",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.overonsweb
  align-items: flex-end
  background-color: $white
  display: flex
  flex-direction: column
  height: 6084px
  overflow: hidden
  width: 1920px

.flex-row-11
  align-items: center
  display: flex
  gap: 260px
  margin-right: -240px
  min-width: 2042px

.flex-col-8
  align-items: flex-end
  display: flex
  flex-direction: column
  margin-bottom: 73.0px
  min-height: 622px
  position: relative
  width: 1182px

.title-2
  letter-spacing: 0
  line-height: 58.5px
  margin-right: 148.53px
  margin-top: 234px
  min-width: 381px
  text-align: center
  white-space: nowrap

.overlap-group-container-6
  align-items: center
  display: flex
  margin-right: 30.53px
  margin-top: 62px
  min-width: 615px

.overlap-group3-1
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-13.svg)
  background-size: 100% 100%
  height: 215px
  position: relative
  width: 215px

.vector-15
  height: 149px
  left: 33px
  position: absolute
  top: 33px
  width: 149px

.onze-waarden
  left: 60px
  letter-spacing: 0
  line-height: 32.5px
  position: absolute
  top: 75px

.overlap-group1-1
  align-items: flex-start
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-11.svg)
  background-size: 100% 100%
  display: flex
  height: 149px
  justify-content: flex-end
  margin-bottom: 0
  margin-left: 40px
  min-width: 150px
  padding: 42.0px 48.0px

.ons-team
  letter-spacing: 0
  line-height: 32.5px
  min-height: 64px

.overlap-group2-3
  align-items: flex-start
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-12.svg)
  background-size: 100% 100%
  display: flex
  height: 149px
  margin-bottom: 0
  margin-left: 59px
  min-width: 149px
  padding: 58.0px 40.0px

.galerij-1
  letter-spacing: 0
  line-height: 32.5px
  white-space: nowrap

.overlap-group-7
  align-items: flex-end
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/laag-1-1.svg)
  background-size: 100% 100%
  display: flex
  height: 851px
  justify-content: flex-end
  min-width: 360px
  padding: 100px 0

.mask-group-14
  height: 520px
  width: 280px

.flex-row-12
  align-items: flex-start
  align-self: center
  display: flex
  gap: 85px
  height: 795px
  margin-left: 3.0px
  margin-top: 148px
  min-width: 966px

.flex-col-9
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  gap: 54px
  min-height: 711px
  width: 450px

.waar-staan-we-voor
  letter-spacing: 0
  line-height: 58.5px
  margin-left: 1.0px
  min-width: 449px
  text-align: center
  white-space: nowrap

.overlap-group4-2
  height: 599px
  position: relative
  width: 419px

.rectangle-8
  background-color: $malachite
  border-radius: 263px
  height: 570px
  left: 0
  position: absolute
  top: 29px
  width: 398px

.rectangle-9-1
  border: 2px solid
  border-color: $malachite
  border-radius: 263px
  height: 570px
  left: 21px
  position: absolute
  top: 0
  width: 398px

.wij-streven-naar-een
  left: 24px
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  text-align: center
  top: 126px
  width: 351px

.overlap-group5-1
  height: 599px
  position: relative
  width: 429px

.rectangle-8-1
  background-color: $malachite
  border-radius: 263px
  height: 570px
  left: 31px
  position: absolute
  top: 0
  width: 398px

.rectangle-9-2
  border: 2px solid
  border-color: $malachite
  border-radius: 263px
  height: 570px
  left: 0
  position: absolute
  top: 29px
  width: 398px

.wij-geloven-in-de-kr
  left: 54px
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  text-align: center
  top: 97px
  width: 352px

.flex-col-10
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-right: -160px
  margin-top: 299px
  min-height: 4162px
  width: 2080px

.flex-row-13
  align-items: flex-start
  display: flex
  gap: 169px
  height: 813px
  min-width: 1384px

.group-container-2
  align-self: flex-end
  height: 696px
  position: relative
  width: 368px

.vector-container
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector.svg)
  background-size: 100% 100%
  height: 376px
  left: 0
  position: absolute
  top: 320px
  width: 368px

.vector-16
  height: 270px
  left: 0
  position: absolute
  top: 0
  width: 263px

.vector-17
  height: 163px
  left: 0
  position: absolute
  top: 0
  width: 154px

.mask-group-15
  height: 320px
  left: 0
  position: absolute
  top: 0
  width: 156px

.flex-col-11
  align-items: center
  display: flex
  flex-direction: column
  gap: 299px
  min-height: 724px
  width: 847px

.overlap-group18-1
  height: 367px
  position: relative
  width: 847px

.vector-18
  height: 30px
  left: 139px
  position: absolute
  top: 137px
  width: 30px

.name
  color: $black
  font-family: $font-family-arimo
  font-size: 38px
  font-weight: 700
  left: 180px
  letter-spacing: 0
  line-height: 49.4px
  position: absolute
  text-align: center
  top: 126px
  white-space: nowrap

.vector-19
  height: 212px
  left: 0
  position: absolute
  top: 0
  width: 212px

.to-reach-great-heig
  color: $black
  font-family: $font-family-didact_gothic
  font-size: 30px
  font-weight: 400
  left: 180px
  letter-spacing: 0
  line-height: 39.0px
  position: absolute
  top: 211px
  width: 667px

.ons-team-1
  letter-spacing: 0
  line-height: 58.5px
  margin-right: 1.0px
  min-width: 206px
  text-align: center
  white-space: nowrap

.flex-row-14
  align-items: flex-start
  align-self: center
  display: flex
  height: 2345px
  margin-left: 149.0px
  margin-top: 31px
  min-width: 1611px

.flex-col-12
  align-items: flex-end
  display: flex
  flex-direction: column
  min-height: 2345px
  width: 403px

.team_1
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-right: 5px
  min-height: 458px
  width: 349px

.overlap-group-5
  height: 355px
  position: relative
  width: 345px

.vector-13
  height: 334px
  left: 10px
  position: absolute
  top: 0
  width: 335px

.mask-group-13
  height: 334px
  left: 0
  position: absolute
  top: 21px
  width: 334px

.name-1,
.sigrid-vanderstreaten,
.mirthe-siemens
  letter-spacing: 0
  line-height: 41.6px
  margin-top: 32px
  min-height: 42px
  white-space: nowrap

.lead-dev,
.office-manager,
.lead-performance
  letter-spacing: 0
  line-height: 28.6px
  min-height: 29px
  white-space: nowrap

.team_4
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 32px
  margin-right: 5px
  margin-top: 73px
  min-height: 457px
  width: 349px

.overlap-group11-1
  height: 70px
  position: relative
  width: 189px

.developer,
.developer-1,
.uiu-xer
  left: 0
  letter-spacing: 0
  line-height: 28.6px
  position: absolute
  top: 41px
  white-space: nowrap

.name-2,
.name-3,
.leen-bergen
  left: 0
  letter-spacing: 0
  line-height: 41.6px
  position: absolute
  top: 0
  white-space: nowrap

.galerij_1
  height: 403px
  margin-top: 516px
  width: 403px

.galerij
  height: 403px
  margin-top: 35px
  width: 403px

.flex-col-13
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 45px
  min-height: 2345px
  width: 403px

.team_2
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 8.0px
  min-height: 458px
  width: 357px

.overlap-group-6
  height: 355px
  position: relative
  width: 353px

.vector-14
  height: 334px
  left: 18px
  position: absolute
  top: 0
  width: 335px

.team_5
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 32px
  margin-left: 8.0px
  margin-top: 73px
  min-height: 457px
  width: 357px

.overlap-group9
  height: 70px
  position: relative
  width: 237px

.galerij-2
  letter-spacing: 0
  line-height: 58.5px
  margin-left: 4.0px
  margin-top: 298px
  min-width: 141px
  text-align: center
  white-space: nowrap

.galerij_2
  height: 403px
  margin-top: 160px
  width: 403px

.flex-col-14
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 49px
  min-height: 2345px
  width: 711px

.team_3
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 1px
  min-height: 458px
  width: 357px

.overlap-group21-1
  height: 1376px
  margin-top: 73px
  position: relative
  width: 711px

.overlap-group17-1
  height: 1105px
  left: 0
  position: absolute
  top: 271px
  width: 711px

.vector-20
  height: 462px
  left: 250px
  position: absolute
  top: 330px
  width: 461px

.vector-21
  height: 331px
  left: 379px
  position: absolute
  top: 0
  width: 332px

.galerij_3
  height: 403px
  left: 0
  position: absolute
  top: 702px
  width: 403px

.team_6
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 32px
  left: 1px
  min-height: 457px
  position: absolute
  top: 0
  width: 357px

.overlap-group13
  height: 70px
  position: relative
  width: 194px

.overlap-group16-1
  height: 940px
  margin-top: 33px
  position: relative
  width: 2080px

.vector-22
  height: 443px
  left: 0
  position: absolute
  top: 191px
  width: 459px

.vector-23
  height: 311px
  left: 0
  position: absolute
  top: 191px
  width: 323px

.vector-24
  height: 182px
  left: 0
  position: absolute
  top: 191px
  width: 189px

.vector-25
  height: 191px
  left: 0
  position: absolute
  top: 0
  width: 189px
</style>
