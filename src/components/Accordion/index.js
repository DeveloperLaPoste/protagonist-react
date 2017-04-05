/**
 *
 * Accordion
 *
 */

import React from 'react';
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
  children: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.func]),
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
  title: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]).isRequired,
  children: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.func]),
  onClick: React.PropTypes.func,
};

AccordionItem.defaultProps = {
  children: <div>{''}</div>,
  onClick: null,
};
