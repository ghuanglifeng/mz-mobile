import React, { Component } from 'react';
import { WingBlank, SegmentedControl, NoticeBar, WhiteSpace, Carousel } from 'antd-mobile';
import "./index.css";

const fishData=[
  {
    date: '2018-09-28',
    data: [
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143023.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143101.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143110.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143116.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143124.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-28/20180928143131.jpg', price: 0, desc: ''}
    ],
    noticeContent: '野生大青龙虾，术后修复神鱼狗鲨，野生大对虾，包肥包甜虾菇，船说网红鲟仔，因为天气原因，没有船只出去，鱼品种比较少，放筐活鲜还有图片这些！', 
  },
  {
    date: '2018-09-27',
    data: [
      {name: '', type: 'video', src: '/fishData/2018-09-27/2602aefcd99b8c87a87a3c1c9424a99e.mp4', price: 0, desc: ''},
      {name: '', type: 'video', src: '/fishData/2018-09-27/5137f434bf7730cb5165437bb1a39769.mp4', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-27/20180928144812.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-27/20180928144820.jpg', price: 0, desc: ''},
      {name: '', type: 'img', src: '/fishData/2018-09-27/20180928144829.jpg', price: 0, desc: ''},
    ],
    noticeContent: '一只一斤多️斤左右，一斤30元，渔民避台风便宜出手了，冬天补气最佳食疗，恐怕非鳗鱼莫属了！我家杀鱼小哥会把这个鳗鱼杀的没有骨头感哦！鳗鱼一斤30元，30元一斤！', 
  }
];
let pageData;

class Fish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      segIndex: 0,
      pageData: fishData[0],
      imgHeight: window.innerHeight*0.8
    };
  }
  componentDidMount() {

  }
  onSegChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    const segIndex = e.nativeEvent.selectedSegmentIndex; 
    this.setState({segIndex})
  }
  render() {
    const {segIndex, imgHeight} = this.state;
    pageData = segIndex===0?fishData[0]:fishData[1];
    return (
      <WingBlank size="lg" className="container">
        <SegmentedControl values={['今日','昨日']} onChange={this.onSegChange}/>
        <WhiteSpace size="lg" />
        <NoticeBar marqueeProps={{loop: true, style: {padding: '0 7.5px'}}}>
            {pageData.noticeContent}
        </NoticeBar>
        <WhiteSpace size="lg" />
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {pageData.data.map(val => (
            <a
              key={val}
              //href=""
              style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
              {
                val.type==='img' ?
                <img
                src={val.src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                }}
              />
              :
                <video 
                controls 
                muted 
                webkit-playsinline="true" 
                playsinline="true" 
                //poster="" 
                src={val.src}
                style={{ width: '100%', height: imgHeight, verticalAlign: 'top' }}
                onLoad={() => {
                }}
                >
                  您的浏览器不支持该视频播放
                </video>
              }
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Fish;