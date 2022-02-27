import React from 'react';
import heroThumb2 from '../../assets/images/hero-shape-2.png';
import heroThumb8 from '../../assets/images/mobile_hris.png';

function HeroTerimakasih() {
    return (
        <>
            <section className="intuitif-hero-area intuitif-hero-6-area intuitif-hero-7-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="intuitif-hero-content intuitif-hero-content-6 intuitif-hero-content-7">
                                <h1 className="intuitif-title">Terimakasih, periksa email untuk tindak lanjut </h1>
                                <p>
                                    Kami akan segera menindaklanjuti permintaan Anda setelah email di konfirmasi.
                                </p>
                                <ul>
                                    <li>
                                        <a className="item-2" href="https://play.google.com/store/apps/details?id=com.hris.intuitif">
                                            <i className="fab fa-google-play"></i>
                                            <span>
                                                Available on the <span>Google Play</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="info"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="intuitif-hero-thumb-6">
                                <div
                                    className="thumb wow animated fadeInUp text-center"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumb8} alt="" />
                                    <div className="back-image">
                                        <img src={heroThumb2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroTerimakasih;
