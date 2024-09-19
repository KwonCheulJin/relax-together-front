import LikeButton from '@/shared/common/ui/like-button';
import Gatherings from './gatherings/page';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 bg-black p-24">
      메인 페이지
      <LikeButton gatheringId="1" />
      <Gatherings />
    </div>
  );
}
