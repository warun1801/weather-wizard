import type { NextPage } from 'next'
import AppShell from '../components/AppShell'
import { ActionIcon, Blockquote, Center, ColorScheme, ColorSchemeProvider, Container, MantineProvider, Text, Title, useMantineColorScheme } from '@mantine/core'
import WeatherInput from '../components/Input';
import { useState } from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';

const ToggleButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}

const HeaderContent: any = () => <Center><Title order={1}>⭐️Weather Wizard⭐️</Title><ToggleButton/></Center>

const NavbarContent: any = () => (
  <div>
    <h1>Navbar</h1>
    <p>This is the navbar content</p>
  </div>
);

const Home: NextPage = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <AppShell headerContent={<HeaderContent/>} navbarContent={<NavbarContent/>}>
        <Container style={{minHeight: '80vh', position: 'relative'}}>
          <Center>
            <Blockquote color="yellow" cite="– Warun Panpaliya">
              Life is like weather.<br/>Sometimes sunny, sometimes wet.<br/>Always a mystery, never set.
            </Blockquote>
          </Center>
          <Center>
            <WeatherInput/>
          </Center>
        </Container>
        <Center>
          <Center style={{position: 'absolute', bottom: 0}}>
              <Text>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>.&nbsp;❤️ Made by <a href="https://github.com/warun1801">Warun Panpaliya</a> 2022.</Text>
          </Center>
        </Center>
      </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>      
  );
}

export default Home
