// core imports
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonPage,
} from "@ionic/react";
import React, { useState } from "react";

// icons imports
import { MdLogin } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";

// style imports
import "./Auth.scss";
import loginImage from "/public/auth/log-in-screen-image.webp";
import registerImage from "/public/auth/register-screen-image.webp";

//interface import
import { IFormValues } from "../interface/auth";
import { useForm } from "react-hook-form";

// Dummy Login Data
const FakeLogin = [
  { email: "avishek@fake.com", password: "123456789" },
  { email: "goku@fake.com", password: "123456789" },
];

const Auth: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  // const handleLogin = (data: IFormValues) => {
  //   console.log("Login Data:", data);
  //   const user = FakeLogin.find(
  //     (u) => u.email === data.email && u.password === data.password
  //   );
  //   if (user) {
  //     alert("Login Successful!");
  //   } else {
  //     alert("Invalid credentials!");
  //   }
  //   reset();
  // };

  const handleLogin = (data: IFormValues) => {
    console.log("login data", data);

    const user = FakeLogin.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      alert("login Successful");
    } else {
      alert("invalid credentials");
    }
  };

  const handleRegister = (data: IFormValues) => {
    console.log("Signup Data:", data);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup Successful!");
    reset();
  };
  return (
    <IonPage className="auth   justify-center px-7 ">
      <img src={isLogIn ? loginImage : registerImage} />
      <IonCard className="backdrop-blur-sm  bg-black/40">
        <IonCardContent>
          <form onSubmit={handleSubmit(isLogIn ? handleLogin : handleRegister)}>
            <IonInput
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              fill="outline"
              labelPlacement="floating"
              label="Email"
              type="email"
              placeholder="Enter email"
              color="dark"
            />
            {errors.email && (
              <p className="text-[var(--primary-danger-text)]">
                {errors.email.message}
              </p>
            )}

            <IonInput
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at lest 6 digit",
                },
              })}
              className="ion-margin-top"
              fill="outline"
              labelPlacement="floating"
              label="Password"
              type="password"
              placeholder="Enter password"
              color="dark"
            />
            {errors.password && (
              <p className="text-[var(--primary-danger-text)]">
                {errors.password.message}
              </p>
            )}
            {!isLogIn && (
              <IonInput
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Confirm Password"
                type="password"
                placeholder="Enter password"
                color="dark"
              />
            )}
            {!isLogIn && errors.confirmPassword && (
              <p className="text-[var(--primary-danger-text)]">
                {errors.confirmPassword.message}
              </p>
            )}

            <IonButton
              className="ion-margin-top"
              expand="block"
              type="submit"
              color="light"
              shape="round"
            >
              {isLogIn ? "Login" : "Sign Up"}
              {isLogIn ? <MdLogin /> : <RiLoginCircleFill />}
            </IonButton>

            <IonButton
              color="dark"
              className="ion-margin-top"
              expand="block"
              shape="round"
              onClick={() => setIsLogIn(!isLogIn)}
            >
              {isLogIn ? "Create Account" : "Switch to Login"}
              {isLogIn ? <RiLoginCircleFill /> : <MdLogin />}
            </IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Auth;
