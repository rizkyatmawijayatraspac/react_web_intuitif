import React from 'react';
import iconOne from '../../assets/images/icon/1.png';

function ServicesHomeThree() {
    return (
        <>
            <section className="intuitif-service-area intuitif-service-3-area pt-195 pb-100" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="intuitif-section-title text-center">
                                <h3 className="intuitif-title">Kenapa menggunakan Payroll Intuitif</h3>
                                <p>
                                    Atur kebijakan unik perusahaan secara tepat dan cepat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                intuitif-single-service intuitif-single-services-3
                text-center
                mt-30
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="intuitif-title">Update regulasi berkala</h4>
                                <p>Anda akan mendapatkan notif jika ada perubahan regulasi yang mempengaruhi proses perhitungan payroll.</p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                intuitif-single-service intuitif-single-services-3
                text-center
                mt-30
                item-2
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="intuitif-title">Perbarui data hari libur otomatis</h4>
                                <p>Anda tidak perlu input manual data hari libur, akan otomatis terinput setiap awal tahun</p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                intuitif-single-service intuitif-single-services-3
                text-center
                mt-30
                item-3
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="intuitif-title">Custom Komponen Payroll mudah</h4>
                                <p>Anda bisa dengan mudah mengatur komponen payroll apa saja yang berlaku di perusahaan Anda</p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="
                intuitif-single-service intuitif-single-services-3
                text-center
                mt-30
                item-4
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="icon">
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="intuitif-title">Struktur dan Skala Upah</h4>
                                <p>Mengatur basic salary, stuktur dan skala upah dengan mudah.</p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
