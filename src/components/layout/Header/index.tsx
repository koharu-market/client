import { Category } from '@/types/Category';
import Categories from './Categories';
import LeftNavbar from './Logo';
import Search from './Search';
import RightNavbar from './RightNavbar';

interface Props {
  categories: Category[];
}

export default function Header({ categories }: Props) {
  return (
    <header>
      <div className="border-b">
        <div className="md:container">
          <div className="sticky z-50 md:h-24 h-[60px]">
            <div className="fixed md:container w-full left-0 right-0">
              <div className="flex justify-between md:pb-6 md:pt-8 pb-3 pt-4 items-center px-4 md:px-0 bg-white">
                <LeftNavbar />
                <Search />
                <RightNavbar />
              </div>
            </div>
          </div>

          <Categories categories={categories} />
        </div>
      </div>
    </header>
  );
}
