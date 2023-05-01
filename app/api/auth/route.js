import { cookies } from 'next/headers';

const verifyData = (token) => {
  // verify login information from unsigned token
  // if user is found return data with token
  if (token) {
    let authData = {
      userName: 'a',
      token: '123',
    }
    return {
      userName: authData.userName,
      token,
    };
  } else {
    return {};
  }
}

export async function POST(request, res) {
  const cookieStore = cookies();
  let token = (cookieStore.get('token') || {}).value || '';
  const userData = verifyData(token);
  return new Response(JSON.stringify(userData));
}
