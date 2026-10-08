import { useAttributeStore } from "../lib/attribute-store"
import { keyTypes } from "../lib/types"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const getWord = (word: string) =>
  word.split(/([A-Z][a-z]+)/).filter(Boolean).join(' ');

export default function AttributeSelector() {
    const keys = useAttributeStore((state) => state.keys)
    const currentKey = useAttributeStore((state) => state.currentKey)

    if (!currentKey) return

    const selectAttributes = keyTypes.map((typeString) => ({ label: getWord(typeString), value: typeString }))

    return <>
        <Select items={selectAttributes}>
            <SelectTrigger className="w-full max-w-48">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Key Type</SelectLabel>
                    {selectAttributes.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </>
}