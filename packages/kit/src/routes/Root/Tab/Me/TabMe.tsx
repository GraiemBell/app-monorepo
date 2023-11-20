import { Button, Page, YStack } from '@onekeyhq/components';
import type { IPageNavigationProp } from '@onekeyhq/components/src/Navigation';

import useAppNavigation from '../../../../hooks/useAppNavigation';
import { ETabRoutes } from '../Routes';

import type { ITabMeParamList } from './Routes';

const TabMe = () => {
  const navigation = useAppNavigation<IPageNavigationProp<ITabMeParamList>>();

  return (
    <Page>
      <YStack>
        <Button
          onPress={() => {
            navigation.switchTab(ETabRoutes.Home);
          }}
        >
          切换到首页
        </Button>
      </YStack>
    </Page>
  );
};

export default TabMe;
