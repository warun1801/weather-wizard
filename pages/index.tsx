import type { NextPage } from 'next'
import AppShell from '../components/AppShell'
import { Blockquote, Center, Container, Title } from '@mantine/core'
import WeatherInput from '../components/Input';

const HeaderContent: any = () => <Center><Title order={1}>Weather Wizard⭐️</Title></Center>

const NavbarContent: any = () => (
  <div>
    <h1>Navbar</h1>
    <p>This is the navbar content</p>
  </div>
);

const Home: NextPage = () => {
  return (
    <div>
    <AppShell headerContent={<HeaderContent/>} navbarContent={<NavbarContent/>}>
      <Container>
        <Center>
          <Blockquote color="yellow" cite="– Warun Panpaliya">
            Life is like weather.<br/>Sometimes sunny, sometimes wet.<br/>Always a mystery, never set.
          </Blockquote>
        </Center>
        <Center>
          <WeatherInput/>
        </Center>
      </Container>
    </AppShell>
    </div>
  );
}

export default Home
