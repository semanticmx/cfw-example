export default async request => {
  return new Response(
    JSON.stringify({
      status: 'success',
      version: VERSION,
      environment: ENVIRONMENT,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}
