import type { Plugin } from 'apdf-mei-common';
import { pdfRender } from './pdfRender.js';
import { propPanel } from './propPanel.js';
import { uiRender } from './uiRender.js';
import type { TextSchema } from './types';

const dateTimeSchema: Plugin<TextSchema> = {
  pdf: pdfRender,
  ui: uiRender,
  propPanel,
  // icon to update
  icon: `<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" 
	 width="24" height="24" viewBox="0 0 52 52" enable-background="new 0 0 52 52"  >
<path d="M43.6,6.8h-4V5.2c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2v1.6H18.8V5.2c0-1.8-1.4-3.2-3.2-3.2
	s-3.2,1.4-3.2,3.2v1.6h-4c-2.6,0-4.8,2.2-4.8,4.8v1.6c0,0.9,0.7,1.6,1.6,1.6h41.6c0.9,0,1.6-0.7,1.6-1.6v-1.6
	C48.4,9,46.2,6.8,43.6,6.8z"/>
<path d="M46.8,19.6H5.2c-0.9,0-1.6,0.7-1.6,1.6v24c0,2.6,2.2,4.8,4.8,4.8h35.2c2.6,0,4.8-2.2,4.8-4.8v-24
	C48.4,20.3,47.7,19.6,46.8,19.6z M26,46.7c-6.6,0-11.9-5.4-11.9-11.9c0-6.6,5.4-11.9,11.9-11.9s11.9,5.4,11.9,11.9
	C37.9,41.4,32.6,46.7,26,46.7z"/>
<path d="M27.2,34.3v-5.1c0-0.4-0.4-0.8-0.8-0.8h-0.8c-0.4,0-0.8,0.4-0.8,0.8v5.6c0,0.3,0.1,0.6,0.4,0.8l3.8,3.8
	c0.3,0.3,0.8,0.3,1.1,0l0.6-0.6c0.3-0.3,0.3-0.8,0-1.1L27.2,34.3z"/>
</svg>`,
};

export default dateTimeSchema;
