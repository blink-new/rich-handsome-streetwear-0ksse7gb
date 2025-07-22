import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import type { CartItem } from '../App'
import RHHeart from './ui/RHHeart'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string, size: string, color: string, quantity: number) => void
  onRemoveItem: (id: string, size: string, color: string) => void
  totalPrice: number
}

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  totalPrice 
}: CartSidebarProps) {
  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here with Stripe integration')
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-white/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 relative">
            {/* Decorative heart */}
            <div className="absolute top-2 right-16">
              <RHHeart size="xs" opacity={0.3} />
            </div>
            
            <div className="flex items-center gap-2">
              <ShoppingBag size={24} className="text-accent" />
              <h2 className="font-anton text-xl text-white">CART ({items.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="text-white/30 mx-auto mb-4" />
                <p className="text-white/60 font-inter">Your cart is empty</p>
                <p className="text-white/40 font-inter text-sm mt-2">
                  Add some luxury pieces to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-inter font-medium text-white text-sm mb-1">
                        {item.name}
                      </h3>
                      <p className="text-white/60 text-xs mb-2">
                        {item.selectedSize} • {item.selectedColor}
                      </p>
                      <p className="font-inter font-semibold text-accent text-sm">
                        ${item.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-6 h-6 border border-white/30 text-white/70 hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center text-xs"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-inter text-white text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-6 h-6 border border-white/30 text-white/70 hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center text-xs"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize, item.selectedColor)}
                          className="ml-2 text-white/40 hover:text-red-400 transition-colors duration-300 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/20 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-inter font-semibold text-white">TOTAL</span>
                <span className="font-anton text-xl text-accent">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-accent text-white py-3 font-anton text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                CHECKOUT
              </button>
              
              <p className="text-white/40 text-xs text-center font-inter">
                Secure checkout with Stripe • Free shipping over $200
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}