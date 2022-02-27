import React from 'react';
import thumb from '../../assets/images/intuitif-hris.png';

function TrafficHomeOne() {
    return (
        <section className="intuitif-traffic-area pt-140 pb-180">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="intuitif-traffic-title">
                            <span>Boost Performance Organization</span>
                            <h3 className="title">Performance Management intuitif</h3>
                            <p>
                                Optimalisasi Kinerja karyawan saat WFH, bukanlah hal mudah.
                                Performance Management mengendalikan semangat kerja karyawan dan mencapai tujuan perusahaan secara efektif dan efisien.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="intuitif-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Focus on Performance</h5>
                                    <p>OKR Merubah secara fundamental dimana kontrak kerja berdasarkan item pekerjaan bukan berdasarkan waktu.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="intuitif-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Flexible</h5>
                                    <p>Dengan fokus pada key result, Anda bisa bebas merencanakan jadwal kerja dan memverifikasi-nya baik bulanan, mingguan atau harian.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="intuitif-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Strategis</h5>
                                    <p>Anda bisa merubah dengan cepat kontrak kerja karyawan hanya dengan menuliskan goal spesific / target objective yang harus dicapai. Karyawan Anda bekerja secara otonomi untuk menemukan key result yang efektif.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="intuitif-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Transparant</h5>
                                    <p>OKR di desain Transparant sehingga tidak ada SILO, dan semua objective dan key result saling berkaitan mencapai satu / dua prioritas tujuan perusahaan.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
