
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Text} from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
    <div className=''>
    <Card>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
</Card>
    </div>
  </ChakraProvider>
    
  );
}

export default App;
