'use client'
import React, { useState } from "react"

const CategoriesMenu = () => {
  const [isProductosHovered, setIsProductosHovered] = useState(false)

  return (
    <div>
      {/* Categorias: hay eventos */}
      <div className="hidden md:flex justify-center items-center space-x-8 pt-2 py-6 bg-white">
        <a className="text-gray-500 font-normal text-sm" href="#inicio">
          INICIO
        </a>
        <a className="text-gray-500 font-normal text-sm" href="#new-collection">
          NEW COLLECTION
        </a>
        <div
          onMouseOut={() => {
            setIsProductosHovered(false)
          }}
          onMouseOver={() => {
            setIsProductosHovered(true)
          }}
        >
          <a
            className="text-gray-500 font-normal text-sm mt-[-1px]"
            href="#productos"
          >
            PRODUCTOS
          </a>

          {/* Panel desplegable */}
          <div
            className={`absolute left-0 w-full bg-white shadow-lg transition-opacity duration-500 
              ${
                isProductosHovered
                  ? "opacity-100 z-50"
                  : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="grid grid-cols-6 p-8">
              {/* Column 1 */}
              <div>
                <ul>
                  <li className="text-gray-500 font-normal text-sm relative mb-3">
                    NEW COLLECTION
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="mb-2">
                  <li className="text-gray-500 font-normal text-sm relative mb-3">
                    ABRIGOS
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Sweaters
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Jackets
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Hoodies
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <ul>
                  <li className="text-gray-500 font-normal text-sm relative mb-3">
                    REMERAS
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Boxy
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Oversize
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Heavyweight
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <ul>
                  <li className="text-gray-500 font-normal text-sm relative mb-3">
                    PANTS
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    SHORTS
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    SALE
                  </li>
                </ul>
              </div>

              {/* Column 5 */}
              <div>
                <ul>
                  <li className="text-gray-500 font-normal text-sm relative mb-3">
                    ACCESORIOS
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    Beanies
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    &nbsp;
                  </li>
                  <li className="text-gray-500 font-normal text-sm relative mb-1">
                    VER TODO
                  </li>
                </ul>
              </div>

              {/* Column 6 */}
              <div>
                <ul>
                  <li className="text-gray-500 font-normal text-sm relative">
                    GIFT CARDS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a className="text-gray-500 font-normal text-sm" href="#sale">
          SALE
        </a>
      </div>
    </div>
  )
}

export default CategoriesMenu
