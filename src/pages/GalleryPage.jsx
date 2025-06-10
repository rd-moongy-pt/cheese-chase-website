import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const GalleryImage = ({ src, alt, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        cursor="pointer"
        onClick={onOpen}
      >
        <VStack align="stretch" spacing={2}>
          <Image
            src={src}
            alt={alt}
            borderRadius="lg"
            width="100%"
            height="250px"
            objectFit="cover"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.02)" }}
          />
          <Text fontSize="sm" color="gray.300">{description}</Text>
        </VStack>
      </MotionBox>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="brand.black">
          <ModalCloseButton />
          <ModalBody p={4}>
            <Image
              src={src}
              alt={alt}
              width="100%"
              borderRadius="md"
            />
            <Text mt={4} fontSize="md">{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const GalleryPage = () => {
  const images = [
    {
      src: "/gallery/lisbon-streets.jpg",
      alt: "Streets of Lisbon",
      description: "Exploring the colorful streets of Lisbon"
    },
    {
      src: "/gallery/team-working.jpg",
      alt: "Team Working",
      description: "Our team hard at work on the Webots project"
    },
    {
      src: "/gallery/portuguese-food.jpg",
      alt: "Portuguese Cuisine",
      description: "Trying traditional Portuguese dishes"
    },
    {
      src: "/gallery/coding-session.jpg",
      alt: "Coding Session",
      description: "Collaborative coding session at MoOngy"
    },
    {
      src: "/gallery/weekend-trip.jpg",
      alt: "Weekend Trip",
      description: "Weekend adventure to nearby attractions"
    },
    {
      src: "/gallery/presentation.jpg",
      alt: "Project Presentation",
      description: "Presenting our progress to the team"
    },
    {
      src: "/gallery/team-dinner.jpg",
      alt: "Team Dinner",
      description: "Enjoying dinner together as a team"
    },
    {
      src: "/gallery/cultural-visit.jpg",
      alt: "Cultural Visit",
      description: "Visiting historical sites in Portugal"
    }
  ];

  return (
    <Box pt="80px">
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          mb={12}
        >
          <Heading mb={4}>Gallery</Heading>
          <Text fontSize="lg" mb={8}>
            Capturing moments from our internship journey - from work sessions to cultural experiences.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              description={image.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default GalleryPage; 