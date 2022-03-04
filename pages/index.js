import {useState, useEffect} from "react"
import Header from "../components/header"
import Grid from "../components/grid"
import List from "../components/list"
import Loader from "../components/loader";
import {useAnimation, motion, useMotionValue} from "framer-motion";
import {defaultTransition} from "../components/utils/transition";

const gridUtils = [600,400,600,800,600]

export default function Home() {
    const [gridVisible,setGridVisible] = useState(true)
    const loaderControls = useAnimation()
    const animation = useAnimation()
    const bgColor = useMotionValue("black")


    useEffect(() => {
        async function sequence()  {
            await animation.set((index)=>({
                y:gridUtils[ index % 5],
                scale:1.1,
            }))
            await animation.start(()=>({
                y:0,
                transition:defaultTransition
            }))
            bgColor.set("white")
            await animation.start({
                scale:1,
                transition:defaultTransition
            })
            setGridVisible(!gridVisible)
        }
        setTimeout(()=>{
            loaderControls.start({
                opacity:0,
                transition:defaultTransition
            })
            sequence()
        },1000)
    }, []);
    
    
    return (
        <>
            <Loader controls={loaderControls} title={"tiennecore"}/>
            <Header
                gridVisible={gridVisible}
                setGridVisible={setGridVisible}
            />
            <motion.div
                style={{
                    backgroundColor: bgColor,
                    transition: 'background-color .75s ease-in-out'
                }}
                className="content"
            >
                {gridVisible && <Grid gridAnimation={animation}/>}
                {!gridVisible && <List/>}
            </motion.div>
        </>
    )
}
