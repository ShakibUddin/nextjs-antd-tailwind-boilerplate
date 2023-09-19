import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import InputField from "@/components/common/inputField";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[var(--brandColor)] flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-stretch p-4 m-4 rounded-md bg-white shadow-md w-full sm:w-2/3 md:w-2/3 lg:w-1/3">
        <span className="font-bold text-3xl text-[var(--brandColor)] text-center">
          COMPANY
        </span>
        <InputField
          title={"Email"}
          type={"email"}
          placeholder="Email"
          className="p-4"
        />
        <InputField
          title={"Password"}
          type={"password"}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
          }
          className="p-4"
        />
        <Button className="bg-[var(--brandColor)] w-32 md:w-32 lg:w-48 h-8 md:h-8 lg:h-10  text-white mx-auto hover:text-[var(--brandColor)] hover:bg-white hover:border-2 hover:border-[var(--brandColor)]">
          LOGIN
        </Button>
        <p className="text-center">
          Do not have an account?{" "}
          <Link className="text-blue-500 font-bold" href={"/signup"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
