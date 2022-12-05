import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        // div(10, 2);
        // method();
        // try {
        // div2(20, 0);
        // } catch (Exception e) {
        // e.printStackTrace();
        // }
        // System.out.println("Over");

        input();

    }

    public static void div(int num1, int num2) {
        int[] arr = { 1, 2, 3, 4, 5 };
        try {
            System.out.println(arr[4]);
            arr = null;
            System.out.println(arr.length);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("数组下标越界");
        } catch (NullPointerException e) {
            System.out.println("数组空指针异常");
        } catch (Exception e) {
            System.out.println("出错啦");
        } finally {
            System.out.println("程序执行完毕");
        }
        System.out.println("程序运行结束");
    }

    public static int method() {
        int a = 10;
        int b = 5;
        try {
            System.out.println("a = " + a);
            System.out.println("b = " + b);
            int c = a / b;
            System.out.println("a / b = " + c);
            return c;
        } catch (Exception e) {
            // 代码测试时使用
            e.printStackTrace();
        } finally {
            System.out.println("finally.");
        }
        return -1;
    }

    public static int div2(int a, int b) throws ArithmeticException {
        try {
            int c = a / b;
            return c;
        } catch (ArithmeticException e) {
            throw new ArithmeticException("除数不能为零");
        } finally {
            System.out.println("运行结束");
        }
    }

    public static void input() {
        Scanner input = new Scanner(System.in);
        try {
            int num = input.nextInt();
            System.out.println(num);
        } catch (InputMismatchException e) {
            System.out.println("输入不匹配");
        }
    }

}
