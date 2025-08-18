function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numberOfWords = getLength("does this even work?");
const numberOfItems = getLength(["Sports", "Electronics", "Clothing"]);
