import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import InputBoxWithTopLabel from "../../components/login/InputBoxWithTopLabel";
import LoginButton from "../../components/login/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { employeeLogin } from "../../store/actions/employeeAction";
import { useNavigate } from "react-router-dom";

export default function LogInLayout() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { employeeLoginLoadingStatus, loginErroeMessage, employee } =
    useSelector((store) => store.employeeReducer);

  console.log(email);
  console.log(password);

  const handleSignIn = () => {
    dispatch(employeeLogin(email, password));
  };

  useEffect(() => {
    console.log(employeeLoginLoadingStatus);
    console.log(loginErroeMessage);
    if (employeeLoginLoadingStatus === "sucess") {
      console.log(employee);
      if (employee.employeeType === "owner") {
        navigate("/home");
      } else if (employee.employeeType === "kitchen") {
        navigate("/order");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeLoginLoadingStatus]);

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "30%",
      }}
    >
      <Typography
        sx={{ fontFamily: "Poppins", fontSize: 40, color: "#595959" }}
      >
        LOG IN
      </Typography>

      <div style={{ paddingTop: 10 }}>
        <InputBoxWithTopLabel
          label="Email"
          placeholder="Enter your user email"
          handleChange={setEmail}
        />
      </div>
      <div style={{ paddingTop: 10 }}>
        <InputBoxWithTopLabel
          password="password"
          label="Password"
          placeholder="Enter your password"
          handleChange={setPassword}
        />
      </div>
      <div style={{ paddingTop: 12 }}>
        {employeeLoginLoadingStatus === "fail" ? (
          <Typography sx={{ fontFamily: "Poppins", color: "#c62828" }}>
            User name or password Incorrect
          </Typography>
        ) : (
          ""
        )}
      </div>

      <div style={{ paddingTop: 25 }}>
        <LoginButton handleSignIn={handleSignIn} />
      </div>
    </div>
  );
}
