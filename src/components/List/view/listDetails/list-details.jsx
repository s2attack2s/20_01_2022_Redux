import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHistory, updateTodo } from "../../action/list";

import "../../css/list-details.css";

class ListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListTodoDetails: this.props.newListTodoDetails,
      statusClick: true,
    };
  }

  handleSuccess = (key) => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let timeStop = year + "-" + month + "-" + day;
    let { title, workDay, addTime, details, label } =
      this.state.newListTodoDetails[key];
    let id = key;
    let status = true;
    this.props.UPDATE_LIST(id, title, workDay, addTime, details, label, status);
    this.props.GET_HISTORY(title, workDay, addTime, details, label, timeStop);
    this.setState({ statusClick: false });
  };

  handleUnSuccess = (key) => {
    let { title, workDay, addTime, details, label } =
      this.state.newListTodoDetails[key];
    let id = key;
    let status = false;
    this.props.UPDATE_LIST(id, title, workDay, addTime, details, label, status);
    this.setState({ statusClick: true });
  };
  render() {
    let pathname = window.location.pathname;
    let id = pathname.replace("/list-details/", "");
    let status = this.state.newListTodoDetails[id].status;
    let showStatus;
    let button;
    if (status === true) {
      showStatus = "Đã hoàn thành";

      button = (
        <button onClick={() => this.handleUnSuccess(id)}>
          Đánh dấu chưa hoàn thành
        </button>
      );
    } else {
      showStatus = "Chưa hoàn thành";
      button = (
        <button onClick={() => this.handleSuccess(id)}>
          Đánh dấu đã hoàn thành
        </button>
      );
    }

    return (
      <>
        <Link to={"/list"}>
          <button className="close">Quay lại</button>
        </Link>

        <div className="modal_detail">
          <div className="modal_header">
            <h3>
              {this.state.newListTodoDetails[id].title} ({showStatus})
            </h3>
            <div className="header_details">
              <h5>Ngày thêm : {this.state.newListTodoDetails[id].addTime}</h5>
              <h5>
                Ngày cần hoàn thành :{" "}
                {this.state.newListTodoDetails[id].workDay}
              </h5>
              <h5>Người làm: {this.state.newListTodoDetails[id].label} </h5>
            </div>
            {button}
            <hr />
          </div>
          <div className="modal_content">
            <div className="group_detail">
              <p></p>
              <p>{this.state.newListTodoDetails[id].details}</p>
            </div>
          </div>
          <div className="modal_footer"></div>
        </div>
      </>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    UPDATE_LIST: (id, title, workDay, addTime, details, label, status) =>
      dispatch(updateTodo(id, title, workDay, addTime, details, label, status)),
    GET_HISTORY: (title, workDay, addTime, details, label, timeStop) =>
      dispatch(getHistory(title, workDay, addTime, details, label, timeStop)),
  };
};
let mapStateToProps = (state) => {
  return {
    newListTodoDetails: state.todoList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
