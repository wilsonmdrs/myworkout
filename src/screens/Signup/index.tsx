/* Native Base */
import {VStack, Image, Text, Center, Heading, ScrollView} from 'native-base';

/* Assets */
import BackgroundImage from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import {Input} from '@components/Input/Index';
import {Button} from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export const Signup = () => {

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const handleGoBack = () => navigation.goBack()

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} >
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
          Create your account 
        </Heading>
      </Center>

      <Center>
      <Input
          placeholder="Name"
        />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Password" secureTextEntry />

        <Button title="Create Account" />
      </Center>


      <Button title="Sign In" variant={'outline'} mt={24}  onPress={handleGoBack}/>
    </VStack>
    </ScrollView>
  );
};
