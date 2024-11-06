import ApiService from '@/shared/api/service/ApiService';
import { User } from '@/shared/model';

export default class CommonApiService extends ApiService {
  constructor() {
    super();
  }

  async signout() {
    const response = await this.post(`/api/auths/logout`);
    return response;
  }

  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(`/api/gatherings/${gatheringId}/leave`);
    return response;
  }

  async getUserInfo() {
    const response = await this.get<User>(`/api/auths/me`);
    return response;
  }
}

export const commonApiService = new CommonApiService();
