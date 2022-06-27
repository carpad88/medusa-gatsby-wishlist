import React, { useEffect, useState } from "react"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useSuggestions } from "../hooks/use-suggestions"
import { useWishlist } from '../hooks/use-wishlist'
import WishlistItem from '../components/wishlist/wishlist-item'

const ShoppingBag = () => {
  const [related, setRelated] = useState([])
  const { wishlist } = useWishlist()
  const { getSuggestionsFromCart } = useSuggestions()

  useEffect(() => {
    if (wishlist.items.length > 0) {
      const relatedProducts = getSuggestionsFromCart(wishlist)
      setRelated(relatedProducts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlist])

  return (
    <div className="layout-base">
      <SearchEngineOptimization title="Wishlist" />
      <div className="flex relative flex-col-reverse lg:flex-row mb-24">
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="font-semibold text-4xl">Wish list</h1>
          </div>
          <div className="w-full grid grid-cols-2 gap-16">
            {wishlist.items.map(item => {
              return (
                <WishlistItem
                  key={item.id}
                  item={item}
                  currencyCode={wishlist.region?.currency_code || 'usd'}
                />
              )
            })}
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <div className="my-12">
          <Grid
            title="You might also like"
            cta={{ to: "/products", text: "Browse all products" }}
          >
            {related.slice(0, 4).map(product => {
              return <ProductListItem key={product.handle} product={product} />
            })}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ShoppingBag
