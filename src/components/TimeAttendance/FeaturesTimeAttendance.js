import React from 'react';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';
import trafficThumb from '../../assets/images/cuti.png';

function FeaturesTimeAttendance() {
    return (
        <>
            <section
                className="intuitif-features-area-2 intuitif-features-area-5 pt-90 pb-100"
                id="features"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title text-center">
                                <h3 className="intuitif-title">
                                    Pengajuan dan approval mudah <br /> dari handphone Anda
                                </h3>
                                <p>
                                    The full monty spiffing good time no biggie cack grub fantastic.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="intuitif-features-boxes ">
                                <div className="intuitif-features-box-item intuitif-features-box-5-item">
                                    <h4 className="title">Terintegrasi dengan Mobile</h4>
                                    <p>Pengajuan Cuti dan Approval Cuti bisa dari mana saja</p>
                                </div>
                                <div className="intuitif-features-box-item item-2 intuitif-features-box-5-item">
                                    <h4 className="title">Employee Self Service</h4>
                                    <p>Berdayakan karyawan Anda untuk menggunakan teknologi yang mereka inginkan.</p>
                                </div>
                                <div className="intuitif-features-box-item item-3 intuitif-features-box-5-item">
                                    <h4 className="title">Monitor Kehadiran mudah</h4>
                                    <p>Monitor produktivitas jam kerja ataupun monitor kehadiran mudah bisa dari mobile Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="intuitif-features-thumb wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <img src={trafficThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-shape-1">
                    <img src={shape13} alt="" />
                </div>
                <div className="features-shape-2">
                    <img src={shape14} alt="" />
                </div>
                <div className="features-shape-3">
                    <img src={shape15} alt="" />
                </div>
            </section>
        </>
    );
}

export default FeaturesTimeAttendance;
