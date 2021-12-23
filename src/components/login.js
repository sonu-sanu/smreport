

 
import 'bootstrap/dist/css/bootstrap.min.css';
function LoginForm()
{

    return(

        <div className="form-background"> 
        <form  className="text-align-left">
                 

                <div className="form-group text-align-left"  >
                    <label>User Name</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group text-align-left">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group ">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
    );
}

export default LoginForm;