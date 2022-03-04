import {defaultTransition} from "./utils/transition";
import {motion} from "framer-motion";
import Link from 'next/link'

function ImageLink({element, index}) {
    return (
        <Link href={`/${element.cat}` }>
            <motion.img
                className={"grid-item-media"}
                src={element.link}
                alt={""}
                layoutId={`container-${index}`}
                transition={defaultTransition}
            />
        </Link>
    )
}

export default ImageLink;