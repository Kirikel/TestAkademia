import { API_URL } from '@/lib/constants'

export async function getMainProducts() {
  const res = await fetch(`${API_URL}/products`, {
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error(`${res.status}, ${res.statusText}`)
  }

  return res.json()
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error(`${res.status}, ${res.statusText}`)
  }

  return res.json()
}
