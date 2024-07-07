import {ServiceSub} from "../component/ServiceSub";

export const Home = () => {

    return(

        <>

            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &
                                    Innovative</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative
                                    Digital Solution</h1>
                                <a href="quote.html"
                                   className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                    Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &
                                    Innovative</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative
                                    Digital Solution</h1>
                                <a href="quote.html"
                                   className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                    Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/*Facts Start*/}
            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-users text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Happy Clients</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-primary mb-0">Projects Done</h5>
                                    <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-award text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Win Awards</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Facts Start*/}


            {/*About Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                                <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                            </div>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+94 77 242 7603</h4>
                                </div>
                            </div>
                            <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                        </div>
                        <div className="col-lg-5" style={{minHeight: '500px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* About End*/}


            {/*Features Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                        <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px' , height: '60px'}}>
                                        <i className="fa fa-cubes text-white"></i>
                                    </div>
                                    <h4>Best In Industry</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px' , height: '60px'}}>
                                        <i className="fa fa-award text-white"></i>
                                    </div>
                                    <h4>Award Winning</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: '350px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px' , height: '60px'}}>
                                        <i className="fa fa-users-cog text-white"></i>
                                    </div>
                                    <h4>Professional Staff</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: '60px' , height: '60px'}}>
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Features Start*/}


           {/* Service Start*/}


            <ServiceSub/>
            {/*Service End*/}


            {/*Pricing Plan Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                        <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Basic Plan</h4>
                                    <small className="text-uppercase">For Small Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px' , lineHeight: '45px'}}>$</small>49.00<small
                                        className="align-bottom" style={{fontSize: '16px' , lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Standard Plan</h4>
                                    <small className="text-uppercase">For Medium Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px' , lineHeight: '45px'}}>$</small>99.00<small
                                        className="align-bottom" style={{fontSize: '16px' , lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="bg-light rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">Advanced Plan</h4>
                                    <small className="text-uppercase">For Large Size Business</small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small className="align-top" style={{fontSize: '22px' , lineHeight: '45px'}}>$</small>149.00<small
                                        className="align-bottom" style={{fontSize: '16px' , lineHeight: '40px'}}>/ Month</small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                    <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Pricing Plan End*/}


            {/*Quote Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                                <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                            </div>
                            <div className="row gx-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                                </div>
                            </div>
                            <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                            <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-xl-12">
                                            <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: '55px'}}/>
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: '55px'}}/>
                                        </div>
                                        <div className="col-12">
                                            <select className="form-select bg-light border-0" style={{height: '55px'}}>
                                                <option selected>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Quote End*/}


            {/*Testimonial Start*/}

            {/*<Testimonial/>*/}
            {/*Testimonial End*/}


            {/*Team Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="team">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                        <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Team End*/}



           {/* Blog Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                                        <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                                        <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="blog-item bg-light rounded overflow-hidden">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                                        <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex mb-3">
                                        <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 className="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Blog Start*/}

        </>
    )
}
