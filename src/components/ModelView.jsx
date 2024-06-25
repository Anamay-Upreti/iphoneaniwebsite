import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from 'three'

import { Lights } from "./Lights"
import { Suspense } from "react"
import IPhone from './IPhone'
const ModelView = ({
  index, groupRef, gsapType, controlRef, setRotationSize, size, item
}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-500 w-full h-full $ {index === 2} ? 'right-[-100%]'; ''`}
    >
     {/* ambient light */}

     <ambientLight intensity={0.3}/>

     <PerspectiveCamera
     makeDefault position={[0, 0, 4]}
     />

     <Lights/>

     <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}
     />

     <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0,]}>

     </group>
     <Suspense fallback={<div>Loading</div>}>
         <IPhone
         scale={index === 1 ? [15, 15,15] : [17 , 17, 17]}
         />
     </Suspense>
    </View>
  )
}

export default ModelView