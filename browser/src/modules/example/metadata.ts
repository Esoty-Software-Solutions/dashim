const modules = await import.meta.glob("@/modules/example/**/*.example.vue");

interface ExampleMetadata {
  name: string;
  category: string;
  module: any;
}

export const metadata: Record<string, ExampleMetadata[]> = {};

export function routeName(example: ExampleMetadata): string {
  return `Example-${example.category}-${example.name}`;
}

for (const moduleName in modules) {
  const fileSlashIndex = moduleName.lastIndexOf("/");
  const parentSlashIndex = moduleName.lastIndexOf("/", fileSlashIndex - 1);

  const category = moduleName.substring(parentSlashIndex + 1, fileSlashIndex);
  const filename = moduleName.substring(fileSlashIndex + 1);
  const exampleName = filename.replace(".example.vue", "");

  if (!metadata.hasOwnProperty(category)) {
    metadata[category] = [];
  }

  metadata[category].push({
    name: exampleName,
    category: category,
    module: modules[moduleName],
  });
}
