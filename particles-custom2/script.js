particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#ffffa4"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.15,
                sync: false
            }
        },

        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffa4",
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});