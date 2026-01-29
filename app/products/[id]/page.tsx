import { notFound } from 'next/navigation'
import { getProductById, products } from '@/app/products/data'
import ProductDetailClient from './ProductDetailClient'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} />
}
