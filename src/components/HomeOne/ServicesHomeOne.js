import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`intuitif-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="intuitif-section-title text-center">
                            <h3 className="intuitif-title">
                            #WFA<br />Work From Anywhere.
                            </h3>
                            <p>Kami memberikan solusi HR Tech Terkini. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="intuitif-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="intuitif-title">A.I. in HR</h4>
                            <p>Dapatkan semua layanan HR dan insight lebih mendalam dengan sentuhan AI bernama Ruika.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="intuitif-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="intuitif-title">Core Configurability</h4>
                            <p>Konfigurasi Bisnis proses dan persetujuan dalam satu aplikasi tanpa perlu custom lagi.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="intuitif-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="intuitif-title">Security & Privacy</h4>
                            <p>Data privasi perusahaan Anda aman dengan tingkat security berlapis dan two factor verification</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="intuitif-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="intuitif-title">Swift implementation</h4>
                            <p>Sudah support berbagai case bisnis dan regulasi. Terima bersih dan siap pakai dalam waktu dekat</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
