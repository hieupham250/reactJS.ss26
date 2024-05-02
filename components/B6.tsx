import React from "react";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

export default function B6() {
  const user: User = {
    firstName: "Phạm Trung",
    lastName: "Hiếu",
  };

  return (
    <>
      <h4>Họ và tên: {formatName(user)}</h4>
    </>
  );
}
