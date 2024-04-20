import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Footer from '../components/Footer'
const ListChat = () => {
  const style1 = {width: "180px"}
  if (!sessionStorage.getItem("token"))
    return <Navigate to="/noaccess"></Navigate>

  const [data, setData] = useState([]);
  useEffect(() => {

    const getdata = async () => {
      try {
        const url = "http://localhost:8081/chatgpt/user/"+ sessionStorage.getItem("user_id")
        const config = { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") } };
        console.log(sessionStorage.getItem("token"))
        const response = await axios.get(url, config);
        console.log("la data linea 19",response)
        if (response.status == 200) {
          console.log("seteo de data", response)
          setData(response.data);
          
        }
        else
          Swal.fire({
            title: <strong>Vaya...</strong>,
            html: "<i>No se pudo Extraer la data</i>",
            icon: 'error'
          })

      } catch (error) {
        console.log(error)
      }
    }
    getdata()
    console.log("la data",getdata())

  }, [])

  const onclic = (data)=>{
    Swal.fire({
      html: data,
      icon: 'success'
  })
  }


  const style = {heigth: "50px"}
  return (
    <>
      <div className="profile">
        <div className="container">
            <div className="info">
                <div className="row">
                    <div className="col-12 col-md-4 text-center">
                        <img src="img/lorde.png" alt="Raised circle image" className="img-fluid rounded-circle shadow-lg" style={style1}/>
                    </div>
                    <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-lg-start">
                        <div className="d-flex flex-row align-items-start mt-3 mt-lg-0">
                            <div className="name">
                                <h2 className="mb-0">Nombre</h2>
                            </div>
                            <a href="#a" className="btn btn-primary btn-pill btn-sm ml-3 mt-1">Logout</a>
                        </div>
                        <div className="stats d-flex flex-row align-items-center align-items-lg-start text-center text-lg-left">
                            <div className="posts ml-2 ml-lg-0"><p className="lead"><b>134</b> Consultas</p></div>
                        </div>
                        <p className="lead mb-0 mt-2"><b>Usuario</b></p>
                        <p className="lead text-center text-lg-left">Este es tu historial de consultas que has realizado.</p>
                    </div>
                </div>
            </div>
                <div className="navigation d-flex justify-content-center">
                <ul className="nav nav-primary nav-tabs mt-3 d-flex flex-column flex-md-row">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#photos">
                    <i className="fas fa-th"></i> Consultas
                    </a>
                </li>
                
                </ul>
                </div>
            <div className="profile-tabs tab-content">
                <div className="tab-pane fade show active" id="photos">
                            <div className="row">
                                {data.map((item) => (
                                <div className="w-100 p-3">
                                <div className="component">
                                                <div className="card ">
                                                    <div className="card-header">
                                                    
                                                    </div>
                                                <div className="card-body">
                                                    <span className="badge badge-secondary mb-2">Consulta</span>
                                                    <h4 className="card-title">Prompt:<span>{item.message}</span> </h4>
                                                    <p className="card-text"><span>{item.response}</span></p>
                                                </div>
                                                
                                                </div>
                                </div>
                                </div>
                                ))}

                            </div>
                            
                </div>
               
                
            </div>

            </div>

        </div>
       <Footer></Footer> 
    </>
  )
}

export default ListChat