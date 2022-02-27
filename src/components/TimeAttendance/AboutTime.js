import React from 'react';
import thumb5 from '../../assets/images/barus.png';

function AboutTime() {
    return (
        <>
            <section className="intuitif-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title mb-30">
                                <h3 className="intuitif-title">
                                    Kelola waktu bisnis Anda <br />
                                    dalam satu sentuhan
                                </h3>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="service-thumb">
                            <img src={thumb5} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutTime;
