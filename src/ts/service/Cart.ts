import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalCost(discount = 0): number {
    const totalCost = this.items.reduce((acc, el) => acc + el.price, 0);

    return totalCost * (1 - discount / 100);
  }

  deleteItem(id: number): void {
    this._items = this._items.filter((el) => el.id !== id);
  }
}
