import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
  Image,
  Flex,
  useInterval,
  Circle,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const CategoryCarousel = ({ images, title, isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useInterval(
    () => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    },
    isPaused ? null : 5000
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent bg="black">
        <ModalCloseButton color="white" size="lg" zIndex={3} />
        <ModalBody p={0}>
          <Box
            position="relative"
            height="100vh"
            width="100%"
            overflow="hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <MotionBox
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                position="absolute"
                width="100%"
                height="100%"
              >
                <Image
                  src={images[currentSlide]}
                  alt={`${title} image ${currentSlide + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </MotionBox>
            </AnimatePresence>

            <IconButton
              aria-label="Previous slide"
              icon={<ChevronLeftIcon boxSize={8} />}
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={prevSlide}
              colorScheme="blackAlpha"
              rounded="full"
              size="lg"
            />

            <IconButton
              aria-label="Next slide"
              icon={<ChevronRightIcon boxSize={8} />}
              position="absolute"
              right={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={nextSlide}
              colorScheme="blackAlpha"
              rounded="full"
              size="lg"
            />

            <Flex
              position="absolute"
              bottom={4}
              width="100%"
              justify="center"
              gap={2}
              zIndex={2}
            >
              {images.map((_, index) => (
                <Circle
                  key={index}
                  size={3}
                  bg={currentSlide === index ? "white" : "whiteAlpha.600"}
                  cursor="pointer"
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const CategoryBox = ({ title, description, onClick, images }) => (
  <MotionBox
    as={GridItem}
    height="300px"
    borderRadius="xl"
    overflow="hidden"
    cursor="pointer"
    position="relative"
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgImage={`url(${images[0]})`}
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0, 0, 0, 0.4)",
        zIndex: 1
      }}
    />
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      textAlign="center"
      width="100%"
      padding={6}
      zIndex={2}
      color="white"
    >
      <Heading 
        size="2xl" 
        mb={2} 
        fontWeight="bold"
        textTransform="lowercase"
      >
        {title}
      </Heading>
      <Heading
        size="2xl"
        fontWeight="bold"
        textTransform="lowercase"
      >
        {description}
      </Heading>
    </Box>
  </MotionBox>
);

const GalleryPage = () => {
  const categories = [
    {
      title: "Our",
      description: "Journey",
      images: Array.from({ length: 7 }, (_, i) => `/pictures/gallery/us/${i + 1}.jpg`)
    },
    {
      title: "City",
      description: "Exploration",
      images: Array.from({ length: 12 }, (_, i) => `/pictures/gallery/city/${i + 1}.jpg`)
    },
    {
      title: "Zoo",
      description: "Adventures",
      images: Array.from({ length: 7 }, (_, i) => `/pictures/gallery/zoo/${i + 1}.jpg`)
    },
    {
      title: "Beach",
      description: "Paradise",
      images: Array.from({ length: 8 }, (_, i) => `/pictures/gallery/beach/${i + 1}.jpg`)
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onOpen();
  };

  return (
    <Box pt="115px" pb={12}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          width="100%"
        >
          {categories.map((category, index) => (
            <CategoryBox
              key={index}
              title={category.title}
              description={category.description}
              images={category.images}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </Grid>

        {selectedCategory && (
          <CategoryCarousel
            images={selectedCategory.images}
            title={selectedCategory.title}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}

        <Button
          as={RouterLink}
          to="/secret-gallery"
          position="fixed"
          bottom="20px"
          left="20px"
          bg="brand.black"
          color="brand.black"
          size="xs"
          width="5px"
          height="5px"
          p={0}
          _hover={{ bg: "brand.black" }}
          zIndex="1000"
        >
          Secret
        </Button>
      </Container>
    </Box>
  );
};

export default GalleryPage; 