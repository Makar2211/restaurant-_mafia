"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import { CustomBtn } from "@/components";

interface IFormInput {
  email: string;
  password: string | number;
  username: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [serverError, setServerError] = React.useState<string | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await axios.post("/api/users/signup", data);
      router.push("/login");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        console.log("Server error:", error.response.data.error);
        setServerError(error.response.data.error);
      } else {
        console.log("Signup failed", error.message);
      }
    }
  };

  return (
    <div className="flex flex-row justify-center  ">
      <form
        className="flex flex-col absolute top-1/2 transform translate-y-[-50%]  w-[420px] min-h-[420px]  border-2 rounded-3xl border-solid border-[#E1B787]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="flex justify-center font-bold text-2xl mt-5 mb-5 text-[#91b306]">
          Регистрация
        </h2>
        <input
          className={`rounded-lg py-3 px-2  ${
            errors.username?.type === "required"
              ? "border-2 border-rose-600"
              : ""
          }`}
          placeholder="Имя"
          {...register("username", { required: true })}
        />
        {errors.username?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold">
            Обязательное поле
          </p>
        )}
        {serverError === "Такое имя уже существует" && (
          <p role="alert" className="text-red-600 font-bold">
            Такое имя уже существует
          </p>
        )}

        <input
          id="email"
          type="email"
          className={`rounded-lg py-3 px-2  ${
            errors.email?.type === "required"
              ? "border-2 border-rose-600 font-bold"
              : ""
          }`}
          placeholder="Почта"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold">
            Обязательное поле
          </p>
        )}
        {serverError === "Такой email уже существует" && (
          <p role="alert" className="text-red-600 font-bold">
            Такой email уже существует
          </p>
        )}

        <input
          id="password"
          type="password"
          className={`rounded-lg py-3 px-2  ${
            errors.password?.type === "required"
              ? "border-2 border-rose-600"
              : ""
          }`}
          placeholder="Пароль"
          {...register("password", { required: true })}
          aria-invalid={errors.username ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p role="alert" className="text-red-600 font-bold">
            Обязательное поле
          </p>
        )}

        <CustomBtn
          title="Зарегестрироваться"
          style="block mx-auto w-[230px]  mt-5 text-white bg-[#8c9f3f] rounded font-bold border-[1px] border-[#8c9f3f] py-[18px] hover:bg-[#91b306]"
        />
        <p className="text-center mt-3 mb-5">
          Уже есть аккаунт?{" "}
          <Link className="font-bold " href="/login">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
