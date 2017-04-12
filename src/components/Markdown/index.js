import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';

export default function Markdown({ markdown }) {
  marked.setOptions({
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const html = DOMPurify.sanitize(marked(markdown));
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

Markdown.propTypes = {
  markdown: React.PropTypes.string,
};

Markdown.defaultProps = {
  markdown: '',
};
