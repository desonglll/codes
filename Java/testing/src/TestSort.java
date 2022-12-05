import org.junit.Test;
import static org.junit.Assert.*;

public class TestSort {

    /* Test the Sort.sort method. */
    @Test
    public void testSort() {
        String[] input = { "i", "have", "an", "egg" };
        String[] expected = { "an", "egg", "have", "i" };

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

    public void main(String[] args) throws Exception {
        testSort();

    }
}
