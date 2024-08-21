import { Schema } from 'apdf-mei-common';

export const getCacheKey = (schema: Schema, input: string) => `${schema.type}${input}`;
