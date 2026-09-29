import {Canvas} from "@react-three/fiber";
import {Center,OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
// @ts-expect-error/importWorksAsNeededFileIsJustBeingWeird
import {Model} from "./House.jsx";
import HeroLights from "./heroLights.tsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    return (
        <Canvas camera={{position: [12, 6, 12], fov: 28}}>


            <OrbitControls target={[0, 0, 0]} enablePan={false} enableZoom={!isTablet} enableDamping dampingFactor={0.06} rotateSpeed={0.65} minDistance={10} maxDistance={24} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2}/>

            <HeroLights/>
            <group scale={isMobile ? 0.11 : 0.25} position={[0, 0, 0]} rotation={[0, -Math.PI /4, 0]}>
               <Center precise>
                   <Model/>
               </Center>
            </group>
        </Canvas>
    );
};

export default HeroExperience;