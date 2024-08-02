import { create } from "zustand";

const useStore = create((set, get) => ({
  products: [],
  fetchProducts: () =>
    set({
      products: [
        { id: 1, name: "product 1", description: "this is product 1" },
        {
          id: 2,
          name: "product 2",
          description: "this is product 2",
        },
      ],
    }),
  getProductById: (id) => {
    return get().products.find((product) => product.id === parseInt(id, 10));
  },
}));
export default useStore;
