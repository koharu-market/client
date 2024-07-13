import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  return (
    <Layout>
      <Header>헤더당</Header>
      <Main>{children}</Main>
    </Layout>
  );
}
