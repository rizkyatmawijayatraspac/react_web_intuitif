import React from 'react';
import payroll3 from '../../assets/images/payroll-componen.png';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';

function FeaturesHomeTwo2() {
    return (
        <>
            <section className="intuitif-features-area-2 pt-90 pb-100" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title intuitif-section-title-2 text-center">
                                <h3 className="intuitif-title">
                                    Struktur and Skala Upah <br />
                                    mudah dikelola
                                </h3>
                                <p>
                                    Kelola Struktur and Skala Upah sesuai jenjang pangkat perusahaan
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 align-items-center">

                        <div className="col-lg-12">
                            <div
                                className="intuitif-features-thumb wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <img src={payroll3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-shape-1">
                    <img src={shape15} alt="" />
                </div>
                <div className="features-shape-2">
                    <img src={shape14} alt="" />
                </div>
                <div className="features-shape-3">
                    <img src={shape13} alt="" />
                </div>
            </section>
        </>
    );
}

export default FeaturesHomeTwo2;
