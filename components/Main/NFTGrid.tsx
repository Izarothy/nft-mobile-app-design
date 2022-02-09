import React from 'react'
import NFTCard from './NFTCard'
import data from '@/data/data.json'

type CardType = {
  name: string
  price: number
  path: string
}
const NFTGrid = () => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {data.images.map((card: CardType) => {
        return <NFTCard name={card.name} price={card.price} image={card.path} />
      })}
    </div>
  )
}

export default NFTGrid
