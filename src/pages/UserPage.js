import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/user/UserLayout";

export default function UserPage() {
  return (
    <div>
      <CommonLayout>
        <UserLayout />
      </CommonLayout>
    </div>
  );
}
