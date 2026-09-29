import TitleHeader from "../components/titleHeader.tsx";
import {testimonials} from "../constants";
import GlowCard from "../components/glowCard.tsx";

const Testimonials = () => {
    return (
        <section id="Testimonials" className={"flex-center section-padding"}>
            <div className={"w-full h-full md:px-10 px-5"}>
                <TitleHeader title={"What People Say About Us"} sub={"Client Feedback Highlights"}/>

                <div className={"lg:columns-3 md:columns-2 columns-1 mt-16"}>
                    {testimonials.map((testimonial) => (
                        <GlowCard card={testimonial}>
                            <div className={"flex items-center gap-3"}>
                                <div>
                                    <p className={"font-bold"}>
                                        {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

/*                                 <div>
                                    <img src={testimonial.imgPath} alt={testimonial.name}/>
                                </div>*/