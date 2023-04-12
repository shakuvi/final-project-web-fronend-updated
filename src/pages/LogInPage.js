import React from "react";
import LogInLayout from "../layouts/login/LogInLayout";
import LogInLogo from "../components/login/LogInLogo";

export default function LogInPage() {
  return (
    <div style={{ paddingTop: 20 }}>
      <LogInLogo />
      <LogInLayout />
    </div>
  );
}
