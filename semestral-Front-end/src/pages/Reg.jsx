import Registro_user from '../components/Registro_user'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
const Reg = () => {
  //Inicializar valores
  const valores_iniciales = {
    user:"",
    name:"",
    password:""
  } 

  const [user, setUser] = useState(valores_iniciales)
  const [redirect, setRedirect]=useState(false)


  //Metodo cuando cambia
  const onchange = (event)=>{
      setUser({...user, [event.target.name]:event.target.value})
  }

  //Metodo cuando envia
  const onsubmit = async(event)=>{
      event.preventDefault()
      try{
          const url = "http://localhost:8081/user"
          const config = { headers : {'Content-Type': 'application/json'}}
          const response = await axios.post(url, user, config)
          if(response.status == 200){
            Swal.fire(
              'Registro Exitoso',
              'Ahora logeate',
              'success'
            )
            setRedirect(true)
          }else{
            Swal.fire(
              'Registro fallido',
              'Intenta nuevamente',
              'error'
            )
          }
      }catch(error){
          console.log(error)
      }
      
  } 
  if (redirect)
        return <Navigate to="/login"></Navigate>

  return (
    <>
    <div className="register">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-1">
                                <div className="register-form">
                                    <div className="mb-5">
                                        <h1>Register</h1>
                                        <p className="lead">Create an account to start playing.</p>
                                    </div>
                                    <form onSubmit={onsubmit}>
                                        <div className="form-group">
                                            <label>NickName</label>
                                            <input type="text" name="user" value={user.user} onChange={onchange} className="form-control"  id="registrocamp1" aria-describedby="emailHelp" placeholder="Enter NickName"/>
                                            <small id="emailHelp" className="form-text text-info">We will never share your data with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input type="text" name="name" value={user.name} onChange={onchange} className="form-control" id="registrocamp2" aria-describedby="emailHelp" placeholder="Enter User Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" name="password" value={user.password} onChange={onchange} className="form-control"  id="registrocamp3" placeholder="Password"/>
                                        </div>
                                            <div className="custom-control custom-checkbox my-4">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                <label className="custom-control-label">Remember me</label>
                                            </div>
                                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                    </form>

                                    <p className="small my-4 text-center">Already have an account? <a href="/login">Log in</a>.</p>
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

export default Reg