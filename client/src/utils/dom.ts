export function isDescendant(
  parent: HTMLElement | null,
  child: HTMLElement | null,
  level: number
): boolean {
  if (!parent || !child) {
    return false;
  }
  if (parent === child) {
    return true;
  }
  let node = child.parentNode;
  for (let i = 0; i < level; i++) {
    if (node === parent) {
      return true;
    }
    if (node === null) {
      return false;
    }
    node = node.parentNode;
  }
  return false;
}
