import React from 'react';
import thumb from '../../assets/images/fun-fact-thumb.png';

function HeroService() {
    return (
        <>
            <div className="intuitif-page-title-area intuitif-page-service-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intuitif-page-title-item">
                                <span>Implementasi Cepat</span>
                                <h3 className="title">
                                    Kami melalukan konfigurasi, <br /> Anda tinggal siap pakai.
                                </h3>
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroService;
