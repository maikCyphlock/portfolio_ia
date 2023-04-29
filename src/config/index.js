export function API_URL () {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3000'
  } else {
    return process.env.NEXT_PUBLIC_VERCEL_URL
  }
}
