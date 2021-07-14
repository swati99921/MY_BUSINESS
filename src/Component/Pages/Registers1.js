import { useState } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Registers1 = () =>{
    const[user, setuser] = useState({
         name: "", email: "", phone: "",work: "", password: "", cpassword: ""
    })
    let name, value;

const handleInputs = (e)=>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value})
}
return(
    
    <div className="signup">
        <div className="container mt-5">
            <div className="signup-content">
            <div className="signup-from">
                <h2 className="form-title text-white">Sign up</h2>
                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            {/* <i className="zmdi zmdi-account material-icons-name"></i> */}
                            <i className="fas fa-user-tie"></i>
            
                        </label>
                        <input type="text" name="name" id="name" autoComplete="off"
                        value = {user.name}
                        onChange ={handleInputs}
                        placeholder="your name"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <i className="zmdi zmdi-account material-icons-name"></i>
            
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off"
                        value = {user.email}
                        onChange ={handleInputs}
                        placeholder="your email"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            <i className="zmdi zmdi-account material-icons-name"></i>
            
                        </label>
                        <input type="number" name="phone" id="phone" autoComplete="off"
                        value = {user.phone}
                        onChange ={handleInputs}
                        placeholder="your phone"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="work">
                            <i className="zmdi zmdi-account material-icons-name"></i>
            
                        </label>
                        <input type="text" name="work" id="work" autoComplete="off"
                        value = {user.work}
                        onChange ={handleInputs}
                        placeholder="your work"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <i className="zmdi zmdi-account material-icons-name"></i>
            
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off"
                        value = {user.password}
                        onChange ={handleInputs}
                        placeholder="your password"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword">
                            <i className="zmdi zmdi-account material-icons-name"></i>
            
                        </label>
                        <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                        value = {user.cpassword}
                        onChange ={handleInputs}
                        placeholder="confirm your password"
                            />
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit"
                        value="register"
                        />

                    </div>


                </form>

            </div>

            </div>


        </div>

    </div>
    
    
)

}
export default Registers1;

 