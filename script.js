document.addEventListener("DOMContentLoaded", () => {
    // intro animation for horizontal ad
    gsap.from(".horizontal-ad .logo", { duration: 1, x: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".horizontal-ad .tagline", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 0.5 });
    gsap.from(".horizontal-ad .description", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 1 });
    gsap.from(".horizontal-ad .features .feature", {
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.5
    });
    gsap.from(".horizontal-ad .cta", { duration: 1, y: 50, opacity: 0, ease: "bounce.out", delay: 2 });
    gsap.from(".horizontal-ad .phone-mockup", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out", delay: 2.5 });

    // intro animation for vertical ad
    gsap.from(".vertical-ad .logo", { duration: 1, x: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".vertical-ad .tagline", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 0.5 });
    gsap.from(".vertical-ad .description", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 1 });
    gsap.from(".vertical-ad .features .feature", {
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.5
    });
    gsap.from(".vertical-ad .cta", { duration: 1, y: 50, opacity: 0, ease: "bounce.out", delay: 2 });
    gsap.from(".vertical-ad .phone-mockup", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out", delay: 2.5 });

    // hover effect
    const features = document.querySelectorAll(".feature");
    features.forEach(feature => {
      feature.addEventListener("mouseenter", () => {
        gsap.to(feature, { duration: 0.3, scale: 1.2, ease: "power3.out" });
      });
      feature.addEventListener("mouseleave", () => {
        gsap.to(feature, { duration: 0.3, scale: 1, ease: "power3.out" });
      });
    });

    // beat effect for cta button
    const ctas = document.querySelectorAll(".cta");
    ctas.forEach(cta => {
      gsap.to(cta, {
        scale: 1.1,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
});
