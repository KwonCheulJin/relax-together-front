'use client';

import CommonButton from '@/shared/common/ui/common-button';
import { useParams } from 'next/navigation';

export default function ShareBtn() {
  const params = useParams() as { id: string };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('링크가 복사되었습니다.');
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  const handleShareBtnClick = () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/gatherings/${params.id}`;
    copyToClipboard(textToCopy);
  };

  return (
    <CommonButton
      variant="default"
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      onClick={handleShareBtnClick}
    >
      공유하기
    </CommonButton>
  );
}
