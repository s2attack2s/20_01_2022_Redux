import React, { Component } from "react";
import { Link } from "react-router-dom";
class ShowList extends Component {
  render() {
    let { title, workDay, addTime, label } = this.props.value;

    return (
      <>
        <div className="todoGroup">
          <div className="title">{label}</div>
          <div className="title">{title}</div>
          <div className="workDay">{workDay}</div>
          <div className="workDay">{addTime}</div>
          <div className="setting">
            <Link to={"/list-details/" + this.props.id}>
              {" "}
              <button onClick={this.props.handleDetail}>Chi tiết</button>
            </Link>
            <button onClick={this.props.handleEdit}>Sửa</button>
            <button onClick={this.props.handleDelele}>Xóa</button>
          </div>
        </div>
      </>
    );
  }
}

export default ShowList;
