import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class BookApp {
  public static void main(String[] args) {

    List<Book> list = new ArrayList<Book>();
    list.add(new Book("Java开发", 90));
    list.add(new Book("Python数据分析", 100));
    list.add(new Book("Spark大数据", 110));

    for (Book b : list) {
      System.out.println(b.toString());
    }
    // Book i = new Book();
    int i;
    Iterator it = list.iterator();
    while (it.hasNext()) {
      i = ((Book) it.next()).get_price();
      if (i < 100) {
        it.remove();
      }
    }
    for (Book b : list) {
      System.out.println(b.toString());
    }
  }
}