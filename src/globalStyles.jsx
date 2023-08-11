import { createGlobalStyle } from 'styled-components';

import NotoSansThin from './assets/fonts/NotoSansArabic-Thin.ttf';
import NotoSansLight from './assets/fonts/NotoSansArabic-Light.ttf';
import NotoSansRegular from './assets/fonts/NotoSansArabic-Regular.ttf';
import NotoSansMedium from './assets/fonts/NotoSansArabic-Medium.ttf';
import NotoSansSemiBold from './assets/fonts/NotoSansArabic-SemiBold.ttf';
import NotoSansBold from './assets/fonts/NotoSansArabic-Bold.ttf';
import NotoSansExtraBold from './assets/fonts/NotoSansArabic-ExtraBold.ttf';
import NotoSansExtraLight from './assets/fonts/NotoSansArabic-ExtraLight.ttf';

import MuseoSansRounded100 from './assets/fonts/MuseoSansRounded100.otf';
import MuseoSansRounded300 from './assets/fonts/MuseoSansRounded300.otf';
import MuseoSansRounded500 from './assets/fonts/MuseoSansRounded500.otf';
import MuseoSansRounded700 from './assets/fonts/MuseoSansRounded700.otf';
import MuseoSansRounded900 from './assets/fonts/MuseoSansRounded900.otf';
import MuseoSansRounded1000 from './assets/fonts/MuseoSansRounded1000.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansBold}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansExtraBold}) format('truetype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansSemiBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansMedium}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansLight}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansThin}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Noto Sans Arabic';
    src: url(${NotoSansExtraLight}) format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded1000}) format('opentype');
    font-weight: 1000;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded900}) format('opentype');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded700}) format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded500}) format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded300}) format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo';
    src: url(${MuseoSansRounded100}) format('opentype');
    font-weight: 100;
  }

  :root {
    --primary: #48b6e5;
    --primary-shadow: #2e88af;
    --primary-text: rgb(75,75,75);
  }

  body {
    margin: 0;
    padding: 0;
    max-width: 414px;
    margin: 0 auto;
    font-family: 'Museo', sans-serif;
  }
`;

export default GlobalStyle;
