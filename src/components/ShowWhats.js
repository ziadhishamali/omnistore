import React from 'react';

const ShowWhats = ({whatsHot}) => {

    const showWhats = whatsHot ? (
        whatsHot.map((category, idx) => {
            let color = " orange-text";
            if (category.store.split(" ")[0].toLowerCase() === "men") {
                color = " blue-text";
            }
            return (
                <div key={idx} className="category-item-2">
                    <div className="category-name-2">
                        <div className="category-store">{category.store.toUpperCase()}</div>
                        <div className={"category-description-2" + color}>{category.name.toUpperCase()}</div>
                    </div>
                    {/*<div className="right-triangle"></div>*/}
                    <div className="category-start-from-2">
                        <div className="start-from-text">Starts from</div>
                        <div className="">{"$ "}<span className="start-from-price">{category.startfrom}</span></div>
                    </div>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div className="category-items">
            {showWhats}
        </div>
    )
}

export default ShowWhats;