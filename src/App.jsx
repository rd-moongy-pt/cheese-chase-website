import {
  Flex,
  Heading,
  Spacer,
  Image,
  HStack,
  Box
} from "@chakra-ui/react";
import { HashRouter as Router, Routes, Route, Link as RouterLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import JourneyPage from "./pages/JourneyPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import SecretGalleryPage from "./pages/sample";

const AnimatedNavLink = styled(RouterLink)`
  position: relative;
  font-size: 1.25rem;
  color: ${props => props.$isActive ? '#0b5de0' : 'white'};
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 4px;
    bottom: -21px;
    left: 0;
    background-color: #0b5de0;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:not(:hover)::after {
    width: ${props => props.$isActive ? '100%' : '0'};
    left: auto;
    right: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="brand.navbar"
      boxShadow="0 2px 4px rgba(0,0,0,0.2)"
      p={4}
      align="center"
    >
      <HStack spacing={5} align="center">
        <RouterLink to="/">
          <Image src="/logo.png" alt="Logo" boxSize="42px" />
        </RouterLink>
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Heading size="xl" color="white">Cheese Chase</Heading>
        </RouterLink>
      </HStack>
      <Spacer />
      <HStack spacing={10}>
        <AnimatedNavLink to="/project" $isActive={location.pathname === '/project'}>Project (Webots game)</AnimatedNavLink>
        <AnimatedNavLink to="/journey" $isActive={location.pathname === '/journey'}>Our Journey</AnimatedNavLink>
        <AnimatedNavLink to="/gallery" $isActive={location.pathname === '/gallery'}>Gallery</AnimatedNavLink>
        <AnimatedNavLink to="/about" $isActive={location.pathname === '/about'}>About us</AnimatedNavLink>
      </HStack>
    </Flex>
  );
};

export default function App() {
  return (
    <Router>
      <Box bg="brand.black" minH="100vh" color="white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/secret-gallery" element={<SecretGalleryPage />} />
        </Routes>
      </Box>
    </Router>
  );
}