import { MyGathering, MyHostedGathering } from '@/entities/mypage/model';

import { myGatheringsContents } from '@/shared/fixture/my-gatherings';
import { myHostedGatheringsContents } from '@/shared/fixture/my-hoted-gatherings';
import { myWrittenReviewsContents } from '@/shared/fixture/my-written-reviews';
import { dummyUser } from '@/shared/fixture/user';
import { LIMIT } from '@/shared/lib/constants';
import mockInfiniteResponse from '@/shared/mocks/mockInfiniteResponse';
import { Review } from '@/shared/model/review';
import { rest } from 'msw';

const handlers = [
  rest.get(`/api/auths/user`, (req, res, ctx) => res(ctx.json(dummyUser))),
  rest.put(`/api/auths/user`, (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200));
  }),
  rest.post(`/api/auth/signup`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json({ accessToken: 'Access-Token' })),
  ),
  rest.get('/api/gatherings/joined', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<MyGathering>(
      myGatheringsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get('/api/reviews/me', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<Review>(
      myWrittenReviewsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get('/api/gatherings/my-hosted', (req, res, ctx) => {
    // 쿼리 파라미터 가져오기
    const page = parseInt(req.url.searchParams.get('page') || '0');
    const size = parseInt(req.url.searchParams.get('size') || LIMIT.toString());

    const mockResponse = mockInfiniteResponse<MyHostedGathering>(
      myHostedGatheringsContents,
      page,
      size,
    );

    // 응답 반환
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];

export default handlers;
