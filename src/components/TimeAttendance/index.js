import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import FooterCoreHR from '../CoreHR/FooterCoreHR';
import ProjectHomeThree from '../HomeThree/ProjectHomeThree';
import Drawer from '../Mobile/Drawer';
import FeaturesTimeAttendance from './FeaturesTimeAttendance';
import AboutTime from './AboutTime';
import HeaderTimeAttendance from './HeaderTimeAttendance';
import HeroTimeAttendance from './HeroTimeAttendance';

function TimeAttendance() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderTimeAttendance action={drawerAction.toggle} />
            <HeroTimeAttendance />
            <ServicesHomeOne className="pt-190" />
            <AboutTime />
            <FeaturesTimeAttendance />
            <TestimonialHomeOne />
            <ProjectHomeThree className="home-four-project" />
            <FooterCoreHR className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default TimeAttendance;
