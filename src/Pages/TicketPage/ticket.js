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
                        title={<span style={{ fontSize: 14 }}>一、船票</span>}
                    />
                    <Card.Body>
                        <div style={{ fontSize: 13 }}>一、客船单程票价10/人·次，二层舱票价增加2元/人·次。</div>
                        <div style={{ fontSize: 13 }}>二、快艇客运单程票价30元/人·次。</div>
                        <div style={{ fontSize: 13 }}>三、湄洲岛上居民乘坐客船单程票价为5元/人·次。</div>
                        <WhiteSpace />
                    </Card.Body>
                </Card>
                <Card style={{marginTop: 10}}>
                    <Card.Header
                        title={<span style={{ fontSize: 14 }}>二、景点门票</span>}
                    />
                    <Card.Body>
                        <div style={{ fontSize: 13 }}>一、湄洲岛国家旅游度假区游客进岛门票价格为65元/人次，主要景点包括妈祖祖庙、天妃故里、黄金沙滩、东海卧佛园、湄屿潮音等。</div>
                        <div style={{ fontSize: 13 }}>二、鹅尾神石园景点门票价格为20元/人次。</div>
                        <div style={{ fontSize: 13 }}>三、妈祖文化园景点门票价格为30元/人次。</div>
                        <div style={{ fontSize: 13 }}>四、进岛门票和鹅尾神石园景点门票的联票价格为80元/人次，联票应由游客自愿选择购买。</div>
                        <WhiteSpace />
                    </Card.Body>
                </Card>
            </WingBlank>
        )
    }
}