import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background(props) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    if (props.allowTouch == "true") return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{background: { color: { value: "#0C146A", },},
            fpsLimit: 120,
            interactivity: {events: {onClick: {enable: true, mode: "push"},resize: true,},modes: {push: {quantity: 4,},repulse: {distance: 200,duration: 0.4,},},},
                particles: {color: {value: "#ffffff",},
                    links: {color: "#ffffff",distance: 150,enable: true,opacity: 0.5,width: 1,},
                    collisions: {enable: false,},
                    move: {direction: "none",enable: true,outModes: {default: "bounce",},random: false,speed: 3,straight: false,},
                    number: {density: {enable: true,area: 1200,},value: 80,},
                    opacity: {value: 0.5,},
                    shape: {type: "circle",},
                    size: {value: { min: 1, max: 5 },},},
            detectRetina: true,}}
        />
    );
    else return(
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{background: { color: { value: "#0C146A", },},
        fpsLimit: 120,
        interactivity: {modes: {push: {quantity: 4,},repulse: {distance: 200,duration: 0.4,},},},
            particles: {color: {value: "#ffffff",},
                links: {color: "#ffffff",distance: 150,enable: true,opacity: 0.5,width: 1,},
                collisions: {enable: false,},
                move: {direction: "none",enable: true,outModes: {default: "bounce",},random: false,speed: 3,straight: false,},
                number: {density: {enable: true,area: 1200,},value: 80,},
                opacity: {value: 0.5,},
                shape: {type: "circle",},
                size: {value: { min: 1, max: 5 },},},
        detectRetina: true,}}
    />
    )
};

export default Background;