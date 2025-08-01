import React from "react";
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth";
import loginpagepicture from "../../../assets/login-page-picture.svg";

const LoginPage = () => {
  const {setAuthState} = useAuth();
   const navigate = useNavigate()

  // extracting useForm
  const { register, handleSubmit, formState: {errors} } = useForm();

  // submitFormData function
  const submitFormData = (formData) => {
    console.log(formData);
    const user = {...formData};
    setAuthState({user})
    navigate("/")
    
  };
  return (
    <>
      <section className="w-full flex items-center justify-center gap-5 p-24 ">
        <div className=" space-y-3 w-1/3 h-auto">
          <img src={loginpagepicture} alt="loginpagepicture" />
          <h1>Flashbook</h1>
          <p>
            A minimal social media platform for Sharing photos, Comments,
            Reactions & More. Stay connected with us.
          </p>
        </div>

        <div className="w-2/3 h-auto flex items-center justify-center">
          <form className="space-y-3" onSubmit={handleSubmit(submitFormData)}>
            <h1 className="text-3xl font-bold mb-8 ">Login</h1>

            <div className="flex flex-col gap-1 ">
              <label className="text-[18px]" htmlFor="email">
                Email :
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className={` w-[450px]  p-1 border-2 outline-none  ${
                  errors.email ? "border-red-600" : "border-white"
                } focus:bg-white/35 `}
                type="email"
                name="email"
                id="email"
                 required
                placeholder="Entar your email address"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[18px]" htmlFor="password">
                Password :
              </label>
              <input
                {...register("password", {
                
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters.",
                  },
                })}
                className={` w-[450px]  p-1 border-2 outline-none  ${
                  errors.password ? "border-red-600" : "border-white"
                } focus:bg-white/35  `}
                type="password"
                name="password"
                id="password"
                 required
                placeholder="Entar your password"
               
              />
            </div>

            <button
              className="w-[450px] h-auto bg-white text-black p-1 flex items-center justify-center"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
