import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import type { Product } from '../App'

interface HomePageProps {
  onNavigate: (page: string) => void
  onProductClick: (product: Product) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop&crop=center'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <img 
              src="/rich-handsome-logo.png" 
              alt="Rich Hand$ome" 
              className="w-auto h-32 md:h-40 lg:h-48 mx-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <p className="text-white/90 text-xl md:text-2xl font-playground mb-12 max-w-2xl mx-auto leading-relaxed">
            Its Better To Be Both
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate('tshirts')}
              className="group bg-white text-black px-8 py-4 font-anton text-lg tracking-wider hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              SHOP T-SHIRTS
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button
              onClick={() => onNavigate('sweatpants')}
              className="group border-2 border-white text-white px-8 py-4 font-anton text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              SHOP SWEATPANTS
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-accent' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>



      {/* Featured Collections Preview */}
      <section className="py-20 px-4 bg-muted/10 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-anton text-4xl md:text-5xl chrome-text mb-12">
            FEATURED COLLECTIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* T-Shirts Preview */}
            <div 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onNavigate('tshirts')}
            >
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop&crop=center"
                alt="T-Shirts Collection"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-anton text-3xl text-white mb-2">T-SHIRTS</h3>
                  <p className="text-white/80 font-inter">Premium Cotton Essentials</p>
                </div>
              </div>
            </div>

            {/* Sweatpants Preview */}
            <div 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onNavigate('sweatpants')}
            >
              <img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop&crop=center"
                alt="Sweatpants Collection"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-anton text-3xl text-white mb-2">SWEATPANTS</h3>
                  <p className="text-white/80 font-inter">Luxury Comfort Wear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}