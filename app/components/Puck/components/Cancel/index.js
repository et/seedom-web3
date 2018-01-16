import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import charityLogo from '../../../../img/logos/charity.png';
import './index.scss';

class Cancel extends Content {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false
    };
  }

  show() {
    super.show();
    this.setState({
      isSubmitting: false
    });
  }

  handleSubmit = event => {
    const { setLoading, onCancel } = this.props;

    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }

    this.setState({
      isSubmitting: true
    });

    setLoading(true);
    onCancel({ seed: this.state.seed, numOfEntries: this.state.numOfEntries });
  }

  render() {
    return (
      <div className={`seedom-content cancel ${this.state.className}`}>
        <Indicator type="cancel" />
        <div className="seedom-overlay">
          <div className="puck-message">END EXPIRED<br />PLEASE CANCEL<br />FOR THE COMMUNITY</div>
        </div>
        <div className="seedom-overlay">
          <img src={charityLogo} />
        </div>
        <div className="seedom-overlay">
        <a className="button is-black is-outlined" onClick={this.handleSubmit}>CANCEL</a>
        </div>
      </div>
    );
  }
}

export default Cancel;