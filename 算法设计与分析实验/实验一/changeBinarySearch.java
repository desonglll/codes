public class changeBinarySearch {

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 7, 9, 11, 22, 44, 55, 77, 88, 99 };
        System.out.println(BinarySearch(a, 0, a.length, 12));

    }

    public static int BinarySearch(int[] a, int fromIndex, int toIndex, int key) {
        int low = fromIndex;
        int high = toIndex;
        int minMax = -1;
        int maxMin = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int midVal = a[mid];

            if (key > midVal) {
                low = mid + 1;
                maxMin = low;
            } else if (key < midVal) {
                high = mid - 1;
                minMax = high;
            } else
                return mid; // key found.
        }
        System.out.println("minMax = " + minMax);
        System.out.println("maxMin = " + maxMin);
        return -1; // key not found.
    }
}
