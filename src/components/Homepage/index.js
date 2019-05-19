import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Layout, Menu, Breadcrumb} from 'antd'

const {Header, Sider, Content, Footer} = Layout;

function Homepage(props) {
    const {classes} = props

    return (
        <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{
                lineHeight: '64px'
            }}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{
            padding: '0 50px'
        }}>
            <Breadcrumb style={{
                margin: '16px 0'
            }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                background: '#fff',
                padding: 24,
                minHeight: 280
            }}>
                <h2>
                    Hello Guest
                </h2>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/register"
                    className={classes.submit}>
                    Register
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/login"
                    className={classes.submit}>
                    Login
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/dashboard"
                    className={classes.submit}>
                    Dashboard
                </Button>
            </div>
        </Content>
        <Footer style={{
            textAlign: 'center'
        }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>,
    mountNode
    );

// export default Homepage