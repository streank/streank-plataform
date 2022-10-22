import { Button } from '@chakra-ui/react';
import { ButtonProps } from './interfaces';

export const ButtonW = ({
  title = 'button',
  bg = 'blue.300',
  color = '#fff',
  width = '80px',
}: ButtonProps) => {
  return (
    <Button
      bg={bg}
      color={color}
      _hover={{ background: '#510167' }}
      borderRadius="20px"
      width={width}
    >
      {title}
    </Button>
  );
};
