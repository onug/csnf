import React from 'react';

import layout from '@splunk/react-page';
import PrereqDashboard from '@splunk/prereq-dashboard';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                {/* <StyledGreeting>Hello, from inside TaCsnf!</StyledGreeting>
                <div>Your component will appear below.</div> */}
                <PrereqDashboard name="from inside PrereqDashboard" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
