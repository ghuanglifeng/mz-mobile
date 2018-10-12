import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Icon, Grid, WhiteSpace, WingBlank, Toast, List, Modal, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './App.css';

const prompt = Modal.prompt;
const Item = List.Item;
const customIcon = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="96px" height="96px" viewBox="0 0 96 96" enableBackground="new 0 0 96 96" >
    <g>
      <path d="M80.559,56.396L66.497,20.123l-9.748,27.004L46.522,21.082L32.94,56.396c0,0-5.752-7.667-5.913-17.697c-0.03-1.876,0.195-3.704,0.526-5.483c-2.235,4.427-3.523,9.413-3.523,14.711c0,18.069,14.648,32.718,32.718,32.718c18.068,0,32.718-14.649,32.718-32.718c0-5.298-1.289-10.284-3.523-14.711c0.332,1.779,0.542,3.607,0.526,5.483C86.392,48.168,80.559,56.396,80.559,56.396z M56.749,68.421c-6.76,0-12.972-2.284-17.964-6.085l7.737-24.476l10.227,27.484L66.815,37.86l8.608,23.944C70.32,65.936,63.827,68.421,56.749,68.421z"/>
      <path d="M94.859,48.202c0-11.445-4.854-21.756-12.58-29.057c0.165,0.145,0.345,0.271,0.507,0.419C74.399,9.002,61.457,2.219,46.922,2.219C21.638,2.219,1.141,22.716,1.141,48c0,25.283,20.497,45.781,45.781,45.781c13.849,0,26.257-6.159,34.649-15.877C89.706,70.57,94.859,59.99,94.859,48.202z M92.942,48.202c0,19.697-15.021,35.951-34.21,37.912c-0.53,0.022-1.048,0.077-1.582,0.077c-21.139,0-38.271-17.135-38.271-38.27c0-18.178,12.683-33.362,29.677-37.268c2.044-0.341,4.134-0.562,6.277-0.562C75.845,10.092,92.942,27.188,92.942,48.202z"/>
    </g>
  </svg>
)
const srcData=[{
  icon: 'image/seafood.jpg',
  text: '海鲜'
},{
  icon: 'image/tour.png',
  text: '旅游'
},{
  icon: 'image/shell.gif',
  text: '纪念品'
},{
  icon: 'image/ticket.png',
  text: '购票'
}];
let todayNews=[];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regModal: false,
      LoginStatus: !sessionStorage.getItem('username')?'0':'1',
      todayNews: []
    };
  }
  componentWillMount(){
    fetch(window.API_CONFIG.NEWS_API, {
      method: 'GET'
    }).then(res=>res.json()).then(
      (result)=>{
        if(result&&result.data)
        {
          if(result.data.tech&&result.data.tech.length>0)
          {
            todayNews.push(result.data.tech[0]);
          }
          if(result.data.dy&&result.data.dy.length>0)
          {
            todayNews.push(result.data.dy[0]);
          }
          if(result.data.money&&result.data.money.length>0)
          {
            todayNews.push(result.data.money[0]);
          }
          if(result.data.war&&result.data.war.length>0)
          {
            todayNews.push(result.data.war[0]);
          }
          if(result.data.ent&&result.data.ent.length>0)
          {
            todayNews.push(result.data.ent[0]);
          }
          if(result.data.toutiao&&result.data.toutiao.length>0)
          {
            todayNews.push(result.data.toutiao[0]);
          }
          if(todayNews.length>0){
            this.setState({todayNews})
          }
        }
      }
    );
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  cigaretteAlert()
  { 
     Toast.info("吸烟有害身体健康！");
  }
  gridClick(obj,index)
  {
    if(!sessionStorage.getItem('username')){
      Toast.info('请先登录');
      return;
    }
    switch(index){
      case 0:
        browserHistory.push('/fish');
        break;
      case 1:
        browserHistory.push('/home');
        break;
      case 2:
        browserHistory.push('/souvenir')
        break;
      case 3:
        browserHistory.push('/ticket');
        break;
      default:
        Toast.info("先抽根烟吧");
        break;
    }
  }
  buyFishModal(){
      prompt(
        '黄花鱼',
        '注：50元/斤，约2两/条', 
        [{ text: '取消' },
        { text: '提交', 
        onPress: value => console.log(`输入的内容:${value}`) 
        },], 
        'plain-text', 
        '10斤');
  }
  loginClick(){
    prompt(
      '登录',
      null,
      (login, password) => {
        console.log(`login: ${login}, password: ${password}`);
        if(login==='admin'&&password==='admin')
        {
          sessionStorage.setItem('username',login);
          this.setState({
            LoginStatus: '1'
          })
        }else{
          Toast.info('用户名或密码有误！')
        }
      },
      'login-password',
      null,
      ['请输入用户名', '请输入密码'],
    )
  }
  loginOut(){
    sessionStorage.removeItem('username');
    this.setState({
      LoginStatus: '0'
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    const {todayNews} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <p className="LoginArea">
            <span style={{display: this.state.LoginStatus==='1'?'none':'block'}}>
                <a href="javascript:void(0);" onClick={()=>this.loginClick()}>登录</a>
                {/* &nbsp;<span style={{ color: '#000' }}>|</span> &nbsp;
                <a href="javascript:void(0);" onClick={this.showModal('regModal')}>注册</a> */}
            </span>
            <span style={{display: this.state.LoginStatus==='0'?'none':'block'}}>
              hi,{sessionStorage.getItem('username')}
              &nbsp;
              <a href="javascript:void(0);" onClick={()=>this.loginOut()}>退出</a>
            </span>
          </p>
          <Modal
          visible={this.state.regModal}
          transparent
          maskClosable={false}
          onClose={this.onClose('regModal')}
          title="注冊"
          footer={[{ text: '取消', onPress: () => { console.log('cancel'); this.onClose('regModal')(); } },{ text: '确定', onPress: () => { Toast.info('注册成功'); this.onClose('regModal')(); } }]}
        >
        <List>
          <InputItem
            {...getFieldProps('username')}
            placeholder="用户名"
          >
            <div style={{ backgroundImage: `url('image/user.png')`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="密码"
          >
            <div style={{ backgroundImage: `url('image/Key.png')`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          <InputItem
            {...getFieldProps('confirmPassword')}
            type="password"
            placeholder="请再次输入密码"
          >
            <div style={{ backgroundImage: `url('image/confirm.png')`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          <InputItem
            {...getFieldProps('email')}
            placeholder="邮箱"
          >
            <div style={{ backgroundImage: `url('image/email.png')`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>
        </Modal>
          <div style={{ width: 60, height:60 }}>{customIcon()}</div>
          <h2>欢迎来到今日湄洲</h2>
        </div>
        <Grid data={srcData} onClick={(obj,index)=>this.gridClick(obj,index)} />
        <WhiteSpace size="sm" />
        <div className="cigarette">
          <List renderHeader={() => '今日资讯'}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={this.buyFishModal}
            >9斤黄花鱼一条，惊爆价仅售100元！</Item>
            {
              todayNews.map((item)=>{
                return (
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                  arrow="horizontal"
                  onClick={() => {window.location.href=item.link}}
                >{item.title}</Item>      
                )
              })
            }
            {/* <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              arrow="horizontal"
            >郭台铭、任贤齐齐聚湄洲岛，万千群众贺妈祖游台湾</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              arrow="horizontal"
            >19:35直播足协杯半决赛恒大vs上港 门票免费送</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              arrow="horizontal"
            >售18.99-31.69万 2018款大众迈腾正式上市</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              arrow="horizontal"
            >十二年两代更迭 国产丰田锐志正式停产</Item> */}
          </List>
          {/*<button onClick={()=>this.cigaretteAlert()}>
            <img src={ welcSrc } />
          </button>*/}
        </div>
      </div>
    );
  }
}
const FormedApp = createForm()(App);
export default FormedApp;
