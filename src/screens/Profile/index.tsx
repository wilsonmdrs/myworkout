import {Button} from '@components/Button';
import {Input} from '@components/Input/Index';
import {ScreenHeader} from '@components/ScreenHeader';
import {UserPhoto} from '@components/UserPhoto';
import {ScrollView, VStack, Center, Text, Heading} from 'native-base';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUserPhotoSelect = async () => {
    // const result = await launchImageLibrary({
    //   mediaType:'photo',
    //   quality:1,
      
    // })
    // ImagePicker.openPicker({
    //   mediaType:"photo",
    //   quality:1,
    //   width:300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });

  }
  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />
      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Center mt={6} px={4}>
          <UserPhoto
            source={{uri: 'http://github.com/wilsonmdrs.png'}}
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
