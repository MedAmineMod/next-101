 import {   Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack } from "@chakra-ui/react"
 
 const Product =  ({data}) =>  {
    return  (
        <Box
      
        p={4}
     
        maxWidth="32rem"
        borderWidth={1}
        margin={2}
      >
        <AspectRatio >
          <Image
            maxWidth="200px"
            margin="auto"
            src={data.image}
            alt="Woman paying for a purchase"
          />
        </AspectRatio>
        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color="teal.600"
          >
            {data.title}
          </Text>
          <Link
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
            noOfLines={3}
          >
            {data.description}
          </Link>
          {/* <Text my={2} color="gray.500">
            {longLine}
          </Text> */}
            <Link href={"/detailProduct/" + data.id}>
            <Button maxWidth="100px" my={2}>
            Click me!
          </Button>
                </Link>
         
        </Stack>
      </Box>
    )
}

export default Product