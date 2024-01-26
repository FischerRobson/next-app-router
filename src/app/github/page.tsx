export default async function Github() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const resp = await fetch('https://api.github.com/users/fischerrobson')
  const data = await resp.json()

  return (
    <div>
      <h1>github</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
