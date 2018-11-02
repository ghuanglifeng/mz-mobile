import React, { Component } from 'react';
import { WingBlank, SegmentedControl, NoticeBar, WhiteSpace, Carousel } from 'antd-mobile';
import ReactPlayer from 'react-player';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import "./index.css";

let pageData;
const tmpData=[
  {
    "completed": true,
    "order": 0,
    "title": "string",
    "date": "2018-09-28",
    "data": [
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143023.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143101.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143110.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143116.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143124.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-28/20180928143131.jpg",
        "price": 0,
        "desc": ""
      }
    ],
    "noticeContent": "野生大青龙虾，术后修复神鱼狗鲨，野生大对虾，包肥包甜虾菇，船说网红鲟仔，因为天气原因，没有船只出去，鱼品种比较少，放筐活鲜还有图片这些！"
  },
  {
    "completed": true,
    "order": 0,
    "title": "string",
    "date": "2018-09-29",
    "data": [
      {
        "name": "",
        "type": "video",
        "src": "/fishData/2018-09-29/259023ec34ab8ee9a5436adf0c979f4f.mp4",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-29/20180930094926.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-29/20180930095030.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "img",
        "src": "/fishData/2018-09-29/20180930095040.jpg",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "video",
        "src": "/fishData/2018-09-29/a2394a7925c203754773037a1a08403d.mp4",
        "price": 0,
        "desc": ""
      },
      {
        "name": "",
        "type": "video",
        "src": "/fishData/2018-09-29/c420fb4b72399fafb8c68f2472f16997.mp4",
        "price": 0,
        "desc": ""
      }
    ],
    "noticeContent": "渔船出去定时网捕捞，差不多两个小时就会回来，这是最新鲜的捕捞法，这样捕回来的鱼都是活的，运输途中才会慢慢晕倒的"
  }
]
class Fish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      segIndex: 0,
      pageData: '',
      imgHeight: window.innerHeight*0.8,
      fishData:[]
    };
  }
  componentWillMount() {
    let fishData=[];
    fetch(window.API_CONFIG.API_PATH+'/fishdatas', {
        method: 'GET'
    }).then(res=>res.json()).then(
      (result)=>{
        if(result&&result.length>0)
        {
          let item=result.filter((e)=>{
            if(e.date===new Date().toLocaleDateString().replace(/\//g,'-'))
            {
              return e;
            }
          })[0];
          let item1=result.filter((e)=>{
            if(e.date===new Date(new Date().getTime()-24*60*60*1000).toLocaleDateString().replace(/\//g,'-'))
            {
              return e;
            }
          })[0];
          if(!item)
          {
            item=tmpData[0];
          }
          fishData.push({"date":item.date,"data":item.data,"noticeContent":item.noticeContent})
          if(!item1)
          {
            item1=tmpData[1];
          }
          fishData.push({"date":item1.date,"data":item1.data,"noticeContent":item1.noticeContent})
          if(fishData.length>0)
          {
            this.setState({fishData})
          }
        }
      }
    );
  }
  onSegChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    const segIndex = e.nativeEvent.selectedSegmentIndex; 
    this.setState({segIndex})
  }
  render() {
    const {segIndex, imgHeight, fishData} = this.state;
    pageData = segIndex===0?fishData[0]:fishData[1];
    return (
      <WingBlank size="lg" className="container">
        <SegmentedControl values={['今日','昨日']} onChange={this.onSegChange}/>
        <WhiteSpace size="lg" />
        <NoticeBar marqueeProps={{loop: true, style: {padding: '0 7.5px'}}}>
            {pageData&&pageData.data?pageData.noticeContent:null}
        </NoticeBar>
        <WhiteSpace size="lg" />
        <Carousel
          autoplay={false}
          animation={true}
          //infinite
          //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          //afterChange={index => console.log('slide to', index)}
        >
          {pageData&&pageData.data?pageData.data.map(val => (
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
                style={{ width: '100%', minHeight:512, verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              :
              <div className='player-wrapper'>
                <ReactPlayer
                  playing={false}
                  controls={true}
                  loop
                  className='react-player'
                  url={val.src}
                  width='100%'
                  height={imgHeight}
                  onReady={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </div>
                // <ReactPlayer url={val.src} playing />
                // <video 
                // controls 
                // muted 
                // webkit-playsinline="true" 
                // playsinline="true" 
                // //poster="" 
                // src={val.src}
                // style={{ width: '100%', height: imgHeight, verticalAlign: 'top', minHeight: 512 }}
                // onLoad={() => {
                //   window.dispatchEvent(new Event('resize'));
                // }}
                // >
                //   您的浏览器不支持该视频播放
                // </video>
              }
            </a>
          ))
        :
        null
        }
        </Carousel>
      </WingBlank>
    );
  }
}

export default Fish;