import {words} from "../constants";
import Button from "../components/button.tsx";
import HeroExperience from "../components/heroModels/heroExperience.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/animatedCounter.tsx";

const Hero = () => {
    const rotatingWords = [...words, words[0]]
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y:0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'Power2.inOut',
            },
    )
    })

    return (
        <section id={"Home"} className={"relative overflow-hidden"}>


            <div className={"hero-layout"}>
                {/*Left Side = Hero Content*/}
                <header className={"flex flex-col justify-center md:w-full w-screen md:px-20 px-5"}>
                    <div className={"flex flex-col gap-7"}>
                        <div className={"hero-text"}>
                            <h1>Solar solutions built on
                                <span className={"slide"}>
                                    <span className={"wrapper"}>
                                        {rotatingWords.map((word, index) => (
                                            <span key={`${word.text}-${index}`} className={"flex items-center md:gap-3 gap-1 pb-2"}>
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Designed around your needs.</h1>
                            <h1>Powering a brighter future</h1>
                        </div>
                        <p className={"text-white-50 md:text-xl relative z-10 pointer-events-none"}>
                            RECSolar delivers tailored solar solutions for homes and businesses
                        </p>
                        <p className={"text-white-50 md:text-xl relative z-10 pointer-events-none"}>
                            Helping you reduce energy costs and move towards greater energy independence.
                        </p >
                        <Button className={"hero-cta"} id={"contact-btn group"} text={"Witness Our Expertise"}/>
                    </div>
                </header>

                {/*Right Side = 3D Model */}
                <figure className={"hidden md:block"}>
                    <div className={"hero-3d-layout hover:cursor-grab"}>
                        <HeroExperience/>
                    </div>
                </figure>
            </div>

            {/* Counter Goes Here */}
            <AnimatedCounter/>
        </section>
    );
};

export default Hero;