import React from "react";
import Particles from "react-particles-js";

export const ParticlesContainer = (props: any) => (
  <Particles
    style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: 100,
      height: 100,
    }}
    params={{
      particles: {
        number: {
          value: 200,
          density: {
            enable: false,
            value_area: 900,
          },
        },
        size: {
          value: 12,
          random: true,
          anim: {
            speed: 5,
            size_min: 0.3,
          },
        },
        color: {
          value: ["#69DDFF", "#F4C6DB", "#FFF05A"],
        },
        shape: {
          type: ["circle", "edge", "polygon"],
        },
        move: {
          random: true,
          speed: 3,
          direction: "top",
          out_mode: "out",
        },
        line_linked: {
          enable: false,
        },
      },
    }}
  />
);
