import React from 'react';
import hljs from 'highlight.js';

export default class HighlightJS extends React.PureComponent {

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = this.element.querySelectorAll('pre code');
    nodes.forEach(node => {
      hljs.highlightBlock(node);
    });
  }

  render() {
    return (
      <pre ref={pre => { this.element = pre; }}><code>{this.props.code}</code></pre>
    );
  }
}

HighlightJS.propTypes = {
  code: React.PropTypes.string,
};

HighlightJS.defaultProps = {
  code: '',
};
