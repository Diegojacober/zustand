import { create } from "zustand";

//buscar da api
const initialItems = [
    { id: 1, name: "Camiseta", price: 19.99 },
    { id: 2, name: "Calça Jeans", price: 39.99 },
    { id: 3, name: "Tênis", price: 49.99 },
    { id: 4, name: "Relógio", price: 29.99 },
    { id: 5, name: "Bolsa", price: 24.99 },
    { id: 6, name: "Óculos de Sol", price: 15.99 },
    { id: 7, name: "Sapato", price: 34.99 },
    { id: 8, name: "Cinto", price: 9.99 },
    { id: 9, name: "Chapéu", price: 12.99 },
    { id: 10, name: "Carteira", price: 7.99 }
];

type Item = {
    id: number;
    name: string;
    price: number;
}

type CartStore = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],
        availableItems: initialItems,
        addToCart: (item) => set((state) => ({cart: [...state.cart, item]})),
        removeFromCart: (id) =>
            set((state) => ({cart: state.cart.filter((item) => item.id !== id)}))
    }
});
