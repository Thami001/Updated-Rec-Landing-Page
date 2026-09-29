import {useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})


        const project = [project1Ref.current, project2Ref.current, project3Ref.current]

        project.forEach((card,index) => {
            gsap.fromTo(card, {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                })
        })
    })

    return (
        <section ref={sectionRef} id={"Showcase"} className={"app-showcase"}>
            <div className={"w-full"}>
                <div className={"showcase-layout"}>
                    {/*LEFT SIDE*/}
                    <div className={"first-project-wrapper"} ref={project1Ref}>
                      <div className={"image-wrapper"}>
                          <img src={"/images/Project 1.png"} alt={"Project 1 Image"}/>
                      </div>
                      <div className={"text-content"}>
                          <h2>
                              Large-Scale Residential Solar Installation
                          </h2>
                          <p className={"text-white-50 md:text-xl"}>
                              A comprehensive residential solar installation designed across multiple roof sections to maximise the available space and solar generation potential.
                          </p>
                      </div>
                    </div>
                    {/*RIGHT SIDE*/}
                    <div className={"project-list-wrapper overflow-hidden"} >
                        <div className={"project"} ref={project2Ref}>
                            <div className={"image-wrapper project-accent--sun"}>
                                <img src={"/images/Project 2.jpeg"} alt={"Project 2 Image"}/>
                            </div>
                            <div>
                                <h2>
                                    High-Capacity Modular Battery Storage System
                                </h2>
                                <p className={"mt-3 text-sm leading-6 text-white-50 md:text-base"}>
                                    A high-capacity modular battery system installed to provide dependable
                                    backup power and improved energy management
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"project-list-wrapper overflow-hidden"} ref={project3Ref}>
                        <div className={"project"} ref={project2Ref}>
                            <div className={"image-wrapper project-accent--leaf"}>
                                <img src={"/images/Project 3.jpeg"} alt={"Project 3 Image"}/>
                            </div>
                            <div>
                                <h2>
                                    Dual-Inverter Solar Backup System
                                </h2>
                                <p className={"mt-3 text-sm leading-6 text-white-50 md:text-base"}>
                                    A dual-inverter installation paired with multiple battery units to
                                    provide efficient power conversion and dependable energy storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;