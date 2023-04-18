import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface CTAProps {
	label: string;
	href: string;
}

interface PersonCardProps {
	name: string;
	username?: string;
	avatar?: string;
	description?: string;
	labels?: string[];
	ctaPrimary?: CTAProps;
	ctaSecondary?: CTAProps;
}

export default function PersonCard({ name, avatar, username, description, labels, ctaPrimary, ctaSecondary }: PersonCardProps) {

	const boxBgColor = useColorModeValue('white', 'gray.900');
	const descriptionColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={boxBgColor}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>

			{
				avatar && (
					<Box
						// size={'xl'}
						mb={4}
						pos={'relative'}
						overflow={'hidden'}
						boxSize={'96px'}
						marginInline={'auto'}
						_after={{
							content: '""',
							w: 4,
							h: 4,
							bg: 'green.300',
							border: '2px solid white',
							rounded: 'full',
							pos: 'absolute',
							bottom: 0,
							right: 3,
						}}
						>
						<Image
							src={avatar}
							width={96}
							height={96}
							alt={name}
							style={{ borderRadius: '50%', objectFit: 'cover' }}
						/>
					</Box>
				)
			}
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
				{
					username && (
						<Text fontWeight={600} color={'gray.500'} mb={4}>
							{username}
						</Text>
					)
				}
				{
					description && (
						<Text
							textAlign={'center'}
							color={descriptionColor}
							px={3}>
							{description}
						</Text>
					)
				}

				{
					labels && (
						<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
							{
								labels.map((label, index) => (
									<Badge
										key={`label-${index}`}
										px={2}
										py={1}
										fontWeight={'400'}>
										{label}
									</Badge>
								))
							}
						</Stack>
					)
				}

				{
					(ctaPrimary || ctaSecondary) && (
						<Stack mt={8} direction={'row'} spacing={4} justifyContent={'center'}>
							{
								ctaSecondary && (
									<Link href={ctaSecondary.href}>
										<Button
											as={'span'}
											flex={1}
											fontSize={'sm'}
											rounded={'full'}
											_focus={{
												bg: 'gray.200',
											}}>
											{ctaSecondary.label}
										</Button>
									</Link>
								)
							}
							{
								ctaPrimary && (
									<Link href={ctaPrimary.href}>
										<Button
											as={'span'}
											flex={1}
											fontSize={'sm'}
											rounded={'full'}
											bg={'blue.400'}
											color={'white'}
											boxShadow={
												'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
											}
											_hover={{
												bg: 'blue.500',
											}}
											_focus={{
												bg: 'blue.500',
											}}>
											{ctaPrimary.label}
										</Button>
									</Link>
								)
							}
						</Stack>
					)
				}
      </Box>
    </Center>
  );
}