import React from 'react';
import serviceThumb from '../../assets/images/personel.png';

function PersonaliaCoreHR() {
    return (
        <>
            <section
                className="intuitif-services-2-area intuitif-services-8-area pt-90 pb-55"
                id="service"
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="intuitif-section-title">
                                <h3 className="intuitif-title">Kelola Data Karyawan dalam satu dashboard.</h3>
                                <p>Responsif Desain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="service-thumb">
                                <img src={serviceThumb} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="row">

                                <div className="col-lg-12 col-md-12">
                                    <div
                                        className="
                    intuitif-single-service-2 intuitif-single-service-about
                    item-2
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="400ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-code-merge" />
                                        </div>
                                        <h4 className="title">Kelola Data Personalia lebih lengkap</h4>
                                        <p>
                                            Kelola seluruh data yang berhubungan dengan karyawan mudah dalam satu ruang
                                        </p>
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

export default PersonaliaCoreHR;
