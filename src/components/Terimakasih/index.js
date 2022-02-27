import React from 'react';
import useToggle from '../../Hooks/useToggle';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderTerimakasih from './HeaderTerimakasih';
import HeroTerimakasih from './HeroTerimakasih';

function Terimakasih() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderTerimakasih action={drawerAction.toggle} />
            <HeroTerimakasih />
            <FooterHomeOne />
        </>
    );
}

export default Terimakasih;
