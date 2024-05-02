import React from "react";

export default function B8() {
  const styleObject: any = {
    width: "200px",
    height: "90px",
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: "90px",
  };
  return (
    <>
      <header
        style={{
          backgroundColor: "#cbd5e1",
          textAlign: "center",
          height: "40px",
          lineHeight: "40px",
        }}
      >
        Header
      </header>
      <nav
        style={{
          backgroundColor: "#9ca3af",
          textAlign: "center",
          height: "30px",
          lineHeight: "30px",
        }}
      >
        Navigation
      </nav>
      <div>
        <div className="row">
          <div
            className="col-2"
            style={{
              backgroundColor: "#16a34a",
              textAlign: "center",
            }}
          >
            Menu
          </div>
          <div
            className="col-8"
            style={{
              backgroundColor: "#fef2f2",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              padding: "20px 20px 0",
            }}
          >
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
            <div style={styleObject}>cart</div>
          </div>
          <div
            className="col-2"
            style={{
              backgroundColor: "#93c5fd",
              textAlign: "center",
            }}
          >
            Aricle
          </div>
        </div>
      </div>
    </>
  );
}
