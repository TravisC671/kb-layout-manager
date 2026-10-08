import { useAttributeStore } from "../lib/attribute-store"
import type { PhysicalKey } from "../lib/types"
import { Button } from "./ui/button"

type KeyboardKeyProps = {
    physical: PhysicalKey
    index: number
}
export default function KeyboardKey({ physical, index }: KeyboardKeyProps) {
    const updateCurrentKey = useAttributeStore((state) => state.updateCurrentKey)
    const keys = useAttributeStore((state) => state.keys)

    return (<Button onClick={() => updateCurrentKey(index)} className="absolute aspect-square bg-[#5fe69f]" style={{
        left: physical.x,
        top: physical.y,
        width: physical.width,
        height: physical.height,
        transform: `rotate(${physical.r}deg)`
    }} >

    </Button>)
}