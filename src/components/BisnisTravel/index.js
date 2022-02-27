import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne';
import TestimonialHomeOne from '../HomeOne/TestimonialHomeOne';
import FooterCoreHR from '../CoreHR/FooterCoreHR';
import ProjectHomeThree from '../HomeThree/ProjectHomeThree';
import Drawer from '../Mobile/Drawer';
import FeaturesBisnisTravel from './FeaturesBisnisTravel';
import AboutTime from './AboutTime';
import AboutTime2 from './AboutTime2';
import HeaderBisnisTravel from './HeaderBisnisTravel';
import HeroBisnisTravel from './HeroBisnisTravel';

function BisnisTravel() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderBisnisTravel action={drawerAction.toggle} />
            <HeroBisnisTravel />
            <ServicesHomeOne className="pt-190" />
            <AboutTime />
            <FeaturesBisnisTravel />
            <AboutTime2 />
            <TestimonialHomeOne />
            <ProjectHomeThree className="home-four-project" />
            <FooterCoreHR className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default BisnisTravel;
