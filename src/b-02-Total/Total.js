import React from 'react';

class Total extends React.Component {
  render() {
    const { selected } = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    )
  }
}

export default Total;