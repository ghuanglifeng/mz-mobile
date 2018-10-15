import React, { Component } from 'react';
import { WingBlank, SegmentedControl, NoticeBar, WhiteSpace, Carousel } from 'antd-mobile';
import ReactPlayer from 'react-player';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import "./index.css";

let pageData;

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
          const item=result.filter((e)=>{
            if(e.date===new Date().toLocaleDateString().replace(/\//g,'-'))
            {
              return e;
            }
          })[0];
          const item1=result.filter((e)=>{
            if(e.date===new Date(new Date().getTime()-24*60*60*1000).toLocaleDateString().replace(/\//g,'-'))
            {
              return e;
            }
          })[0];
          if(item)
          {
            fishData.push({"date":item.date,"data":item.data,"noticeContent":item.noticeContent})
          }
          if(item1)
          {
            fishData.push({"date":item1.date,"data":item1.data,"noticeContent":item1.noticeContent})
          }
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
                  playing
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