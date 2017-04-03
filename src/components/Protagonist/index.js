import React from 'react';
import './styles.css';
import { H1, Description, ResourceGroups } from '../';

export default class Protagonist extends React.PureComponent {
  render() {
    const { source } = this.props;
    return (
      <div className="Protagonist-main">
        {!source && <div className="Protagonist-noContent" />}
        {source && <div className="Protagonist-content">
          <H1>
            {source.name}
          </H1>
          <Description>
            {source.description}
          </Description>
          <ResourceGroups resourceGroups={source.resourceGroups} />
        </div>}
      </div>
    )
  }
}

Protagonist.propTypes = {
  source: React.PropTypes.object
};
