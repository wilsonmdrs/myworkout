/* Native Base */
import {VStack, Image, Text, Center, Heading, ScrollView} from 'native-base';

/* Assets */
import BackgroundImage from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import {Input} from '@components/Input/Index';
import {Button} from '@components/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigatorRoutesProps} from '@routes/auth.routes';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const signUpSchema = yup
  .object({
    name: yup.string().required('this field is required'),
    email: yup
      .string()
      .required('this field is required')
      .email('Email invalid'),
    password: yup
      .string()
      .required('this field is required')
      .min(6, 'the password should have min 6 char'),
    confirmPassword: yup
      .string()
      .required('this field is required')
      .oneOf([yup.ref('password')], 'the password does not match'),
  })
  .required();

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Signup = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoBack = () => navigation.goBack();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: FormDataProps) => {};

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
            Create your account
          </Heading>
        </Center>

        <Center>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                errorMessage={errors.email?.message}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Password"
                secureTextEntry
                value={value}
                errorMessage={errors.password?.message}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Confirm Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onSubmitEditing={handleSubmit(handleSignUp)}
                errorMessage={errors.confirmPassword?.message}
                returnKeyType="send"
              />
            )}
          />
          <Button title="Create Account" onPress={handleSubmit(handleSignUp)} />
        </Center>
        <Button
          title="Sign In"
          variant={'outline'}
          mt={12}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
};
