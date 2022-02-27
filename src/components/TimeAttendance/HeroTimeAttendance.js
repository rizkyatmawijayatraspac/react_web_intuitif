import React, { useState } from 'react';
import heroThumb from '../../assets/images/mobile_hris.png';
import PopupVideo from '../PopupVideo';

function HeroTimeAttendance() {
    const [showVideo, setVideoValue] = useState(false);
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };
    return (
        <>
            {showVideo && (
                <PopupVideo
                    videoSrc="//www.youtube.com/embed/3qk9S0XJTcU?autoplay=1"
                    handler={(e) => handleShowVideo(e)}
                />
            )}
            <section className="intuitif-hero-area intuitif-hero-5-area intuitif-hero-3-area">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-10">
                            <div className="intuitif-hero-content text-center">
                                <h1 className="intuitif-title">
                                    Tech that works hard so you can work smart{' '}
                                </h1>
                                <p>
                                    Biarkan teknologi kami bekerja keras untuk Anda <br />
                                    Anda bisa luangkan banyak waktu untuk mefokuskan energi yang lebih strategis.
                                </p>
                                <div className="hero-btns">
                                    <a className="main-btn" href="#">
                                        Get a Quote
                                    </a>
                                    <a
                                        onClick={(e) => handleShowVideo(e)}
                                        className="intuitif-video-popup"
                                        href="https://www.youtube.com/watch?v=3qk9S0XJTcU"
                                    >
                                        <i className="fas fa-play"></i> Watch the trailer
                                    </a>
                                </div>
                                <div
                                    className="thumb mt-80 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <img src={heroThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroTimeAttendance;
