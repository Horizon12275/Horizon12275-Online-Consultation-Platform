import React from "react";
import { BasicLayout } from "../layouts";
import Commentcard from "../components/commentcard.jsx";
import FillForm from "../components/fillinform.jsx";
import User from "../components/user_profile.jsx";
export default function UserPage() {
  return (
    <BasicLayout>
      <Commentcard />
      <FillForm />
      <User />
    </BasicLayout>
  );
}
