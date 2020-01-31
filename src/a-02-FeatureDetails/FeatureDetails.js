import React from 'react';

class FeatureDetails extends React.Component {
  render() {
    const {
      featureHash,
      feature,
      options
    } = this.props;
    
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );}
}

export default FeatureDetails;