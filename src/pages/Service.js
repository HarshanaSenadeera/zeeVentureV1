import {ServiceSub} from "../component/ServiceSub";

export const Service = () => {

    return(

        <>

            <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Services</h1>
                        <a href="" className="h5 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="" className="h5 text-white">Services</a>
                    </div>
                </div>
            </div>

            <ServiceSub/>
        </>
    )
}
