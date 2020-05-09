import React from 'react';
import { Typography, Layout, Avatar, Menu, Breadcrumb, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import List from './List';
import { connect } from 'react-redux';
import './App.css';

const { Content } = Layout;
const { Title } = Typography;

const App = props => {

  console.log('App.js: ', props);

  const { lists } = props

  return (
    <div className="App">
      <Row>
        <Col xs={24} style={{ backgroundColor: '#000', color: '#fff', padding: 16}}>
          <Avatar style={{ float: 'right', marginTop: 6 }} size="large" icon={<UserOutlined />} />
          <Title level={3} style={{ color: '#fff', paddingTop: 10 }}>Eddie Madrigal</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={6}>
          <Menu 
            defaultSelectedKeys={['dashboard']}
            mode='inline'
          >
            <Menu.Item key='dashboard'>
              Dashboard
            </Menu.Item>
            <SubMenu 
              title={
                <span>Social Media Platform</span>
              }>
              <Menu.ItemGroup
                key='socialmediagroup' 
                
                >
                <Menu.Item key='socialmedia1'>Twitter</Menu.Item>
                <Menu.Item key='socialmedia2'>Instagram</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu> 
          </Menu>
        </Col>
        <Col xs={24} sm={18} style={{ backgroundColor: '#ccc'}}>
          <Content style={{ padding: '0 2%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Row style={{ background: '#fff', padding: 24, minHeight: 580, display: 'flex', justifyContent: 'space-around' }}>
              { lists.map(list => 
                
                  <Col xs={24} md={12} lg={8}>
                    <List title={ list.title }
                        posts={list.posts} 
                    />
                  </Col>
                ) 
              }
            </Row>
          </Content>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <p style={{ 
            backgroundColor: '#000'
            , color: '#fff'
            , padding: 16
            , textAlign: 'center' }}>
              React Ant Design. Developed by Eddie Madrigal.
          </p>
        </Col>
      </Row>
    </div>
  );

}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
