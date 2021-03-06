import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { Layout, Row, Col, Brand, Button, Icon } from 'components'

import Home from 'containers/home'

class App extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor: '#00000000' }}>
        <Layout.Header style={{ backgroundColor: '#00000000' }}>
          <Row gutter={[16, 16]}>
            <Col>
              <Brand />
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content style={{ padding: 8 }}>
          <Row gutter={[16, 16]} justify="center">
            <Col span={24} style={{ maxWidth: 1920 }}>
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
              </Switch>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer style={{ backgroundColor: '#00000000' }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Button
                type="text"
                className="contained"
                icon={<Icon name="paper-plane" />}
                href="#"
              />
            </Col>
          </Row>
        </Layout.Footer>
      </Layout>
    )
  }
}

export default withRouter(App)
