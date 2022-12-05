public class AListTest {
    public static void main(String[] args) {
        AList<Integer> A = new AList<>();
        A.addLast(12);
        A.addLast(13);
        A.addLast(14);
        System.out.println(A.size);
        for (int i = 0; i < A.size; i++) {
            System.out.println(A.get(i) + " ");
        }
    }
}
