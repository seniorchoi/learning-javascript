import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from "./components/Callback";
import Posts from "./components/Posts";
import ChatRoom from "./components/ChatRoom";

import { Layout, Icon, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

/* eslint no-restricted-globals: 0*/


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      collapsed: false,
      auth:this.props.auth,
      selected:['main']
    };
  }

  componentWillMount() {
    // this.props.auth.isAuthenticated()?console.log('good'): this.setState({collapsed:true});
    this.setState({selected:[`${this.props.location}`]})
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  switchPage(e){
    switch(e.key) {
      case 'main':
        location.pathname='/';
        break;
      case 'posts':
        location.pathname='/posts';
        break;
      case 'chatRoom':
        location.pathname='/chatRoom';
        break;
      case 'secret':
        location.pathname='/secret';
        break;
      case 'logout':
        this.state.auth.logout();
        break;
    }
    this.setState({selected:[`${e.key}`]});
    console.log(e.key);
  }


  render() {

    let mainComponent = '';
    switch(this.props.location){
      case '':
        mainComponent = <Main {...this.props}/>;
        break;
      case 'posts':
        mainComponent = this.props.auth.isAuthenticated()?<Posts {...this.props}/>: <Main {...this.props}/>;
        break;
      case 'chatRoom':
        mainComponent = this.props.auth.isAuthenticated()?<ChatRoom {...this.props}/> : <Main {...this.props}/>;
        break;
      case 'callback':
        mainComponent = <Callback/>;
        break;
      case 'secret':
        mainComponent = this.props.auth.isAuthenticated()? <Secret {...this.props} /> : <NotFound/>;
        break;
      default:
        mainComponent = <NotFound />;
    }


    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />

          <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.selected} onClick={(e)=>this.switchPage(e)} style={{minHeight: '110vh' }}>
            <Menu.Item key="main">
              <span style={{fontSize: 15}}>The Fuck Club</span>
            </Menu.Item>
            <Menu.Item key="posts">
              <Icon type="book" />
              <span>posts</span>
            </Menu.Item>
            <Menu.Item key="chatRoom">
              <Icon type="warning" />
              <span>Chat room</span>
            </Menu.Item>
            <Menu.Item key="secret">
              <Icon type="key" />
              <span>Admin</span>
            </Menu.Item>
            <Menu.Item key="logout">
              <Icon type="poweroff" />
              <span>logout</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 10 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{fontSize:25}}
            />
            <span style={{fontSize:25, marginLeft: 20}}>The Fuck Club</span>
            <span style={{fontSize:20, float:'right'}}>
              {this.props.name}
              <img src={this.props.pic} style={{padding: 5, height:50}}/>
            </span>

          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
            {mainComponent}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
