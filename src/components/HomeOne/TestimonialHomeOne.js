import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import user1 from '../../assets/images/bmt.png';
import user2 from '../../assets/images/inh.png';
import user3 from '../../assets/images/primareadymix.png';

function TestimonialHomeOne() {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section className="intuitif-testimonial-area pt-100 pb-160" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="intuitif-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="intuitif-testimonial-item text-center">
                                    <div className="author-info">
                                        <img className="kotak_user" src={user1} alt="" />
                                        <h5 className="title">Rifa Arifin - BMT Amanah Syariah</h5>
                                        <span></span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Dari A sampai Z, semua tersentuh dan dimudahkan dalam proses dan pertumbuhan bisnis. Perhitungan payroll cepet, semua karyawan bahagia
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="intuitif-testimonial-item text-center">
                                    <div className="author-info">
                                        <img className="kotak_user2" src={user2} alt="" />
                                        <h5 className="title">Muhammad Almaqdisi - Founder INH</h5>
                                        <span>Feburari 6, 2021</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Lebih mudah manajemen organisasi sekarang, sekarang bisa lebih fokus ke hal yang lebih strategis
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="intuitif-testimonial-item text-center">
                                    <div className="author-info">
                                        <img className="kotak_user3" src={user3} alt="" />
                                        <h5 className="title">Rifky Firdaus - HRD Prima Readymix Indonesia</h5>
                                        <span>September 19, 2020</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                           Shifting, Roaster Pegawai, dan perhitungan gaji mudah. Tidak perlu input manual juga karena semua terintegrasi.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
