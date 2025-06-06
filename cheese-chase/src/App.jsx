import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Image,
  HStack,
  Text,
  SimpleGrid,
  VStack,
  Container
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AnimatedNavLink = styled(Link)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 5px;
    bottom: -18px;
    left: 0;
    background-color: #0b5de0;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:not(:hover)::after {
    width: 0;
    left: auto;
    right: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const Navbar = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="brand.black"
      boxShadow="0 2px 4px rgba(0,0,0,0.2)"
      borderBottom="1px solid white"
      p={4}
      align="center"
    >
      <HStack spacing={3} align="center">
        <RouterLink to="/">
          <Image src="/logo.png" alt="Logo" boxSize="30px" />
        </RouterLink>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Heading size="md">Cheese Chase</Heading>
        </RouterLink>
      </HStack>
      <Spacer />
      <HStack spacing={6}>
        <AnimatedNavLink as={RouterLink} to="/project" fontSize="lg">Project (Webots game)</AnimatedNavLink>
        <AnimatedNavLink as={RouterLink} to="/journey" fontSize="lg">Our Journey</AnimatedNavLink>
        <AnimatedNavLink as={RouterLink} to="/gallery" fontSize="lg">Gallery</AnimatedNavLink>
        <AnimatedNavLink as={RouterLink} to="/about" fontSize="lg">About us</AnimatedNavLink>
      </HStack>
    </Flex>
  );
};

const HomePage = () => (
  <Box pt="80px">
    <Container maxW="container.xl">
      <Flex direction="column" alignItems="center" textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          mb={8}
        >
          <Heading mb={4}>Our project with MoOngy</Heading>
          <Text fontSize="lg" mb={8}>
            Welcome to our journey! We're 8 students from Slovenia doing an Erasmus+ internship at MoOngy in Portugal.
          </Text>
          <Image 
            src="/team-photo.jpg" 
            alt="Our team at MoOngy" 
            maxWidth="800px"
            borderRadius="lg"
            shadow="lg"
            mb={16}
          />
        </MotionBox>
        
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          mb={12}
        >
          <Heading size="xl">Explore our page</Heading>
        </MotionBox>
        
        <MotionSimpleGrid
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          maxW="1200px"
          width="100%"
        >
          <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
            <Heading size="lg" mb={4}>Project (Webots game)</Heading>
            <Text fontSize="lg">
              See what we've been working on at MoOngy! Our main task is creating a cat-and-mouse style game using Webots, a robotics simulator. We'll show you how we planned it, developed it, overcame technical challenges, and brought the game to life.
            </Text>
          </VStack>

          <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
            <Heading size="lg" mb={4}>About Us</Heading>
            <Text fontSize="lg">
              See what we've been working on at MoOngy! Our main task is creating a cat-and-mouse style game using Webots, a robotics simulator. We'll show you how we planned it, developed it, overcame technical challenges, and brought the game to life.
            </Text>
          </VStack>

          <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
            <Heading size="lg" mb={4}>Our Journey</Heading>
            <Text fontSize="lg">
              Follow our adventures in Portugal! From our arrival in Lisbon to sightseeing, cultural experiences, and weekend trips, this section shows the human side of our Erasmus+ experience.
            </Text>
          </VStack>

          <VStack align="stretch" p={6} borderWidth="1px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
            <Heading size="lg" mb={4}>Gallery</Heading>
            <Text fontSize="lg">
              A picture is worth a thousand words. Check out our favorite snapshots from Lisbon, our work at MoOngy, team activities, and the beautiful places we've visited.
            </Text>
          </VStack>
        </MotionSimpleGrid>
      </Flex>
    </Container>
  </Box>
);

const ProjectPage = () => (
  <Box pt="80px" px={6}>
    <Heading>Project: Webots Game</Heading>
    <p>Details about our Webots game.</p>
  </Box>
);

const JourneyPage = () => (
  <Box pt="80px" px={6}>
    <Heading>Our Journey</Heading>
    <p>Blog and updates about our experience.</p>
  </Box>
);

const GalleryPage = () => (
  <Box pt="80px" px={6}>
    <Heading>Gallery</Heading>
    <p>Photos from our adventure.</p>
  </Box>
);

const AboutPage = () => (
  <Box pt="80px" px={6}>
    <Heading>About Us</Heading>
    <p>Information about our team.</p>
  </Box>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
