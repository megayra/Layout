import React from 'react';
import MainSection from '../components/MainSection';
import PromoContainer from '../components/promo-banner/PromoContainer';
import Categories from '../components/Categories';
import Popular from '../components/Popular';
import Providers from '../components/Providers';
import Promotions from '../components/promotions/Promotions';

class Home extends React.Component {

    render() {
        return <>
            <div className="row">
                <div className="col">
                    <MainSection/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromoContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Categories/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Popular/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Promotions/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Providers/>
                </div>
            </div>
        </>
    }
}



export default Home;


 