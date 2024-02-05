import { requests } from '@/api/requests'

export class UserService {
  static async getUserInfo(id: string) {
    const res = await requests().close().getUserInfo(id)
    return res.data;
  }
}