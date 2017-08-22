/**
 *
 * Accordion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock, Collapse } from 'reactstrap';

import './styles.css';

export function Accordion(props) {
  return (
    <Card className="Accordion-main">
      {props.children}
    </Card>
  );
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Accordion.defaultProps = {
  children: <div>{''}</div>,
};

export class AccordionItem extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { title, children } = this.props;
    const i = (<i
      className={`fa fa-chevron-down ${this.state.collapse ? 'AccordionItem-rotate' : ''} float-right `}
    />);
    return (
      <div className="AccordionItem-main">
        <CardHeader
          onClick={this.toggle}
          className={`AccordionItem-header ${this.state.collapse ? '' : 'AccordionItem-noBorder'}`}
        >
          {title}{i}
        </CardHeader>
        <Collapse isOpen={this.state.collapse}>
          <CardBlock>
            {children}
          </CardBlock>
        </Collapse>
      </div>
    );
  }
}

AccordionItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onClick: PropTypes.func,
};

AccordionItem.defaultProps = {
  children: <div>{''}</div>,
  onClick: null,
};
