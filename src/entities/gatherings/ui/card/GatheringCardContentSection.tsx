import { GatheringCardProps } from '@/entities/gatherings/ui/card';
import ProgressBar from '@/features/progress-bar';
import CardTitle from '@/shared/common/ui/card-title';
import ChipInfo from '@/shared/common/ui/chip-info';
import LikeButton from '@/shared/common/ui/like-button';
import { formatDate, formatTime } from '@/shared/lib/utils';
type GatheringType = '워케이션' | '달램핏' | '오피스 스트레칭' | '마인드풀니스';

interface GatheringCardContentSectionProps
  extends Omit<GatheringCardProps, 'imageUrl' | 'message'> {
  name: string | null;
  type: GatheringType;
}

export default function GatheringCardContentSection(
  props: GatheringCardContentSectionProps,
) {
  const { id, type, location, dateTime, participantCount, capacity, name } =
    props;

  const displayType: string | GatheringType =
    type === '워케이션' && name ? name : type;

  return (
    <div className="flex w-full flex-col justify-between gap-5 py-4 sm:w-[calc(100%-280px)]">
      <div className="flex justify-between pl-6 pr-4">
        <div>
          <CardTitle type={displayType} location={location} />
          <div className="mt-2 flex items-start justify-start">
            <div className="items-start space-x-2">
              <ChipInfo type="date">{formatDate(dateTime)}</ChipInfo>
              <ChipInfo type="time">{formatTime(dateTime)}</ChipInfo>
            </div>
          </div>
        </div>
        <LikeButton gatheringId={id.toString()} />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        participantCount={participantCount}
        capacity={capacity}
        id={id}
      />
    </div>
  );
}
