import PropTypes from 'prop-types';
import React from 'react';

import { Accordion, AccordionItem, HighlightJS } from '../';

export default function Schema({ schema }) {
  return (
    <Accordion>
      <AccordionItem title="Schéma">
        <HighlightJS code={schema} />
      </AccordionItem>
    </Accordion>
  );
}

Schema.propTypes = {
  schema: PropTypes.string,
};

Schema.defaultProps = {
  schema: '',
};
