
export interface PhysicalKey {
    x: number, /**px */
    y: number, /**px */
    r: number, /**deg */
    width: number, /**px */
    height: number /**px */
}

export interface KeyPress {
    character: string
}

export interface ModTap {
    press_character: string
    held_action: string
}

export interface Layer {
    layer: string
}

export interface LayerPress {
    layer: string
}

export type Attributes = KeyPress | ModTap | Layer | LayerPress

export const keyTypes = ["KeyPress", "ModTap", "Layer", "LayerPress"]

export type keyType = typeof keyTypes[number];

export interface KeyAttributes {
    keyType?: keyType
    color: string
    attributes?: Attributes
}