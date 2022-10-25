import java.util.Random;

public class MathTest {
    public static void main(String[] args) {
        System.out.println(Math.E);
        System.out.println(Math.PI);
        System.out.println(Math.random());
        System.out.println(Math.abs(-100));
        System.out.println(Math.round(2.12121212333));

        
        Random random = new Random();
        System.out.println(random.nextInt());

    }
}
