import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen bg-[var(--brandColor)] flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-stretch p-4 rounded-md bg-white shadow-md w-1/4">
        <p className="font-bold text-3xl text-[var(--brandColor)] text-center">
          COMPANY
        </p>
        <Input placeholder="Email" className="p-4" />
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />
          }
          className="p-4"
        />
        <Button className="bg-[var(--brandColor)] text-white mx-auto w-48 h-12 hover:text-[var(--brandColor)] hover:bg-white hover:border-2 hover:border-[var(--brandColor)]">
          LOGIN
        </Button>
        <p className="text-center">
          Do not have an account?{" "}
          <Link className="text-blue-500" href={"/signup"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
