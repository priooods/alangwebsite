import { gsap } from "gsap";
export default {
  computed: {
    animasi() {
      let tl = new gsap.timeline();
      tl.from(".lr", 1.5, { scaleX: 0, transformOrigin: "right" });
      tl.from(".ll", 1.5, { scaleX: 0, transformOrigin: "left" });
      tl.fromTo(
        ".anim",
        1,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 1, y: "0%" }
      );
      tl.fromTo("#circlekecil", 0.5, { opacity: 0 }, { opacity: 1 });
      tl.fromTo(
        "#circlebesar",
        0.5,
        { opacity: 0 },
        { opacity: 1, stagger: 1, y: "0%" }
      );
      return tl;
    },
  },
  mounted() {
    this.animasi;
  },
};
