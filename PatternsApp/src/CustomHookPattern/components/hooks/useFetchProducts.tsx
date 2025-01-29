import { useState, useEffect } from 'react'

export interface Product {
  id: number
  name: string
  price: number
}

export function useFetchProducts(): [Product[], boolean, Error | null] {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return [products, loading, error]
}
