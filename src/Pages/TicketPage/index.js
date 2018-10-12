import React, { Component } from 'react';
import { Tabs, Card, WhiteSpace, Badge, SearchBar, WingBlank, ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import './index.css';

const tabs = [
  { title: '轮渡' },
  { title: '门票' },
  { title: '公交' },
  { title: '打车' }
];
const screenHeight= window.screen.height;

class TicketPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }
  componentDidMount() {
    
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
        <WhiteSpace />
          <StickyContainer>
            <Tabs tabs={tabs}
              initalPage={'t2'}
              renderTabBar={this.renderTabBar}
            >
              <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                <WingBlank size='small'>
                  <Card style={{marginTop: 20}}>
                    <Card.Header
                      title={<span style={{fontSize: 14}}>一、客船航班</span>}
                      //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
    extra={<span style={{fontSize: 12}}>夏季（4.16~10.15）</span>}
                    />
                    <Card.Body>
                      <span style={{fontSize: 13}}>首班7:00，末班18:00.每60分一班，每班次按当班船舶核载人数售票，售完即止。</span>
                      <WhiteSpace />
                      <table style={{border: '1px solid #ccc'}}>
                        <tbody>
                          <tr>
                            <td className='td1'>上午</td>
                            <td className='td'>7:00</td>
                            <td className='td'>8:00</td>
                            <td className='td'>9:00</td>
                            <td className='td'>10:00</td>
                            <td className='td'>11:00</td>
                            <td className='td'>12:00</td>
                          </tr>
                          <tr>
                            <td className='tdTop'>下午</td>
                            <td className='tdLeftTop'>13:00</td>
                            <td className='tdLeftTop'>14:00</td>
                            <td className='tdLeftTop'>15:00</td>
                            <td className='tdLeftTop'>16:00</td>
                            <td className='tdLeftTop'>17:00</td>
                            <td className='tdLeftTop'>18:00</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header
                      title={<span style={{fontSize: 14}}>二、快艇航班</span>}
                      //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
    extra={<span style={{fontSize: 12}}>夏季（4.16~10.15）</span>}
                    />
                    <Card.Body>
                      <div style={{fontSize: 13}}>文甲至湄洲岛首班：7:30，末班：17:50。</div>
                      <div style={{fontSize: 13}}>每20分钟一班，即每整点中分别为10分、30分和50分各一班。</div>
                      <WhiteSpace />
                      <table style={{border: '1px solid #ccc'}}>
                        <tbody>
                          <tr>
                            <td className='td1'>上午</td>
                            <td>
                              <tr>
                                <td className='td'>7:30</td>
                                <td className='td'>7:50</td>
                                <td className='td'>8:10</td>
                                <td className='td'>8:30</td>
                                <td className='td'>8:50</td>
                                <td className='td'>9:10</td>
                                <td className='td'>9:30</td>
                              </tr>
                              <tr>
                                <td className='td'>9:50</td>
                                <td className='td'>10:10</td>
                                <td className='td'>10:30</td>
                                <td className='td'>10:50</td>
                                <td className='td'>11:10</td>
                                <td className='td'>11:30</td>
                                <td className='td'>11:50</td>
                              </tr>
                            </td>
                          </tr>
                          <tr>
                            <td className='tdTop'>下午</td>
                            <td>
                              <tr>
                                <td className='tdLeftTop'>12:10</td>
                                <td className='tdLeftTop'>12:30</td>
                                <td className='tdLeftTop'>12:50</td>
                                <td className='tdLeftTop'>13:10</td>
                                <td className='tdLeftTop'>13:30</td>
                                <td className='tdLeftTop'>13:50</td>
                                <td className='tdLeftTop'>14:10</td>
                              </tr>
                              <tr>
                                <td className='tdLeftTop'>14:30</td>
                                <td className='tdLeftTop'>14:50</td>
                                <td className='tdLeftTop'>15:10</td>
                                <td className='tdLeftTop'>15:30</td>
                                <td className='tdLeftTop'>15:50</td>
                                <td className='tdLeftTop'>16:10</td>
                                <td className='tdLeftTop'>16:30</td>
                              </tr>
                              <tr>
                                <td className='tdLeftTop'>16:50</td>
                                <td className='tdLeftTop'>17:10</td>
                                <td className='tdLeftTop'>17:30</td>
                                <td className='tdLeftTop'>17:50</td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                              </tr>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Card>
                  <Card style={{marginTop: 20}}>
                    <Card.Header
                      title={<span style={{fontSize: 14}}>一、客船航班</span>}
                      //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
    extra={<span style={{fontSize: 12}}>冬季（10.16~4.15）</span>}
                    />
                    <Card.Body>
                      <span style={{fontSize: 13}}>首班7:30，末班17:30.每60分一班，每班次按当班船舶核载人数售票，售完即止。</span>
                      <WhiteSpace />
                      <table style={{border: '1px solid #ccc'}}>
                        <tbody>
                          <tr>
                            <td className='td1'>上午</td>
                            <td className='td'>7:30</td>
                            <td className='td'>8:30</td>
                            <td className='td'>9:30</td>
                            <td className='td'>10:30</td>
                            <td className='td'>11:30</td>
                            <td className='td'>12:30</td>
                          </tr>
                          <tr>
                            <td className='tdTop'>下午</td>
                            <td className='tdLeftTop'>13:30</td>
                            <td className='tdLeftTop'>14:30</td>
                            <td className='tdLeftTop'>15:30</td>
                            <td className='tdLeftTop'>16:30</td>
                            <td className='tdLeftTop'>17:30</td>
                            <td className='tdLeftTop'></td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Card>
                  <Card style={{marginTop: 10}}>
                    <Card.Header
                      title={<span style={{fontSize: 14}}>二、快艇航班</span>}
                      //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
    extra={<span style={{fontSize: 12}}>冬季（10.16~4.15）</span>}
                    />
                    <Card.Body>
                      <div style={{fontSize: 13}}>每小时两班（每隔30分一班），即每整点的50分和20分各一班，中间视客流量情况适时增开航班。</div>
                      <div style={{fontSize: 13}}>湄洲至文甲 首班7︰50，末班16︰50。</div>
                      <WhiteSpace />
                      <table style={{border: '1px solid #ccc'}}>
                        <tbody>
                          <tr>
                            <td className='td1'>上午</td>
                            <td>
                              <tr>
                                <td className='td'>7:50</td>
                                <td className='td'>8:20</td>
                                <td className='td'>8:50</td>
                                <td className='td'>9:20</td>
                                <td className='td'>9:50</td>
                                <td className='td'>10:20</td>
                                <td className='td'>10:50</td>
                              </tr>
                              <tr>
                                <td className='td'>11:20</td>
                                <td className='td'>11:50</td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                              </tr>
                            </td>
                          </tr>
                          <tr>
                            <td className='tdTop'>下午</td>
                            <td>
                              <tr>
                                <td className='tdLeftTop'>12:20</td>
                                <td className='tdLeftTop'>12:50</td>
                                <td className='tdLeftTop'>13:20</td>
                                <td className='tdLeftTop'>13:50</td>
                                <td className='tdLeftTop'>14:20</td>
                                <td className='tdLeftTop'>14:50</td>
                                <td className='tdLeftTop'>15:20</td>
                              </tr>
                              <tr>
                                <td className='tdLeftTop'>15:50</td>
                                <td className='tdLeftTop'>16:20</td>
                                <td className='tdLeftTop'>16:50</td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                              </tr>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <WhiteSpace />
                      <div style={{fontSize: 13}}>文甲至湄洲 首班8︰20，末班17︰20。</div>
                      <WhiteSpace />
                      <table style={{border: '1px solid #ccc'}}>
                        <tbody>
                          <tr>
                            <td className='td1'>上午</td>
                            <td>
                              <tr>
                                <td className='td'>8:20</td>
                                <td className='td'>8:50</td>
                                <td className='td'>9:20</td>
                                <td className='td'>9:50</td>
                                <td className='td'>10:20</td>
                                <td className='td'>10:50</td>
                                <td className='td'>11:20</td>
                              </tr>
                              <tr>
                                <td className='td'>11:50</td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                              </tr>
                            </td>
                          </tr>
                          <tr>
                            <td className='tdTop'>下午</td>
                            <td>
                              <tr>
                                <td className='tdLeftTop'>12:20</td>
                                <td className='tdLeftTop'>12:50</td>
                                <td className='tdLeftTop'>13:20</td>
                                <td className='tdLeftTop'>13:50</td>
                                <td className='tdLeftTop'>14:20</td>
                                <td className='tdLeftTop'>14:50</td>
                                <td className='tdLeftTop'>15:20</td>
                              </tr>
                              <tr>
                                <td className='tdLeftTop'>15:50</td>
                                <td className='tdLeftTop'>16:20</td>
                                <td className='tdLeftTop'>16:50</td>
                                <td className='tdLeftTop'>17:20</td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                                <td className='tdLeftTop'></td>
                              </tr>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <WhiteSpace />
                      <div style={{fontSize: 13}}>如有变动或遇特殊情况以现场通知为准，服务咨询电话：0594-5997664。</div>
                    </Card.Body>
                  </Card>
                </WingBlank>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: screenHeight, backgroundColor: '#fff' }}>
                门票
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: screenHeight, backgroundColor: '#fff' }}>
                公交
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: screenHeight, backgroundColor: '#fff' }}>
                打车
              </div>
            </Tabs>
          </StickyContainer>
        <WhiteSpace />
    </div>
    );
  }
}

export default TicketPage;
