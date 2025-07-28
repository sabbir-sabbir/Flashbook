import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../../components/common/Field";
import loginpagepicture from "../../../assets/login-page-picture.svg";

const LoginPage = () => {
  // extracting useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submitFormData function
  const submitFormData = (formData) => {
    console.log(formData);
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
                {...register("email", { required: "Input a valid email" })}
                className={` w-[450px]  p-1 border-2 outline-none bg-zinc-400${
                  errors.email ? "border-red-600" : "border-white"
                }`}
                type="email"
                name="email"
                id="email"
                placeholder="Entar your email address"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[18px]" htmlFor="password">
                Password :
              </label>
              <input
                {...register("password", {
                  required: "Input a valid password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters !",
                  },
                })}
                className={` w-[450px]  p-1 border-2 outline-none bg-zinc-400${
                  errors.email ? "border-red-600" : "border-white"
                }`}
                type="password"
                name="password"
                id="password"
                placeholder="Entar your password"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
