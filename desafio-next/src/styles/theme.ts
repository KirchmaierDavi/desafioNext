import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles:{
        global:{
            body:{
                bg: linearGradient(133.46deg, rgba(0, 166, 251, 0.2) 0%, rgba(5, 25, 35, 0.2) 100%), #051923;,
                color:'white',
            }
        }
    }
})
