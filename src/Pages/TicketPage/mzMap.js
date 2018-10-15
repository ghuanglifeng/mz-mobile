import React, { Component } from 'react';
import BMap from 'BMap';
import './index.css';

export default class MZMap  extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {
        var map = new BMap.Map("mapContainer"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(119.134, 25.069), 13); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("莆田"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
    render() {
        return (
            <div className="mapContainer" id="mapContainer"></div>
        )
    }
}