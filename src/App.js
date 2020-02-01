import React, { Component } from "react";

import "./App.css";
import FeatureList from "./a-01-FeatureList/FeatureList";
import SummaryList from "./b-01-SummaryList/SummaryList";

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const { features } = this.props;
    const { selected } = this.state;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureList
            features={features}
            selected={selected}
            updateFeature={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
          />
          <SummaryList selected={selected} />
        </main>
      </div>
    );
  }
}

export default App;
