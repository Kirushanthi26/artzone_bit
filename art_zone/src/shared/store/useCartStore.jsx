import { create } from "zustand";

const cartStore = (set) => ({
  items: [],

  addItem: (item) => set((state) => {
    const existingItemIndex = state.items.findIndex((i) => i.id === item.id);
    if (existingItemIndex === -1) {
      return { items: [...state.items, { ...item }] };
    } else {
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + item.quantity,
      };
      return { items: updatedItems };
    }
  }),

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  getTotalPrice: (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  increaseQuantity: (itemId) =>
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) return state;
      const updatedItem = {
        ...state.items[itemIndex],
        quantity: Math.min(state.items[itemIndex].quantity + 1, 10),
      };

      const updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      return { items: updatedItems };
    }),

  decreaseQuantity: (itemId) =>
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) return state;
      const updatedItem = {
        ...state.items[itemIndex],
        quantity: Math.max(state.items[itemIndex].quantity - 1, 0),
      };

      const updatedItems = [...state.items];
      if (updatedItem.quantity === 0) {
        updatedItems.splice(itemIndex, 1);
      } else {
        updatedItems[itemIndex] = updatedItem;
      }

      return { items: updatedItems };
    }),
});

export const useCartStore = create(cartStore);
