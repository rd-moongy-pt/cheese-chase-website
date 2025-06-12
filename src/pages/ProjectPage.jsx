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
  useDisclosure
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import ImageModal from "../components/ImageModal";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);
const MotionListItem = motion(ListItem);

const ProjectPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    onOpen();
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
    <Box pt="115px">
      <Container maxW="container.xl">
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
                  Intelligent AI-driven behavior systems
                </MotionListItem>
                <MotionListItem variants={itemVariants}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Physics-based movement and collision detection
                </MotionListItem>
                <MotionListItem variants={itemVariants}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Score tracking and game progression
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
                  src="/pictures/project/123.png"
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
                  description: "Rigorous testing and gameplay refinement",
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
            <Heading size="lg" mb={6}>Project Highlights</Heading>
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
                <Heading size="md">Key Achievements</Heading>
                <List spacing={3}>
                  <MotionListItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Successfully implemented robot movement and control systems
                  </MotionListItem>
                  <MotionListItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Created engaging gameplay mechanics
                  </MotionListItem>
                  <MotionListItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Developed custom arena design
                  </MotionListItem>
                  <MotionListItem
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Implemented scoring and game progression systems
                  </MotionListItem>
                </List>
              </VStack>
            </Flex>
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