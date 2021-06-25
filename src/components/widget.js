import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Card, Col } from 'antd';

const DefaultCard = (props) => {
  const { children } = props;
  return children;
}

const SolidCard = (props) => {
  const { children } = props;
  return <Card
    style={{
      border: 'none',
      height: '100%',
      backgroundColor: '#2D3355',
      overflow: 'scroll'
    }}
    hoverable
  >{children}</Card>
}

const GlassCard = (props) => {
  const { children } = props;
  return <Card
    style={{
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderColor: '#FFFFFF22',
      height: '100%',
      overflow: 'scroll'
    }}
    hoverable
  >{children}</Card>
}

const Widget = forwardRef((props, ref) => {
  // Props
  const { size, variant, children } = props;
  // Compute widget size
  let responsive = { xs: { span: 24 }, md: { span: 12 }, lg: { span: 8 } }
  if (size === "medium") responsive = { xs: { span: 24 }, md: { span: 24 }, lg: { span: 16 } }
  if (size === "large") responsive = { xs: { span: 24 }, md: { span: 24 }, lg: { span: 24 } }
  // Wrap children
  let Wrapper = DefaultCard;
  if (variant === 'solid') Wrapper = SolidCard;
  if (variant === 'glass') Wrapper = GlassCard;
  // Render
  return <Col
    {...responsive}
    style={{ height: 1400 / 3 - 16, overflowY: 'visible' }}
    ref={ref}
  >
    <Wrapper>
      {children}
    </Wrapper>
  </Col>
});

Widget.defaultProps = {
  variant: 'default',
  size: 'small',
}

Widget.propTypes = {
  variant: PropTypes.oneOf(['default', 'solid', 'glass']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Widget;