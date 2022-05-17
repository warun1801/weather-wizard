import { AppShell, Navbar, Header } from '@mantine/core';

export default function Demo({ navbarContent, headerContent, children } : { navbarContent: any, headerContent: any, children: any }) {
  return (
    <AppShell
      padding="md"
    //   navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{ navbarContent || <h1>None</h1> }</Navbar>}
      header={<Header height={60} p="xs">{ headerContent || <h1>Title</h1> }</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      { children }
    </AppShell>
  );
}

