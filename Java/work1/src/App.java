import java.util.Comparator;
import java.util.TreeSet;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        // Student student1 = new Student("001", "张三");
        // Student student2 = new Student("002", "李四");
        // Student student3 = new Student("003", "王五");

        TreeSet<Student> students = new TreeSet<>(new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return String.CASE_INSENSITIVE_ORDER.compare(o1.get_id(), o2.get_id());
            }
        });
        students.add(new Student("001", "张三"));
        students.add(new Student("002", "李四"));
        students.add(new Student("003", "王五"));

        System.out.println(students.toString());
        // System.out.println(student1.toString());
        // System.out.println(student2.toString());
        // System.out.println(student3.toString());
    }
}
