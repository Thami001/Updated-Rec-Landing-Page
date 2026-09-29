

const Button = ({className, text, id}) => {
    return (
        <a className={`${className ?? ''} cta-wrapper`}
           onClick={(e) => {
               e.preventDefault()

               const target = document.getElementById("counter")

               if(target && id) {
                   const offset = window.innerHeight * 0.15

                   const top = target.getBoundingClientRect().top + window.scrollY - offset

                   window.scrollTo({top, behavior: 'smooth'})
               }
           }}>
            <div className={"cta-button group"}>
                <p className={"text"}>
                    {text}
                </p>
            </div>
        </a>
    );
};

export default Button;