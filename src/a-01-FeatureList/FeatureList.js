import React from "react";
import FeatureDetails from "../a-02-FeatureDetails/FeatureDetails";

class FeatureList extends React.Component {
  render() {
    const {
      features,
      updateFeature,
      selected,
    } = this.props;

    const featuresA = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <FeatureDetails
          key={featureHash}
          features={features}
          updateFeature={updateFeature}
          selected={selected}
          feature={feature}
          idx={idx} />
      )
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {featuresA}
      </form>
    );
  }
}

export default FeatureList;
