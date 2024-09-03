const getRandArray = (length: number) => {
  return Array.from({ length }).map(() => (Math.random() > 0.5 ? Math.random() * 100 : null));
};

export class PaginationHelper {
  private pages: Record<number, number[]> = {};
  private totalElements: number = 0;
  private totalPages: number = 0;
  private itemsPerPage: number = 0;

  constructor(collection: any[], itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.totalElements = collection.length;
    this.totalPages = Math.ceil(collection.length / itemsPerPage);
    [...collection].forEach((element, i) => {
      const pageIdx = Math.floor(i / itemsPerPage);
      if (!this.pages[pageIdx]) {
        this.pages[pageIdx] = [];
      }
      this.pages[pageIdx].push(element);
    });
  }

  itemCount(): number {
    return this.totalElements;
  }

  pageCount(): number {
    return this.totalPages;
  }

  pageItemCount(pageIndex: number): number {
    if (this.totalElements === 0) return -1;
    return this.pages[pageIndex] ? Object.values(this.pages[pageIndex])?.length : -1;
  }

  pageIndex(itemIndex: number): number {
    if (this.totalElements === 0 || itemIndex < 0 || itemIndex >= this.totalElements) {
      return -1;
    }

    const pageIdx = Math.floor(itemIndex / this.itemsPerPage);
    return pageIdx;
  }
}

const helper = new PaginationHelper(getRandArray(3), 6);

// console.log(helper.pageIndex(0));
// console.log(helper.pageIndex(1));
// console.log(helper.pageIndex(2));
console.log(helper.pageIndex(3));
