import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        // System.out.println(fun(a, b));
        System.out.println(Integer.MIN_VALUE);
    }

    public static int fun(int a, int b) {
        if (a == 0) {
            return a;
        } else if (a == Integer.MIN_VALUE) {
            return Integer.MAX_VALUE + 1;
        } else if (b > 0) {
            return Math.abs(a);
        } else {
            return -Math.abs(a);
        }
    }
}
