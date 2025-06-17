import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  Divider,
  Image,
  AspectRatio,
  SimpleGrid
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TimelineItem = ({ date, title, description, isLeft, image }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      mb={12}
    >
      <HStack align="flex-start" spacing={6}>
        {isLeft && (
          <Box flex="1">
            <HStack align="flex-start" spacing={8}>
              <Box 
                flex="1"
                p={6}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
              >
                <Text textAlign="right" fontWeight="bold" color="brand.blue" fontSize="lg">{date}</Text>
                <Heading size="md" textAlign="right" mb={3}>{title}</Heading>
                <Text textAlign="right" lineHeight="tall">{description}</Text>
              </Box>
              {image && (
                <Box 
                  w="350px" 
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.02)' }}
                >
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={image}
                      alt={title}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
              )}
            </HStack>
          </Box>
        )}
        <VStack spacing={0}>
          <Circle 
            size="50px" 
            bg="brand.blue" 
            border="4px solid"
            borderColor="white"
          />
          <Box flex="1" w="2px" bg="brand.blue" />
        </VStack>
        {!isLeft && (
          <Box flex="1">
            <HStack align="flex-start" spacing={8}>
              {image && (
                <Box 
                  w="350px" 
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.02)' }}
                >
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={image}
                      alt={title}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
              )}
              <Box 
                flex="1"
                p={6}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
              >
                <Text fontWeight="bold" color="brand.blue" fontSize="lg">{date}</Text>
                <Heading size="md" mb={3}>{title}</Heading>
                <Text lineHeight="tall">{description}</Text>
              </Box>
            </HStack>
          </Box>
        )}
      </HStack>
    </MotionBox>
  );
};

const JourneyPage = () => {
  return (
    <Box pt="115px" minH="100vh">
      <Container maxW="container.xl" py={12}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          mb={16}
          textAlign="center"
        >
          <Heading 
            mb={6} 
            fontSize={{ base: "3xl", md: "4xl" }}
            color="brand.white"
          >
            Our Journey in Portugal
          </Heading>
          <Text 
            fontSize="xl" 
            mb={12}
            maxW="800px"
            mx="auto"
          >
            Follow our adventure as we explore Portugal, learn new skills, and grow both personally and professionally.
          </Text>
          <Box 
            borderRadius="2xl"
            overflow="hidden"
            mb={16}
          >
            <AspectRatio ratio={21/9}>
              <Image
                src="/pictures/journey/grad.jpg"
                alt="Lisbon Streets"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        </MotionBox>

        <VStack spacing={0} align="stretch">
          <TimelineItem
            date="22.05.2025"
            title="Arrival in Lisbon"
            description="Our team arrived in beautiful Lisbon, ready to start our Erasmus+ internship adventure. We were immediately captivated by the city's charm and warmth."
            isLeft={true}
            image="/pictures/journey/letalo.jpg"
          />

          <TimelineItem
            date="First Week"
            title="Getting Started at MoOngy"
            description="We began our internship at MoOngy, meeting our mentors and getting familiar with the Webots platform. The excitement of starting our project was incredible."
            isLeft={false}
            image="/pictures/journey/team-photo.jpg"
          />

          <TimelineItem
            date="Weekend Adventures"
            title="Enjoying weekend nights"
            description="Between work days, we explored Portugal colture and went sightseeing. But the weekend nights brought unforgettable memories and new friendships."
            isLeft={true}
            image="/pictures/journey/krmp.jpg"
          />

          <TimelineItem
            date="Project Milestones"
            title="Making Progress"
            description="As we dove deeper into our project, we celebrated small victories and overcame challenges together. Our team's collaboration grew stronger each day."
            isLeft={false}
            image="/pictures/journey/41.jpg"
          />

          <TimelineItem
            date="Cultural Exchange"
            title="Building Connections"
            description="We attended a vibrant local festival where we immersed ourselves in Portuguese traditions and made new friends from different cultures. These cultural exchanges and new friendships made our experience truly special."
            isLeft={true}
            image="/pictures/journey/IMG_3921.jpg"
          />

          <TimelineItem
            date="Looking Ahead"
            title="Growing Together"
            description="As our internship continues, we're excited about the progress we're making and the memories we're creating. This journey is shaping us both personally and professionally."
            isLeft={false}
            image="/pictures/journey/44.jpg"
          />
        </VStack>

        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          mt={20}
          mb={20}
        >
          <Heading 
            size="xl" 
            mb={10}
            textAlign="center"
            color="brand.white"
          >
            Memorable Moments
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {[
              { src: "/pictures/journey/trip.jpg", alt: "Weekend Trip" },
              { src: "/pictures/journey/66.jpg", alt: "Cultural Visit" },
              { src: "/pictures/journey/52.jpg", alt: "Team Dinner" }
            ].map((img, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                >
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      objectFit="cover"
                    />
                  </AspectRatio>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default JourneyPage; 