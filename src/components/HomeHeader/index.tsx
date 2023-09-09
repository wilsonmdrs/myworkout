import {UserPhoto} from '@components/UserPhoto';
import {HStack, Heading, Icon, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-native-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={{uri: 'http://github.com/wilsonmdrs.png'}}
        alt="user image"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Hello!!
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily={'heading'}>
          Wilson
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={(props: FontAwesomeProps) => (
            <FontAwesomeIcon
              {...props}
              size={22}
              icon={faArrowRightFromBracket}
            />
          )}
          name="icon"
          color="gray.200"
          size={10}
        />
      </TouchableOpacity>
    </HStack>
  );
};
