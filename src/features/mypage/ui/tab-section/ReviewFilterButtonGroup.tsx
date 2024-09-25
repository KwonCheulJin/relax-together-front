import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

type Filter = {
  name: string;
  filter: string;
};

const filters: Array<Filter> = [
  { name: '작성 가능한 리뷰', filter: 'pending' },
  { name: '작성한 리뷰', filter: 'written' },
];
export default function ReviewFilterButtonGroup() {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const isActive = (filter: string) => filter === currentFilter;
  return (
    <div className="flex gap-2">
      {filters.map(({ filter, name }) => (
        <Button
          key={filter}
          variant="filter"
          className={`${isActive(filter) ? 'bg-gray-900 text-white hover:bg-gray-900' : ''} p-0`}
        >
          <Link
            href={`/mypage?subPage=${currentSubPage}&filter=${filter}`}
            className="rounded-xl px-4 py-2.5"
          >
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
