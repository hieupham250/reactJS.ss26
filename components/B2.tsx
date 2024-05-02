import React from "react";

function summation(a: number, b: number) {
  return a + b;
}

function subtraction(a: number, b: number) {
  return a - b;
}

function multiplication(a: number, b: number) {
  return a * b;
}

function division(a: number, b: number) {
  return a / b;
}
export default function B2() {
  return (
    <div>
      <ul>
        <li>10 + 10 = {summation(10, 10)}</li>
        <li>10 - 10 = {subtraction(10, 10)}</li>
        <li>10 * 10 = {multiplication(10, 10)}</li>
        <li>10 / 10 = {division(10, 10)}</li>
      </ul>
    </div>
  );
}
