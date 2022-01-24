import React from 'react';
import './events.css';
import CartModal from './CartModal';

function MobileLayout() {
  return (
    <div className="mobile">
      <h2>Events in</h2>
      <ul>
        <a href="/events/photography">
          <li>
            Photography{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/cinematography">
          <li>
            Cinematography{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/outreach">
          <li>
            Outreach{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/design">
          <li>
            Design{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/media">
          <li>
            Media{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/animation">
          <li>
            Animation{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
        <a href="/events/allevents">
          <li>
            All Events & Workshops{' '}
            <span
              className="iconify"
              data-icon="mdi-light:chevron-right"
              data-inline="false"></span>
          </li>
        </a>
      </ul>
    </div>
  );
}
export default MobileLayout;
