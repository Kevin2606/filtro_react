import { create } from "zustand";

export const useCarrito = create((set) => ({
    carrito: [],
    addCarrito: (producto) =>
        set((state) => {
            const index = state.carrito.findIndex(
                (item) => item._id === producto._id
            );
            if (index === -1) return { carrito: [...state.carrito, producto] };
            const carrito = [...state.carrito];
            carrito[index].cantidad += producto.cantidad;
            return { carrito };
        }),
    removeCarrito: (producto) =>
        set((state) => ({
            carrito: state.carrito.filter((item) => item.id !== producto.id),
        })),
    clearCarrito: () => set(() => ({ carrito: [] })),
}));
