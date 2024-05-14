import React from 'react';

import layout from '@splunk/react-page';
import Setup from '@splunk/setup';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                {/* <StyledGreeting>TA-CSNF Setup Page</StyledGreeting> */}
                <Setup name="from inside Setup" />
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
