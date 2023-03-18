import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Cart from "../service/Cart";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("Проверка добавленных товаров", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      1024,
      "The Avengers",
      "MARVEL",
      3900,
      2012,
      "USA",
      "Avengers Assemble!",
      ["fantastic", "action"],
      "137 min. / 02:17"
    )
  );

  expect(cart.items).toEqual([
    new Movie(
      1024,
      "The Avengers",
      "MARVEL",
      3900,
      2012,
      "USA",
      "Avengers Assemble!",
      ["fantastic", "action"],
      "137 min. / 02:17"
    ),
  ]);
});

test.each([
  [10, 810],
  [undefined, 900],
])("Подсчёт суммарной стоимости с/без учёта скидки", (input, expected) => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  expect(cart.getTotalCost(input)).toBe(expected);
});

test("Подсчёт суммарной стоимости с/без учёта скидки", () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.deleteItem(1008);

  expect(cart.items.length).toBe(0);
});
