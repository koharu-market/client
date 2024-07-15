import Layout from '@/components/layout';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import { categories } from '@/data/categories';

interface Props {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Props) {
  return (
    <Layout>
      <Header categories={categories} />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
}
