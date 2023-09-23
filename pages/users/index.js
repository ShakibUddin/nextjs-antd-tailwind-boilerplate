import CustomLayout from "@/components/layout/customLayout";
import React, { useState } from "react";

const Users = () => {
  return <div>Users</div>;
};

Users.getLayout = function getLayout(page) {
  return <CustomLayout pageName={"Users"}>{page}</CustomLayout>;
};

export default Users;
