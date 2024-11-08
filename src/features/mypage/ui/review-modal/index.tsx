'use client';
import { useWriteReview } from '@/entities/mypage/model/hooks/useWriteReview';
import ModalContent from '@/features/mypage/ui/review-modal/ModalContent';
import Modal from '@/shared/common/ui/modal';
import { CommonSize } from '@/shared/lib/constants';

export default function ReviewModal() {
  const { score, comment, setScore, setComment, handleSubmit } =
    useWriteReview();

  return (
    <Modal
      title="리뷰 쓰기"
      size={CommonSize.LARGE}
      actionBtnName="리뷰 등록"
      disabled={score === 0 || comment === ''}
      handleAction={handleSubmit}
    >
      <ModalContent
        score={score}
        setScore={setScore}
        comment={comment}
        setComment={setComment}
      />
    </Modal>
  );
}
