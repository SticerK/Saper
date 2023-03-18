export function allBlocks(node: HTMLTableSectionElement) {
  const arrayNode = [];
  for (let tr of node.children) {
    for (let td of tr.children) {
      arrayNode.push(td.children[0]);
    }
  }
  return arrayNode;
}

export function verification(
  node: HTMLTableSectionElement,
  targetEl: HTMLDivElement,
  index: number,
  width: number
) {
  let fields: number[] = [];

  if (Number(targetEl.dataset.item) % width === 0) {
    fields = [index - width, index + width, index - 1, index - width - 1, index + width - 1];
  } else if (Number(targetEl.dataset.item) === 1) {
    fields = [index + width, index + 1, index + width + 1];
  } else {
    fields = [
      index - width,
      index + width,
      index + 1,
      index - 1,
      index - width + 1,
      index - width - 1,
      index + width - 1,
      index + width + 1,
    ];
  }

  for (let h = 1; h <= node.children.length; h++) {
    if (1 + width * h === Number(targetEl.dataset.item)) {
      fields = [index - width, index + width, index + 1, index - width + 1, index + width + 1];
    }
  }

  const arrayNode = allBlocks(node);

  const mines = arrayNode.filter((item) => {
    if (item instanceof HTMLElement) {
      return fields.includes(Number(item.dataset.item));
    }
  });

  console.log(mines);

  return mines.filter((item) => item.querySelector('svg')).length;
}
