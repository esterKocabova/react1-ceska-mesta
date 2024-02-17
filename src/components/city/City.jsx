import React from "react";

export const City = ({name, photo, population, area, district}) => {
    return(
        <>
        <div className="city">
            <div className="city-description-wrapper">
                <h2>{name}</h2>
                <ul>
                    <li>{population}</li>
                    <li>{area}</li>
                    <li>{district}</li>
                </ul>
            </div>
            <img src={photo} alt="" />
        </div>
        </>
    )
}