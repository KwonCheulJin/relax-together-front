import ByeButton from '@/shared/common/ui/bye-button';

export default function CommonBlurCard() {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-xl bg-black/80 p-6 xs:flex-row xs:items-start xs:justify-between">
      <div className="hidden xs:block xs:h-12 xs:w-12" />
      <div className="flex flex-col items-center justify-center gap-2 xs:h-full">
        <p className="text-sm text-white">모집 취소된 모임이에요.</p>
        <p className="text-sm text-white">다음 기회에 만나요 🙏</p>
      </div>
      <div className="flex w-full justify-center xs:block xs:h-12 xs:w-12">
        <ByeButton />
      </div>
    </div>
  );
}