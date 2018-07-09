import React, {Component} from 'react';

import { Menu, Dropdown, Button, Icon, message, Calendar ,Timeline, Row, Col} from 'antd';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <a href='https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/'>PUBG</a>
    </Menu.Item>
    <Menu.Item key="2"><a href='https://store.steampowered.com/app/391220/Rise_of_the_Tomb_Raider/'>
      Rise of Tomb Raider
    </a></Menu.Item>
    <Menu.Item key="3">
      <a href='https://store.steampowered.com/app/594650/Hunt_Showdown/'>
        Hunt Showdown
      </a>
    </Menu.Item>
  </Menu>
);


class ChatRoom extends Component {
  render() {

    return (
      <div>
        <Row>
          <Col span={12}>
            Work in progress...
            <br/><br/><br/>
            <Dropdown overlay={menu}>
              <Button style={{ marginLeft: 8 }}>
                featured games of the week<Icon type="down" />
              </Button>
            </Dropdown>
          </Col>

          <Col span={10}>
            <div>
              <a href='https://www.pornhub.com/'>https://www.reddit.com/r/dataisbeautiful</a>
              <br/>
              <a href='https://twitter.com/realDonaldTrump?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>https://www.bbc.com</a>
            </div>
          </Col>
        </Row>
        <br/><br/><br/>
        Set up appointments (Demo)
        <Row>
          <Col span={12}>
            <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </Col>
          <Col span={12}>
            <Timeline>
              <Timeline.Item color="green">Seungho will be online 2015-09-01, 12PM EST</Timeline.Item>
              <Timeline.Item color="green">Seungho will be online 2015-09-01, 12PM EST</Timeline.Item>
              <Timeline.Item color="red">
                <p>Seungho will be online 2015-09-01, 12PM EST</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChatRoom;
