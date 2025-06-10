import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  AspectRatio,
  Flex
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TeamMember = ({ name, image }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <VStack
      p={6}
      borderWidth="3px"
      borderRadius="lg"
      borderColor="brand.blue"
      bg="brand.black"
      spacing={4}
      height="100%"
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <AspectRatio ratio={1} width="200px">
        <Image
          src={image}
          alt={name}
          borderRadius="full"
          objectFit="cover"
        />
      </AspectRatio>
      <VStack spacing={2}>
        <Heading size="md">{name}</Heading>
      </VStack>
    </VStack>
  </MotionBox>
);

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Žan Debenjak",
      image: "/team/member1.jpg"
    },
    {
      name: "Luka Česnik",
      image: "/team/member2.jpg"
    },
    {
      name: "Matevž Bremec",
      image: "/team/member3.jpg"
    },
    {
      name: "Tai Krmpondi",
      image: "/pictures/team/krmp.jpg"
    },
    {
      name: "Nejc Slavec",
      image: "/pictures/team/Slve.jpg"
    },
    {
      name: "Maj Poženel",
      image: "/team/member6.jpg"
    },
    {
      name: "Luka Groznik",
      image: "/team/member7.jpg"
    },
    {
      name: "Nik Premru",
      image: "/team/member8.jpg"
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
          <Heading mb={4}>About Our Team</Heading>
          <Text fontSize="lg" mb={8}>
            We are eight students from Slovenia, currently doing our Erasmus+ internship at MoOngy in Portugal.
            Our diverse team brings together different skills and perspectives to create something amazing.
          </Text>
          <AspectRatio ratio={21/9} mb={12}>
            <Image
              src="/gallery/team-working.jpg"
              alt="Our Team at Work"
              objectFit="cover"
              borderRadius="lg"
            />
          </AspectRatio>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} mb={16}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading size="lg" mb={4}>Our Mission</Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
            <Box flex="1">
              <Text fontSize="lg" mb={8}>
                During our internship at MoOngy, we're not just developing a game – we're growing as professionals,
                learning new technologies, and immersing ourselves in Portuguese culture. Our project combines
                robotics, programming, and creativity to create an engaging gaming experience.
              </Text>
              <Text fontSize="lg">
                We believe in the power of collaboration and continuous learning. Each team member brings unique
                skills and perspectives, making our project stronger and more innovative.
              </Text>
            </Box>
            <Box flex="1">
              <AspectRatio ratio={4/3}>
                <Image
                  src="/gallery/presentation.jpg"
                  alt="Team Presentation"
                  objectFit="cover"
                  borderRadius="lg"
                />
              </AspectRatio>
            </Box>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutPage; 