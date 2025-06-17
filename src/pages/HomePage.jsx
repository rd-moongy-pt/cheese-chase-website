import {
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  VStack,
  Container,
  Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const GlowingBox = styled(VStack)`
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  height: 100%;
  min-height: 250px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: #0b5de0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
    filter: blur(15px);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #0b5de0;
  }

  &:hover::before {
    opacity: 0.3;
  }
`;

const HomePage = () => (
  <Box pt="115px" overflowY="auto" h="100vh">
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
            maxWidth="100%"
            maxHeight="20%"
            objectFit="cover"
            borderRadius="lg"
            shadow="lg"
            mb={12}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          maxW="1200px"
          width="100%"
          alignItems="stretch"
          mb={16}
        >
          <RouterLink to="/project" style={{ textDecoration: 'none' }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlowingBox align="stretch" p={6} borderWidth="3px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
                <Heading size="lg" mb={4}>Project (Webots game)</Heading>
                <Text fontSize="lg">
                  See what we've been working on at MoOngy! Our main task is creating a cat-and-mouse style game using Webots, a robotics simulator. We'll show you how we planned it, developed it, overcame technical challenges, and brought the game to life.
                </Text>
              </GlowingBox>
            </MotionBox>
          </RouterLink>

          <RouterLink to="/journey" style={{ textDecoration: 'none' }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GlowingBox align="stretch" p={6} borderWidth="3px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
                <Heading size="lg" mb={4}>Our Journey</Heading>
                <Text fontSize="lg">
                  Follow our adventures in Portugal! From our arrival in Lisbon to sightseeing, cultural experiences, and weekend trips, this section shows the human side of our Erasmus+ experience.
                </Text>
              </GlowingBox>
            </MotionBox>
          </RouterLink>

          <RouterLink to="/gallery" style={{ textDecoration: 'none' }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <GlowingBox align="stretch" p={6} borderWidth="3px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
                <Heading size="lg" mb={4}>Gallery</Heading>
                <Text fontSize="lg">
                  A picture is worth a thousand words. Check out our favorite snapshots from Lisbon, our work at MoOngy, team activities, and the beautiful places we've visited.
                </Text>
              </GlowingBox>
            </MotionBox>
          </RouterLink>

          <RouterLink to="/about" style={{ textDecoration: 'none' }}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <GlowingBox align="stretch" p={6} borderWidth="3px" borderRadius="lg" borderColor="brand.blue" bg="brand.black">
                <Heading size="lg" mb={4}>About Us</Heading>
                <Text fontSize="lg">
                  Meet our diverse team of students from Slovenia! Learn about our backgrounds, roles in the project, and how we're growing together through this amazing experience.
                </Text>
              </GlowingBox>
            </MotionBox>
          </RouterLink>
        </MotionSimpleGrid>
      </Flex>
    </Container>
  </Box>
);

export default HomePage; 