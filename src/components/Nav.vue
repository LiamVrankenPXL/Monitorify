<template>
  <div :class="[`navbar`, className || ``]">
    <router-link to="/overviewweb" className="align-self-flex-end"
      ><img
        class="image-11"
        src="https://cdn.animaapp.com/projects/665c4737c4dbe178c63261d4/releases/665c4768120374cbfbab03e4/img/image-11.png"
        alt="image 11"
      /> </router-link
    ><router-link to="/overviewweb"
      ><div class="navbar-link-overview didactgothic-normal-black-20px">overview</div> </router-link
    ><router-link to="/overonsweb"
      ><div class="navbar-link-about-us didactgothic-normal-black-20px">about us</div> </router-link
    ><router-link to="/contactweb"
      ><div class="navbar-link-contact didactgothic-normal-black-20px">contact</div> </router-link
    ><router-link to="/portalweb"
      ><div class="navbar-link-portal didactgothic-normal-black-20px">Portal</div> </router-link
    ><frame8 />
  </div>
</template>

<script>
import Frame8 from "./DemoButton.vue";
export default {
  name: "xNav",
  components: {
    Frame8,
  },
  props: ["className"],
};
</script>

<style lang="sass">
.navbar
  align-items: flex-start
  display: flex
  height: 53px
  left: 0
  min-width: 1182px
  position: absolute
  top: 78px

.image-11
  align-self: flex-end
  cursor: pointer
  height: 40px
  object-fit: cover
  width: 160px

.navbar-link-overview
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 342px
  margin-top: 6px
  min-height: 26px
  width: 77px

.navbar-link-about-us
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 42px
  margin-top: 6px
  min-height: 26px
  width: 75px

.navbar-link-contact
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 42px
  margin-top: 6px
  min-height: 26px
  width: 63px

.navbar-link-portal
  cursor: pointer
  letter-spacing: 0
  line-height: normal
  margin-left: 100px
  margin-top: 6px
  min-height: 26px
  width: 50px

.navbar.navbar-1 .navbar-link-portal,
.navbar.navbar-2 .navbar-link-about-us,
.navbar.navbar-3 .navbar-link-contact,
.navbar.navbar-4 .navbar-link-overview
  text-decoration: underline black

.navbar.navbar-2
  left: unset
  position: relative
  top: unset
</style>
