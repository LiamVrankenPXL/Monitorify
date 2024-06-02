<template>
  <div class="container-center-horizontal">
    <div class="overviewweb screen">
      <div class="flex-col">
        <div class="flex-col-1">
          <div class="overlap-group-container-1">
            <div class="overlap-group20">
              <img
                class="vector-3"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-22.svg"
                alt="Vector"
              />
              <p class="innovatief-platform">{{ innovatiefPlatform }}</p>
            </div>
            <div class="overlap-group17"><img class="headphoto" :src="headphoto" alt="Headphoto" /><x-nav /></div>
          </div>
          <div class="flex-row">
            <div class="flex-col-2">
              <div class="group-container">
                <img class="mask-group-5" :src="maskGroup1" alt="Mask group" /><img
                  class="group-193"
                  :src="group193"
                  alt="Group 193"
                />
              </div>
              <img
                class="laag_1"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/laag-1-4.svg"
                alt="Laag_1"
              />
            </div>
            <div class="mask-group-container">
              <img class="mask-group" :src="maskGroup2" alt="Mask group" /><img
                class="mask-group"
                :src="maskGroup3"
                alt="Mask group"
              />
            </div>
            <div class="flex-col-3">
              <p class="geef-uw-school-een-o arimo-bold-black-42px">{{ geefUwSchoolEenO }}</p>
              <div class="overlap-group14">
                <div class="frame-container">
                  <div class="frame">
                    <div class="boek-een-demo arimo-normal-white-22px">{{ boekEenDemo }}</div>
                  </div>
                  <div class="frame-1"></div>
                </div>
                <p class="zoekt-u-een-platform">{{ zoektUEenPlatform }}</p>
              </div>
              <p class="waar-stuiten-scholen-nu-tegenaan arimo-bold-black-42px">{{ waarStuitenScholenNuTegenaan }}</p>
              <p class="studenten-en-coaches didactgothic-normal-black-24px">{{ studentenEnCoaches }}</p>
              <p class="mijn-studenten-hebbe didactgothic-normal-black-24px">{{ mijnStudentenHebbe }}</p>
              <div class="flex-row-1">
                <p class="oh-geen-probleem-wi didactgothic-normal-black-24px">{{ ohGeenProbleemWi }}</p>
                <img class="mask-group-6" :src="maskGroup4" alt="Mask group" />
              </div>
              <div class="frame-container-1">
                <div class="frame-5"></div>
                <frame3 />
              </div>
              <div class="overlap-group-container-2">
                <div class="overlap-group21">
                  <div class="overlap-group16">
                    <div class="rectangle-20"></div>
                    <img class="mask-group-7" :src="maskGroup5" alt="Mask group" />
                    <div class="overlap-group4">
                      <div class="rectangle-5"></div>
                      <div class="rectangle-2-2"></div>
                      <div class="group-3">
                        <h1 class="title arimo-semi-bold-white-50px">{{ title }}</h1>
                        <div class="blije-coaches arimo-normal-white-25px" v-html="blijeCoaches"></div>
                      </div>
                    </div>
                  </div>
                  <p class="een-nieuwe-manier-vo arimo-bold-black-45px">{{ eenNieuweManierVo }}</p>
                  <div class="overlap-group2">
                    <div class="rectangle-6"></div>
                    <div class="rectangle-3"></div>
                    <div class="group-110">
                      <img
                        class="vector-4"
                        src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-28.svg"
                        alt="Vector"
                      />
                      <div class="resources arimo-normal-white-25px">{{ resources }}</div>
                    </div>
                  </div>
                </div>
                <div class="overlap-group3">
                  <div class="rectangle-7"></div>
                  <div class="rectangle-4"></div>
                  <div class="group-4">
                    <div class="x56k arimo-semi-bold-white-50px">{{ x56K }}</div>
                    <div class="gelukkige-studenten arimo-normal-white-25px">{{ gelukkigeStudenten }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row-2">
          <div class="overlap-group5">
            <div class="rectangle-9"></div>
            <img class="mask-group-8" :src="maskGroup6" alt="Mask group" />
          </div>
          <img
            class="vector-5"
            src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-23.svg"
            alt="Vector"
          />
          <div class="flex-col-4">
            <div class="onze-unieke-elementen arimo-bold-black-45px">{{ onzeUniekeElementen }}</div>
            <p class="het-is-bedoelt-voor didactgothic-normal-black-22px">{{ hetIsBedoeltVoor }}</p>
            <div class="uniek_element_1">
              <img
                class="icround-dashboard-customize"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/ic-round-dashboard-customize.svg"
                alt="ic:round-dashboard-customize"
              />
              <div class="complete-custom-styling didactgothic-normal-black-20px">{{ completeCustomStyling }}</div>
            </div>
            <div class="uniek_element_2">
              <img
                class="uiwstar-on"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/uiw-star-on.svg"
                alt="uiw:star-on"
              />
              <p class="gevorderde-gebruiker didactgothic-normal-black-20px">{{ gevorderdeGebruiker }}</p>
            </div>
            <div class="uniek_element_3">
              <img class="group-8" :src="group8" alt="Group 8" />
              <p class="duidelijk-overzicht didactgothic-normal-black-20px" v-html="duidelijkOverzicht"></p>
            </div>
            <div class="uniek_element_4">
              <img class="group-7" :src="group7" alt="Group 7" />
              <div class="makkelijk-en-snel-gebruiken didactgothic-normal-black-20px">
                {{ makkelijkEnSnelGebruiken }}
              </div>
            </div>
            <div class="uniek_element_5">
              <img
                class="academiconsopen-access"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/academicons-open-access.svg"
                alt="academicons:open-access"
              />
              <div class="altijd-toegankelijk didactgothic-normal-black-20px">{{ altijdToegankelijk }}</div>
            </div>
          </div>
        </div>
        <div class="flex-col-5">
          <div class="flex-row-3">
            <div class="group-container-1">
              <img class="mask-group-9" :src="maskGroup7" alt="Mask group" />
              <div class="overlap-group19">
                <img
                  class="vector-6"
                  src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-24.svg"
                  alt="Vector"
                />
                <img
                  class="vector-7"
                  src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-25.svg"
                  alt="Vector"
                />
                <p
                  class="neem-een-kijkje-achter-de-schermen arimo-bold-black-45px"
                  v-html="neemEenKijkjeAchterDeSchermen"
                ></p>
              </div>
            </div>
            <div class="flex-col-6">
              <div class="neem-contact-op arimo-bold-black-45px">{{ neemContactOp }}</div>
              <div class="frame-container-2">
                <div class="frame-2"></div>
                <div class="frame-3">
                  <div class="place arimo-normal-white-32px">{{ place1 }}</div>
                </div>
              </div>
            </div>
            <img
              class="laag_1-1"
              src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/laag-1-5.svg"
              alt="Laag_1"
            />
          </div>
          <p class="bekijk-hieronder-een didactgothic-normal-black-22px">{{ bekijkHieronderEen }}</p>
          <div class="achterschermen-container">
            <div class="achter-schermen-student">
              <div class="overlap-group8">
                <img class="mask-group-10" :src="maskGroup8" alt="Mask group" />
                <div class="rectangle-17"></div>
              </div>
              <div class="dashboard-student arimo-semi-bold-black-28px">{{ dashboardStudent }}</div>
              <p class="studenten-hebben-wei didactgothic-normal-black-22px">{{ studentenHebbenWei }}</p>
            </div>
            <div class="achter-schermen-coach">
              <div class="overlap-group7">
                <img class="mask-group-11" :src="maskGroup9" alt="Mask group" />
                <div class="rectangle-18"></div>
              </div>
              <div class="dashboard-coach arimo-semi-bold-black-28px">{{ dashboardCoach }}</div>
              <p class="coaches-moeten-alles didactgothic-normal-black-22px">{{ coachesMoetenAlles }}</p>
            </div>
          </div>
          <p class="wat-vinden-onze-gebruikers-zelf arimo-bold-black-45px" v-html="watVindenOnzeGebruikersZelf"></p>
          <div class="overlap-group-container-3">
            <div class="overlap-group-1">
              <div class="rectangle-2"></div>
              <div class="rectangle-2-1"></div>
              <img class="mask-group-1" :src="maskGroup10" alt="Mask group" />
              <p class="zowel-studenten-als didactgothic-normal-white-22px">{{ zowelStudentenAls }}</p>
            </div>
            <div class="overlap-group-1">
              <div class="rectangle-2"></div>
              <div class="rectangle-2-1"></div>
              <img class="mask-group-1" :src="maskGroup11" alt="Mask group" />
              <p class="monitorify-biedt-all didactgothic-normal-white-22px">{{ monitorifyBiedtAll }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row-4">
        <img class="group-170" :src="group170" alt="Group 170" />
        <div class="overlap-group18">
          <img
            class="vector-8"
            src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-27.svg"
            alt="Vector"
          />
        </div>
        <div class="flex-col-7">
          <p class="zou-je-graag-een-demo-willen-aanvragen arimo-bold-black-45px">
            {{ zouJeGraagEenDemoWillenAanvragen }}
          </p>
          <p class="vanaf-18062024-kan didactgothic-normal-black-22px">{{ vanaf18062024Kan }}</p>
          <group217 :verschillendeRollen="group2171Props.verschillendeRollen" />
          <group217 :verschillendeRollen="group2172Props.verschillendeRollen" :className="group2172Props.className" />
          <group217 :verschillendeRollen="group2173Props.verschillendeRollen" :className="group2173Props.className" />
          <div class="frame-container-3">
            <div class="frame-2"></div>
            <div class="frame-3">
              <div class="place-1 arimo-normal-white-32px">{{ place2 }}</div>
            </div>
          </div>
          <p class="ervaringen-van-studenten-coaches arimo-bold-black-45px" v-html="ervaringenVanStudentenCoaches"></p>
          <p class="je-bent-niet-de-enig didactgothic-normal-black-22px">{{ jeBentNietDeEnig }}</p>
        </div>
      </div>
      <div class="ervaringen-studenten">
        <div class="overlap-group-container">
          <div class="overlap-group2-1">
            <img class="mask-group-2" :src="maskGroup12" alt="Mask group" /><img
              class="vector-10"
              src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
              alt="Vector"
            />
          </div>
          <div class="overlap-group11">
            <img class="mask-group-12" :src="maskGroup13" alt="Mask group" /><img
              class="vector"
              src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
              alt="Vector"
            />
          </div>
          <div class="overlap-group4-1">
            <img class="mask-group-3" :src="maskGroup14" alt="Mask group" /><img
              class="vector-11"
              src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
              alt="Vector"
            />
          </div>
        </div>
        <div class="flex-row-5">
          <div class="overlap-group-container">
            <div class="overlap-group-2">
              <img class="mask-group-2" :src="maskGroup15" alt="Mask group" /><img
                class="vector-1"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
            </div>
            <div class="overlap-group-3">
              <img class="mask-group-4" :src="maskGroup16" alt="Mask group" /><img
                class="vector"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
            </div>
            <div class="overlap-group-4">
              <img
                class="vector-2"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
              <img class="mask-group-3" :src="maskGroup17" alt="Mask group" />
            </div>
          </div>
          <div class="overlap-group-container-4">
            <div class="overlap-group-2">
              <img
                class="vector-1"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
              <img class="mask-group-2" :src="maskGroup18" alt="Mask group" />
            </div>
            <div class="overlap-group-3">
              <img
                class="vector"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
              <img class="mask-group-4" :src="maskGroup19" alt="Mask group" />
            </div>
            <div class="overlap-group-4">
              <img
                class="vector-2"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
              <img class="mask-group-3" :src="maskGroup20" alt="Mask group" />
            </div>
          </div>
          <div class="overlap-group-container-5">
            <div class="overlap-group-2">
              <img class="mask-group-2" :src="maskGroup21" alt="Mask group" /><img
                class="vector-1"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
            </div>
            <div class="overlap-group-3">
              <img class="mask-group-4" :src="maskGroup22" alt="Mask group" /><img
                class="vector"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-38.svg"
                alt="Vector"
              />
            </div>
            <div class="overlap-group6">
              <img
                class="vector-2"
                src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-29.svg"
                alt="Vector"
              />
              <img class="mask-group-3" :src="maskGroup23" alt="Mask group" />
            </div>
          </div>
        </div>
      </div>
      <p class="schrijf-je-in-voor-onze-nieuwsbrief arimo-bold-black-42px">{{ schrijfJeInVoorOnzeNieuwsbrief }}</p>
      <p class="je-kan-je-inschrijve arimo-normal-black-18px">{{ jeKanJeInschrijve }}</p>
      <div class="schrijf-je-in-button">
        <div class="frame-container-4">
          <div class="frame-1"></div>
          <div class="frame">
            <div class="schrijf-je-in arimo-normal-white-22px">{{ schrijfJeIn }}</div>
          </div>
        </div>
      </div>
      <x-footer :imgFooter="xFooterProps.imgFooter" :xFooter2Props="xFooterProps.xFooter2Props" />
    </div>
  </div>
</template>

<script>
import xNav from "../components/Nav.vue";
import Frame3 from "../components/PortalButton.vue";
import Group217 from "../components/Rollen.vue";
import xFooter from "../components/FooterImg.vue";
export default {
  name: "OverviewWeb",
  components: {
    xNav,
    Frame3,
    Group217,
    xFooter,
  },
  props: [
    "innovatiefPlatform",
    "headphoto",
    "maskGroup1",
    "group193",
    "maskGroup2",
    "maskGroup3",
    "geefUwSchoolEenO",
    "boekEenDemo",
    "zoektUEenPlatform",
    "waarStuitenScholenNuTegenaan",
    "studentenEnCoaches",
    "mijnStudentenHebbe",
    "ohGeenProbleemWi",
    "maskGroup4",
    "maskGroup5",
    "title",
    "blijeCoaches",
    "eenNieuweManierVo",
    "resources",
    "x56K",
    "gelukkigeStudenten",
    "maskGroup6",
    "onzeUniekeElementen",
    "hetIsBedoeltVoor",
    "completeCustomStyling",
    "gevorderdeGebruiker",
    "group8",
    "duidelijkOverzicht",
    "group7",
    "makkelijkEnSnelGebruiken",
    "altijdToegankelijk",
    "maskGroup7",
    "neemEenKijkjeAchterDeSchermen",
    "neemContactOp",
    "place1",
    "bekijkHieronderEen",
    "maskGroup8",
    "dashboardStudent",
    "studentenHebbenWei",
    "maskGroup9",
    "dashboardCoach",
    "coachesMoetenAlles",
    "watVindenOnzeGebruikersZelf",
    "maskGroup10",
    "zowelStudentenAls",
    "maskGroup11",
    "monitorifyBiedtAll",
    "group170",
    "zouJeGraagEenDemoWillenAanvragen",
    "vanaf18062024Kan",
    "place2",
    "ervaringenVanStudentenCoaches",
    "jeBentNietDeEnig",
    "maskGroup12",
    "maskGroup13",
    "maskGroup14",
    "maskGroup15",
    "maskGroup16",
    "maskGroup17",
    "maskGroup18",
    "maskGroup19",
    "maskGroup20",
    "maskGroup21",
    "maskGroup22",
    "maskGroup23",
    "schrijfJeInVoorOnzeNieuwsbrief",
    "jeKanJeInschrijve",
    "schrijfJeIn",
    "group2171Props",
    "group2172Props",
    "group2173Props",
    "xFooterProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.overviewweb
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 12272px
  overflow: hidden
  position: relative
  width: 1920px

.flex-col
  align-items: flex-start
  align-self: flex-start
  display: flex
  flex-direction: column
  min-height: 7980px
  width: 2126px

.flex-col-1
  align-items: center
  display: flex
  flex-direction: column
  gap: 340px
  min-height: 4221px
  width: 2126px

.overlap-group-container-1
  height: 990px
  margin-right: 88.0px
  position: relative
  width: 1802px

.overlap-group20
  height: 202px
  left: 0
  position: absolute
  top: 588px
  width: 668px

.vector-3
  height: 94px
  left: 0
  position: absolute
  top: 0
  width: 84px

.innovatief-platform
  color: $black
  font-family: $font-family-arimo
  font-size: 38px
  font-weight: 400
  left: 77px
  letter-spacing: 0
  line-height: 49.4px
  position: absolute
  top: 55px
  width: 591px

.overlap-group17
  height: 990px
  left: 0
  position: absolute
  top: 0
  width: 1802px

.headphoto
  height: 990px
  left: 726px
  position: absolute
  top: 0
  width: 1076px

.flex-row
  align-items: flex-start
  display: flex
  height: 2891px
  min-width: 2126px

.flex-col-2
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 742px
  min-height: 2412px
  width: 413px

.group-container
  height: 726px
  position: relative
  width: 413px

.mask-group-5
  height: 354px
  left: 0
  position: absolute
  top: 0
  width: 353px

.group-193
  height: 375px
  left: 0
  position: absolute
  top: 351px
  width: 413px

.laag_1
  height: 944px
  width: 399px

.mask-group-container
  align-items: flex-start
  align-self: center
  display: flex
  flex-direction: column
  gap: 62px
  margin-bottom: 811.09px
  margin-left: 1px
  min-height: 252px
  width: 77px

.mask-group
  height: 95px
  width: 77px

.flex-col-3
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 32px
  min-height: 2857px
  width: 1604px

.geef-uw-school-een-o
  letter-spacing: 0
  line-height: normal
  margin-left: 113.5px
  min-height: 96px
  text-align: center
  width: 648px

.overlap-group14
  height: 190px
  margin-left: 85.5px
  margin-top: 20px
  position: relative
  width: 704px

.frame-container
  height: 65px
  left: 254px
  position: absolute
  top: 125px
  width: 205px

.frame
  align-items: center
  background-color: $malachite
  border-radius: 11px
  display: flex
  gap: 10px
  height: 57px
  justify-content: center
  left: 0
  overflow: hidden
  padding: 12px 41px
  position: absolute
  top: 8px
  width: 195px

.boek-een-demo
  letter-spacing: 0
  line-height: normal
  margin-left: -21.00px
  margin-right: -21.00px
  position: relative
  text-align: right
  white-space: nowrap
  width: fit-content

.frame-1
  border: 1px solid
  border-color: $malachite
  border-radius: 11px
  height: 57px
  left: 10px
  position: absolute
  top: 0
  width: 195px

.zoekt-u-een-platform
  color: $black
  font-family: $font-family-didact_gothic
  font-size: $font-size-xs
  font-weight: 400
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 0
  width: 704px

.waar-stuiten-scholen-nu-tegenaan
  letter-spacing: 0
  line-height: normal
  margin-left: 113.5px
  margin-top: 423px
  min-height: 96px
  text-align: center
  width: 648px

.studenten-en-coaches
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 6.5px
  margin-top: 54px
  min-height: 103px
  transition: all 1s ease
  width: 490px

.studenten-en-coaches:hover,
.mijn-studenten-hebbe:hover,
.mask-group-9:hover
  opacity: 1

.mijn-studenten-hebbe
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 6.5px
  margin-top: 54px
  min-height: 124px
  transition: all 1s ease
  width: 490px

.flex-row-1
  align-items: flex-start
  align-self: center
  display: flex
  gap: 56px
  height: 122px
  margin-right: 300.5px
  margin-top: 54px
  min-width: 632px

.oh-geen-probleem-wi
  letter-spacing: 0
  line-height: normal
  min-height: 122px
  text-align: right
  width: 499px

.mask-group-6
  height: 95px
  margin-top: 1px
  width: 77px

.frame-container-1
  align-self: center
  height: 52px
  margin-right: 74.5px
  margin-top: 25px
  position: relative
  width: 140px

.frame-5
  border: 2px solid
  border-color: $malachite
  border-radius: 11px
  height: 47px
  left: 5px
  position: absolute
  top: 0
  width: 135px

.overlap-group-container-2
  height: 1150px
  margin-top: 294px
  position: relative
  width: 1604px

.overlap-group21
  height: 1150px
  left: 0
  position: absolute
  top: 0
  width: 1604px

.overlap-group16
  height: 1150px
  left: 409px
  position: absolute
  top: 0
  width: 1194px

.rectangle-20
  border: 2px solid
  border-color: $malachite
  border-radius: 263px
  height: 1104px
  left: 380px
  position: absolute
  top: 0
  width: 815px

.mask-group-7
  height: 1104px
  left: 468px
  position: absolute
  top: 46px
  width: 520px

.overlap-group4
  height: 255px
  left: 0
  position: absolute
  top: 268px
  width: 466px

.rectangle-5
  border: 2px solid
  border-color: $keppel
  border-radius: 126.5px
  height: 456px
  left: 106px
  position: absolute
  top: -105px
  transform: rotate(-90.00deg)
  width: 245px

.rectangle-2-2
  background-color: $keppel
  border-radius: 126.5px
  height: 456px
  left: 116px
  position: absolute
  top: -95px
  transform: rotate(-90.00deg)
  width: 245px

.group-3
  align-items: center
  display: flex
  flex-direction: column
  left: 164px
  min-height: 96px
  position: absolute
  top: 84px
  width: 152px

.title
  letter-spacing: 0
  line-height: normal
  margin-right: 2.0px
  min-height: 67px
  text-align: center
  width: 114px

.blije-coaches
  letter-spacing: 0
  line-height: normal
  margin-right: 4.0px
  min-height: 29px
  min-width: 148px
  text-align: center
  white-space: nowrap

.een-nieuwe-manier-vo
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 129px
  width: 647px

.overlap-group2
  height: 256px
  left: 0
  position: absolute
  top: 566px
  width: 602px

.rectangle-6
  border: 2px solid
  border-color: $malachite
  border-radius: 126.5px
  height: 592px
  left: 173px
  position: absolute
  top: -173px
  transform: rotate(-90.00deg)
  width: 246px

.rectangle-3
  background-color: $malachite
  border-radius: 126.5px
  height: 592px
  left: 183px
  position: absolute
  top: -163px
  transform: rotate(-90.00deg)
  width: 246px

.group-110
  align-items: center
  display: flex
  flex-direction: column
  gap: 16px
  left: 236px
  min-height: 87px
  position: absolute
  top: 89px
  width: 120px

.vector-4
  height: 42px
  width: 76px

.resources
  letter-spacing: 0
  line-height: normal
  min-height: 29px
  min-width: 120px
  text-align: center
  white-space: nowrap

.overlap-group3
  height: 255px
  left: 0
  position: absolute
  top: 271px
  width: 393px

.rectangle-7
  border: 2px solid
  border-color: $boston-blue
  border-radius: 126.5px
  height: 383px
  left: 69px
  position: absolute
  top: -69px
  transform: rotate(-90.00deg)
  width: 245px

.rectangle-4
  background-color: $boston-blue
  border-radius: 126.5px
  height: 383px
  left: 79px
  position: absolute
  top: -59px
  transform: rotate(-90.00deg)
  width: 245px

.group-4
  align-items: flex-start
  display: flex
  flex-direction: column
  left: 131px
  min-height: 125px
  position: absolute
  top: 69px
  width: 123px

.x56k
  letter-spacing: 0
  line-height: normal
  margin-left: 2px
  min-height: 67px
  text-align: center
  width: 114px

.gelukkige-studenten
  letter-spacing: 0
  line-height: normal
  min-height: 58px
  min-width: 119px
  text-align: center

.flex-row-2
  align-items: flex-start
  align-self: center
  display: flex
  height: 614px
  margin-right: 206.0px
  margin-top: 100px
  min-width: 1255px

.overlap-group5
  align-self: center
  height: 570px
  margin-top: 15.58px
  position: relative
  width: 506px

.rectangle-9
  border: 2px solid
  border-color: $malachite
  border-radius: 263px
  height: 570px
  left: 0
  position: absolute
  top: 0
  width: 398px

.mask-group-8
  height: 570px
  left: 108px
  position: absolute
  top: 0
  width: 398px

.vector-5
  height: 191px
  margin-left: 51px
  width: 70px

.flex-col-4
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  margin-left: 23px
  min-height: 585px
  width: 605px

.onze-unieke-elementen
  letter-spacing: 0
  line-height: normal
  min-height: 52px
  white-space: nowrap

.het-is-bedoelt-voor
  letter-spacing: 0
  line-height: normal
  margin-top: 12px
  min-height: 58px
  width: 605px

.uniek_element_1
  align-items: flex-start
  display: flex
  gap: 48px
  height: 41px
  margin-left: 15.0px
  margin-top: 103px
  min-width: 413px

.icround-dashboard-customize
  align-self: flex-end
  height: 36px
  width: 36px

.complete-custom-styling
  letter-spacing: 0
  line-height: normal
  min-height: 34px
  width: 327px

.uniek_element_2
  align-items: center
  display: flex
  gap: 46px
  height: 67px
  margin-left: 15.0px
  margin-top: 22px
  min-width: 468px

.uiwstar-on
  height: 38px
  margin-top: 0.54px
  width: 38px

.gevorderde-gebruiker
  letter-spacing: 0
  line-height: normal
  min-height: 67px
  width: 382px

.uniek_element_3
  align-items: center
  display: flex
  gap: 40px
  height: 67px
  margin-left: 8.14px
  margin-top: 13px
  min-width: 527px

.group-8
  height: 51px
  margin-top: 2.0px
  width: 51px

.duidelijk-overzicht
  letter-spacing: 0
  line-height: normal
  min-height: 67px
  width: 434px

.uniek_element_4
  align-items: center
  display: flex
  gap: 44px
  margin-left: 11.63px
  margin-top: 24px
  min-width: 471px

.group-7
  height: 43px
  width: 43px

.makkelijk-en-snel-gebruiken
  letter-spacing: 0
  line-height: normal
  margin-bottom: 0.57px
  min-height: 34px
  width: 382px

.uniek_element_5
  align-items: center
  display: flex
  gap: 53px
  margin-left: 21.0px
  margin-top: 32px
  min-width: 462px

.academiconsopen-access
  height: 50px
  width: 25px

.altijd-toegankelijk
  letter-spacing: 0
  line-height: normal
  margin-bottom: 0.27px
  min-height: 34px
  width: 382px

.flex-col-5
  align-items: center
  display: flex
  flex-direction: column
  margin-top: 241px
  min-height: 2804px
  width: 1920px

.flex-row-3
  align-items: flex-start
  display: flex
  height: 940px
  min-width: 1920px

.group-container-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 384px
  min-height: 940px
  width: 730px

.mask-group-9
  cursor: pointer
  height: 398px
  transition: all 1s ease
  width: 560px

.overlap-group19
  align-self: flex-end
  height: 158px
  position: relative
  width: 586px

.vector-6
  height: 121px
  left: 0
  position: absolute
  top: 0
  width: 121px

.vector-7
  height: 60px
  left: 61px
  position: absolute
  top: 61px
  width: 60px

.neem-een-kijkje-achter-de-schermen
  left: 87px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 54px

.flex-col-6
  align-items: center
  display: flex
  flex-direction: column
  gap: 43px
  margin-left: 48px
  margin-top: 182.0px
  min-height: 176px
  width: 363px

.neem-contact-op
  letter-spacing: 0
  line-height: normal
  min-height: 52px
  min-width: 363px
  white-space: nowrap

.frame-container-2
  height: 81px
  margin-left: 13.0px
  position: relative
  width: 208px

.frame-2
  border: 2px solid
  border-color: $malachite
  border-radius: 11px
  height: 73px
  left: 7px
  position: absolute
  top: 0
  width: 201px

.frame-3
  align-items: center
  background-color: $malachite
  border-radius: 11px
  display: flex
  gap: 10px
  height: 69px
  justify-content: center
  left: 0
  overflow: hidden
  padding: 12px 41px
  position: absolute
  top: 12px
  width: 195px

.place,
.place-1,
.schrijf-je-in
  letter-spacing: 0
  line-height: normal
  position: relative
  text-align: right
  white-space: nowrap
  width: fit-content

.laag_1-1
  align-self: center
  height: 538px
  margin-left: 238px
  margin-top: 84.0px
  width: 540px

.bekijk-hieronder-een
  align-self: flex-start
  letter-spacing: 0
  line-height: normal
  margin-left: 231px
  margin-top: 8px
  min-height: 116px
  width: 866px

.achterschermen-container
  align-items: flex-start
  display: flex
  gap: 141px
  height: 630px
  margin-left: 91.0px
  margin-top: 21px
  min-width: 1549px

.achter-schermen-student
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 610px
  width: 704px

.overlap-group8
  height: 401px
  position: relative
  width: 700px

.mask-group-10
  height: 390px
  left: 0
  position: absolute
  top: 11px
  width: 672px

.rectangle-17
  border: 2px solid
  border-color: $malachite
  border-radius: 122.5px 122.5px 122.5px 0px
  height: 389px
  left: 28px
  position: absolute
  top: 0
  width: 672px

.dashboard-student
  letter-spacing: 0
  line-height: normal
  margin-top: 22px
  min-height: 29px
  white-space: nowrap

.studenten-hebben-wei
  letter-spacing: 0
  line-height: normal
  margin-top: 50px
  min-height: 107px
  width: 365px

.achter-schermen-coach
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  min-height: 630px
  width: 704px

.overlap-group7
  height: 390px
  position: relative
  width: 700px

.mask-group-11
  height: 390px
  left: 21px
  position: absolute
  top: 0
  width: 679px

.rectangle-18
  border: 2px solid
  border-color: $malachite
  border-radius: 122.5px 122.5px 122.5px 0px
  height: 390px
  left: 0
  position: absolute
  top: 0
  width: 681px

.dashboard-coach
  letter-spacing: 0
  line-height: normal
  margin-left: 12px
  margin-top: 22px
  min-height: 29px
  white-space: nowrap

.coaches-moeten-alles
  letter-spacing: 0
  line-height: normal
  margin-left: 12px
  margin-top: 50px
  min-height: 139px
  width: 364px

.wat-vinden-onze-gebruikers-zelf
  letter-spacing: 0
  line-height: normal
  margin-top: 423px
  min-height: 104px
  min-width: 461px
  text-align: center

.overlap-group-container-3
  align-items: flex-start
  display: flex
  gap: 43px
  margin-left: 2.0px
  margin-top: 149px
  min-width: 1553px

.overlap-group-1
  height: 413px
  position: relative
  width: 754px

.rectangle-2
  border: 2px solid
  border-color: $san-marino
  border-radius: 126.5px
  height: 698px
  left: 276px
  position: absolute
  top: -74px
  transform: rotate(-90.00deg)
  width: 258px

.rectangle-2-1
  background-color: $keppel
  border-radius: 126.5px
  height: 698px
  left: 254px
  position: absolute
  top: -65px
  transform: rotate(-90.00deg)
  width: 258px

.mask-group-1
  height: 413px
  left: 0
  position: absolute
  top: 0
  width: 316px

.zowel-studenten-als,
.monitorify-biedt-all
  left: 333px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 191px
  width: 377px

.flex-row-4
  align-items: flex-end
  align-self: flex-start
  display: flex
  height: 1424px
  margin-top: 310px
  min-width: 1277px

.group-170
  align-self: flex-start
  height: 700px
  width: 393px

.overlap-group18
  align-items: flex-end
  background-image: url(https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c57822167f617a2554eee/img/vector-26.svg)
  background-size: 100% 100%
  display: flex
  height: 155px
  justify-content: flex-end
  margin-left: 61px
  min-width: 149px

.vector-8
  height: 64px
  width: 61px

.flex-col-7
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-bottom: 1.04px
  margin-left: 16px
  min-height: 1311px
  position: relative
  width: 658px

.zou-je-graag-een-demo-willen-aanvragen
  letter-spacing: 0
  line-height: normal
  margin-left: 26.0px
  min-height: 104px
  text-align: center
  width: 550px

.vanaf-18062024-kan
  align-self: center
  letter-spacing: 0
  line-height: normal
  margin-left: 15.0px
  margin-top: 45px
  min-height: 87px
  text-align: center
  width: 621px

.frame-container-3
  align-self: center
  height: 81px
  margin-right: 36.0px
  margin-top: 51px
  position: relative
  width: 208px

.ervaringen-van-studenten-coaches
  letter-spacing: 0
  line-height: normal
  margin-left: 0.5px
  margin-top: 423px
  min-height: 104px

.je-bent-niet-de-enig
  letter-spacing: 0
  line-height: normal
  margin-top: 16px
  min-height: 87px
  width: 621px

.ervaringen-studenten
  align-items: flex-start
  display: flex
  gap: 48px
  margin-top: 72px
  min-width: 1454px

.overlap-group-container
  align-items: flex-end
  display: flex
  flex-direction: column
  min-height: 1075px
  width: 331px

.overlap-group2-1
  height: 310px
  position: relative
  width: 301px

.mask-group-2
  height: 292px
  left: 0
  position: absolute
  top: 18px
  width: 292px

.vector-10
  height: 292px
  left: 9px
  position: absolute
  top: 0
  width: 292px

.overlap-group11
  align-self: flex-start
  height: 308px
  margin-top: 80px
  position: relative
  width: 322px

.mask-group-12
  height: 292px
  left: 30px
  position: absolute
  top: 0
  width: 292px

.vector
  height: 292px
  left: 0
  position: absolute
  top: 16px
  width: 292px

.overlap-group4-1
  height: 313px
  margin-right: 1px
  margin-top: 64px
  position: relative
  width: 300px

.mask-group-3
  height: 292px
  left: 0
  position: absolute
  top: 0
  width: 292px

.vector-11
  height: 292px
  left: 8px
  position: absolute
  top: 21px
  width: 292px

.flex-row-5
  align-items: flex-start
  display: flex
  height: 1075px
  min-width: 1075px

.overlap-group-2
  height: 310px
  position: relative
  width: 308px

.vector-1
  height: 292px
  left: 16px
  position: absolute
  top: 0
  width: 292px

.overlap-group-3
  align-self: flex-start
  height: 308px
  margin-top: 80px
  position: relative
  width: 315px

.mask-group-4
  height: 292px
  left: 23px
  position: absolute
  top: 0
  width: 292px

.overlap-group-4
  height: 313px
  margin-right: 1px
  margin-top: 64px
  position: relative
  width: 307px

.vector-2
  height: 292px
  left: 15px
  position: absolute
  top: 21px
  width: 292px

.overlap-group-container-4
  align-items: flex-end
  display: flex
  flex-direction: column
  margin-left: 41px
  min-height: 1075px
  width: 331px

.overlap-group-container-5
  align-items: flex-end
  display: flex
  flex-direction: column
  margin-left: 52px
  min-height: 1075px
  width: 320px

.overlap-group6
  height: 313px
  margin-right: 1.0px
  margin-top: 64px
  position: relative
  width: 307px

.schrijf-je-in-voor-onze-nieuwsbrief
  letter-spacing: 0
  line-height: normal
  margin-right: 1.0px
  margin-top: 423px
  min-height: 96px
  text-align: center
  width: 648px

.je-kan-je-inschrijve
  letter-spacing: 0
  line-height: normal
  margin-top: 20px
  min-height: 42px
  text-align: center
  width: 704px

.schrijf-je-in-button
  align-items: flex-start
  display: flex
  margin-left: 8.0px
  margin-top: 38px
  min-width: 205px

.frame-container-4
  height: 65px
  position: relative
  width: 205px
</style>
