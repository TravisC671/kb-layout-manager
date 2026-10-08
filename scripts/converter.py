import os
import yaml


def convert_yaml_to_ts(input_file: str, output_file: str, export_name: str = "keyMatrix"):
    if not os.path.exists(input_file):
        print(f"Error: File '{input_file}' not found.")
        return

    with open(input_file, "r") as file:
        data = yaml.safe_load(file)

    if not data:
        print("The YAML file is empty or invalid.")
        return

    ts_entries = []

    # Process each root key in the loaded dictionary
    for key, values in data.items():
        if isinstance(values, dict):
            x = values.get("x")
            y = values.get("y") + 150
            r = values.get("r")
            
            # Format as a JavaScript/TypeScript object literal
            newx = (x*4) - 370
            newy = (-y*4) + 500
            if (newx > 800):
                newx -= 200 
            entry_str = f"  {{ x: {newx:.2f}, y: {newy:.2f}, r: {-r:.1f}, width: 75, height: 75 }}"
            ts_entries.append(entry_str)

    # Construct the TypeScript file content
    ts_content = f'import type {{ Key }} from "./types";\n\nexport const keys: Key[] = [\n{",\n".join(ts_entries)}\n];\n'

    with open(output_file, "w") as file:
        file.write(ts_content)

    print(f"Successfully wrote transformed data to '{output_file}'.")


if __name__ == "__main__":
    convert_yaml_to_ts("input/points.yaml", "output/keys.ts")