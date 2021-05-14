import LocomotiveScroll from "locomotive-scroll";
export default {
  data() {
    return {
      refresh: false,
    };
  },
  computed: {
    scl() {
      return new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        repeat:    true,
        smartphone: {
          smooth: true,
        },
        getSpeed: true,
        resetNativeScroll: true,
        getDirection: true,
      });
    },
  },
  created() {
    this.refresh = true;
  },
  mounted() {
    this.scl;
  },
  destroyed() {
    this.scl.destroy();
    this.scl.start();
  },
};
