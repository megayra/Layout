import React from 'react';

const Providers = props => {
    const elements = ['https://heathmont.imgix.net/bitcasino/images/providers/lotusgaming.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/blueprint.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/spinmatic.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1','https://heathmont.imgix.net/bitcasino/images/providers/lotusgaming.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/blueprint.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/spinmatic.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/spinmatic.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1', 
    'https://heathmont.imgix.net/bitcasino/images/providers/spinmatic.png?auto=compress%2Cformat&amp;ixlib=react-9.0.1'];
    return (
        <div className="providers-wrapper">
            <h3>Game Providers</h3>
            <div className="providers-container d-flex">
                <ul className="providers-list scrollbar-custom d-flex">
                    {elements.map((value, index) => {
                            return <li key={index} className="single-provider">
                            <a href="#">
                                <img src={value}/>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Providers