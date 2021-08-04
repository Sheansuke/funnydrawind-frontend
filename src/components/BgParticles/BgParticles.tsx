import Particles from "react-tsparticles";

export const BgParticles = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
          image: "url('https://wallpaperaccess.com/full/713148.jpg')",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        backgroundMask: {
          cover: {
            // 30, 41, 59
            value: {
              r: 30,
              g: 41,
              b: 59,
            },
          },
          enable: true,
        },
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                force: 60,
              },
            },
          },
          modes: {
            bubble: {
              distance: 0,
              duration: 1,
              opacity: 0,
              size: 100,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 0,
            enable: true,
          },
          move: {
            attract: {
              rotate: {
                x: 0,
                y: 1200,
              },
            },
            enable: true,
            path: {},
            outModes: "out",
            spin: {},
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            animation: {
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              minimumValue: 50,
              enable: true,
            },
            value: {
              min: 1,
              max: 30,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
      }}
      className="absolute z-0 h-screen "
    />
  );
};
