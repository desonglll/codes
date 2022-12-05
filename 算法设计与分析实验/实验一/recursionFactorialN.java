import java.util.Scanner;

/**
 * recursionFactorialN
 * This is a recursion to implement factorial N.
 */
public class recursionFactorialN {

    public static void main(String[] args) {
        int n;
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();
        scanner.close();
        System.out.println(recursion(n));
    }

    public static int recursion(int n) {
        if (n == 1) {
            System.out.print(n + " = ");
            return 1;
        } else {
            System.out.print(n + " * ");
            return n * recursion(n - 1);
        }
    }
}