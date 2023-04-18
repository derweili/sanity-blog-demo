import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

interface Details {
  label: string;
  value: string;
}

interface DetailViewProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  labelsHeading?: string;
  labels?: string[];
  detailsHeading?: string;
  details?: Details[];
}


export default function DetailView({title, subtitle, shortDescription, description, image, labelsHeading, labels, detailsHeading, details, children} : DetailViewProps) {

  const subtitleColor = useColorModeValue('gray.900', 'gray.400');
  const dividerColor  = useColorModeValue('gray.200', 'gray.600');
  const shortDescriptionColor = useColorModeValue('gray.500', 'gray.400');
  const subheadingColor = useColorModeValue('yellow.500', 'yellow.300');

  const labelsList1 = labels?.slice(0, Math.ceil(labels.length / 2)) || [];
  const labelsList2 = labels?.slice(Math.ceil(labels.length / 2)) || [];

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 10 }}>
        {
          image && (
            <Flex>
              {/* <Image
                rounded={'md'}
                alt={'product image'}
                src={
                  image
                }
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              /> */}
              <Box
                rounded={'md'}
                position="relative"
                // align={'center'}
                overflow="hidden"
                w={'100%'}
                h={{ base: '200px', sm: '400px', lg: '500px' }}
              >
                <Image
                  src={image}
                  fill
                  alt={`${title} poster`}
                  sizes='(max-width: 600px) 100vw, 600px'
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Flex>
          )
        }
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              { title }
            </Heading>
            {
              subtitle && (
                <Text
                  color={subtitleColor}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  {subtitle}
                </Text>
              )
            }
          </Box>
          
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={dividerColor}
              />
            }>
            {
              (shortDescription || description || children) && (
                <VStack spacing={{ base: 4, sm: 6 }}>
                  {
                    shortDescription && (
                      <Text
                        color={shortDescriptionColor}
                        fontSize={'2xl'}
                        fontWeight={'300'}>
                        {shortDescription}
                      </Text>
                    )
                  }
                  {/* {
                    description && (
                      <Text fontSize={'lg'}>
                        {description}
                      </Text>
                    )
                  } */}
                  {
                    children
                  }
                </VStack>
              )
            }
            <Box>
              {
                labelsHeading && (
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={subheadingColor}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    {labelsHeading}
                  </Text>
                )
              }

              {
                labels && labels.length && (
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {
                      labelsList1 && labelsList1.length && (
                        <List spacing={2}>
                          {
                            labelsList1.map((feature, index) => (
                              <ListItem key={index}>
                                {feature}
                              </ListItem>
                            ))
                          }
                        </List>
                      )
                    }
                    {
                      labelsList2 && labelsList2.length && (
                        <List spacing={2}>
                          {
                            labelsList2.map((feature, index) => (
                              <ListItem key={index}>
                                {feature}
                              </ListItem>
                            ))
                          }
                        </List>
                      )
                    }
                  </SimpleGrid>
                )
              }
            </Box>
            {
              details && details.length && (
                <Box>
                  {
                    detailsHeading && (
                      <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={subheadingColor}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        {detailsHeading}
                      </Text>
                    )
                  }

                  <List spacing={2}>
                    {
                      details.map((detail, index) => (
                        <ListItem key={index}>
                          <Text as={'span'} fontWeight={'bold'}>
                            {detail.label}:
                          </Text>{' '}
                          {detail.value}
                        </ListItem>
                      ))
                    }
                  </List>
                </Box>
              )
            }
          </Stack>

          {/* <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button> */}

          {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}