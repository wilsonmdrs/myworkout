/* React Navigation */
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

/* Native Base */
import {Box, useTheme} from 'native-base';

/* Routes */
import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

export const Routes = () => {
  const {colors} = useTheme();

  const theme = DefaultTheme;

  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
