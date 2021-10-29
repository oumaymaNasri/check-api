import React from 'react'
import './UserCard.css'

const UserCard = ({card}) => {
    return (
        <div>
            <div id="container">	
            <div className="product-details">
                <h1>{card.name} {card.username}</h1>
                <span className="hint-star star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" />
                </span>
                <p className="information">{card.email}</p>
                <div className="control">
                <button className="btn">
                    <span className="price">{card.address.street}</span>
                    {/* 		shopping cart icon*/}
                    <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" />{card.phone}</span>
                    <span className="buy">{card.website}</span>
                </button>
                </div>
            </div> 
            <div className="product-image">
                <div className="info">
                <h2>{card.company.name}</h2>
                <ul>
                    <li><strong></strong></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserCard
