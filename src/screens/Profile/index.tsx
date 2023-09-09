import {Button} from '@components/Button';
import {Input} from '@components/Input/Index';
import {ScreenHeader} from '@components/ScreenHeader';
import {UserPhoto} from '@components/UserPhoto';
import {ScrollView, VStack, Center, Text, Heading, useToast} from 'native-base';
import {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    'http://github.com/wilsonmdrs.png',
  );

  const toast = useToast();
  const handleUserPhotoSelect = async () => {
    setIsLoading(true);
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        quality: 1,
        width: 300,
        height: 400,
        cropping: true,
      });

      if (image.sourceURL && image.size / 1024 / 1024 > 5) {
        setUserPhoto(image.sourceURL);
      } else {
        return toast.show({
          title: 'Image Not Supported!',
          description: 'Image size not supported. Max size supported 5 MB',
          placement: 'bottom',
          bgColor: 'red.500',
          style: {
            marginHorizontal: 10,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Center mt={6} px={4}>
          <UserPhoto
            source={{uri: userPhoto}}
            alt="user image"
            size={33}
            isLoading={isLoading}
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="green.500"
              fontSize="md"
              fontWeight="bold"
              mt={2}
              mb={8}>
              Edit
            </Text>
          </TouchableOpacity>

          <Input placeholder="Name" bg="gray.600" />
          <Input placeholder="wilsonmdrs@gmail.com" bg="gray.600" isDisabled />
          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily={'heading'}
            mb={2}
            mt={12}
            alignSelf={'flex-start'}>
            Change Password
          </Heading>
          <Input placeholder="Current password" bg="gray.600" secureTextEntry />
          <Input placeholder="New password" bg="gray.600" secureTextEntry />
          <Input
            placeholder="Confirm new password"
            bg="gray.600"
            secureTextEntry
          />
          <Button title="Save" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
};
