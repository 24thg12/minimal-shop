import { motion } from "motion/react"
import type { Product } from "./data"

interface ProductGridProps {
  products: Product[]
  onProductSelect: (product: Product) => void
}

export function ProductGrid({ products, onProductSelect }: ProductGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
      {products.map((product) => (
        <motion.div
          key={product.id}
          layoutId={`product-${product.id}`}
          onClick={() => onProductSelect(product)}
          className="group cursor-pointer product-card-wrapper-v2" // Thay đổi 1: Thêm class mới vào wrapper
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="aspect-[4/5] bg-white dark:bg-zinc-900 rounded-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thay đổi 2: Bọc thêm một thẻ div vào đây để thay đổi cấu trúc DOM (Hierarchy) */}
          <div className="mt-1.5 product-info-container"> 
            
            {/* QUAN TRỌNG NHẤT: 
               Đổi từ <h3> sang <p> (paragraph) hoặc <div>.
               Locator cũ là //h3[...] sẽ FAIL ngay lập tức.
               Class cũng được đổi tên một chút.
            */}
            <p className="text-xs font-bold text-blue-600 truncate product-name-modified">
                {product.name}
            </p>

            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">${product.price}</p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500">{product.category}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}