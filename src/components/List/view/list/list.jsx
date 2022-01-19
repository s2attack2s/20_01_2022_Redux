import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/list.css";
import { createTodo, removeTodo, updateTodo } from "../../action/actionList";
import ShowList from "./showList";
import ListDetails from "../listDetails/listDetails";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: this.props.newListTodo,
      showButton: true,
      showModal: true,
    };
  }
  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleChangeDetails = (e) => {
    this.setState({
      details: e.target.value,
    });
  };
  handleChangeWordDay = (e) => {
    this.setState({
      workDay: e.target.value,
    });
  };

  handleSubmit = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let addTime = year + "-" + month + "-" + day;
    let newtitle = this.state.title;
    let newWorkDay = this.state.workDay;
    let newDetails = this.state.details;
    this.props.ADD_LIST(newtitle, newWorkDay, addTime, newDetails);
    this.setState({
      workDay: "",
      title: "",
      details: "",
    });
  };
  handleDelele = (e) => {
    this.props.REMOVE_LIST(e);
    this.setState({
      workDay: "",
      title: "",
      details: "",
    });
  };

  handleEdit = (val, key) => {
    let { title, workDay, details } = val;
    this.setState({
      title,
      workDay,
      details,
      idUpdate: key,
      showButton: false,
    });
  };
  handleUpdate = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let addTime = year + "-" + month + "-" + day;
    let id = this.state.idUpdate;
    let newtitle = this.state.title;
    let newWorkDay = this.state.workDay;
    let newDetails = this.state.details;
    this.props.UPDATE_LIST(id, newtitle, newWorkDay, addTime, newDetails);
    this.setState({
      workDay: "",
      title: "",
      details: "",
      showButton: true,
    });
  };
  handleDestroyUpdate = () => {
    this.setState({
      workDay: "",
      title: "",
      details: "",
      showButton: true,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ newData: nextProps.newListTodo });
  }
  render() {
    let button;
    if (this.state.showButton) {
      button = (
        <button
          type="submit"
          onClick={() => this.handleSubmit()}
          className="btn btn-primary"
        >
          Thêm mới
        </button>
      );
    } else {
      button = (
        <>
          <button
            type="submit"
            onClick={() => this.handleUpdate()}
            className="btn btn-primary"
          >
            Cập nhật
          </button>
          <button
            type="submit"
            onClick={() => this.handleDestroyUpdate()}
            className="btn btn-primary"
          >
            Hủy
          </button>
        </>
      );
    }

    return (
      <div>
        <div className="form-group">
          <label>Tiêu đề</label>
          <input
            type="text"
            plancerhoder="Tiêu đề"
            className="form-control"
            onChange={this.handleChangeTitle}
            value={this.state.title}
          />
          <label>Chi tiết</label>
          <textarea
            type="text"
            plancerhoder="Nội dung"
            className="form-control"
            onChange={this.handleChangeDetails}
            value={this.state.details}
            rows="5"
          />
          <label>Ngày làm</label>
          <input
            type="date"
            className="form-control"
            onChange={this.handleChangeWordDay}
            value={this.state.workDay}
          />
          {button}
        </div>

        <div>
          <div></div>
          <div className="todoGroup">
            <div>Tiêu đề</div>
            <div>Ngày làm</div>
            <div>Ngày tạo</div>
            <div>Tùy chọn</div>
          </div>
          {this.state.newData.map((val, key) => (
            <ShowList
              value={val}
              key={key}
              id={key}
              handleEdit={() => this.handleEdit(val, key)}
              handleDelele={() => this.handleDelele(key)}
            />
          ))}
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ADD_LIST: (title, workDay, addTime, details) =>
      dispatch(createTodo(title, workDay, addTime, details)),
    UPDATE_LIST: (id, title, workDay, addTime, details) =>
      dispatch(updateTodo(id, title, workDay, addTime, details)),
    REMOVE_LIST: (id) => dispatch(removeTodo(id)),
  };
};
let mapStateToProps = (state) => {
  console.log(state);
  return {
    newListTodo: state.todoList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
