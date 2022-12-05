import org.junit.Test;

import static org.junit.Assert.*;

public class TestSort {

    /* Test the Sort.sort method. */
    @Test
    public void testSort() {
        String[] input = {"i", "have", "an", "egg"};
        String[] expected = {"an", "egg", "have", "i"};
        int[] test={1, 3, 5, 7, 9, 2, 4, 6, 8, 10};

        Sort.sort(input);

        assertArrayEquals(expected, input);

        for (int i = 0; i < input.length; i++) {
            if (!input[i].equals(expected[i])) {
                System.out.println(
                        "Mismatch in position: " + i + ", expected: " + expected[i] + ", but got: " +
                                input[i]);
                return;
            }
        }
    }

    @Test
    public void main() throws Exception {
        testSort();

    }
}
