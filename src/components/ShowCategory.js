import React from 'react';

const ShowCategory = ({popularCategories}) => {

    const getName = (name) => {
        let splitedName = name.split(" ");
        let first = splitedName[0];
        let last = "";
        for (let i = 1; i < splitedName.length; i++) {
            last += splitedName[i] + " ";
        }
        return [first, last];
    }

    const showCategory = popularCategories ? (
        popularCategories.map((category, idx) => {
            let name = getName(category.name);
            let background = ""
            if (idx === 1) {
                background = " orange-background";
            }
            return (
                <div key={idx} className="category-item">
                    <div className={"category-name" + background}>
                        <div className="category-gender">{name[0].toUpperCase() + " "}</div>
                        <div className="category-description">{name[1].toUpperCase() + " STARTS FROM "}</div>
                    </div>
                    {/*<div className="right-triangle"></div>*/}
                    <div className="category-start-from">{"$" + category.startfrom}</div>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div className="category-items">
            {showCategory}
        </div>
    )
}

export default ShowCategory;