import Header from "../containers/Header"
import { ChakraProvider , Box } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"


const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
}

const theme =extendTheme(colors)

const HomePage = () => {

    return (
        <ChakraProvider theme={theme} >

            <Box bg="#f9f9f9">
                <Header />
                <div>
                    HOME PAGE
                </div>
            </Box>

        </ChakraProvider>


    )
}



export default HomePage