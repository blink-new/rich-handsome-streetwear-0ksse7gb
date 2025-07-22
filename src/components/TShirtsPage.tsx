import { useState } from 'react'
import { Filter } from 'lucide-react'
import type { Product } from '../App'

interface TShirtsPageProps {
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product, size: string, color: string) => void
}

const tshirts: Product[] = [
  {
    id: 'tshirt-1',
    name: 'CHROME SIGNATURE TEE',
    price: 120,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Chrome'],
    description: 'Premium cotton tee with metallic chrome logo print',
    fabric: '100% Premium Cotton, 220gsm'
  },
  {
    id: 'tshirt-2',
    name: 'LUXURY OVERSIZED TEE',
    price: 140,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&crop=center',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal', 'White'],
    description: 'Oversized fit with embossed Rich Hand$ome branding',
    fabric: 'Organic Cotton Blend, 240gsm'
  },
  {
    id: 'tshirt-3',
    name: 'MINIMALIST LOGO TEE',
    price: 100,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&crop=center',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    description: 'Clean design with subtle logo placement',
    fabric: 'Supima Cotton, 200gsm'
  },
  {
    id: 'tshirt-4',
    name: 'STATEMENT GRAPHIC TEE',
    price: 160,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop&crop=center',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Chrome', 'Charcoal'],
    description: 'Bold graphic design with premium finishes',
    fabric: 'Cotton-Modal Blend, 260gsm'
  }
]

export default function TShirtsPage({ onProductClick, onAddToCart }: TShirtsPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const allSizes = ['S', 'M', 'L', 'XL', 'XXL']
  const allColors = ['Black', 'White', 'Chrome', 'Charcoal']

  const filteredProducts = tshirts.filter(product => {
    if (selectedSize && !product.sizes.includes(selectedSize)) return false
    if (selectedColor && !product.colors.includes(selectedColor)) return false
    return true
  })

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation()
    const defaultSize = product.sizes[0]
    const defaultColor = product.colors[0]
    onAddToCart(product, defaultSize, defaultColor)
  }

  return (
    <div className="min-h-screen bg-background py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-anton text-5xl md:text-6xl chrome-text mb-4">
            T-SHIRTS COLLECTION
          </h1>
          <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
            Premium cotton essentials designed for the modern urban lifestyle. 
            Each piece embodies our commitment to luxury and comfort.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors duration-300 mb-4"
          >
            <Filter size={20} />
            <span className="font-inter font-medium">FILTERS</span>
          </button>

          {isFilterOpen && (
            <div className="bg-muted/20 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Size Filter */}
                <div>
                  <h3 className="font-inter font-medium text-white mb-3">SIZE</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSize('')}
                      className={`px-4 py-2 border transition-all duration-300 ${
                        selectedSize === '' 
                          ? 'border-accent text-accent' 
                          : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                      }`}
                    >
                      ALL
                    </button>
                    {allSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-accent text-accent' 
                            : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-inter font-medium text-white mb-3">COLOR</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedColor('')}
                      className={`px-4 py-2 border transition-all duration-300 ${
                        selectedColor === '' 
                          ? 'border-accent text-accent' 
                          : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                      }`}
                    >
                      ALL
                    </button>
                    {allColors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border transition-all duration-300 ${
                          selectedColor === color 
                            ? 'border-accent text-accent' 
                            : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-6 py-2 font-inter font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  QUICK ADD
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="font-anton text-xl text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/60 font-inter text-sm mb-2">{product.description}</p>
                <p className="font-inter font-semibold text-lg text-accent">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 font-inter text-lg">
              No products found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}