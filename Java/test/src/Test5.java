public class Test5 {
    public static void main(String[] args) {
        Girl amy = new Girl("Amy");
        amy.eat();
        amy.sleep();
        amy.run();
        amy.print();
    }

}

interface IEat {
    // public abstract void eat();
    void eat();

    // public static final int NUM = 10;
    int NUM = 10;

    public default void print() {
        System.out.println("eat.");
    }

}

interface IRun {
    void run();
}

interface ISleep extends IEat, IRun {
    void sleep();
}

class Girl implements ISleep {

    private String name;

    Girl(String name) {
        this.name = name;
    }

    Girl() {

    }

    @Override
    public void eat() {
        System.out.println("I am " + name + ", I love eat.");
    }

    @Override
    public void run() {
        System.out.println("I love running.");
    }

    @Override
    public void sleep() {
        System.out.println("I love sleep.");
    }
}