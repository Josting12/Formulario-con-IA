import { Link } from "react-router-dom"
const NoAccess = () => {
  return (
    <>
      <div className="register">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-1">
                                <div className="register-form">
                                    <div className="mb-5">
                                        <h1>NoAccess</h1>
                                        <p className="lead">Acceso Denegado</p>
                                       <Link to="/"><button type="button" className="btn btn-primary">Home</button>  </Link>
                                    </div>           
                            </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1 d-flex">
                        <div className="full-picture flex-grow-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default NoAccess