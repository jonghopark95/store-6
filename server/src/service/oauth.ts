import { Service } from 'typedi';
import * as oauthHelper from '@/helper/oauth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';

@Service()
class OAuthService {
  async getGoogleAccessToken(code: string) {
    try {
      const response = await oauthHelper.getGoogleOauthToken(code);
      return response.access_token;
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getGoogleUserInfo(accessToken: string) {
    try {
      const response = await oauthHelper.getGoogleUserInfo(accessToken);
      const { id, email, picture } = response;
      return { id, email, picture };
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getFacebookAccessToken(code: string) {
    try {
      const response = await oauthHelper.getFacebookOauthToken(code);
      return response.access_token;
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getFacebookUserInfo(accessToken: string) {
    try {
      const response = await oauthHelper.getFacebookUserInfo(accessToken);
      const { id, email, picture } = response;
      return { id, email, picture };
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }
}

export default OAuthService;