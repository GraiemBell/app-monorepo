import { GestureHandlerRootView } from 'react-native-gesture-handler';

import platformEnv from '@onekeyhq/shared/src/platformEnv';

import { LastActivityTracker } from '../components/LastActivityTracker';
import PasswordVerifyPromptMount from '../components/Password/container/PasswordVerifyPromptMount';
import '../utils/axiosInterceptor';

import { Container } from './Container';
import { SplashProvider } from './SplashProvider';
import { ThemeProvider } from './ThemeProvider';

if (platformEnv.isRuntimeBrowser) {
  // FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
  // @ts-ignore
  window._frameTimestamp = null;
}

const flexStyle = { flex: 1 };

export function KitProvider() {
  return (
    <ThemeProvider>
      <SplashProvider>
        <GestureHandlerRootView style={flexStyle}>
          <Container />
        </GestureHandlerRootView>
      </SplashProvider>
      <PasswordVerifyPromptMount />
      <LastActivityTracker />
    </ThemeProvider>
  );
}
