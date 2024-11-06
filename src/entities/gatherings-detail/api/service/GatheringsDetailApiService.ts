import { PaginationParams } from '@/entities/mypage/model';
import { Reviews } from '@/features/pagination-reviews/model/reviews';
import ApiService from '@/shared/api/service/ApiService';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import axios from 'axios';
import { notFound } from 'next/navigation';
import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '../../model/information';

class GatheringsDetailApiService extends ApiService {
  constructor() {
    super();
  }

  async getGatheringsInfo(id: string) {
    try {
      const response = await this.get<GatheringsInfoTypes>(
        `/api/gatherings/${id}`,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        notFound();
      }
      throw error;
    }
  }

  async getParticipantList({
    id,
    page,
    size,
  }: {
    id: string;
  } & PaginationParams) {
    try {
      const response = await this.get<ParticipantListTypes>(
        `/api/gatherings/${id}/participants?page=${page}&size=${size}`,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        notFound();
      }
      throw error;
    }
  }

  async getReviewList({
    id,
    currentPage,
  }: {
    id: string;
    currentPage: number;
  }) {
    const response = await this.get<Reviews>(`/api/gatherings/${id}/reviews`, {
      params: {
        page: currentPage,
        size: REVIEWS_PER_PAGE,
      },
    });
    return response.data;
  }

  async joinGathering(id: string) {
    const response = await this.post(`/api/gatherings/${id}/join`);
    return response;
  }

  async leaveGathering(id: string) {
    const response = await this.delete(`/api/gatherings/${id}/leave`);
    return response;
  }

  async cancelGathering(id: string) {
    const response = await this.put(`/api/gatherings/${id}/cancel`);
    return response;
  }
}

export const gatheringsDetailApiService = new GatheringsDetailApiService();
