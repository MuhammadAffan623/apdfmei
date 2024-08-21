import type { Plugin } from 'apdf-mei-common';
import { pdfRender } from './pdfRender.js';
import { propPanel } from './propPanel.js';
import { uiRender } from './uiRender.js';
import type { TextSchema } from './types';

const numberSchema: Plugin<TextSchema> = {
  pdf: pdfRender,
  ui: uiRender,
  propPanel,
  // icon to update
  icon: `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="black">NO</text>
  <rect x="50%" y="70%" width="25" height="1.5" style="fill:black;" />
</svg>`,
};

export default numberSchema;
