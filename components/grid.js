import {useRef} from 'react';
import Data from "./utils/Data";
import ImageLink from "./ImageLink";
import {motion, useMotionValue, useSpring} from "framer-motion";
import {defaultTransition} from "./utils/transition";

function Grid({gridAnimation}) {
    const gridRef= useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleGridParallax = () => {
        if(gridRef.current){
            const speed = 10
            const {width,height} = gridRef.current.getBoundingClientRect()
            const offsetX = event.pageX - width*0.5
            const offsetY = event.pageY - height*0.5

            const newTransformX = (offsetX*speed)/100
            const newTransformY = (offsetY*speed)/100

            x.set(newTransformX)
            y.set(newTransformY)
        }
    }

    const xMotion= useSpring(x,{stiffness:400,damping:90})
    const yMotion= useSpring(y,{stiffness:400,damping:90})

    return (
        <div className="grid-container">
            <motion.div
                ref={gridRef}
                onMouseMove={handleGridParallax}
                transition={defaultTransition}
                style={{
                    x:xMotion,
                    y:yMotion,
                }}
                className="grid-elements"
            >
                {Data.map((element, index)=> (
                    <motion.div
                        animate={gridAnimation}
                        custom={index}
                        className="element"
                        key={index}
                    >
                        <div className="thumbnail-wrapper">
                            <ImageLink element={element} index={index} />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Grid;