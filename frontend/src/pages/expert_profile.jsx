import React from "react";
import { PrivateLayout, PublicLayout } from "../layouts";
import Commentcard from "../components/commentcard.jsx";
import FillForm from "../components/fillinform.jsx";
import Profile from "../components/profile.jsx";
export default function Expert_profile() {
  return (
    <PrivateLayout>
      <Commentcard />
      <FillForm />
      <Profile />
    </PrivateLayout>
  );
}
