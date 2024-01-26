# NextJS Router App

## Routes

### Folder Structure

- `app/product/page.tsx` maps to `localhost/product`
- `app/product/detail/page.tsx` maps to `localhost/product/detail`

### Route Groups

Route groups can be used to create a common layout for a group of pages. For example:

- `/app/(auth)/sign-in` maps to `localhost/sign-in`
- `/app/(auth)/sign-up` maps to `localhost/sign-up`

### Route Parameters

- `/app/product/[id]` maps to `localhost/product/1`
- `/app/product/[...data]` maps to `localhost/product/1/small/blue`


## Server Components

By default, every component is a server component, meaning that it is rendered on the server side. These components cannot contain JavaScript code that runs on the client side, nor can they handle user interactions.

Client components, on the other hand, contain interactivity. The JavaScript code for these components is sent to the client. To designate a component as a client component, add 'use client' to it. Client components are also rendered on the server side and go through a process called hydration, which converts static HTML into interactive HTML using JavaScript.

## Data Fetch

In server components, it is possible to convert them into asynchronous function components and fetch data within them. For example:

```tsx
export default async function Page() {

  const resp = await fetch('https://github.com/users/fischerrobson')
  const data = await resp.json()

  return (
    <pre>{JSON.stringify(data)}</pre>
  )
}
```

### Loading

Its possible to create an Loading component for be displayed while the page component did not finished the data fetch. If the `loading.tsx` file is on /app,
it will be used for every page. If its in other folder, it will be used inner that folder.

Atention to components that contains async components, the father component will only be rendered when all children components finished their renders, in this cases should be used Suspense.

### Streaming SSR

Render the component at server-side with streaming.

### Client Boundaries

Every component within a client component will be to a client component.
For use a server component within a client component, it must be passed as children.

```tsx
<ClientComponent>
  <ServerComponent />
</ClientComponent>
```