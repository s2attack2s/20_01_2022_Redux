import React, { Component } from "react";
import { Link } from "react-router-dom";
class ShowUser extends Component {
  render() {
    let { label, createdAt } = this.props.value;

    return (
      <>
        <div className="todoGroup">
          <div className="title">{label}</div>
          <div className="workDay">{createdAt}</div>
          <div className="setting">
            <button onClick={this.props.handleEdit}>Sửa</button>
            <button onClick={this.props.handleDelele}>Xóa</button>
          </div>
        </div>
      </>
    );
  }
}

export default ShowUser;
