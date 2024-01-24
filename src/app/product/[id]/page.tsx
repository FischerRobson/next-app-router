type ProductDetails = {
  params: {
    id: string
  }
}

export default function ProductDetail({ params }: ProductDetails) {
  return <h1>Product id: {params.id}</h1>
}
