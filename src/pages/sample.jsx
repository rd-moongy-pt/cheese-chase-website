import { Box, SimpleGrid, Image, Container, Heading } from "@chakra-ui/react";

const SecretGalleryPage = () => {
  // Add your picture paths here
 const images = [
    // `${import.meta.env.BASE_URL}pictures/sample/1.jpg`,  // Replace with your actual image paths
    // `${import.meta.env.BASE_URL}pictures/sample/2.jpg`,  // For example: `${import.meta.env.BASE_URL}pictures/sample/myphoto.jpg"
    // `${import.meta.env.BASE_URL}pictures/sample/3.jpg`,  // Add as many pictures as you want
    // `${import.meta.env.BASE_URL}pictures/sample/4.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/5.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/6.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/7.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/8.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/9.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/10.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/11.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/12.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/13.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/14.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/15.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/16.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/17.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/18.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/19.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/20.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/21.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/22.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/23.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/24.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/25.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/26.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/27.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/28.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/29.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/30.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/31.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/32.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/33.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/34.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/35.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/36.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/37.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/38.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/39.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/40.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/41.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/42.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/43.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/44.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/45.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/46.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/47.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/48.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/49.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/50.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/51.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/52.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/53.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/54.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/55.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/56.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/57.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/58.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/59.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/60.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/61.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/62.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/63.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/64.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/65.jpg`,
    // `${import.meta.env.BASE_URL}pictures/sample/66.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/67.png`,
    // `${import.meta.env.BASE_URL}pictures/sample/68.png`,
  ];

  return (
    <Container maxW="container.xl" pt="100px" pb={10}>
      <Heading mb={8} textAlign="center">Secret Gallery</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {images.map((url, index) => (
          <Box key={index} borderRadius="lg" overflow="hidden" boxShadow="xl">
            <Image
              src={url}
              alt={`Secret picture ${index + 1}`}
              rel=""
              w="100%"
              h="auto"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SecretGalleryPage; 