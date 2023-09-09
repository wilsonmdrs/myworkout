/* Native Base */
import {VStack, Image, Text, Center, Heading, ScrollView} from 'native-base';

/* Navigation */
import {AuthNavigatorRoutesProps} from '@routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

/* Assets */
import BackgroundImage from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

/* Components */
import {Input} from '@components/Input/Index';
import {Button} from '@components/Button';

export const Signin = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleNewAccount = () => navigation.navigate('signUp');

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg={'gray.700'} px={5} pb={16}>
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="people training"
          resizeMode="contain"
          position={'absolute'}
        />
        <Center my={12}>
          <LogoSvg />
          <Text color={'gray.100'} fontSize="sm">
            Working out Mind and Body
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily={'heading'}>
            Access your account
          </Heading>
        </Center>

        <Center>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Password" secureTextEntry />

          <Button title="Sign In" />
        </Center>

        <Center mt={16}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="center">
            Still Don't have an Account?
          </Text>

          <Button
            title="Sign Up"
            variant={'outline'}
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
