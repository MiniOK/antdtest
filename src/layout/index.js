import { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

import { Link } from 'umi';




const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu 

export default class BasicLayout extends Component {

    render() {

        return (

            <Layout>

                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>

                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)',margin: '16px'}} />
                    <Menu  theme = "dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie0-chart"/>
                            <span>Helloworld</span>
                        </Menu.Item>
                        <SubMenu 
                            key="sub1"
                            title={<span><Icon type="dashboard"/><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout >

                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>

                    <Content style={{ margin: '24px 16px 0' }}>

                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                            {this.props.children}

                        </div>

                    </Content>

                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

                </Layout>

            </Layout>

        )

    }

}

/* 
    什么是路由
        html 页面只加载一次，所有的页面都是由不同的组件构成，
        页面的切换其实就是不同组件的切换，你只需要在配置中
        把不同的路由路径和对应的组件关联上即可，单页应用的功能是以如下“

        路由的配置方法：
            在 umi 中，路由的配置是在 config/config.js 中配置，数组

            export.routes = [
                {
                    path: '/',
                    component: 'App',
                },
                {
                    path: 'user',
                    component: 'User',
                },
            ]
        
            page/App

            export default (props) => <div style={{ padding: 20}}>
                {this.props.children}
            </div>

    第三步
            万事俱备，只欠东风，路由已经和响应的页面组件关联起来了

            现在我们只需要配置导航，使得能在点击导航时，触发 URL 刷新，路由根据配置返回
            和当前 URL 匹配的内容

            我们使用 Link 组件（相当于 <a>） 实现路由的跳转
*/

