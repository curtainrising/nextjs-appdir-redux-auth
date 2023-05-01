const verifyData = (data) => {
  // verify login information
  // if token is found and is not expired return with data
  return {
    userName: data.userName,
    token: '123',
  }
}
export async function POST(request, res) {
  let data = await request.json();
  
  const userData = verifyData(data);

  return new Response(JSON.stringify(userData))
}
