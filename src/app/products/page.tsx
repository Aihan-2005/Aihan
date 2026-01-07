import Products from '@/components/sections/Products'

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* فقط کامپوننت محصولات - Navbar و Footer از layout میاد */}
      <Products />
    </div>
  )
}
