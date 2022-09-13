

// /api.php?amount=10
// @ts-ignore
export const triviaServer = axios.create({
  baseURL: 'https://opentdb.com',
  timeout: 3000
})