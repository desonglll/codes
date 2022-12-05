import org.junit.Test;

public class Sort {

    public static void main(String[] args) {
        test();
    }

    @Test
    public static void test() {
        int[] input = { 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 };
        sort(input);

        for (int i = 0; i < input.length; i++) {
            System.out.print(input[i] + " ");
        }
        System.out.println();
    }

    @Test
    public static void sort(int[] x) {
        // BubbleSort_Class.bubble_sort(x);
        // SelectionSort_Class.selection_sort(x, 0);
        // InsertionSort_Class.insertion_sort(x);
        // QuickSort_Class.quick_sort(x, 0, x.length - 1);

    }

    /* Bubble sort class. */
    public class BubbleSort_Class {
        public static void bubble_sort(int[] x) {
            for (int i = 0; i < x.length - 1; i++) {
                for (int j = 0; j < x.length - 1 - i; j++) {
                    if (x[j] > x[j + 1]) {
                        /* Swap x[j] and x[j+1] */
                        // x[j] = x[j] + x[j + 1];
                        // x[j + 1] = x[j] - x[j + 1];
                        // x[j] = x[j] - x[j + 1];

                        /* Or uses swap() function. */
                        swap(x, j, j + 1);
                    }
                }
            }
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

    /* Selection sort class. */
    public class SelectionSort_Class {
        public static void selection_sort(int[] x, int start) {
            if (start == x.length)
                return;
            int smallestIndex = findSmallest(x, start);
            swap(x, start, smallestIndex);
            selection_sort(x, start += 1);
        }

        public static int findSmallest(int[] x, int start) {
            int smallestIndex = start;
            for (int i = start; i < x.length; i++) {
                if (x[i] < x[smallestIndex])
                    smallestIndex = i;

                // This is a method to compare two String item.
                // If a is bigger than b, a.compareTo(b) is postive.
                // int cmp = x[smallestIndex].compareTo(x[i]);
            }
            return smallestIndex;
        }

        // Swap item a with b.
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

    /* Insertion sort class. */
    public class InsertionSort_Class {

        public static void InsertionSort(int[] x) {
            for (int i = 0; i < x.length - 1; i++) {
                int temp = x[i];
                int j = 0;
                for (j = i - 1; j >= 0; j--) {
                    if (x[j] > temp) {
                        x[j + 1] = x[j];
                    } else
                        break;
                }
                if (x[j + 1] != temp)
                    x[j + 1] = temp;
            }
        }

        public static void insertion_sort(int[] x) {
            for (int i = 0; i < x.length; i++) {
                int smallestIndex = findSmallest(x, i);
                swap(x, i, smallestIndex);
            }
        }

        /* Finds the index of the smallest one. */
        public static int findSmallest(int[] x, int start) {
            int smallestIndex = start;
            for (int i = start; i < x.length; i++) {
                if (x[i] < x[smallestIndex])
                    smallestIndex = i;
            }
            return smallestIndex;
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

    /* Quick sort class. */
    public class QuickSort_Class {
        public static void quick_sort(int[] x, int left, int right) {
            int i = left;
            int j = right;
            int pivot = (x[i] + x[j]) / 2;
            while (i <= j) {
                while (x[i] < pivot)
                    i++;
                while (x[j] > pivot)
                    j--;
                if (i <= j) {
                    swap(x, i, j);
                    i++;
                    j--;
                }

            }
            if (left < j)
                quick_sort(x, left, j);
            if (i < right)
                quick_sort(x, i, right);
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

}
