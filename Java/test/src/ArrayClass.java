import java.util.Arrays;

public class ArrayClass {
    public static void main(String[] args) {
        int[] num = {45, 65, 76, 87, 98, 901};

        int key = 98;
        //BinarySearch.
        int index = Arrays.binarySearch(num, key);
        System.out.println("The index of " + key + " is: " + index);

        //Output Array using .toString() method.
        //More conveniently!
        System.out.println(Arrays.toString(num));

        //Sorting.
        int num2[] = {1, 3, 5, 7, 9, 2, 4, 6, 8, 10};
        //Using quick sort.
        Arrays.sort(num2);
        System.out.println(Arrays.toString(num2));

        //Copy to Array.
        System.out.println("This is a test of Arrays.copyOf().");
        int[] num3 = Arrays.copyOf(num2, 20);
        System.out.println(Arrays.toString(num3));

        //System.arraycopy();
        //Most effective.
        System.out.println("This is a test of System.arraycopy().");
        int[] newNum = new int[num2.length];
        System.arraycopy(num2, 0, newNum, 0, num2.length);
        System.out.println(Arrays.toString(newNum));


        //Equal.
        System.out.println(Arrays.equals(num, num2));

        //Fill array.
        Arrays.fill(newNum, 0);
        System.out.println(Arrays.toString(newNum));
    }
}
