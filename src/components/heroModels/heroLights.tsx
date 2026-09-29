
const HeroLights = () => {
    return (
        <>
            <ambientLight/>
            <directionalLight position={[5,5,5]} intensity={1}/>
        </>
    );
};

export default HeroLights;