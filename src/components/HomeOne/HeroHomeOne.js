import React from 'react';
import heroThumbOne from '../../assets/images/mobile_hris.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeFour from '../../assets/images/shape/shape-4.png';

function HeroHomeOne() {
    return (
        <>
            <section className="intuitif-hero-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="intuitif-hero-content">
                                <span>Human Experience Management System</span>
                                <h1 className="intuitif-title">
                                    Software HR & Payroll Indonesia
                                </h1>
                                <p>
                                    Revolusi HR Tech yang berfokus pada experience Karyawan agar karyawan lebih bahagia dan terlibat untuk bertumbuh bersama perusahaan.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-hand-point-right yellow"></i>Mari Konsultasi
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="https://play.google.com/store/apps/details?id=com.hris.intuitif">
                                            <i className="fab fa-google-play" /> Download for
                                            Android
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="intuitif-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroThumbOne} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
