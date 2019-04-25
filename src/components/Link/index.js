import PropTypes from 'prop-types';
import React from 'react';
import { Helpers } from 'react-scroll';

function Link(props) {
  return (
    <a
      aOnClick={this.props.aOnClick}
      {...props}
    >
      {props.children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.string,
  aOnClick: PropTypes.func,
};

Link.defaultProps = {
  children: '',
  aOnClick: () => {},
};

export default Helpers.Scroll(Link);
