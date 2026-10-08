import { create } from "zustand";
import type { KeyAttributes } from "./types";

const defaultKey: KeyAttributes = {
    keyType: undefined,
    color: "#5fe69f",
    attributes: undefined
}

type State = {
    keys: KeyAttributes[],
    currentKey?: number
    updateKeyAttribute: (index: number, updatedKey: Partial<KeyAttributes>) => void,
    updateCurrentKey: (index: number) => void
}

export const useAttributeStore = create<State>()((set) => ({
    keys: new Array<KeyAttributes>(46).fill(defaultKey),
    currentKey: undefined,
    updateKeyAttribute: (index, updatedKey) =>
        set((state) => ({
            keys: state.keys.map((key, i) =>
                i === index ? { ...key, ...updatedKey } : key
            ),
        })),
    updateCurrentKey: (index) => set(() => ({ currentKey: index }))
}))