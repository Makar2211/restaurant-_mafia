"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { CustomBtn } from "@/components";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string | number;
}

export default function SignupPage() {
  const router = useRouter();
  const session = useSession();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  if (session.status == "authenticated") {
    router.push("/");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onLogin: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true);
      await axios.post("/api/users/login", data);
      router.push("/");
    } catch (error: any) {
      if (error.response.status === 400) {
        setServerError(error.response.data.error);
      }
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await signIn("google");
      console.log(session.status);
    } catch (error: any) {
      console.log("Login with Google failed", error.message);
    }
  };

  return (
    <div className="flex flex-row justify-center ">
      <div className="flex flex-col absolute top-1/2 transform translate-y-[-50%]  w-[420px] min-h-[420px]  border-2 rounded-3xl border-solid border-[#E1B787]">
        <form className="flex flex-col " onSubmit={handleSubmit(onLogin)}>
          <h2 className="flex justify-center font-bold text-2xl mt-5 mb-5 text-[#91b306]">
            Вход
          </h2>
          <input
            id="email"
            type="email"
            className={`rounded-lg py-3 px-2  ${
              errors.email?.type === "required"
                ? "border-2 border-rose-600"
                : ""
            }`}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <p role="alert" className="text-red-600 font-bold">
              Обязательное поле
            </p>
          )}
          {serverError === "Неверная почта" && (
            <p role="alert" className="text-red-600 font-bold">
              Неверная почта
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
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p role="alert" className="text-red-600 font-bold">
              Обязательное поле
            </p>
          )}
          {serverError === "Неверный пароль" && (
            <p role="alert" className="text-red-600 font-bold">
              Неверный пароль
            </p>
          )}
          <CustomBtn
            title="Войти"
            style="block mx-auto w-[230px]  mt-5 text-white bg-[#8c9f3f] rounded font-bold border-[1px] border-[#8c9f3f] py-[18px] hover:bg-[#91b306]"
          />
        </form>
        <button
          className="relative block mx-auto w-[230px] text-center  mt-5 text-gray-400 bg-[#fff] rounded font-bold border-[1px] border-black h-[62px] "
          onClick={signUpWithGoogle}
        >
          <p className="absolute top-4 left-[50px]">
            <Image
              src="/google__logo.png"
              width={30}
              height={30}
              alt="Google"
            />
          </p>
          Google
        </button>
        <p className="text-center mt-3 mb-5">
          Нет аккаунта?{" "}
          <Link className="font-bold " href="/signup">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
