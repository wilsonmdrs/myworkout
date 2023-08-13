import {HStack, Heading, Image, Text, VStack, Icon} from 'native-base';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
type Props = TouchableOpacityProps & {};

export const ExerciseCard = ({...rest}: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems={'center'}
        p={2}
        pr={4}
        rounded="md"
        mb={3}>
        <Image
          source={{
            uri: 'https://getmegiddy.com/sites/default/files/2021-02/pexels-andrea-piacquadio-3775603_P_Hero.jpg',
          }}
          alt="exercise image"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon
          as={(props: FontAwesomeProps) => (
            <FontAwesomeIcon {...props} icon={faChevronRight} />
          )}
          name="icon"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
};
