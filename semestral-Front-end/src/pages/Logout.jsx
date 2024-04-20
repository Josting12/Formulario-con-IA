import { Navigate } from "react-router-dom"
import { useState } from "react"
const Logout = ({onLogout}) => {
  const [exit, setExit]=useState(false)
    const onclose=()=>{
        sessionStorage.clear()
        onLogout() 
        setExit(true)
    }
    if (exit)  
        return <Navigate to="/"></Navigate>
  return (
      <>
      <div className="register">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-1">
                                <div className="register-form">
                                    <div className="mb-5">
                                        <h1>Logout</h1>
                                        <p className="lead">Has cerrado sesion vuelte pronto.</p>
                                       <button type="button" className="btn btn-primary" onClick={onclose}>Home</button>  
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

export default Logout