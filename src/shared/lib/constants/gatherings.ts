import { getKoreaTime } from '@/shared/lib/utils';
import { addDays, addHours } from 'date-fns';

export const NOW = getKoreaTime(); // NOTE: 현재 시간을 한국 시간으로 가져오기
export const NOW_HOURS = NOW.getHours(); // NOTE: 한국 날짜에서 현재 시간으로 가져오기
export const MEETING_CREATION_CUTOFF_HOUR_KST = 15; // NOTE: 모임 생성 마감 시간 (KST 기준)
export const IS_MEETING_CREATION_ALLOWED =
  NOW_HOURS < MEETING_CREATION_CUTOFF_HOUR_KST; // NOTE: 모임 생성 가능 여부
export const NOW_BASE_CREATE_DATE = addHours(NOW, 3); // NOTE: 현재 시간을 기준으로 서비스 생성 가능 시간을 3시간 뒤로 설정
export const NOW_BASE_CREATE_HOURS = NOW_BASE_CREATE_DATE.getHours(); // NOTE: 서비스 생성 가능 시간
export const FUTURE_CREATE_DATE = addDays(NOW, 1); // NOTE: 현재 시간을 기준으로 내일 날짜 설정
export const FUTURE_BASE_CREATE_HOURS = 9; // NOTE: 내일 날짜의 생성 가능 기본 시간
