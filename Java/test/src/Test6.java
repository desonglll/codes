
public class Test6 {
    public static void main(String[] args) {
        Singleton2 s = Singleton2.getInstance();
        s.print();
        Singleton1 s1 = Singleton1.getInstance();
        s1.print();
        Singleton2 s2 = Singleton2.getInstance();
        s2.print();

        System.out.println(s == s2);

    }
}

class Singleton1 {
    private Singleton1() {
    }

    private static Singleton1 s = new Singleton1();

    public static Singleton1 getInstance() {
        return s;
    }

    public void print() {
        System.out.println("Testing method...");
    }

}

class Singleton2 {
    private Singleton2() {
    }

    private static Singleton2 s;

    public static Singleton2 getInstance() {
        if (s == null) {
            s = new Singleton2();
        }
        return s;
    }

    public void print() {
        System.out.println("Testing method...");
    }

}

class Tools {
    private Tools() {
    };

    public static void print1() {
    };

    public static void print2() {
    };
}