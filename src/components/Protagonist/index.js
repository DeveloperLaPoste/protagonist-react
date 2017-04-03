import React from 'react';
import './styles.css';
import { ApiTitle, Description, ResourceGroups } from '../';

export default class Protagonist extends React.PureComponent {

  content = source => {
    return source ? (
      <div className="Protagonist-content">
        <ApiTitle title={source.name} />
        <Description description={source.description} />
        <ResourceGroups resourceGroups={source.resourceGroups} />
      </div>
    ) : <div className="Protagonist-noContent" />;
  };

  render() {
    const { source } = this.props;
    return (
      <div className="Protagonist-main">
        {this.content(source)}
      </div>
    )
  }
}

Protagonist.propTypes = {
  source: React.PropTypes.object
};
