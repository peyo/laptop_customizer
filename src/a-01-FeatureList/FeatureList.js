import React from 'react';
import FeatureItem from "../a-02-FeatureItem/FeatureItem";
import FeatureDetails from "../a-02-FeatureDetails/FeatureDetails";
import slugify from 'slugify';

class FeatureList extends React.Component {
  render() {
    const {
      features,
      selected,
      updateFeature,
    } = this.props;

    const featuresA = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        
        return (
          <FeatureItem
            key={itemHash}
            item={item}
            feature={feature}
            selected={selected}
            updateFeature={updateFeature}/>
        )
      });

      return (
        <FeatureDetails
          key={featureHash}  
          featureHash={featureHash}
          options={options}
          feature={feature} />
      )
    });

    return (
      <form className="main__form" >
        <h2>Customize your laptop</h2>
        {featuresA}
      </form>
    )
  }
}

export default FeatureList;