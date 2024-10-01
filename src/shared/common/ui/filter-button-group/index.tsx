import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { Filter } from '@/shared/fixture/filter';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';

interface FilterButtonGroupProps {
  path: string;
  filters: Array<Filter>;
}
export default function FilterButtonGroup({
  path,
  filters,
}: FilterButtonGroupProps) {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const isActive = (filter: string) => filter === currentFilter;

  return (
    <div className="flex gap-2">
      {filters.map(({ filter, name }) => {
        const transColor = isActive(filter)
          ? 'bg-gray-900 text-white hover:bg-gray-900'
          : '';
        return (
          <Button key={filter} variant="filter" className={`${transColor} p-0`}>
            <Link
              href={`/${path}?subPage=${currentSubPage}&filter=${filter}`}
              className="rounded-md px-4 py-2.5"
              scroll={false}
            >
              {name}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}