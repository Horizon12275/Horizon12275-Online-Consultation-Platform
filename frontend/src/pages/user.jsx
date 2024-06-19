import React from "react";
import { PrivateLayout } from "../layouts";
import Commentcard from "../components/commentcard.jsx";
import FillForm from "../components/fillinform.jsx";
import User from "../components/user_profile.jsx";
export default function UserPage() {
  return (
    <PrivateLayout>
      <Commentcard />
      <FillForm />
      <User />
    </PrivateLayout>
  );
}
