import { prayerData, PrayerNode } from "../data/prayers";

export function findNodeById(
  id: string,
  nodes: PrayerNode[] = prayerData,
): PrayerNode | null {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(id, node.children);
      if (found) return found;
    }
  }
  return null;
}

export function getParentNode(
  id: string,
  nodes: PrayerNode[] = prayerData,
  parent: PrayerNode | null = null,
): PrayerNode | null {
  for (const node of nodes) {
    if (node.id === id) return parent;
    if (node.children) {
      const found = getParentNode(id, node.children, node);
      if (found) return found;
    }
  }
  return null;
}

export function getPrayerSiblings(
  id: string,
  nodes: PrayerNode[] = prayerData,
): { prev: PrayerNode | null; next: PrayerNode | null } {
  const parent = getParentNode(id, nodes);
  if (!parent || !parent.children) return { prev: null, next: null };

  const index = parent.children.findIndex((child) => child.id === id);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? parent.children[index - 1] : null;
  const next =
    index < parent.children.length - 1 ? parent.children[index + 1] : null;

  return { prev, next };
}

export function getAllCategoryIds(nodes: PrayerNode[] = prayerData): string[] {
  let ids: string[] = [];
  for (const node of nodes) {
    if (node.type === "category") {
      ids.push(node.id);
      if (node.children) {
        ids = ids.concat(getAllCategoryIds(node.children));
      }
    }
  }
  return ids;
}

export function getAllPrayerIds(nodes: PrayerNode[] = prayerData): string[] {
  let ids: string[] = [];
  for (const node of nodes) {
    if (node.type === "prayer") {
      ids.push(node.id);
    }
    if (node.children) {
      ids = ids.concat(getAllPrayerIds(node.children));
    }
  }
  return ids;
}
