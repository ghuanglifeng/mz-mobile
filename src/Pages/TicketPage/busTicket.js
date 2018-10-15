import React, { Component } from 'react';
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';

export default class Ticket extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <WingBlank size='small'>
                <Card style={{ marginTop: 20 }}>
                    <Card.Header
                        title={<span style={{ fontSize: 14 }}>湄洲6路</span>}
                    />
                    <Card.Body>
                        <span style={{ fontSize: 13 }}>湄洲6路从湄洲码头发车，开至妈祖平安里，全程13公里。沿途设置轮渡码头、妈祖祖庙、湄洲岛管委会、天妃故里、石后、高厝、高朱小学、梅花路口、农贸市场、徐厝、灵惠路、湖石淉、崇福、下白石、湄洲边防所、红树林公园、金滩路、后巷、宝澜街、下山、福佑街、海景大酒店、鹅尾神化石、妈祖平安里等站点。该线路投放7辆8.5米级纯电动，每12分钟一班，试运行期间，首末班暂定为5:55-18:30，全程一票制2元。</span>
                        <WhiteSpace />
                    </Card.Body>
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Card.Header
                        title={<span style={{ fontSize: 14 }}>湄洲2路</span>}
                    />
                    <Card.Body>
                        <span style={{ fontSize: 13 }}>湄洲2路公交线路优化调整后，由轮渡码头公交站发车，开至鹅尾神化石，全程15公里。沿途设置轮渡码头、妈祖祖庙、湄洲岛管委会、源流馆、平安塔、变电站、顺济路、塔林、实验幼儿园、灵惠路口、顶汕尾、庐厝、西亭坑、汕尾、开元（西亭）、樟头、紫荆路、气象分局、下白石、湄洲边防所、红树林公园、金滩路、黄金沙滩、后巷、宝澜街、下山、福佑街、海景大酒店、鹅尾神化石等站点。该线路投放6辆8.5米级纯电动，每14分钟一班，试运行期间，首末班暂定为5:55-18:30，全程一票制2元。</span>
                        <WhiteSpace />
                    </Card.Body>
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Card.Header
                        title={<span style={{ fontSize: 14 }}>湄洲3路</span>}
                    />
                    <Card.Body>
                        <span style={{ fontSize: 13 }}>湄洲3路公交线路优化调整后，由轮渡码头公交站发车，开至黄金沙滩,全程14公里。沿途设置轮渡码头、妈祖祖庙、湄洲岛管委会、兴海路、闽台风情街、莲池小学、金海岸、莲池沙滩、北埭（东环）、供水公司、白石玉女阁、下白石（东环）、前范水库、港楼、妈祖平安里、鹅尾神化石、海景大酒店、福佑街、下山、宝澜街、后巷、黄金沙滩等站点。该线路投放6辆8.5米级纯电动，每13分钟一班，试运行期间，首末班暂定为5:55-18:30，全程一票制3元。</span>
                        <WhiteSpace />
                    </Card.Body>
                </Card>
            </WingBlank>
        )
    }
}