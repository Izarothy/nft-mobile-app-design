import React from 'react'
import NFTCard from './NFTCard'

const NFTGrid = () => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      <NFTCard
        name="Hologram hand left"
        price={1.25}
        image="/images/nft-1.png"
      />
      <NFTCard
        name="Hologram hand left"
        price={2.25}
        image="/images/nft-2.jpg"
      />
      <NFTCard
        name="Hologram hand left"
        price={1.25}
        image="/images/nft-1.png"
      />
    </div>
  )
}

export default NFTGrid
