import { SimpleGrid, Container  , ChakraProvider} from "@chakra-ui/react";
import Product from "../../components/Product";
const ProductsPage = (listOfProducts) => {
    const  list  = listOfProducts
    return (
  
            <ChakraProvider>


            <Container maxW={'80vw'} centerContent>
                <SimpleGrid columns={[2, null, 3]}>
                    {
                        list.list.map(prod => {
                            return (
                                <Product   key={prod.id} data={prod} />
                            )
                        })
                        
                    }
                </SimpleGrid>
            </Container>
            </ChakraProvider>

             
       
    )
}

export async function getServerSideProps(context) {
    let list = []
    const res = await fetch("https://fakestoreapi.com/products")

    var data = await res.json();
    data = { ...data }
    Object.keys(data).forEach(key => {
        
        list.push(data[key])
    })
    console.log(list);
    return {
        props: { list }
    }
}

export default ProductsPage


// COMPOENEMT >>  0 CMP (HTML.. CSS ) | 0 IMPORT CMPS

// CONTAINER >>  0 < CMPS ...