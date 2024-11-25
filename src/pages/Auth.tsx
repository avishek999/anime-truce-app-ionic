// core imports
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonInput,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// icons imports
import { MdLogin } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";

// style imports
import "./Auth.scss";
import loginImage from "/auth/log-in-screen-image.webp";
import registerImage from "/auth/register-screen-image.webp";

//interface import
import { IFormValues } from "../interface/auth";
import { useForm } from "react-hook-form";
import Wrapper from "../shared/utils/wrapper/Wrapper";

// Dummy Login Data
const FakeLogin = [
  { email: "avishek@fake.com", password: "123456789" },
  { email: "goku@fake.com", password: "123456789" },
];

const Auth: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const handleLogin = (data: IFormValues) => {
    console.log("login data", data);
    setShowLoading(true)

    const user = FakeLogin.find(

      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      
      toast.success("Login Successfull !", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
    } else {
      toast.error("Invalid Email & Password !", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
        // icon: ({theme, type}) =>  <img src={invalidImage} sizes="50" style={{ width: '50px', height: 'auto' }} />
      });
    }
  };

  const handleRegister = async (data: IFormValues) => {
    console.log("Signup Data:", data);
  
    // Password validation
    if (data.password !== data.confirmPassword) {
      toast.error("Password doesn't match!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
      return;
    }
  
    setShowLoading(true); // Show a loading indicator if needed
  
    try {
      // Sending POST request to the API
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
      });
  
      if (!response.ok) {
        // Handle HTTP errors
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }
  
      const result = await response.json();
      console.log("API Response:", result);
  
      toast.success("Sign up Successful!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
  
      reset(); // Reset the form fields if you use a library like react-hook-form
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message || "Something went wrong!", {
        position: "top-center",
        theme: "dark",
        onClose: () => setShowLoading(false),
      });
    } finally {
      setShowLoading(false); // Hide the loading indicator
    }
  };
  
  return (
    <Wrapper>
      <section className="mt-[100px] px-4">
        <ToastContainer transition={Slide} autoClose={3000} hideProgressBar />

        <img src={isLogIn ? loginImage : registerImage} />
        <IonCard className="backdrop-blur-sm  bg-black/40">
          <IonCardContent>
            <form
              onSubmit={handleSubmit(isLogIn ? handleLogin : handleRegister)}
            >
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
                id="open-loading"
              >
                {isLogIn ? "Logi" : "Sign Up"}
                {isLogIn ? <MdLogin /> : <RiLoginCircleFill />}
              </IonButton>

              {showLoading && 
              <IonLoading trigger="open-loading" message="Loading...." duration={1000} />
}
              <IonButton
                color="dark"
                className="ion-margin-top"
                expand="block"
                shape="round"
                onClick={() => setIsLogIn(!isLogIn)}
              >
                {isLogIn ? "Create Accoun" : "Switch to Login"}
                {isLogIn ? <RiLoginCircleFill /> : <MdLogin />}
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </section>
    </Wrapper>
  );
};

export default Auth;
