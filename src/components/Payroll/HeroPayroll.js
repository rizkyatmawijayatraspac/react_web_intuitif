import React from 'react';
import HeroDot from '../../assets/images/hero-dot.png';
import heroThumb from '../../assets/images/payroll.png';
import shape from '../../assets/images/shape/shape-10.png';

function HeroPayroll() {
    return (
        <>
            <section className="intuitif-hero-area intuitif-hero-4-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="intuitif-hero-content intuitif-hero-content-4">
                                <span></span>
                                <h4 className="intuitif-title">Payroll khusus untuk karyawan</h4>
                                <p>
                                    Kelola Kebijakan Payroll yang berbeda-beda untuk setiap karyawan
                                </p>
                                <a className="main-btn" href="#">
                                    Let’s Talk
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="intuitif-hero-thumb intuitif-hero-thumb-4">
                                <img src={heroThumb} alt="" />
                                <div className="hero-dot">
                                    <img src={HeroDot} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shape} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroPayroll;
