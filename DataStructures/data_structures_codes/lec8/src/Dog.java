import org.junit.Test;

public class Dog implements Animal {

    @Override
    public void sniff(Animal a) {
        System.out.println("dog sniff animal");
    }

    public void flatter(Dog a) {
        System.out.println("u r cool dog");
    }

    @Test
    public static void main(String[] args) {
        Animal a = new Dog();
        Dog d = new Dog();
        a.greet(d);
        a.sniff(d);
        d.flatter(d);
        a.flatter(d);
    }
}
