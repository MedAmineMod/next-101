import { SimpleGrid, Container  , ChakraProvider} from "@chakra-ui/react";
import Product from "../../components/Product";
import { useRouter } from 'next/router'

 const Post = (product) => {
    const router = useRouter()
    const { id } = router.query 
  return(
    <ChakraProvider>


    <Container maxW={'80vw'} centerContent>
        <SimpleGrid columns={1}>
            {
                   
                        <Product   key={product.id} data={product} />
                        // JSON.stringify(product)
                    
            }
        </SimpleGrid>
    </Container>
    </ChakraProvider>
  )
}
export async function getServerSideProps(context) {
    let list = []
    const itemID = context.params?.id;
  
    const res = await fetch("https://fakestoreapi.com/products/"+itemID)
      
    var data = await res.json();
  
     console.log(data);
    
    return {
         props: { ...data }
    }
}
export default Post 