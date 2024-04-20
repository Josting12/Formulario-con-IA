import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const FormularioChat = () => {

    if (!sessionStorage.getItem("token"))
        return <Navigate to="/noaccess"></Navigate>

    const style1 = {backgroundColor: '#611F6A'}
    const style2 = {backgroundColor: '#071D5C'}
    const style3 = {backgroundColor: '#007A5B'}
    const style4 = {backgroundColor: '#1264A4'}
    const style5 = {backgroundColor: '#ECB22F'}
    const style6 = {backgroundColor: '#E01E5B'}
    const style7 = {backgroundColor: '#212529'}
    const style8 = {backgroundColor: '#EBEAEB'}

    const [chatgpt,setChatgpt] = useState({message:"",message2:""})
    const [respuesta, setRespuesta] = useState('')
    

    const onchange = (event)=>{
        setChatgpt({...chatgpt,[event.target.name]:event.target.value})
        console.log("cambiando",chatgpt)
    }

    const onsubmit = async (event)=>{
        event.preventDefault()
        try{
            const url = "http://localhost:8081/chatgpt"
            const data = chatgpt
            console.log("metodo submit",data)
            const config = {headers:{'Content-Type':'application/json',
                                    'Authorization': 'Bearer ' + sessionStorage.getItem("token")}}
                                    console.log("verificar token", sessionStorage.getItem("token"))
            const response = await axios.post(url,data,config)
            console.log("response: ", response)
            if(response.status == 200)
                setRespuesta(response.data)
                console.log("Seteo de response: ", response)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
        
        <div className="page-hero bg-primary text-white" id="banner">
		<div className="bubbles d-none d-md-block">

        <div className="bubble bubble-1 rotate-bubble bg-warning"></div>
        <div className="bubble bubble-2 bubble-bottom-right bg-danger rotate-bubble"></div>
        <div className="bubble bubble-3 bubble-top-right bg-warning rotate-bubble"></div>
        <div className="bubble bubble-4 bubble-top-left bg-info rotate-bubble"></div>
        <div className="bubble bubble-5 bg-info rotate-bubble"></div>
        <div className="bubble bubble-6 bubble-bottom-right bg-danger rotate-bubble"></div>
        <div className="bubble bubble-7 bubble-top-right bg-success rotate-bubble"></div>
        <div className="bubble bubble-8 bubble-top-left bg-success rotate-bubble"></div>
        <div className="bubble bubble-9 bg-warning rotate-bubble"></div>
        <div className="bubble bubble-10 bg-danger rotate-bubble"></div>
        <div className="bubble bubble-11 bubble-bottom-right bg-info rotate-bubble"></div>
        <div className="bubble bubble-12 bubble-top-right bg-success rotate-bubble"></div>
        <div className="bubble bubble-13 bubble-top-left bg-success rotate-bubble"></div>

        <div className="circle circle-1 bg-light rotate-circle"></div>
        <div className="circle circle-2 bg-success rotate-circle"></div>
        <div className="circle circle-3 bg-danger rotate-circle"></div>
        <div className="circle circle-4 bg-info rotate-circle"></div>
        <div className="circle circle-5 bg-success rotate-circle"></div>
        <div className="circle circle-6 bg-info rotate-circle"></div>
        <div className="circle circle-7 bg-warning rotate-circle"></div>
        <div className="circle circle-8 bg-white rotate-circle"></div>
        <div className="circle circle-9 bg-warning rotate-circle"></div>
        <div className="circle circle-10 bg-danger rotate-circle"></div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8  offset-lg-2 text-center">
                    <div className="title">
                        <h1 className="display-2 text-white">Ingresa un color</h1>
                        <form onSubmit={onsubmit} className="form-subscribe form-inline mb-3" >
                            <div className="form-group flex-grow-1">
                            <input type="text" name="message" value={chatgpt.message} onChange={onchange}  className="form-control form-control-lg flex-grow-1 mr-2" id="message" placeholder="Ejemplo: Purpura o #611F6A"/>
                            </div>
                            <div className="form-group flex-grow-1">
                           
                            <input type="text" name="message2" value={chatgpt.message2} onChange={onchange} className="form-control form-control-lg flex-grow-1 mr-2" id="message2" placeholder="Aqui para que lo usaras"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-lg mt-0 mt-md-3 mt-lg-0">Generar</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        <div className="intro bg-light">
        <div className="container">
            <div className="section desc">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                                    <p><span>{respuesta}</span></p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                    <div className="page-header mb-5">
                        <h2 id="colours">Colours</h2>
                        <p>We have improved the Bootstrap colour selection with a brighter variation. All the components from the kit will have variations for each one of this contextual classNamees.</p>
                    </div>


                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="row">

       
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style1}></div>
                                    <div className="title">Primary</div>
                                    <div className="hex text-muted">#611F6A</div>
                                </div>
                            </div>
                        </div>

       
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style2}></div>
                                    <div className="title">Secondary</div>
                                    <div className="hex text-muted">#071D5C</div>
                                </div>
                            </div>
                        </div>

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style3}></div>
                                    <div className="title">Success</div>
                                    <div className="hex text-muted">#007A5B</div>
                                </div>
                            </div>
                        </div>

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style4}></div>
                                    <div className="title">Info</div>
                                    <div className="hex text-muted">#1264A4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style5}></div>
                                    <div className="title">Warning</div>
                                    <div className="hex text-muted">#ECB22F</div>
                                </div>
                            </div>
                        </div>

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style6}></div>
                                    <div className="title">Danger</div>
                                    <div className="hex text-muted">#E01E5B</div>
                                </div>
                            </div>
                        </div>

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style7}></div>
                                    <div className="title">Dark</div>
                                    <div className="hex text-muted">#212529</div>
                                </div>
                            </div>
                        </div>

        
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card no-hover color">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="swatch" style={style8}></div>
                                    <div className="title">Light</div>
                                    <div className="hex text-muted">#EBEAEB</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default FormularioChat