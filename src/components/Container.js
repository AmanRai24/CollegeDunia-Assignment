import React from "react";

export default function Container(props){
    const{
        college_name,
        discount,
        original_fees,
        discounted_fees,
        fees_cycle,
        amenties,
        famous_nearest_places,
        nearest_place,
        offertext,
        rating_remarks, 
        promoted, 
        rating, 
        ranking, 
        tags
    }=props.data;

    let offertextArray = offertext.split(" ");
    let famousPlacesArray = famous_nearest_places.split(" ");
    return(
        <>
        <div className="card">
            <div className="card_Header">
                <div className="header_right">
                    <div className="header_promoted  d-flex-text">
                        <span className="promoted_text">
                            {promoted ? "Promoted" : "Not Promoted"}
                        </span>
                    </div>
                    <div className="header_rating">
                        <span className="rating_text">
                            {rating}
                            <span>/5</span>
                        </span>
                        <span className="rating_text">{rating_remarks}</span>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="header_tags">
                        <div className="tags_best  d-flex-text">
                            <span className="best_text">{tags[0]}</span>
                        </div>
                        <div className="tags_distance  d-flex-text">
                            <span className="distance_text">{tags[1]}</span>
                        </div>
                    </div>
                    <div className="header_number">
                        <span className="number_text">#{ranking}</span>
                    </div>
                </div>
            </div>
            <div className="card_body">
                <div className="body_description">
                    <div className="description_college-name">
                        <span className="college-name">{college_name}</span>
                        <span className="ratings">
                            &#9733;&#9733;&#9733;&#9733;
                            <span className="hollow-star">&#9733;</span>
                        </span>
                    </div>
                    <div className="description_location-row">
                        <span className="location">{nearest_place[0]}</span>
                        <span className="nearest-location">| {nearest_place[1]}</span>
                    </div>
                    <div className="description_match-row">
                        <span className="match">93% Match : </span>
                        <span className="distance-from">
                            {famousPlacesArray[0]}&nbsp;
                            <span className="grey-text">
                                {famousPlacesArray[1]} {famousPlacesArray[2]} &nbsp;
                                {famousPlacesArray[3]}
                            </span>
                            &nbsp;{famousPlacesArray[4]} {famousPlacesArray[5]}
                            <span className="grey-text">
                                {famousPlacesArray[6]}&nbsp; {famousPlacesArray[7]}&nbsp;
                                {famousPlacesArray[8]}
                            </span>
                        </span>
                    </div>

                    <div className="description_offer-row">
                        <span className="offers">
                            <span className="flat">{offertextArray[0]} </span>
                        <span>
                        Rs
                        <span className="price">
                            {" "}
                            {offertextArray[1]} {offertextArray[2]}
                        </span>
                        &nbsp;{offertextArray[3]}
                        &nbsp;{offertextArray[4]}
                        &nbsp;{offertextArray[5]}
                        <span className="price"> {offertextArray[6]}</span> &nbsp;
                        {offertextArray[7]}
                        &nbsp;{offertextArray[8]}
                        &nbsp;{offertextArray[9]}
                        <span className="login-text"> {offertextArray[10]}</span>
                    </span>
                </span>
            </div>
        </div>
        <div className="body_price-section">
            <div className="original-price_row">
                <span className="original_price">&#8377;{original_fees}</span>
                <div className="discount-label red">
                <span>-{discount}%</span>
                </div>
            </div>
            <div className="discounted-price-row">
                <span className="discounted-price">&#8377;{discounted_fees}</span>
                <span className="per-semester">{fees_cycle}</span>
            </div>
            <div className="features">
                <span className="free">{amenties[0]}</span>
                <span className="dot">.</span>
                <span className="wifi">{amenties[1]}</span>
            </div>
        </div>
        </div>
    </div>
    </>
);
}