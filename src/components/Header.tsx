import { Flex, Image, Text } from "@chakra-ui/react";


export default function Header () {
  return (
    <Flex as="header" direction="column" mx="auto" w="100%" align="center">
      <Flex p="8" height={100} >
        <Image src="/images/Logo.svg" alt="Logo worldtrip" height="45px" />        
      </Flex>
      <Flex m="0 auto" width="100%" height={368} position="relative" justify="center">
        <Flex
          width="100%"
          height={335}
          justify="center"
          bgImage="url('/images/background_banner.svg')"
          bgRepeat="no-repeat"
          bgSize="100%"
        ></Flex>

        <Flex maxWidth={1160} justify="space-between" align="center" width="100%" height="100%" position="absolute">
          <Flex direction="column">
            <Text color="#F5F8FA" fontSize="36px" fontWeight="500" lineHeight="54px">
              5 Continentes,
            </Text>
            <Text color="#F5F8FA" fontSize="36px" fontWeight="500" lineHeight="54px">
              infinitas possibilidades.
            </Text>
            <Text color="#DADADA" fontSize="20" fontWeight="normal" mt="20px" lineHeight="30px">
              Chegou a hora de tirar do papel a viagem que você   
            </Text>
            <Text color="#DADADA" fontSize="20" fontWeight="normal" lineHeight="30px">
              você sempre sonhou.   
            </Text>
          </Flex>
          <Flex>
            <Image src="/images/airplane.svg" alt="Airplane" width={417} height={270} marginTop="90px" />
          </Flex>
        </Flex>        
      </Flex>
    </Flex>
  )
}
