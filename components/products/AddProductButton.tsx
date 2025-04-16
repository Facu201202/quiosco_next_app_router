"use client"

import { Product } from "@/app/generated/prisma"
import { useStore } from "@/src/store"
import { useMemo } from "react"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({ product }: AddProductButtonProps) {
    const addToOrder = useStore(state => state.addToOrder)
    const order = useStore(state => state.order)
    const item = useMemo(
        () => order.find(item => item.id === product.id),
        [order, product.id]
    );
    const disableButton = item?.quantity === 5
    return (
        <button
            type="button"
            onClick={() => addToOrder(product)}
            disabled={disableButton}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer disabled:opacity-20 "
        >Agregar</button>
    )
}
