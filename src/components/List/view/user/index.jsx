import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser, removeUser, updateUser } from "../../action/user";

import "../../css/list.css";
import ShowUser from "./show-user";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListUser: this.props.newListUser,
      showButton: true,
      showModal: true,
    };
  }
  handleChangeName = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  handleSubmit = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let createdAt = year + "-" + month + "-" + day;
    let label = this.state.label;
    this.props.ADD_USER(label, createdAt);
    this.setState({
      label: "",
    });
  };
  handleDelele = (e) => {
    this.props.REMOVE_USER(e);
    this.setState({
      label: "",
    });
  };

  handleEdit = (val, key) => {
    let { label } = val;
    this.setState({
      label,
      idUpdate: key,
      showButton: false,
    });
  };
  handleUpdate = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let createdAt = year + "-" + month + "-" + day;
    let label = this.state.label;
    let id = this.state.idUpdate;

    this.props.UPDATE_USER(id, label, createdAt);
    this.setState({
      label: "",
      showButton: true,
    });
  };
  handleDestroyUpdate = () => {
    this.setState({
      label: "",
      showButton: true,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ newListUser: nextProps.newListUser });
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
          <label>Họ tên</label>
          <input
            type="text"
            plancerhoder="Họ tên"
            className="form-control"
            onChange={this.handleChangeName}
            value={this.state.label}
          />

          <div className="button-group">
            <div>{button}</div>
            <Link to="/list">
              {" "}
              <div>
                <button>Tạo việc làm</button>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="todoGroup">
            <div>Họ tên</div>
            <div>Ngày tạo</div>
            <div>Tùy chọn</div>
          </div>
          {this.state.newListUser.map((val, key) => (
            <ShowUser
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
    ADD_USER: (name, createdAt) => dispatch(createUser(name, createdAt)),
    UPDATE_USER: (id, name, createdAt) =>
      dispatch(updateUser(id, name, createdAt)),
    REMOVE_USER: (id) => dispatch(removeUser(id)),
  };
};
let mapStateToProps = (state) => {
  return {
    newListUser: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
