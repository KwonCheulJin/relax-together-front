import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_LOGIN_URL = '/signin';
const FALLBACK_FORGOT_PASSWORD_URL = '/forgot-password';

// NOTE: 주석 처리된 부분 브라우저의 보안 정책과 Public Suffix List 때문에 vercel.app 도메인으로 쿠키를 설정할 수 없는 문제가 있어서 middleware 기능 일부 주석처리
// NOTE: 추후에 도메인을 같이 통일하는 방법으로 수정

// const FALLBACK_URL = '/gatherings';
// const withAuthList = ['/mypage'];
// const withOutAuthList = ['/signin', '/signup', '/reset-password'];

// function parseCookies(cookieHeader: string | null): { [key: string]: string } {
//   const cookies: { [key: string]: string } = {};
//   if (cookieHeader) {
//     cookieHeader.split(';').forEach(cookie => {
//       const [name, value] = cookie.split('=').map(c => c.trim());
//       cookies[name] = decodeURIComponent(value);
//     });
//   }
//   return cookies;
// }

const getEmail = async (token: string | null) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/verify-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    },
  );
  return response.json() as Promise<{ email: string }>;
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // const { pathname } = req.nextUrl;
  // const cookies = parseCookies(req.headers.get('cookie'));

  // const isLoginUser = cookies['isLoginUser'];

  // const targetPathname = pathname.split('/')[1];
  // const isWithAuth = withAuthList.includes(`/${targetPathname}`);
  // const isWithOutAuth = withOutAuthList.includes(`/${targetPathname}`);

  // if (isWithAuth && isLoginUser !== 'true') {
  //   return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
  // }

  // if (isWithOutAuth && isLoginUser === 'true') {
  //   return NextResponse.redirect(new URL(FALLBACK_URL, req.url));
  // }

  if (url.pathname === '/mypage' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'my-gatherings');
    return NextResponse.redirect(url);
  }

  if (
    url.pathname === '/reset-password' &&
    !(url.searchParams.has('token') || url.searchParams.has('email'))
  ) {
    return NextResponse.redirect(new URL(FALLBACK_LOGIN_URL, req.url));
  }

  if (url.pathname === '/reset-password' && url.searchParams.has('token')) {
    const token = url.searchParams.get('token');

    try {
      const { email } = await getEmail(token);
      if (!email) {
        throw new Error('토큰이 만료되었습니다.');
      }
      url.searchParams.delete('token');
      url.searchParams.set('email', email);
      return NextResponse.redirect(url);
    } catch (error) {
      return NextResponse.redirect(
        new URL(`${FALLBACK_FORGOT_PASSWORD_URL}?isTokenExpired=true`, req.url),
      );
    }
  }

  if (url.pathname === '/gatherings' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }
  if (url.pathname === '/like-gatherings' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }

  if (url.pathname === '/reviews' && !url.searchParams.has('subPage')) {
    url.searchParams.set('subPage', 'dalaemfit');
    url.searchParams.set('filter', 'all');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/gatherings',
    '/gatherings/:path*',
    '/mypage',
    '/signin',
    '/signup',
    '/reviews',
    '/like-gatherings',
    '/reset-password',
  ],
};
