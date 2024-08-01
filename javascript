import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
ReactGA.pageview(window.location.pathname + window.location.search);
