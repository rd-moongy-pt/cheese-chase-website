import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  AspectRatio,
  Flex,
  useDisclosure,
  IconButton,
  HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ImageModal from "../components/ImageModal";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);
const MotionListItem = motion(ListItem);

const ProjectPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/pictures/project/ff.png",
    "/pictures/project/sir.png",
    "/pictures/project/image.png",
    "/pictures/project/123.png",
    "/pictures/project/1234.png",
    "/pictures/project/12345.png",
    "/pictures/project/3.jpg"
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: { 
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Box pt="115px" pb={32}>
      <Container maxW="container.xl" mb={16}>
        <VStack spacing={8} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading mb={4}>Cheese Chase - A Webots Game</Heading>
            <Text fontSize="lg" mb={8}>
              Our main project at MoOngy involves creating an exciting game using the Webots robotics simulator.
              We're building a cat-and-mouse chase game where the cat must catch the mouse before the mouse gets to the cheese.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <MotionBox
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={listVariants}
            >
              <Heading size="lg" mb={4}>Project Overview</Heading>
              <List spacing={3}>
                <MotionListItem variants={itemVariants}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Custom-designed robot models for cat and mouse characters
                </MotionListItem>
                <MotionListItem variants={itemVariants}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Random movement for the bots
                </MotionListItem>
                <MotionListItem variants={itemVariants}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Physics-based movement and collision detection
                </MotionListItem>
              </List>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <AspectRatio ratio={16/9}>
                <MotionImage
                  src="/pictures/project/ff.png"
                  alt="Webots Development"
                  objectFit="cover"
                  borderRadius="lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </AspectRatio>
            </MotionBox>
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            mt={8}
          >
            <Heading size="lg" mb={6}>Development Process</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {[
                {
                  title: "Planning",
                  description: "Initial concept development and game design planning",
                  image: "/pictures/project/sir.png"
                },
                {
                  title: "Development",
                  description: "Implementing game mechanics and robot behaviors",
                  image: "/pictures/project/image.png"
                },
                {
                  title: "Testing",
                  description: "Testing the bots and the game",
                  image: "/pictures/project/123.png"
                }
              ].map((phase, index) => (
                <MotionVStack
                  key={phase.title}
                  align="stretch"
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor="brand.blue"
                  bg="brand.black"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <AspectRatio ratio={16/9} mb={4}>
                    <MotionImage
                      src={phase.image}
                      alt={phase.title}
                      objectFit="cover"
                      borderRadius="md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      cursor="pointer"
                      onClick={() => handleImageClick(phase.image)}
                    />
                  </AspectRatio>
                  <Heading size="md">{phase.title}</Heading>
                  <Text>{phase.description}</Text>
                </MotionVStack>
              ))}
            </SimpleGrid>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            mt={8}
            mb={8}
          >
            <Heading size="lg" mb={6}>Project description</Heading>
            <Flex direction={{ base: "column", md: "row" }} gap={6}>
              <Box flex="1" mb={4}>
                <AspectRatio ratio={16/9}>
                  <MotionImage
                    src="/pictures/project/1234.png"
                    alt="Project Achievement"
                    objectFit="cover"
                    borderRadius="lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </AspectRatio>
              </Box>
              <VStack flex="1" align="stretch" spacing={4}>
                <Text fontSize="md">
                  {"We started with designing the robot and gathering ideas about the robots mechanics and movement. 3 of our development team members Žan, Luka Česnik and Matevž have been in the National robotics competition which is where we borrowed the design from our robot. 1st week we expirimented with Webots and getting familiar with the engine and the interface. We built a couple of simple robots and code. 2nd week we compleated the design and faced many challanges with the rotation of the robot and avoiding obsticles which led us to rebuilding the robot several times. 3rd week we also tried to implement some pathfinging but we scraped the idea and focus on the main goal of the project. We also tried perfecting obstacle avoidance with many different sensors which led us to teh 4th week where we tried distance sensors, range finders ext. but we decided on the lidar which we got working as intended. Using the camera we also made aprogram that detects the target and moves toword it. We also built the map design and made so that the robot spawns in random location at the start of teh simulations. At the we we put it all together and our project is finished."}
                </Text>
              </VStack>
            </Flex>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            mt={8}
            mb={16}
          >
            <Heading size="lg" mb={6} textAlign="center">Project Gallery</Heading>
            <Box position="relative" width="80%" height="300px" mx="auto" mb={16}>
              <AspectRatio ratio={16/9}>
                <MotionImage
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  objectFit="cover"
                  borderRadius="lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  cursor="pointer"
                  onClick={() => handleImageClick(galleryImages[currentImageIndex])}
                />
              </AspectRatio>
              <HStack
                position="absolute"
                top="90%"
                left="0"
                right="0"
                justify="space-between"
                px={8}
                transform="translateY(-50%)"
                zIndex={2}
              >
                <IconButton
                  icon={<ChevronLeftIcon boxSize={8} />}
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  borderRadius="full"
                  bg="rgba(0, 0, 0, 0.7)"
                  _hover={{ bg: "rgba(0, 0, 0, 0.9)" }}
                  color="white"
                />
                <IconButton
                  icon={<ChevronRightIcon boxSize={8} />}
                  onClick={handleNextImage}
                  aria-label="Next image"
                  colorScheme="brand"
                  variant="solid"
                  size="lg"
                  borderRadius="full"
                  bg="rgba(0, 0, 0, 0.7)"
                  _hover={{ bg: "rgba(0, 0, 0, 0.9)" }}
                  color="white"
                />
              </HStack>
            </Box>
          </MotionBox>
        </VStack>
      </Container>

      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        imageSrc={selectedImage}
      />
    </Box>
  );
};

export default ProjectPage; 