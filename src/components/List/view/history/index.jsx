import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/history.css";
class ShowHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHistory: this.props.newHistory,
      lengthHistory: this.props.newHistory.length,
    };
  }

  render() {
    return (
      <div className="history">
        <Link to="/list">
          <button className="goHome">Quay lại</button>
        </Link>
        <h4>Đã hoàn thành : {this.state.lengthHistory}</h4>
        <div className="historyGroup">
          <div>Người làm</div>
          <div>Tiêu đề</div>
          <div>Ngày tạo</div>
          <div>Ngày dự kiến</div>
          <div>Ngày hoàn thành</div>
        </div>
        {this.state.newHistory.map((val, key) => (
          <div className="historyGroup" key={key}>
            <div>{val.label}</div>
            <div>{val.title}</div>
            <div>{val.workDay}</div>
            <div>{val.addTime}</div>
            <div>{val.timeStop}</div>
          </div>
        ))}
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {};
};
let mapStateToProps = (state) => {
  return {
    newHistory: state.history,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHistory);
