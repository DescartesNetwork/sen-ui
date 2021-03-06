import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { loremIpsum } from 'lorem-ipsum'

import {
  Row,
  Col,
  Button,
  Typography,
  Input,
  Animate,
  Icon,
  Modal,
  Card,
} from 'components'

function Contents() {
  const [more, setMore] = useState(false)
  const onMore = () => setMore(!more)

  return (
    <Row gutter={[16, 16]} align="middle">
      <Col span={24}>
        <Typography.Title level={3}>
          {loremIpsum({ count: 5, units: 'word' })}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Text>
          {loremIpsum({ count: 1, units: 'paragraphs' })}
        </Typography.Text>
      </Col>
      <Animate transitionName="fade">
        {more ? (
          <Col span={24}>
            <Typography.Text>
              {loremIpsum({ count: 1, units: 'paragraphs' })}
            </Typography.Text>
          </Col>
        ) : null}
      </Animate>
      <Col span={24}>
        <Input
          suffix={
            <Button
              type="text"
              shape="circle"
              icon={<Icon name="thumbs-up" />}
              style={{ marginRight: -7 }}
            />
          }
        />
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]} justify="end">
          <Col>
            <Button type="text" className="contained">
              Cancel
            </Button>
          </Col>
          <Col>
            <Button>Default</Button>
          </Col>
          <Col>
            <Button type="primary" onClick={onMore}>
              Primary
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24} />
    </Row>
  )
}

class Home extends Component {
  render() {
    return (
      <Row gutter={[16, 16]} align="center" justify="center">
        <Col span={24} style={{ height: 64 }} />
        {/* Row 0 */}
        <Col span={24}>
          <Contents />
        </Col>
        {/* Row 1 */}
        <Contents />
        <Col span={24}>
          <Modal visible={false}>
            <Row gutter={[16, 16]}>
              <Col span={24} style={{ height: 32 }} />
              <Col span={24}>
                <Card bordered={false}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <p>Test Modal</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Modal>
        </Col>
        <Col span={24} style={{ height: 64 }} />
      </Row>
    )
  }
}

export default withRouter(Home)
