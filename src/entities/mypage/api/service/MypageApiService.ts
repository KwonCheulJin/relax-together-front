import {
  MyGathering,
  MyHostedGathering,
  PaginationParams,
  WriteReviewRequest,
} from '@/entities/mypage/model';

import ApiService from '@/shared/api/service/ApiService';
import { Response, Review, UpdateUserRequest } from '@/shared/model';
import axios from 'axios';

class MypageApiService extends ApiService {
  constructor() {
    super();
  }
  async getMyJoinedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyGathering>>(
      `/api/gatherings/joined?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyWrittenReviews({ page, size }: PaginationParams) {
    const response = await this.get<Response<Review>>(
      `/api/reviews/me?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyHostedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyHostedGathering>>(
      `/api/gatherings/my-hosted?page=${page}&size=${size}`,
    );
    return response;
  }

  async updateUser(data: UpdateUserRequest) {
    try {
      const response = await this.put(`/api/auths/me`, data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        throw new Error(
          `status: ${status}, error: ${data.error}, message: ${data.message}`,
        );
      }
      throw error;
    }
  }

  async writeReview(data: WriteReviewRequest) {
    const response = await this.post(`/api/reviews`, data);
    return response;
  }
}

export const mypageApiService = new MypageApiService();
