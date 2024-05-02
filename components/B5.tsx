import React from "react";

export default function B5() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            lineHeight: "200px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Box
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            lineHeight: "200px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Box
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            lineHeight: "200px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Box
        </div>
      </div>
    </>
  );
}
