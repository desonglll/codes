public class Book {
  private String name;
  private int price;

  public Book(String name, int price) {
    this.name = name;
    this.price = price;
  }

  public Book() {

  }

  public void set_name(String name) {
    this.name = name;
  }

  public void set_price(int price) {
    this.price = price;
  }

  public String get_name() {
    return this.name;
  }

  public int get_price() {
    return this.price;
  }

  public String toString() {
    return "name: " + name + "\t" + "price: " + price;
  }
}
