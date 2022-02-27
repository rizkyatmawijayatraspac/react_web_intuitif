import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import CoreHR from './components/CoreHR';
import Payroll from './components/Payroll';
import TimeAttendance from './components/TimeAttendance';
import BisnisTravel from './components/BisnisTravel';
import HomeOne from './components/HomeOne';
import Terimakasih from './components/Terimakasih/index';
import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
import Hometwo from './components/HomeTwo';
import News from './components/News';
import SingleNews from './components/News/SingleNews';
import Service from './components/Service';

function Routes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`intuitif-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`intuitif-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={HomeOne} />
                            <Route exact path="/home-two" component={Hometwo} />
                            <Route exact path="/home-three" component={HomeThree} />
                            <Route exact path="/products/time-and-attendance" component={TimeAttendance} />
                            <Route exact path="/products/travel-and-advance" component={BisnisTravel} />
                            <Route exact path="/products/payroll" component={Payroll} />
                            <Route exact path="/home-six" component={HomeSix} />
                            <Route exact path="/terimakasih" component={Terimakasih} />
                            <Route exact path="/products/core-hr" component={CoreHR} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/news/single-news" component={SingleNews} />
                            <Route exact path="/service" component={Service} />
                            <Route exact path="/about-us" component={AboutUs} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/error" component={Error} />
                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default Routes;
