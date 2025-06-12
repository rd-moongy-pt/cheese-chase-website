import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
  Box
} from "@chakra-ui/react";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalCloseButton 
          color="white" 
          bg="blackAlpha.600" 
          borderRadius="full"
          size="lg"
          _hover={{ bg: "blackAlpha.700" }}
        />
        <Box 
          p={4} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Image
            src={imageSrc}
            alt="Enlarged view"
            maxH="90vh"
            objectFit="contain"
            borderRadius="lg"
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal; 