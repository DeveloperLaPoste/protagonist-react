import PropTypes from 'prop-types';
import React from 'react';
import { Helpers } from 'react-scroll';

function Link(props) {
  return (
    <a {...props}>
      {props.children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.string,
};

Link.defaultProps = {
  children: '',
};

export default Helpers.Scroll(Link);
