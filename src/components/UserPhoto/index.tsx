import {Image, IImageProps, Skeleton} from 'native-base';

type Props = IImageProps & {
  size: number;
  isLoading: boolean;
};

export const UserPhoto = ({size, isLoading, ...rest}: Props) => {
  if (isLoading) {
    return (
      <Skeleton
        w={size}
        h={size}
        rounded={'full'}
        startColor={'gray.500'}
        endColor={'gray.400'}
      />
    );
  }
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...rest}
    />
  );
};
