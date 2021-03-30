import LocomotiveScroll from "locomotive-scroll";
export default {
  computed: {
    scl() {
      return new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        repeat: true,
        scrollFromAnywhere: true,
        reloadOnContextChange: true,
        tablet: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
        getSpeed: true,
        getDirection: true,
      });
    },
  },
  mounted() {
    this.scl;
  },
  destroyed() {
    this.scl.destroy();
  },
};
