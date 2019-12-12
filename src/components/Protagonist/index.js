import PropTypes from 'prop-types';
import React from 'react';
import { ApiTitle, Description, ResourceGroups, Summary } from '../';
import './styles.css';

export default class Protagonist extends React.PureComponent {

  content = source => source ? (
    <div className="Protagonist-content">
      <ApiTitle title={source.name} />
      <Summary resourceGroups={source.resourceGroups} addActionToLink={this.props.addActionToLink} />
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
  source: PropTypes.object,
  addActionToLink: PropTypes.func,
};

Protagonist.defaultProps = {
  source: null,
  addActionToLink: () => {},
};
