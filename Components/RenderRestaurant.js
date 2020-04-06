import React from 'react';

function RenderRestaurant(props) {
    return (
        <div className="Restaurant">
            <div className="resImg">
                <img src={props.restaurant.imgUrl}
                onClick={() => {props.renderRestComponent(!props.initRestaurant); props.renderCalendar(true);}} 
                height="160" width="255"/>
            </div>
            <div className="RestaurantHeader">
                <p >{props.restaurant.name}</p>
            </div>
            <div className="rating">
                <p >{props.restaurant.rating}/5</p>
            </div>
            <div className ="rDescription">
                <p >{props.restaurant.description}</p>
            </div>
        </div>
    )
}

export default RenderRestaurant

