import Link from "next/link";
import {ArrowLeft} from "react-feather";

function HomeButton() {
    return (
        <div className="home-button">
            <Link href="/">
                <div className="custom-button">
                    <ArrowLeft/>
                </div>
            </Link>
        </div>
    );
}

export default HomeButton;