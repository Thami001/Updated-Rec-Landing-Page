import {LogoIconList} from "../constants";

const LogoIcon = ({icon}) => {
    return (
        <div className={"flex-none flex-center marquee-item"}>
           <img src={icon.imgPath} alt={icon.name}/>
        </div>
    )
}

const LogoRepeatCount = 8

const LogoShowcase = () => {
    const repeatedLogos = Array.from({length: LogoRepeatCount}, () => LogoIconList,).flat()
    return (
        <div className={"marquee h-52"}>
        <div className={"marquee-box"}>
            <div className={"marquee-group"}>
                {repeatedLogos.map((icon, index) => (
                  <LogoIcon key={`primary-${index}`} icon={icon}/>
                ))}
            </div>

            <div className={"marquee-group"} aria-hidden={true}>
                {repeatedLogos.map((icon, index) => (
                    <LogoIcon key={`duplicate-${index}`} icon={icon}/>
                ))}
            </div>
        </div>
        </div>
    );
};

export default LogoShowcase;

/* original logoshowcase in case new one doesnt work
<div className={"md:my-2 my-10 relative"}>
    <div className={"gradient-edge"}/>
    <div className={"gradient-edge"}/>

    <div className={"marquee h-52"}>
        <div className={"marquee-box md:gap-12 gap-5"}>
            {LogoIconList.map((icon) => (
                <LogoIcon key={icon.name} icon={icon}/>
            ))}
        </div>
    </div>
</div>*/