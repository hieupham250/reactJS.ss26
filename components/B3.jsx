import React, { Component } from "react";

export default class B3 extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Phạm Trung Hiếu",
      gender: "Nam",
      DateOfBirth: "25/07/2004",
      email: "ptrunghieu2507@gmail.com",
      address: "Hà Nội",
    };
  }
  render() {
    return (
      <>
        <h1>Thông tin cá nhân</h1>
        <ul>
          <li>Họ và tên: {this.state.fullName}</li>
          <li>Giới tính: {this.state.gender}</li>
          <li>Ngày sinh: {this.state.DateOfBirth}</li>
          <li>Email: {this.state.email}</li>
          <li>Địa chỉ: {this.state.address}</li>
        </ul>
      </>
    );
  }
}
