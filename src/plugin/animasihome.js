import { gsap } from "gsap";
export default {
  computed: {
    animasi: function() {
      let tl = new gsap.timeline();
      tl.fromTo(
        ".logo",
        1.5,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%" }
      );
      tl.fromTo(
        ".anim",
        1.5,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%" }
      );
      tl.fromTo(
        ".desc1, .desc2",
        1.5,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%" }
      );
      tl.fromTo(
        ".content",
        1.5,
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%" }
      );
      return tl;
    },
  },
  mounted() {
    this.animasi;
  },
};
