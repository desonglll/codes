public class BreakContinue {
    public static void windowPosSum(int[] a, int n) {
        /** your code here */
        for (int i = 0; i < a.length; i++) {
            if (a[i] > 0 && n < a.length - i) {
                int sum = 0;
                for (int j = i; j < n + 1; j++) {
                    sum += a[j];
                }
                a[i] = sum;
            } else if (a[i] > 0 && n >= a.length - i) {
                int sum = 0;
                for (int j = i; j < a.length; j++) {
                    sum += a[j];
                }
                a[i] = sum;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = {1, 2, -3, 4, 5, 4};
        int n = 3;
        windowPosSum(a, n);

        // Should print 4, 8, -3, 13, 9, 4
        System.out.println(java.util.Arrays.toString(a));
    }
}