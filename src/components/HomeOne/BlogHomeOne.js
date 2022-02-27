import React from 'react';
import blogOne from '../../assets/images/blog1.png';
import blogTwo from '../../assets/images/blog2.png';
import blogThree from '../../assets/images/blog3.jpg';

function BlogHomeOne() {
    return (
        <>
            <section className="intuitif-blog-area pt-90 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-section-title text-center">
                                <h3 className="intuitif-title">Insight Intuitif</h3>
                                <p>Dapatkan insight dan regulasi HR Terbaru</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="intuitif-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={blogOne} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>March 10, 2022</li>
                                            <li>
                                                <a href="#">Artikel</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news">
                                            Transformasi Absensi dari Mesin Fingerprint ke Teknologi Touchless di Masa Covid-19
                                        </a>
                                    </h3>
                                    <a href="#">
                                        Selanjutnya <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="intuitif-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={blogTwo} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>March 10, 2022</li>
                                            <li>
                                                <a href="#">Regulasi HR Terbaru</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news">
                                            Pahami Peraturan Baru Terkait Ketenagakerjaan
                                        </a>
                                    </h3>
                                    <a href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="intuitif-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src={blogThree} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>March 10, 2022</li>
                                            <li>
                                                <a href="#">Berita</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="/news/single-news">
                                            Peraturan New Normal Menkes: Pelaku Usaha Perlu Sediakan Vitamin C
                                        </a>
                                    </h3>
                                    <a href="#">
                                        Selanjutnya <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
