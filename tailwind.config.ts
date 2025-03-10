import { themePlugin } from '@bruhabruh/theme';
import type { Config } from 'tailwindcss/types/config';
import { uiPlugin } from './src/shared/bruhabruh-ui/tailwind';

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    backgroundColor: false,
    textColor: false,
    borderColor: false,
  },
  plugins: [themePlugin({ content: './themes/**/*.theme.yaml' }), uiPlugin({})],
} satisfies Config;

export default config;
