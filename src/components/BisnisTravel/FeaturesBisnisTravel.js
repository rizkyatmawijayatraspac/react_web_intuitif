import React from 'react';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';
import trafficThumb from '../../assets/images/advance.png';

function FeaturesBisnisTravel() {
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
                                    Manfaat Advance <br /> dalam bisnis travel
                                </h3>
                                <p>
                                    Pengajuan Advance mudah dalam satu form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="intuitif-features-boxes ">
                                <div className="intuitif-features-box-item intuitif-features-box-5-item">
                                    <h4 className="title">Biaya akomodasi perjalanan terencana</h4>
                                    <p>Setiap item biaya rinci dan spesifik, menghindari ambigu dan manipulasi</p>
                                </div>
                                <div className="intuitif-features-box-item item-2 intuitif-features-box-5-item">
                                    <h4 className="title">Cost terkendali</h4>
                                    <p>Gunakan form advance untuk mengendalikan dan menghindari cost-cost yang tidak perlu.</p>
                                </div>
                                <div className="intuitif-features-box-item item-3 intuitif-features-box-5-item">
                                    <h4 className="title">Bisa dipertanggung jawabkan</h4>
                                    <p>Setelah advance di approve, karyawan Anda akan diminta untuk report expense perjalanan Dinasnya untuk akuntabilitas.</p>
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

export default FeaturesBisnisTravel;
