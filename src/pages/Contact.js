import {useState} from "react";
import emailjs from 'emailjs-com';
export const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        massage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_xn1emjj',       // Replace with your EmailJS service ID
            'template_wr9pk6c',      // Replace with your EmailJS template ID
            formData,
            'i2ohIJnOrox0WdZh3'           // Replace with your EmailJS user ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again later.');
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            massage: '',
        });
    };

    return(

        <>

            <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
                        <a href="" className="h5 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="" className="h5 text-white">Contact</a>
                    </div>
                </div>
            </div>

            {/*Contact Start*/}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Call to ask any question</h5>
                                    <h4 className="text-primary mb-0">+94 77 242 7603</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Email to get free quote</h5>
                                    <h4 className="text-primary mb-0">zeeventures.info@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px' , height: '60px'}}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">Visit our office</h5>
                                    <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input className="form-control border-0 bg-light px-4"
                                               placeholder="name"
                                               onChange={handleChange}
                                               type="text"
                                               id="name"
                                               name="name"
                                               value={formData.name}
                                               style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            style={{height: '55px'}}/>
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            id="massage"
                                            name="massage"
                                            className="form-control border-0 bg-light px-4 py-3"
                                            rows="4"
                                            placeholder="Message"
                                            value={formData.massage}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <iframe className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0" style={{minHeight: '350px',  border:0}} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/*Contact End*/}

        </>
    )
}
