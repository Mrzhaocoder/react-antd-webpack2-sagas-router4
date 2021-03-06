import React from 'react';
import { Card, Badge } from 'antd';
import '../assets/less/sender-item.less';
import PropTypes from 'prop-types';

const SenderItem = ({ props, editSenderDlg, delDlg }) => {
  const style = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const title = (<Badge count={props.default ? '默认' : ''}>
    <span style={{ fontSize: 18 }}> {props.sendName} </span>
  </Badge>);
  return (<Card className="senderItem" title={title} extra={<div><a href="javascript:;" onClick={editSenderDlg}>编辑</a><a href="javascript:;" onClick={delDlg} style={{ marginLeft: 8, color: 'red' }}>删除</a></div>} style={{ width: 300, height: 210 }}>
    <p style={style}>所在地：{props.sendcity[0]}{props.sendcity[1]}{props.sendcity[2]}</p>
    <p style={style}>街道地址：{props.sendaddr}</p>
    <p style={style}>单位：{props.sendcompany}</p>
    <p style={style}>邮编：{props.sendzipcode}</p>
    <p style={style}>手机：{props.sendmobile}</p>
    <p style={style}>电话：{props.sendtel}</p>
  </Card>);
};

SenderItem.propTypes = {
  props: PropTypes.object.isRequired,
  editSenderDlg: PropTypes.func.isRequired,
  delDlg: PropTypes.func.isRequired
};

export default SenderItem;
