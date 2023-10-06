import { create } from "zustand";

export const useCarrito = create((set) => ({
    carrito: [],
    addCarrito: (producto) => set((state) => ({ carrito: [...state.carrito, producto] })),
    removeCarrito: (producto) => set((state) => ({ carrito: state.carrito.filter((item) => item.id !== producto.id) })),
    clearCarrito: () => set(() => ({ carrito: [] })),
}));