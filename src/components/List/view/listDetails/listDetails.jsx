import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { successTodo } from "../../action/actionList";
import "../../css/listDetails.css";

class ListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: this.props.newListTodo,
      status: this.props.newStatusTodo,
    };
  }
  handleSuccess = (key) => {
    let status = true;
    let a = this.props.SUCCESS_LIST(key, status);
    console.log(a);
  };
  render() {
    let showStatus;
    if (this.state.status) {
      showStatus = "Đã hoàn thành";
    } else {
      showStatus = "Đang hoàn thành";
    }
    let pathname = window.location.pathname;
    let id = pathname.replace("/list-details/", "");
    if (this.state.newData[id]) {
      console.log(this.state.newData[id]);
      return (
        <>
          <Link to={"/"}>
            <button className="close">Trang chủ</button>
          </Link>

          <div className="modal_detail">
            <div className="modal_header">
              <h3>
                {this.state.newData[id].title} {showStatus}
              </h3>
              <hr />
            </div>
            <div className="modal_content">
              {this.state.newData[id].details}
            </div>
            <div className="modal_footer">
              <hr />
              <button onClick={() => this.handleSuccess(id)}>
                Đánh dấu đã hoàn thành
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to={"/"}>
            <button className="close">Trang chủ</button>
          </Link>

          <div className="modal_detail">
            <div className="modal-header">k có</div>
            <div className="modal-content">
              <></>
            </div>
            <div className="modal-footer">
              <>
                <h4> </h4>
              </>
            </div>
          </div>
        </>
      );
    }
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    SUCCESS_LIST: (id, status) => dispatch(successTodo(id, status)),
  };
};

let mapStateToProps = (state) => {
  console.log(state);
  return {
    newListTodo: state.todoList,
    newStatusTodo: state.success,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
