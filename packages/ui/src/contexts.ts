import { createContext } from 'react';
import { i18n } from './i18n';
import { getDefaultFont, Plugins, UIOptions } from 'apdf-mei-common';
import { builtInPlugins } from 'apdf-mei-schemas';

export const I18nContext = createContext(i18n);

export const FontContext = createContext(getDefaultFont());

export const PluginsRegistry = createContext<Plugins>(builtInPlugins);

export const OptionsContext = createContext<UIOptions>({});
