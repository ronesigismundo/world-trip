import { Flex, Image, Text, Divider } from '@chakra-ui/react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        as="section"
        maxWidth={1240}
        direction="column"
        justifyContent="center"
        w="100%"
        mt="70px"
        mx="auto"
      >
        <Flex
          direction="row"
          maxWidth={1160}
          justifyContent="space-between"
          align="center"
          width="100%"
          mx="auto"
        >
          <Flex direction="column" align="center" width="100%">
            <Image src="/images/cocktail.svg" w={85} />
            <Text fontWeight="600" lineHeight="36px" fontSize="24px" mt="24px">vida noturna</Text>
          </Flex>

          <Flex direction="column" align="center" width="100%">
            <Image src="/images/surf.svg" w={85} />
            <Text fontWeight="600" lineHeight="9" fontSize="24px" mt="24px">praia</Text>
          </Flex>

          <Flex direction="column" align="center" width="100%">
            <Image src="/images/building.svg" w={85} />
            <Text fontWeight="600" lineHeight="9" fontSize="24px" mt="24px">moderno</Text>
          </Flex>

          <Flex direction="column" align="center" width="100%">
            <Image src="/images/museum.svg" w={85} />
            <Text fontWeight="600" lineHeight="9" fontSize="24px" mt="24px">clássico</Text>
          </Flex>

          <Flex direction="column" align="center" width="100%">
            <Image src="/images/earth.svg" w={85} />
            <Text fontWeight="600" lineHeight="9" fontSize="24px" mt="24px">e mais...</Text>
          </Flex>

        </Flex>
        
        <Flex
          width="90px"
          mx="auto"
          my="80px"
          align="center"
          border="2px solid #47585B"
        ></Flex>

        <Flex direction="column" mx="auto" justify="center" align="center" width="100%">
          <Text color="#47585B" fontWeight="500" fontSize="36px" lineHeight="54px">
            Vamos nessa?
          </Text>
          <Text color="#47585B" fontWeight="500" fontSize="36px" lineHeight="54px">
            Então escolha seu continente
          </Text>
        </Flex>

        <Carousel />

      </Flex>
    </Flex>
  )
}
