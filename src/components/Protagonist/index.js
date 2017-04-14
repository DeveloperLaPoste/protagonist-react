import React from 'react';
import { ApiTitle, Description, ResourceGroups, Summary } from '../';
import './styles.css';

export default class Protagonist extends React.PureComponent {

  content = source => source ? (
    <div className="Protagonist-content">
      <ApiTitle title={source.name} />
      <Summary resourceGroups={source.resourceGroups} />
      <Description description={source.description} />
      <ResourceGroups resourceGroups={source.resourceGroups} />
    </div>
  ) : <div className="Protagonist-noContent" />;

  render() {
    const { source } = this.props;
    return (
      <div className="Protagonist-main">
        {this.content(source)}
      </div>
    );
  }
}

Protagonist.propTypes = {
  source: React.PropTypes.object,
};

Protagonist.defaultProps = {
  source: null,
};
