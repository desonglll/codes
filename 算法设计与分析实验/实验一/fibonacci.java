import java.util.Scanner;

public class fibonacci {

    public static void main(String[] args) {
        int n;
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();
        scanner.close();
        System.out.println(Fibonacci(n - 1));
    }

    public static int Fibonacci(int n) {
        if (n == 1 || n == 0) {
            return 1;
        } else if (n > 1) {
            return Fibonacci(n - 1) + Fibonacci(n - 2);
        } else {
            return -1;
        }
    }
}
