import { allBlocks } from './checkFields';

export function allBombs(node: HTMLTableSectionElement) {
  const allNode = allBlocks(node);
  const array: number[] = [];
  console.log(allNode);

  allNode.forEach((item: any) => {
    if (item.children[0]) array.push(Number(item.dataset.item));
  });
  console.log(array);

  return {
    array,
    number: array.length,
  };
}
