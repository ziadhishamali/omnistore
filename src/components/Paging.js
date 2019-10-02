import React from 'react';

const Paging = ({current, changeCurrentPage}) => {

    let temp = [];
    for (let i = 0; i < 6; i++) {
        temp.push(i);
    }
    const getButtons = temp.map((item, idx) => {
        let active = "";
        if (idx === current) {
            active = " active";
        }
        return (
            <button key={idx} className={"page-button" + active} onClick={() => changeCurrentPage(item)}>{item + 1}</button>
        )
    })

    return (
        <div className="paging">
            <button className="page-prev" onClick={() => changeCurrentPage(current - 1)}>{"<"}</button>
            {getButtons}
            <button className="page-next" onClick={() => changeCurrentPage(current + 1)}>{">"}</button>
        </div>
    )
}

export default Paging;