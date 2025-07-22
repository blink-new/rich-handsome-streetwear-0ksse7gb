import { useState } from 'react'
import { ArrowLeft, Plus, Minus } from 'lucide-react'
import type { Product } from '../App'
import RHHeart from './ui/RHHeart'

interface ProductPageProps {
  product: Product
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void
  onBack: () => void
}

export default function ProductPage({ product, onAddToCart, onBack }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [quantity, setQuantity] = useState<number>(1)

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity)
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <div className="min-h-screen bg-background py-8 relative">
      {/* Decorative hearts */}
      <div className="absolute top-16 right-12">
        <RHHeart size="sm" animate opacity={0.3} />
      </div>
      <div className="absolute bottom-32 left-8">
        <RHHeart size="xs" opacity={0.2} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-inter font-medium">BACK TO COLLECTION</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full">
              <span className="font-inter text-sm font-medium">
                {product.category === 'tshirt' ? 'T-SHIRT' : 'SWEATPANTS'}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="font-anton text-4xl md:text-5xl chrome-text mb-4">
                {product.name}
              </h1>
              <p className="text-white/80 text-lg font-inter leading-relaxed mb-6">
                {product.description}
              </p>
              <p className="font-anton text-3xl text-accent">
                ${product.price}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-inter font-semibold text-white mb-4">SIZE</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 font-inter font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-accent text-accent bg-accent/10'
                        : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-inter font-semibold text-white mb-4">COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 font-inter font-medium transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-accent text-accent bg-accent/10'
                        : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="font-inter font-semibold text-white mb-4">QUANTITY</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 border border-white/30 text-white/70 hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>
                <span className="font-inter font-semibold text-xl text-white w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 border border-white/30 text-white/70 hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent text-white py-4 font-anton text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              ADD TO CART - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Product Details */}
            <div className="space-y-6 pt-8 border-t border-white/20">
              <div>
                <h3 className="font-inter font-semibold text-white mb-2">FABRIC & CARE</h3>
                <p className="text-white/70 font-inter">{product.fabric}</p>
                <p className="text-white/70 font-inter mt-2">
                  Machine wash cold, tumble dry low. Do not bleach.
                </p>
              </div>

              <div>
                <h3 className="font-inter font-semibold text-white mb-2">FIT DESCRIPTION</h3>
                <p className="text-white/70 font-inter">
                  {product.category === 'tshirt' 
                    ? 'Regular fit with a comfortable, relaxed silhouette. True to size.'
                    : 'Relaxed fit through the hip and thigh with a tapered leg. Size up for an oversized look.'
                  }
                </p>
              </div>

              <div>
                <h3 className="font-inter font-semibold text-white mb-2">SHIPPING & RETURNS</h3>
                <p className="text-white/70 font-inter">
                  Free shipping on orders over $200. 30-day return policy. 
                  Items must be unworn with tags attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}