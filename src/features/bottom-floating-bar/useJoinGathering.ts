import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import { useModal } from '@/shared/hooks/useModal';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useJoinGathering(id: string) {
  const router = useRouter();
  const { openModal } = useModal();

  const queryClient = useQueryClient();

  const { mutate: joinMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.joinGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 참여했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['participants'] });
    },
    onError: error => {
      console.error('참여하기 요청 실패:', error);
    },
  });

  const { mutate: leaveMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.leaveGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 참여 취소했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['participants'] });
    },
    onError: error => {
      console.error('참여 취소하기 요청 실패:', error);
    },
  });

  const handleOnClick = () => {
    // 확인 버튼 클릭 시 로그인 페이지로 리다이렉트
    router.push('/signin');

    // TODO: 로그인 후 기존 페이지로 리다이렉트
  };

  const handleJoinBtnClick = () => {
    // TODO: 로그인 상태 확인 로직 추가
    const isLoggedIn = false;

    if (!isLoggedIn) {
      // 비로그인 시 로그인이 필요하다는 팝업
      openModal('LoginRequiredModal');
    } else {
      // 참여
      joinMutation(id);
    }
  };

  const handleLeaveBtnClick = () => {
    leaveMutation(id);
  };

  return { handleOnClick, handleJoinBtnClick, handleLeaveBtnClick };
}
