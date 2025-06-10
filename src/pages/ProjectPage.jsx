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
  Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const MotionBox = motion(Box);

const ProjectPage = () => (
  <Box pt="80px">
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
            We're building a cat-and-mouse chase game where players control robots in a custom-designed arena.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading size="lg" mb={4}>Project Overview</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Custom-designed robot models for cat and mouse characters
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Interactive gameplay mechanics
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Physics-based movement and collision detection
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Score tracking and game progression
              </ListItem>
            </List>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AspectRatio ratio={16/9}>
              <Image
                src="/gallery/coding-session.jpg"
                alt="Webots Development"
                objectFit="cover"
                borderRadius="lg"
              />
            </AspectRatio>
          </MotionBox>
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          mt={8}
        >
          <Heading size="lg" mb={6}>Development Process</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
              <AspectRatio ratio={16/9} mb={4}>
                <Image
                  src="/gallery/team-working.jpg"
                  alt="Planning Phase"
                  objectFit="cover"
                  borderRadius="md"
                />
              </AspectRatio>
              <Heading size="md">Planning</Heading>
              <Text>Initial concept development and game design planning</Text>
            </VStack>

            <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
              <AspectRatio ratio={16/9} mb={4}>
                <Image
                  src="/gallery/presentation.jpg"
                  alt="Development Phase"
                  objectFit="cover"
                  borderRadius="md"
                />
              </AspectRatio>
              <Heading size="md">Development</Heading>
              <Text>Implementing game mechanics and robot behaviors</Text>
            </VStack>

            <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
              <AspectRatio ratio={16/9} mb={4}>
                <Image
                  src="/gallery/team-dinner.jpg"
                  alt="Testing Phase"
                  objectFit="cover"
                  borderRadius="md"
                />
              </AspectRatio>
              <Heading size="md">Testing</Heading>
              <Text>Rigorous testing and gameplay refinement</Text>
            </VStack>
          </SimpleGrid>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          mt={8}
        >
          <Heading size="lg" mb={6}>Project Highlights</Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={6}>
            <Box flex="1">
              <AspectRatio ratio={16/9}>
                <Image
                  src="/gallery/weekend-trip.jpg"
                  alt="Project Achievement"
                  objectFit="cover"
                  borderRadius="lg"
                />
              </AspectRatio>
            </Box>
            <VStack flex="1" align="stretch" spacing={4}>
              <Heading size="md">Key Achievements</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Successfully implemented robot movement and control systems
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Created engaging gameplay mechanics
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Developed custom arena design
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Implemented scoring and game progression systems
                </ListItem>
              </List>
            </VStack>
          </Flex>
        </MotionBox>
      </VStack>
    </Container>
  </Box>
);

export default ProjectPage; 