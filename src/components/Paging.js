import React from 'react';

const Paging = () => {

    let temp = [];
    for (let i = 0; i < 6; i++) {
        temp.push(i);
    }
    const getButtons = temp.map((item, idx) => {
        let active = "";
        if (idx === 1) {
            active = " active";
        }
        return (
            <button key={idx} className={"page-button" + active}>{item + 1}</button>
        )
    })

    return (
        <div className="paging">
            <button className="page-prev">{"<"}</button>
            {getButtons}
            <button className="page-next">{">"}</button>
        </div>
    )
}

export default Paging;