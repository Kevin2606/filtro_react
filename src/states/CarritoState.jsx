import { create } from "zustand";

export const useCarrito = create((set) => ({
    carrito: [],
    addCarrito: (producto) => set((state) => ({ carrito: [...state.carrito, producto] })),
    removeCarrito: (producto) => set((state) => ({ carrito: state.carrito.filter((item) => item.id !== producto.id) })),
    clearCarrito: () => set(() => ({ carrito: [] })),
    getCarrito: () => set((state) => state.carrito),
    getCarritoCount: () => set((state) => state.carrito.length),
    getCarritoTotal: () => set((state) => state.carrito.reduce((acc, item) => acc + item.precio, 0)),
}));