/**
 * Student
 */
public class Student {
    private String id;
    private String name;

    public Student() {
    }

    public Student(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String get_id() {
        return id;
    }

    public String get_name() {
        return name;
    }

    public void set_id(String id) {
        this.id = id;
    }

    public void set_name(String name) {
        this.name = name;
    }

    public String toString() {
        return "id: " + this.id + "\t" + "name: " + this.name;
    }

}