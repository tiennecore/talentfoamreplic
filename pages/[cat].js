import {motion, useAnimation} from 'framer-motion';
import Data from "../components/utils/Data";
import {defaultTransition} from "../components/utils/transition";
import HomeButton from "../components/HomeButton";
import Loader from "../components/loader";
import {useEffect} from "react";


export async function getStaticPaths(){
    const paths = Data.map((element) => {
        return{
            params:{cat: element.cat}
        }
    })
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const category = context.params.cat
    const data = Data.find(element => element.cat === category)
    return {
        props: {element : data}, // will be passed to the page component as props
    }
}

const variantsCat ={
    initial:{
        opacity:0,
        y:100,
    },
    animate:{
        opacity: 1,
        y:0,
    },
}

function Cat({element}) {
    const control =useAnimation()

    useEffect(()=>{
        setTimeout(()=>{
            control.start({
                opacity:0,
                transition:defaultTransition
            })
        },1000)
    })
    return(
        <>
            <Loader controls={control} title={element.title} />
            <HomeButton/>
            <div className="cat-container">
                <div className="image-wrapper">
                    <motion.img
                        variants={variantsCat}
                        initial={"initial"}
                        animate={"animate"}
                        src={element.link}
                        alt=""
                        transition ={{defaultTransition, delay: 2}}
                    />
                </div>
            </div>
        </>

    )
}

export default Cat;