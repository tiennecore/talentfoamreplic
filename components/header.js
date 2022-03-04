import {Columns, Grid} from "react-feather";


function Header({gridVisible, setGridVisible}) {

    return (
        <header>
            <button className={"custom-button"} onClick={() => setGridVisible(!gridVisible)}>
                {gridVisible? <Grid/> : <Columns/>}
            </button>
        </header>
    );
}

export default Header;