import { Box, SimpleGrid, Image, Container, Heading } from "@chakra-ui/react";

const SecretGalleryPage = () => {
  // Add your picture paths here
  const images = [
    "/pictures/sample/1.jpg",  // Replace with your actual image paths
    "/pictures/sample/2.jpg",  // For example: "/pictures/sample/myphoto.jpg"
    "/pictures/sample/3.jpg",  // Add as many pictures as you want
    "/pictures/sample/4.jpg",
    "/pictures/sample/5.png",
    "/pictures/sample/6.jpg",
    "/pictures/sample/7.jpg",
    "/pictures/sample/8.jpg",
    "/pictures/sample/9.jpg",
    "/pictures/sample/10.png",
    "/pictures/sample/11.jpg",
    "/pictures/sample/12.jpg",
    "/pictures/sample/13.png",
    "/pictures/sample/14.jpg",
    "/pictures/sample/15.jpg",
    "/pictures/sample/16.jpg",
    "/pictures/sample/17.jpg",
    "/pictures/sample/18.jpg",
    "/pictures/sample/19.jpg",
    "/pictures/sample/20.jpg",
    "/pictures/sample/21.jpg",
    "/pictures/sample/22.jpg",
    "/pictures/sample/23.png",
    "/pictures/sample/24.jpg",
    "/pictures/sample/25.jpg",
    "/pictures/sample/26.jpg",
    "/pictures/sample/27.jpg",
    "/pictures/sample/28.jpg",
    "/pictures/sample/29.jpg",
    "/pictures/sample/30.jpg",
    "/pictures/sample/31.jpg",
    "/pictures/sample/32.jpg",
    "/pictures/sample/33.jpg",
    "/pictures/sample/34.jpg",
    "/pictures/sample/35.jpg",
    "/pictures/sample/36.jpg",
    "/pictures/sample/37.jpg",
    "/pictures/sample/38.jpg",
    "/pictures/sample/39.jpg",
    "/pictures/sample/40.jpg",
    "/pictures/sample/41.jpg",
    "/pictures/sample/42.png",
    "/pictures/sample/43.jpg",
    "/pictures/sample/44.jpg",
    "/pictures/sample/45.jpg",
    "/pictures/sample/46.jpg",
    "/pictures/sample/47.jpg",
    "/pictures/sample/48.jpg",
    "/pictures/sample/49.jpg",
    "/pictures/sample/50.jpg",
    "/pictures/sample/51.jpg",
    "/pictures/sample/52.jpg",
    "/pictures/sample/53.png",
    "/pictures/sample/54.png",
    "/pictures/sample/55.png",
    "/pictures/sample/56.png",
    "/pictures/sample/57.jpg",
    "/pictures/sample/58.jpg",
    "/pictures/sample/59.png",
    "/pictures/sample/60.png",
    "/pictures/sample/61.png",
    "/pictures/sample/62.jpg",
    "/pictures/sample/63.png",
    "/pictures/sample/64.png",
    "/pictures/sample/65.jpg",
    "/pictures/sample/66.png",
    "/pictures/sample/67.png",
    "/pictures/sample/68.png",
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