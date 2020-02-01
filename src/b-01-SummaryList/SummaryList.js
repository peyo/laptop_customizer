import React from "react";
import SummaryItem from "../b-02-SummaryItem/SummaryItem";
import Total from "../b-02-Total/Total";

class SummaryList extends React.Component {
  render() {
    const { selected } = this.props;

    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <SummaryItem
          key={featureHash}
          feature={feature}
          selected={selected}
          idx={idx}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2> Your cart</h2>
        {summary}
        <Total selected={selected} />
      </section>
    );
  }
}

export default SummaryList;
