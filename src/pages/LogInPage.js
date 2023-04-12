import React from "react";
import Logo from "../components/common/Logo";
import LogInLayout from "../layouts/login/LogInLayout";

export default function LogInPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <Logo />
      <LogInLayout />
    </div>
  );
}
