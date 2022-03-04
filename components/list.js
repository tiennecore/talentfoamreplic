import Data from "./utils/Data";
import ImageLink from "./ImageLink";

function List() {
    return (
        <div className="list-elements">
            {Data.map((element, index)=> (
                <div className="element" key={index}>
                    <ImageLink element={element} index={index} />
                </div>
            ))}
        </div>
    );
}

export default List;