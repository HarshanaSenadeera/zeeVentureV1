import logo from '../Images/Logo.png';
export const Navbar = () => {

    return(

        <>

            {/*Full Screen Search Start*/}
            <div className="modal fade" id="searchModal" tabindex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{background: '(9, 30, 62, .7)'}}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{maxWidth: '600px'}}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Full Screen Search End*/}

           {/* Navbar & Carousel Start*/}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        <h1 className="m-0"><img src={logo} style={{height:'80px'}}/>{/*Zeeventures*/}</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="about" className="nav-item nav-link">About</a>
                            <a href="service" className="nav-item nav-link">Services</a>
                            {/*<div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>*/}
                            {/*<div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                    <a href="feature.html" className="dropdown-item">Our features</a>
                                    <a href="member" className="dropdown-item">Team Members</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="quote.html" className="dropdown-item">Free Quote</a>
                                </div>
                            </div>*/}
                            <a href="contact" className="nav-item nav-link">Contact</a>
                        </div>
                        <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                        <a href="contact" className="btn btn-primary py-2 px-4 ms-3">Contact US </a>
                    </div>
                </nav>


            </div>
            {/*Navbar & Carousel End*/}



        </>
)
}
