import React from 'react'
import { useFetchProducts } from './hooks/useFetchProducts'

const Shop = () => {
  const [products, loading, error] = useFetchProducts()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Shop
