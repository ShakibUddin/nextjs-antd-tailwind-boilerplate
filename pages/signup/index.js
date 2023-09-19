import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import InputField from "@/components/common/inputField";

const Signup = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--brandColor)] flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-stretch p-4 m-4 rounded-md bg-white shadow-md w-full sm:w-2/3 md:w-2/3 lg:w-1/3">
        <span className="font-bold text-3xl text-[var(--brandColor)] text-center">
          COMPANY
        </span>
        <InputField
          title={"First Name"}
          type={"text"}
          placeholder={"Enter first name"}
          className="p-4"
        />
        <InputField
          title={"Last Name"}
          type={"text"}
          placeholder="Enter last name"
          className="p-4"
        />
        <InputField
          title={"Email"}
          placeholder={"Enter email"}
          type={"email"}
          className="p-4"
        />
        <InputField
          title={"Password"}
          type={"password"}
          placeholder="Enter password"
          iconRender={(visible) =>
            visible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
          }
          className="p-4"
        />
        <InputField
          title={"Confirm Password"}
          type={"password"}
          placeholder="Enter password again"
          iconRender={(visible) =>
            visible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />
          }
          className="p-4"
        />
        <Button className="bg-[var(--brandColor)] text-white w-32 md:w-32 lg:w-48 h-8 md:h-8 lg:h-10 mx-auto hover:text-[var(--brandColor)] hover:bg-white hover:border-2 hover:border-[var(--brandColor)]">
          SIGN UP
        </Button>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500 font-bold" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

Signup.getLayout = function getLayout(page) {
  // No layout
  return page;
};

export default Signup;
