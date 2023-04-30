import { ReactNode } from 'react';
import Link from 'next/link'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'News',
    href: '/news',
  },
];

const NavLink = ({ children, isActive }: { children: ReactNode, isActive: boolean }) => (
  <Text
    as="span"
    px={2}
    py={1}
    rounded={'md'}
    size={'m'}
    fontSize={'xl'}
    fontWeight={isActive ? 'bold' : 'medium'}
    textDecor={isActive ? 'underline' : 'none'}
    textUnderlineOffset={5}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </Text>
);

export default function Nav() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {
              navItems.map((item, index) => (
                <Link href={item.href} key={index}>
                  <NavLink isActive={router.pathname === item.href}>
                    {item.label}
                  </NavLink>
                </Link>
              ))
            }
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}