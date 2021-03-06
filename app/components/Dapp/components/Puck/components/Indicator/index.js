import React, { Component } from 'react';
import './index.scss';

class Indicator extends Component {
  render() {
    const { type } = this.props;

    return (
      <div className="seedom-overlay">
        <svg className={`indicator ${type ? 'show' : null}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className={`circle ${type}`} cx="26" cy="26" r="25" />
          {{
            checkmark: (
              <path className="element" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            ),
            error: (
              <path className="element" d="M16,16 L36,36 M36,16 L16,36" />
            ),
            win: (
              <circle className="element pulse" cx="26" cy="26" r="25" />
            )
          }[type]}
        </svg>
      </div>
    );
  }
}

export default Indicator;
