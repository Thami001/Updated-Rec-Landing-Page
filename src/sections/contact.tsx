import TitleHeader from "../components/titleHeader.tsx";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )

            setFormData({name: '', email: '', number: '',message: ''})
        }catch (error) {
            console.log('EMAILJS ERROR', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id={"contact"} className={"flex-center section-padding"}>
            <div className={"w-full h-full md:px-10 px-5"}>
                <TitleHeader title={"Contact"} sub={"Contact Information"}/>

            <div className={"mt-16 grid-12-cols"}>
                {/* Left Side/ Contact Page*/}
                <div className={"xl:col-span-5"}>
                    <div className={"flex-center card-border rounded-xl p-10"}>
                        <form className={"w-full flex flex-col gap-7"} onSubmit={handleSubmit} ref={formRef}>
                            <div>
                                <label htmlFor={"name"}>
                                    Name
                                </label>
                                <input type={"text"} id={"name"} name={"name"} placeholder={"Your Name"} value={formData.name} onChange={handleChange} required={true}/>
                            </div>
                            <div>
                                <label htmlFor={"email"}>
                                    Email
                                </label>
                                <input type={"email"} id={"email"} name={"email"} placeholder={"Your Email"} value={formData.email} onChange={handleChange} required={true}/>
                            </div>
                            <div>
                                <label htmlFor={"number"}>
                                    Phone Number
                                </label>
                                <input type={"text"} id={"number"} name={"number"} placeholder={"Your Phone Number"} value={formData.number} onChange={handleChange} required={true}/>
                            </div>
                            <div>
                                <label htmlFor={"message"}>
                                    Message
                                </label>
                                <textarea id={"message"} name={"message"} rows={5} placeholder={"Your Message"} value={formData.message} onChange={handleChange} required={true}/>
                            </div>

                            <button type={"submit"}  disabled={loading}>
                                <div className={"cta-button group"}>
                                    <div className={"bg-circle"}/>
                                        <p className={"text"}>
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </p>
                                        <div className={"arrow-wrapper"}>
                                            <img src={"/images/arrow-right.svg"} alt={"arrow"}/>
                                        </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                {/* Right Side/ Video Section*/}
                <div className={"xl:col-span-7 min-h-96"}>
                    <div className={"w-full h-full rounded-3xl md:px-10 px-5 "}>
                        <video src={"/video/Promo.mp4"} controls={true}/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;