import org.junit.Test;

public class SLListLauncher {
    @Test
    public static void main(String[] args) {
        SLList<String> s1 = new SLList<>("bone");
        s1.addFirst("thugs");
        s1.addLast("asdasdasda");
        for (int i = 0; i < s1.size(); i++)
            System.out.println(s1.get(i));
    }
}