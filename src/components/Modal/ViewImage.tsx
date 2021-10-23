import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" p="0" m="0" overflow="hidden">
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody mx="auto" p="0">
          <Image
            src={imgUrl}
            alt="imgUrl"
            maxW={900}
            maxH={600}
            overflow="hidden"
          />
        </ModalBody>
        <ModalFooter justifyContent="start">
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
