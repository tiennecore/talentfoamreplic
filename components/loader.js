import {motion} from "framer-motion"
import {defaultTransition} from "./utils/transition";


const variantsLoader = {
    initial : {
        y:50,
        opacity:0,
    },
    animate: {
        y:0,
        opacity: 1,
    }
}

function Loader({controls, title}) {
    return (
        <motion.div className="full-loader" animate={controls}>
            <motion.h1
                variants={variantsLoader}
                initial={"initial"}
                animate={"animate"}
                transition={defaultTransition}
            >
                {title}
            </motion.h1>
        </motion.div>
    );
}

export default Loader;