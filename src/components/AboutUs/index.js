import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupCoreHR from '../CoreHR/SignupCoreHR';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderAbout from './HeaderAbout';
import HeroAbout from './HeroAbout';
import ServicesAbout from './ServicesAbout';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <SignupCoreHR />
            <FooterHomeOne className="intuitif-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
