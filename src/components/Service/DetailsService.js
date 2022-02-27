import React from 'react';
import thumb from '../../assets/images/service.jpg';

function DetailsService() {
    return (
        <>
            <section className="intuitif-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Implementasi Cepat
                                        </li>
                                        <li>
                                            <i className="fal fa-tag"></i>intuitif dan Mobile
                                        </li>
                                        <li>
                                            <i className="fal fa-user-friends"></i>Inovasi yang Cepat
                                        </li>
                                        <li>
                                            <i className="fal fa-bookmark"></i>Core Configurability
                                        </li>
                                        <li>
                                            <i className="fal fa-globe"></i>Data Aman
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-download"></i>
                                        <span>Download Brosur</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">Layanan apa yang kami berikan</h3>
                                    <p>
                                        Kami memberikan layanan premium tanpa dipungut biaya. Anda bisa memanggil kami on-site untuk memberikan dukungan terbaik untuk bisa menciptakan layanan SDM yang maksimal
                                    </p>
                                    <span>
                                        Sebagai komitmen profesional, kami akan melakukan survey regulasi internal, kebutuhan, bisnis proses, dan budaya sampai dengan nilai-nilai perusahaan. Kami juga membantu untuk melakukan proses migrasi data karyawan dan semua detail aturannya.
                                    </span>
                                    <p>
                                        Sebagai tambahan, kami juga akan melalukan training 2x secara gratis. Dan melakukan pendampingan pada tim teknis di perusahaan Anda jika dibutuhkan support atau pertanyaan tertentu. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
