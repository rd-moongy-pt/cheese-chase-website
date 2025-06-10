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

const TimelineItem = ({ date, title, description, isLeft, image }) => (
  <MotionBox
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    mb={8}
  >
    <HStack align="flex-start" spacing={4}>
      {isLeft && (
        <Box flex="1">
          <Text textAlign="right" fontWeight="bold">{date}</Text>
          <Heading size="md" textAlign="right" mb={2}>{title}</Heading>
          <Text textAlign="right" mb={4}>{description}</Text>
          {image && (
            <AspectRatio ratio={16/9} mb={4}>
              <Image
                src={image}
                alt={title}
                objectFit="cover"
                borderRadius="lg"
              />
            </AspectRatio>
          )}
        </Box>
      )}
      <VStack>
        <Circle size="40px" bg="brand.blue" />
        <Box flex="1" w="2px" bg="brand.blue" />
      </VStack>
      {!isLeft && (
        <Box flex="1">
          <Text fontWeight="bold">{date}</Text>
          <Heading size="md" mb={2}>{title}</Heading>
          <Text mb={4}>{description}</Text>
          {image && (
            <AspectRatio ratio={16/9} mb={4}>
              <Image
                src={image}
                alt={title}
                objectFit="cover"
                borderRadius="lg"
              />
            </AspectRatio>
          )}
        </Box>
      )}
    </HStack>
  </MotionBox>
);

const JourneyPage = () => (
  <Box pt="80px">
    <Container maxW="container.xl">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        mb={12}
      >
        <Heading mb={4}>Our Journey in Portugal</Heading>
        <Text fontSize="lg" mb={8}>
          Follow our adventure as we explore Portugal, learn new skills, and grow both personally and professionally.
        </Text>
        <AspectRatio ratio={21/9} mb={12}>
          <Image
            src="/gallery/lisbon-streets.jpg"
            alt="Lisbon Streets"
            objectFit="cover"
            borderRadius="lg"
          />
        </AspectRatio>
      </MotionBox>

      <VStack spacing={0} align="stretch">
        <TimelineItem
          date="February 2024"
          title="Arrival in Lisbon"
          description="Our team arrived in beautiful Lisbon, ready to start our Erasmus+ internship adventure. We were immediately captivated by the city's charm and warmth."
          isLeft={true}
          image="/gallery/lisbon-streets.jpg"
        />

        <TimelineItem
          date="First Week"
          title="Getting Started at MoOngy"
          description="We began our internship at MoOngy, meeting our mentors and getting familiar with the Webots platform. The excitement of starting our project was palpable."
          isLeft={false}
          image="/gallery/team-working.jpg"
        />

        <TimelineItem
          date="Weekend Adventures"
          title="Exploring Portuguese Culture"
          description="Between work days, we explored local markets, tried traditional Portuguese cuisine, and visited historic sites. Every weekend brought new discoveries."
          isLeft={true}
          image="/gallery/portuguese-food.jpg"
        />

        <TimelineItem
          date="Project Milestones"
          title="Making Progress"
          description="As we dove deeper into our project, we celebrated small victories and overcame challenges together. Our team's collaboration grew stronger each day."
          isLeft={false}
          image="/gallery/coding-session.jpg"
        />

        <TimelineItem
          date="Cultural Exchange"
          title="Building Connections"
          description="We shared our Slovenian culture with our Portuguese colleagues while embracing local traditions. These exchanges enriched our experience immensely."
          isLeft={true}
          image="/gallery/team-dinner.jpg"
        />

        <TimelineItem
          date="Looking Ahead"
          title="Growing Together"
          description="As our internship continues, we're excited about the progress we're making and the memories we're creating. This journey is shaping us both personally and professionally."
          isLeft={false}
          image="/gallery/presentation.jpg"
        />
      </VStack>

      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        mt={16}
      >
        <Heading size="lg" mb={8}>Memorable Moments</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          <AspectRatio ratio={4/3}>
            <Image
              src="/gallery/weekend-trip.jpg"
              alt="Weekend Trip"
              objectFit="cover"
              borderRadius="lg"
            />
          </AspectRatio>
          <AspectRatio ratio={4/3}>
            <Image
              src="/gallery/cultural-visit.jpg"
              alt="Cultural Visit"
              objectFit="cover"
              borderRadius="lg"
            />
          </AspectRatio>
          <AspectRatio ratio={4/3}>
            <Image
              src="/gallery/team-dinner.jpg"
              alt="Team Dinner"
              objectFit="cover"
              borderRadius="lg"
            />
          </AspectRatio>
        </SimpleGrid>
      </MotionBox>
    </Container>
  </Box>
);

export default JourneyPage; 