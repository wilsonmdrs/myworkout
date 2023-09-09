import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
  ScrollView,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import BodySVG from '@assets/body.svg';
import SeriesSVG from '@assets/series.svg';
import RepetitionSVG from '@assets/repetitions.svg';
import {Button} from '@components/Button';
export const Exercise = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => navigation.goBack();
  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={8}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={(props: FontAwesomeProps) => (
              <FontAwesomeIcon {...props} icon={faArrowLeft} />
            )}
            name="icon"
            color="green.500"
          />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems={'center'}>
          <Heading
            color="gray.100"
            fontSize={'lg'}
            flexShrink={1}
            fontFamily={'heading'}>
            Puxada Frontalsdasdasdas asdas das asd sad asd as
          </Heading>

          <HStack>
            <BodySVG />
            <Text color="gray.200" ml={1} textTransform={'capitalize'}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            source={{
              uri: 'https://getmegiddy.com/sites/default/files/2021-02/pexels-andrea-piacquadio-3775603_P_Hero.jpg',
            }}
            alt="exercise name"
            mb={3}
            resizeMode="cover"
            rounded={'lg'}
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent={'space-around'}
              mb={3}
              mt={3}>
              <HStack>
                <SeriesSVG />
                <Text color={'gray.200'} ml={2}>
                  3 Series
                </Text>
              </HStack>
              <HStack
                alignItems="center"
                justifyContent={'space-around'}
                mb={6}
                mt={5}>
                <RepetitionSVG />
                <Text color={'gray.200'} ml={2}>
                  12 repeticoes
                </Text>
              </HStack>
            </HStack>
            <Button title="Mark as it is done" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
