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
  icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2" fill="none" />
  <line x1="12" y1="12" x2="12" y2="6" stroke="black" stroke-width="2" />
  <line x1="12" y1="12" x2="16" y2="14" stroke="black" stroke-width="2" />
</svg>`,
};

export default numberSchema;
