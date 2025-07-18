import { useState } from 'react'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import TShirtsPage from './components/TShirtsPage'
import SweatpantsPage from './components/SweatpantsPage'
import ProductPage from './components/ProductPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import CartSidebar from './components/CartSidebar'
import Navigation from './components/Navigation'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: 'tshirt' | 'sweatpants'
  sizes: string[]
  colors: string[]
  description: string
  fabric: string
}

export interface CartItem extends Product {
  quantity: number
  selectedSize: string
  selectedColor: string
}

function App() {
  const [currentPage, setCurrentPage] = useState<string>('landing')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hasEnteredSite, setHasEnteredSite] = useState(false)

  const addToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
    )

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity, selectedSize: size, selectedColor: color }])
    }
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string, size: string, color: string) => {
    setCartItems(cartItems.filter(item => 
      !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ))
  }

  const updateCartQuantity = (id: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color)
      return
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id && item.selectedSize === size && item.selectedColor === color
        ? { ...item, quantity }
        : item
    ))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleEnterSite = () => {
    setHasEnteredSite(true)
    setCurrentPage('home')
  }

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product)
    setCurrentPage('product')
  }

  if (!hasEnteredSite) {
    return <LandingPage onEnter={handleEnterSite} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemCount={getTotalItems()}
        onCartOpen={() => setIsCartOpen(true)}
      />
      
      <main>
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={setCurrentPage}
            onProductClick={navigateToProduct}
          />
        )}
        {currentPage === 'tshirts' && (
          <TShirtsPage 
            onProductClick={navigateToProduct}
            onAddToCart={addToCart}
          />
        )}
        {currentPage === 'sweatpants' && (
          <SweatpantsPage 
            onProductClick={navigateToProduct}
            onAddToCart={addToCart}
          />
        )}
        {currentPage === 'product' && selectedProduct && (
          <ProductPage 
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack={() => setCurrentPage(selectedProduct.category === 'tshirt' ? 'tshirts' : 'sweatpants')}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  )
}

export default App