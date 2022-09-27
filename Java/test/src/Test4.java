/* Abstract class. */

public class Test4 {
    public static void main(String[] args) {
        Man man = new Man();
        man.move();
        man.eat();

        Women women = new Women();
        women.move();
        man.eat();

    }
}

abstract class Animal {
    // Declearation of method.
    public abstract void move();
}

abstract class Person extends Animal {
    public abstract void eat();

    public void sleep() {
        System.out.println("Sleep.");
    }
}

class Man extends Person {
    @Override
    public void move() {
        System.out.println("I am man, I love running.");
    }

    @Override
    public void eat() {
        System.out.println("I am man, I love meat.");
    }
}

class Women extends Person {
    @Override
    public void move() {
        System.out.println("I am women, I love shopping.");
    }

    @Override
    public void eat() {
        System.out.println("I am women, I love fruit.");
    }
}