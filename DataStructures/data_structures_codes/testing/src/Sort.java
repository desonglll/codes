public class Sort {
    public static void sort(String[] x) {
        // Find the smallest item.
        // Move it to the front.
        // Selection sort the rest (using recursion??)
        SwapSort(x, 0);
    }

    private static void SwapSort(String[] x, int start) {
        if (start == x.length)
            return;
        int smallestIndex = findSmallest(x, start);
        swap(x, start, smallestIndex);
        SwapSort(x, start += 1);
    }

    // Return the index of the smallest element from the String array, starting at
    // start.
    public static int findSmallest(String[] x, int start) {
        int smallestIndex = start;
        for (int i = start; i < x.length; i += 1) {
            // If a is bigger than b, a.compareTo(b) is postive.
            int cmp = x[smallestIndex].compareTo(x[i]);
            if (cmp > 0) {
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }

    // Swap item a with b.
    public static void swap(String[] x, int a, int b) {
        String temp = x[a];
        x[a] = x[b];
        x[b] = temp;
    }
}
