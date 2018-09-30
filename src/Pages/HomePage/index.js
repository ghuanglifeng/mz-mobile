import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge, SearchBar, WingBlank, ListView } from 'antd-mobile';
import "./index.css";

const tabs = [
  { title: <Badge>产品推荐</Badge> },
  { title: <Badge>跟团</Badge> },
  { title: <Badge>自助</Badge> },
  { title: <Badge>目的地参团</Badge> }
];

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '黄金沙滩-影视城',
    des: '<黄金沙滩-影视城-1日游>免费接送，含可口午餐',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '妈祖庙-鹅尾神石园',
    des: '<妈祖庙-鹅尾神石园-1日游>免费接送，含游艇冲浪节目',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '金海岸-影视城',
    des: '<金海岸-影视城-1日游>免费接送，可游泳可唱K，可骑马',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${{ ii }}`;
  }
  return dataBlob;
}
/*const tabs2 = [
  { title: '妈祖庙', sub: '1' },
  { title: '黄金沙滩', sub: '2' },
  { title: '鹅尾神石园', sub: '3' },
  { title: '影视城', sub: '4' }
];*/

class Home extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource,
      isLoading: true
    };
  }
  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <SearchBar placeholder="妈祖庙" maxLength={8} />
        <WhiteSpace />
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div>
            <ListView
              ref={el => this.lv = el}
              dataSource={this.state.dataSource}
              renderHeader={() => <span>牛人专线</span>}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
              </div>)}
              renderRow={row}
              renderSeparator={separator}
              className="am-list"
              pageSize={4}
              useBodyScroll
              onScroll={() => { console.log('scroll'); }}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            跟团
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            自助
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            目的地参团
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Home;
