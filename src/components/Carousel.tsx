import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Pagination, Navigation } from 'swiper'

import styles from './carousel.module.scss'

SwiperCore.use([Navigation, Pagination]);


export default function Carousel() {

  return (
    <Flex width="100%" height="450px" bg="gray.200"  mt="52px" mb="70px">
      <Swiper
          tag="section"
          wrapperTag="ul"
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination
      >
        <div className="swiper-button-next" style={{color: '#FFBA08'}}></div>
        <div className="swiper-button-prev" style={{color: '#FFBA08'}}></div>
        <div className="swiper-pagination"></div>
        <SwiperSlide key="africa" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="1240px"
            bgImage="url('/images/continents/africa.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                África
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                É o segundo continente mais populoso da Terra.
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>        
        <SwiperSlide key="americaNorte" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
            maxWidth="1240px"
            bgImage="url('/images/continents/america_norte.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                América do Norte
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                É apenas a parte mais setentrional da América.
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>      
        <SwiperSlide key="oceania" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
            maxWidth="1240px"
            bgImage="url('/images/continents/oceania.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                Oceania
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                Os limites da Oceania são definidos de várias maneiras. 
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>      
        <SwiperSlide key="americaSul" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
            maxWidth="1240px"
            bgImage="url('/images/continents/america_sul.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                América do Sul
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                A região possui vastos recursos naturais.
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>      
        <SwiperSlide key="europa" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
            maxWidth="1240px"
            bgImage="url('/images/continents/europa.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                Europa
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                O continente mais antigo. 
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>      
        <SwiperSlide key="asia" tag="li" style={{listStyle: 'none'}}>
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
            maxWidth="1240px"
            bgImage="url('/images/continents/asia.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            listStyleType="none"
          >
            <Flex direction="column" align="center" justify="center">
              <Text color="#F5F8FA" fontSize="48px" lineHeight="72px" fontWeight="bold">
                Ásia
              </Text>
              <Text color="#DADADA" fontSize="24px" lineHeight="36px" fontWeight="bold">
                O maior dos continentes. 
              </Text>
            </Flex>
          </Flex>          
        </SwiperSlide>      
               
      </Swiper> 
    </Flex>
  )
}