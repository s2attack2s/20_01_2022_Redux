import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { createTodo, removeTodo, updateTodo } from "../../action/list";
import "../../css/list.css";
import ShowList from "./show-list";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: this.props.newListTodo,
      newUser: this.props.newListUser,
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
  handleChangeName = (e) => {
    this.setState({
      label: e.label,
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
    let newLabel = this.state.label;
    let status = false;
    this.props.ADD_LIST(
      newtitle,
      newWorkDay,
      addTime,
      newDetails,
      newLabel,
      status
    );
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
    let newLabel = this.state.label;
    let status = false;
    this.props.UPDATE_LIST(
      id,
      newtitle,
      newWorkDay,
      addTime,
      newDetails,
      newLabel,
      status
    );
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
    this.setState({
      newData: nextProps.newListTodo,
      newUser: this.props.newUser,
    });
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
          Th??m vi???c l??m
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
            C???p nh???t
          </button>
          <button
            type="submit"
            onClick={() => this.handleDestroyUpdate()}
            className="btn btn-primary"
          >
            H???y
          </button>
        </>
      );
    }

    return (
      <div>
        <div className="form-group">
          <label>Ti??u ?????</label>
          <input
            type="text"
            plancerhoder="Ti??u ?????"
            className="form-control"
            onChange={this.handleChangeTitle}
            value={this.state.title}
          />
          <label>Chi ti???t</label>
          <textarea
            type="text"
            plancerhoder="N???i dung"
            className="form-control"
            onChange={this.handleChangeDetails}
            value={this.state.details}
            rows="5"
          />
          <label>Ng??y l??m</label>
          <input
            type="date"
            className="form-control"
            onChange={this.handleChangeWordDay}
            value={this.state.workDay}
          />

          <Select
            options={this.state.newUser}
            onChange={this.handleChangeName}
          />

          <div className="button-group">
            <div>{button}</div>
            <div>
              {" "}
              <Link to="/">
                <button>Danh s??ch nh??n vi??n</button>
              </Link>
            </div>
            <div>
              <Link to="/history">
                <button>L???ch s???</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div></div>
          <div className="todoGroup">
            <div>Ng?????i l??m</div>
            <div>Ti??u ?????</div>
            <div>Ng??y l??m</div>
            <div>Ng??y t???o</div>
            <div>T??y ch???n</div>
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
    ADD_LIST: (title, workDay, addTime, details, label, status) =>
      dispatch(createTodo(title, workDay, addTime, details, label, status)),
    UPDATE_LIST: (id, title, workDay, addTime, details, label, status) =>
      dispatch(updateTodo(id, title, workDay, addTime, details, label, status)),
    REMOVE_LIST: (id) => dispatch(removeTodo(id)),
  };
};
let mapStateToProps = (state) => {
  return {
    newListTodo: state.todoList,
    newListUser: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
