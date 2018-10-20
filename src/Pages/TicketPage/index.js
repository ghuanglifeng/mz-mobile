import React, { Component } from 'react';
import { Tabs, Card, WhiteSpace, Badge, SearchBar, WingBlank, ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { browserHistory } from 'react-router';
import ShipTime from './shipTime';
import Ticket from './ticket';
import BusTicket from './busTicket';
import MZMap from './mzMap';
import BMap from 'BMap';
import './index.css';

const tabs = [
  { title: '轮渡时刻表' },
  { title: '票价' },
  { title: '公交' },
  { title: '地图' }
];
const screenHeight= window.screen.height;
const screenWidth=window.screen.width;

class TicketPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }
  componentDidMount() {
    var map = new BMap.Map("mapContainer"); // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }
  renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }

  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]

    return (
      <div>
        {/* <div className="mapContainer" id="mapContainer"></div> */}
        <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initalPage={'t2'}
              renderTabBar={this.renderTabBar}
            >
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <ShipTime />
              </div>
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <Ticket />
              </div>
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <BusTicket />
              </div>
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <iframe src='/mzmap' style={{width: screenWidth, height: screenHeight, border: 0}} />
              </div>
            </Tabs>
          </StickyContainer>
        <WhiteSpace />
    </div>
    );
  }
}

export default TicketPage;
