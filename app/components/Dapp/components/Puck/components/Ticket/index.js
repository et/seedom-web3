import React from 'react';
import Content from '../Content';
import Indicator from '../Indicator';
import './index.scss';
import charityLogo from '../../../../../../img/logos/charity.png';
import seedomTicket from '../../../../../../../../seedom-assets/ticket/seedom-ticket.svg';
import * as saveSvgAsPng from 'save-svg-as-png';
import * as randoms from '../../../../utils/randoms';

const MAX_X = 600;
const MAX_Y = 300;

class Ticket extends Content {
  saveTicket = () => {
    // set ticket to seen
    saveSvgAsPng.svgAsPngUri(this.svg, { encoderOptions: 1 }, (uri) => {
      saveSvgAsPng.download('seedom-ticket.png', uri);
      this.props.onTicketSeen();
    });
  }

  render() {
    const { className } = this.state;
    const {
      isShown,
      onTicketSeen,
      raiser,
      random
    } = this.props;

    return (
      <div className={`seedom-content ticket ${className}`}>
        <Indicator type={isShown ? 'success' : null} />
        <div className="seedom-overlay">
          <svg
            className="seedom-ticket"
            viewBox={`0 0 ${MAX_X} ${MAX_Y}`}
            ref={(svg) => { this.svg = svg; }}
          >
            <image xlinkHref={seedomTicket} x="0" y="0" height={MAX_Y} width={MAX_X} />
            <image xlinkHref={charityLogo} x="92" y="155" width="90" />
            <text className="random" textAnchor="end" x="570" y="45" fontFamily="Moon Bold" fontSize="20px" fill="white">
              {random}
            </text>
            <text className="header" textAnchor="end" x="570" y="70" fontFamily="Moon Regular" fontSize="20px" fill="white">
              YOUR RANDOM MESSAGE
            </text>
            <text className="header" textAnchor="end" x="570" y="200" fontFamily="Moon Regular" fontSize="20px" fill="white">
              REVEAL ON
            </text>
            <text className="random" textAnchor="end" x="570" y="225" fontFamily="Moon Bold" fontSize="20px" fill="white">
              {raiser.revealTime.toLocaleString({ timeZoneName: 'short' })}
            </text>
            <text className="header" textAnchor="end" x="570" y="250" fontFamily="Moon Regular" fontSize="20px" fill="white">
              ENDS ON
            </text>
            <text className="random" textAnchor="end" x="570" y="275" fontFamily="Moon Bold" fontSize="20px" fill="white">
              {raiser.endTime.toLocaleString('en-US', { timeZoneName: 'short' })}
            </text>
          </svg>
        </div>
        <div className="seedom-overlay layout">
          <div className="division text">your<br />ticket</div>
          <div className="division">
            <div className="field">
              <div className="control">
                <a className="button is-white is-outlined" onClick={onTicketSeen}>skip saving</a>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <a className="button is-dark" onClick={this.saveTicket}>save ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
