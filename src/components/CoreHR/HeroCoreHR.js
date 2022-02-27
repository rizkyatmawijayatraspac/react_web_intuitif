import React from 'react';
import hero from '../../assets/images/hero-thumb-9.png';
import shapeOne from '../../assets/images/shape/1.png';
import shapeTwo from '../../assets/images/shape/2.png';
import shapeThree from '../../assets/images/shape/3.png';
import shapeFour from '../../assets/images/shape/4.png';

function HeroCoreHR() {
    return (
        <>
            <section className="intuitif-hero-area intuitif-hero-8-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="intuitif-hero-content intuitif-hero-content-8">
                                <h1 className="intuitif-title">Core That Takes The Shape of Your Organization</h1>
                                <p>
                                    Dapatkan sistem kendali yang kuat yang menggerakkan setiap sistem lain di HXMS Anda sehingga Anda diberdayakan untuk berbuat lebih banyak untuk orang-orang dan bisnis Anda.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Let's Talk</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="intuitif-hero-thumb-6">
                                <div
                                    className="thumb text-center wow animated fadeInUp"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-8-shape-1">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="home-8-shape-2">
                    <img src={shapeFour} alt="" />
                </div>
                <div className="home-8-shape-3">
                    <img src={shapeOne} alt="" />
                </div>
                <div className="home-8-shape-4">
                    <img src={shapeTwo} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroCoreHR;
