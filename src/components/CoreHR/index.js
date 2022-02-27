import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import AboutCoreHR from './AboutCoreHR';
import FooterCoreHR from './FooterCoreHR';
import HeaderCoreHR from './HeaderCoreHR';
import HeroCoreHR from './HeroCoreHR';
import ServicesCoreHR from './ServicesCoreHR';
import PersonaliaCoreHR from './PersonaliaCoreHR';
import SignupCoreHR from './SignupCoreHR';

function CoreHR() {
    const [drawer, setDrawer] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <HeaderCoreHR drawer={drawer} action={setDrawer.toggle} />
            <HeroCoreHR />
            <AboutCoreHR />
            <ServicesCoreHR />
            <PersonaliaCoreHR />
            <SignupCoreHR className="intuitif-signup-8-area" />
            <FooterCoreHR />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default CoreHR;
