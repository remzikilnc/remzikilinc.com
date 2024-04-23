"use client";

import React, {useState, useRef, Suspense} from "react";
import * as random from "maath/random"
import {Canvas, useFrame} from "@react-three/fiber";
import {Points, PointMaterial} from "@react-three/drei";

const Stars = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(3000))
    );

    useFrame((state, delta) => {
        ref.current.rotation.y -= delta / 15;
        ref.current.rotation.x -= delta / 15;
    });

    return (
        <group>
            <Points ref={ref} positions={sphere} frustumCulled {...props}>
                <PointMaterial
                    size={0.002}
                    transparent={true}
                    sizeAttenuation={true}
                    dethWrite={false}
                    color="green"
                />
            </Points>
        </group>
    );
};

const StarsCanvas: React.FC<{}> = () => (
    <div className="w-full h-auto fixed inset-0 z-[1] ">
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <Stars/>
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
