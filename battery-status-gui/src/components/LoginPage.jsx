import {GoogleLogin} from 'react-google-login';
import { useContext} from "react";
import { AccountContext } from "../context/AccountProvider";
import { Form} from "react-bootstrap";

const Login = () =>{
    const clientID = '1032742189652-sodupvqpblrb8i8rcsu4f19ro5et1sg9.apps.googleusercontent.com';
    const {setAccount} = useContext(AccountContext);
    const onLoginSuccess = async (res) =>{

        console.log(res.profileObj);
        setAccount(res.profileObj);

    }

    const onLoginFailure = () => {
        alert("Some error occured! Please try again later");
        console.log("Login Failure");
    }

return (
    <div className="container d-flex justify-content-center w-100 p-0">
      <div
        className={
          "col-sm-8 col-md-8 col-lg-6 col-11 " +
          ("w-100")
        }
      >
        <div
          className="login shadow-lg rounded-2"
          style={{
            paddingLeft: "4%",
            paddingRight: "4%",
            paddingTop: "4%",
            paddingBottom: "4%",
            marginTop: "10%",
            backgroundColor: "#eeeeee",
          }}
        >
          <h2 className="d-flex justify-content-center">
            <strong>Log in to Our Website</strong>
          </h2>
          <hr className="mt-4 text-primary" style={{ width: "100%" }} />
              <Form
                className="mt-4"
              >
    
                <div className="d-flex flex-column align-items-center justify-content-center mt-2">
                  <GoogleLogin
                    disabled={false}
                    isSignedIn={true}
                    clientId={clientID}
                    buttonText={"Click here to sign in with Google"}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <br></br>
                <span className="fw-light d-flex justify-content-center">
                  Version: 1.0
                </span>
              </Form>
        </div>
      </div>
    </div>
  );

}

export default Login;