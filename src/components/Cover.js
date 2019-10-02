import React from 'react';

const Cover = ({coverImages}) => {
    console.log(coverImages)

    const showImages = coverImages ? (
        coverImages.map((item, idx) => {
            return (
                <div key={idx} className="cover-image">
                    <img src={item} alt="img"/>
                </div>
            )
        })
    ) : (
        <div></div>
    )

    return (
        <div className="cover">
            <button className="cover-prev">{"<"}</button>
            <div className="cover-container">
                {showImages}
            </div>
            <button className="cover-next">{">"}</button>
        </div>
    )
}

export default Cover;