import React from 'react';
import payroll2 from '../../assets/images/payroll_master.png';

function AboutPayroll2() {
    return (
        <>
            <section className="intuitif-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title mb-30">
                                <h3 className="intuitif-title">
                                    Drag and drop komponen payroll <br />
                                    sesuka hati Anda
                                </h3>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="service-thumb">
                            <img src={payroll2} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutPayroll2;
