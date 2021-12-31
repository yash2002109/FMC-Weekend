import React from 'react';
import './events.css';
function MobileLayout() {
    return (
        <div className="mobile">
            <h2>Events in</h2>
            <ul>
                <a href="/events/photography"><li>Photography <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
                <a href="/events/cinematography"><li>Cinematography <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
                <a href="/events/outreach"><li>Outreach <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
                <a href="/events/design"><li>Design <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
                <a href="/events/media"><li>Media <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
                <a href="/events/animation"><li>Animation <span class="iconify" data-icon="mdi-light:chevron-right" data-inline="false"></span></li></a>
            </ul>
        </div>
    )
}
export default MobileLayout