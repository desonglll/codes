public class BinarySearch {
    public static void main(String[] args) {

        //Array must be sequenced.
        int num[] = {10, 20, 30, 50, 65, 88};
        int key = 65;
        int index = binarySearch(num, key);
        System.out.println("The index of " + key + " is: " + index);
    }

    public static int binarySearch(int[] num, int key) {
        //Begin index.
        int start = 0;
        //Finished index.
        int end = num.length - 1;

        while (start <= end) {
            int middle = (start + end) / 2;
            if (num[middle] > key) {
                end = middle - 1;
            } else if (num[middle] < key) {
                start = middle + 1;
            } else {
                return middle;
            }
        }

        //If not searched, return -1.
        return -1;
    }
}
