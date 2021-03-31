import { gsap } from "gsap";
export default {
  computed: {
    animasi() {
      let tl = new gsap.timeline();
      tl.fromTo(
        ".logo",
        1,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 3, y: "0%" }
      );
      tl.fromTo(
        ".anim",
        2,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 3, y: "0%" }
      );
      tl.fromTo(
        ".desc1",
        1,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 3, y: "0%" }
      );
      tl.fromTo(
        ".desc2",
        1,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 3, y: "0%" }
      );
      return tl;
    },
  },
  mounted() {
    this.animasi();
  },
};
