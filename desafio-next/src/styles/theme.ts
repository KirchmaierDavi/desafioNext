import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles:{
        global:{
            body:{
                bg: '#051923',
                color:'white',
                fonts: {
                    heading:`'wallpoet', sans-serif`,
                    body:`'wallpoet', sans-serif`
                }
            }
        }
    }
})
