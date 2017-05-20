import React from 'react';
import { Layout, Menu, Row, Col, Icon, Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'ASSETS/less/dashboard.less';
import avar from 'ASSETS/imgs/avar.gif';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className="dashboard">
        <div className="clearfix">
          <div className="avar">
            <img src={avar} />
          </div>
          <div className="info">
            <p className="name">
              尊敬的用户<span style={{ color: 'green', margin: '0 5px' }}>{this.props.userName}</span>,欢迎您！
            </p>
            <p className="other">
              您当前还有<span className="tip">10</span>条未打印订单，<span className="tip">5</span>条未分配订单等待处理！
            </p>
          </div>
        </div>
        <div className="shortcut">
          <Link to="/express/orderListNew" className="pan-btn light-blue-btn">未打印订单</Link>
          <Link to="/orders/orderUnassign" className="pan-btn pink-btn">未分配订单</Link>
          <Link to="/print/printerManager" className="pan-btn green-btn">打印机设置</Link>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}
function mapStateToProp(state) {
  return {
    userName: state.userReducer.userName
  };
}

export default connect(mapStateToProp)(Dashboard);