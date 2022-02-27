// import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Cart from '../Cart';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import ServicesHomeThree from '../HomeThree/ServicesHomeThree';
import FeaturesHomeTwo2 from '../HomeTwo/FeaturesHomeTwo2';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo';
import Drawer from '../Mobile/Drawer';
import SearchModule from '../SearchModule';
import FooterPayroll from './FooterPayroll';
import HeaderPayroll from './HeaderPayroll';
import AboutPayroll from './AboutPayroll';
import AboutPayroll2 from './AboutPayroll2';
import HeroPayroll from './HeroPayroll';

function Payroll() {
    const [search, searchAction] = useToggle(false);
    const [cart, cartAction] = useToggle(false);
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <SearchModule value={search} searchToggle={searchAction.toggle} />
            <Cart value={cart} action={cartAction.toggle} />
            <HeaderPayroll
                action={drawerAction.toggle}
                cartToggle={cartAction.toggle}
                searchToggle={searchAction.toggle}
            />
            <HeroPayroll />
            <AboutPayroll />
            <ServicesHomeThree />
            <FeaturesHomeTwo />
            <AboutPayroll2 />
            <FeaturesHomeTwo2 />
            <TestimonialHomeOne />
            <FooterPayroll />
            <BackToTop className="back-to-top-5" />
        </>
    );
}

export default Payroll;
