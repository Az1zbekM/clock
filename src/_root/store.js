import { create } from "zustand";

const useStore = create(set => ({
    data: [],
    setData: async ()  => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await   res.json();
        set(state => ({
            data: data
        }))
    }
}));

export default useStore;