import React from 'react';

const Popular = props => {
    const elements = ['Live dealer', 'Poker', 'Live dealer', 'Poker', 'Live dealer', 'Poker', 'Live dealer', 'Poker'];
    return (
        <div className="popular-wrapper">
            <h3>Popular</h3>
            <div className="popular-container d-flex">
                <ul className="popular-list scrollbar-custom d-flex">
                    <li className="single-item">
                        <a href="#" className="d-flex">
                            <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1"/>
                            <div className="popular-info d-flex align-items-center">
                                Live dealer
                            </div>
                        </a>
                    </li>
                    {elements.map((value, index) => {
                        return <li key={index} className="single-item">
                                    <a href="#" className="d-flex">
                                        <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1"/>
                                        <div className="popular-info d-flex align-items-center">
                                            {value}
                                        </div>
                                    </a>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Popular