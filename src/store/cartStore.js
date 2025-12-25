import { create } from "zustand";

export const useCartStore = create((set) => ({
    items: [],
    addItem: (item) => 
        set((state) => {
            const existing = state.items.find((i) => i.id === item.id);
            if (existing) {
                return {
                    items: state.items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1} : i
                    ),
                };
            }
            return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
    removeItem: (id) => 
        set((state) => {
            const existing = state.items.find((i) => i.id === id);
            if (existing && existing.quantity > 1) {
                return {
                    items: state.items.map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity - 1} : i
                    ),
                };
            }
            return { items: state.items.filter((i) => i.id !== id) };
        }),
    clearCart: () => set({ items: [] }),

    totalQuantity: (state) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
        state.items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")), 0
    ),
}));