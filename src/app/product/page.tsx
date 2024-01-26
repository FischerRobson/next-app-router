import { Suspense } from 'react'
import { LongWaitComponent } from '../components/LongWaitComponent'
import { SkeletonLoading } from '../components/SkeletonLoading'

export default function Product() {
  return (
    <div>
      <h1>Product</h1>
      <Suspense fallback={<SkeletonLoading />}>
        <LongWaitComponent />
      </Suspense>
    </div>
  )
}
