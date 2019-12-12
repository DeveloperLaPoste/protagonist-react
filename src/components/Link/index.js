import PropTypes from 'prop-types';
import React from 'react';
import { Helpers } from 'react-scroll';

function Link(props) {
  return (
      <a
        {...props}
        onClick={this.props.addActionToLink}
      >
        {props.children}
      </a>
  );
}

Link.propTypes = {
  children: PropTypes.string,
  addActionToLink: PropTypes.func,
};

Link.defaultProps = {
  children: '',
  addActionToLink: () => {},
};

export default Helpers.Scroll(Link);
