import React from 'react';
import { Typography, Layout, Avatar, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: '#000', color: '#fff', padding: 16}}>
          <Avatar style={{ float: 'right', marginTop: -5 }} size="large" icon={<UserOutlined />} />
          <Title level={3} style={{ color: '#fff' }}>Eddie Madrigal</Title>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: '#ccc' }}>
            <Menu 
              defaultSelectedKeys={['dashboard']}
              mode='inline'
            >
              <Menu.Item key='dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu 
                title={
                  <span>Social Media</span>
                }>
                <Menu.ItemGroup
                  key='socialmediagroup' 
                  
                  >
                  <Menu.Item key='socialmedia1'>Twitter</Menu.Item>
                  <Menu.Item key='socialmedia2'>Instagram</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>Content</div>
          </Content>
        </Layout>
        <Footer style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>React Ant Design. Created by Eddie Madrigal</Footer>
      </Layout>
    </div>
  );

}

export default App;
