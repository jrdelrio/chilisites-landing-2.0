import { useEffect } from "react";
import gsap from "gsap";
import "../styles/rounded-carousel.scss";

// Imágenes de ejemplo
import temp from "../img/10430812.jpg";


export const RoundedCarousel = () => {
  useEffect(() => {
    let xPos = 0;

    gsap
      .timeline()
      .set(".ring", { rotationY: 180, cursor: "grab" })
      .set(".img", {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) => `url(${getImageUrl(i)})`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(".img", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })
      .add(() => {
        document.querySelectorAll(".img").forEach((img) => {
          img.addEventListener("mouseenter", (e) => {
            let current = e.currentTarget;
            gsap.to(".img", {
              opacity: (i, t) => (t === current ? 1 : 0.5),
              ease: "power3",
            });
          });

          img.addEventListener("mouseleave", () => {
            gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
          });
        });
      }, "-=0.5");

    const dragStart = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      xPos = Math.round(e.clientX);
      gsap.set(".ring", { cursor: "grabbing" });
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag);
    };

    const drag = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      gsap.to(".ring", {
        rotationY: `-=${(Math.round(e.clientX) - xPos) % 360}`,
        onUpdate: () => {
          gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
        },
      });
      xPos = Math.round(e.clientX);
    };

    const dragEnd = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      gsap.set(".ring", { cursor: "grab" });
    };

    document.addEventListener("mousedown", dragStart);
    document.addEventListener("touchstart", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    return () => {
      document.removeEventListener("mousedown", dragStart);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchstart", dragStart);
      document.removeEventListener("touchmove", drag);
      document.removeEventListener("touchend", dragEnd);
    };
  }, []);

  const getBgPos = (i) => {
    return `${
      100 -
      (gsap.utils.wrap(
        0,
        360,
        gsap.getProperty(".ring", "rotationY") - 180 - i * 36
      ) /
        360) *
        500
    }px 0px`;
  };

  const getImageUrl = (i) => {
    const imageUrls = [
      temp,
      temp,
      temp,
      temp,
      temp,
      temp,
      temp,
   
    ];
    return imageUrls[i];
  };

  return (
    <div className="stage rounded-carousel">
      <div className="carousel-container">
        <div className="ring">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="img"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
