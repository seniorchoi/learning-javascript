import React, {Component} from 'react';
import {Alert, Button, List, Row, Col} from 'antd';

import {showOnline, addOnline } from './action';

class Main extends Component {
  state = {
    onlineUsers:[]
  };

  componentWillMount() {
    let users=[];
    showOnline()
      .then(res=>{res.data.map(({title})=>{
        title!==''?users.push(title):null;
      });
        this.setState({onlineUsers:users});
        if(!this.state.onlineUsers.includes(this.props.name)){
          addOnline(this.props.name);
        }
      });
  }


  render() {
    const {onlineUsers} = this.state;

    return (
      <div>

        {this.props.auth.isAuthenticated() ?
          (<div>

            <Row>
              <Col span={18}>
                <h3>
                  hello {this.props.name}
                </h3>
                <p>Welcome to the fuck club.</p>
                <p>more functionalities coming</p>
              </Col>
              <Col span={6}>
                <List
                  header={<div style={{fontSize:20}}>Friends list</div>}
                  bordered
                  dataSource={onlineUsers}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
              </Col>
            </Row>


          </div>)
          :
        (<div>
          <Alert type="error" message="Please login first" banner />
          <br/>
          <Button onClick={this.props.auth.login}>login</Button>
        </div>)
        }


      </div>
    );
  }
}

export default Main;
