import { ChakraProvider } from '@chakra-ui/react'
import React, {FC, PropsWithChildren} from 'react'

const Theme: FC<PropsWithChildren> = ({children}) => {
	return (
		<ChakraProvider>
			{children}
		</ChakraProvider>
	)
}

export default Theme