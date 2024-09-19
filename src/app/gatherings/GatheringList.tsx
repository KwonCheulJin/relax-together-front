'use client';

import GatheringCardList from '@/entities/ui/gathering-card';

const GatheringListCard = () => {
  return (
    <GatheringCardList
      image="https://example.com/image.jpg"
      message="모임에 오세요!"
      title="정기 모임"
      location="서울, 강남구"
      date="2024-09-18"
      time="오후 7시"
      value={18}
      gatheringId="12345"
    />
  );
};
