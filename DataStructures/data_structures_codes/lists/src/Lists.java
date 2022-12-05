import java.util.Arrays;
import org.junit.Test;

public class Lists {
    public static void main(String[] args) {
        test();
    }

    public static void test() {
        // alist_test();
        // intlist_test();
        // sllist_test();
    }

    @Test
    public static void alist_test() {
        AList<Integer> x = new AList<>();

        System.out.println("The size of AList is: " + x.size);
        x.addLast(12);
        System.out.println("x.addLast(12)");
        x.addLast(13);
        System.out.println("x.addLast(13)");
        x.addLast(14);
        System.out.println("x.addLast(14)");

        System.out.println("The size of AList is: " + x.size);

        for (int i = 0; i < x.size; i++) {
            System.out.println("The " + (i + 1) + " item is: " + x.get(i));
        }
    }

    @Test
    public static void intlist_test() {
        IntList x = new IntList(15, null);
        x = new IntList(10, x);
        x = new IntList(5, x);

        for (int i = 0; i < x.size(); i++) {
            System.out.println("The " + (i + 1) + " item is: " + x.get(i));
        }
    }

    public static void sllist_test() {
        SLList<String> x = new SLList<>("this is first");
        x.addFirst("this is second and addFirst");
        x.addLast("this is third and addLast");

        for (int i = 0; i < x.size(); i++)
            System.out.println("The " + (i + 1) + " item is: " + x.get(i));
    }

}

/*
 * Invariants:
 * addLast: The next item we want to add, will go into position size.
 * getLast: The item we want to return is in position size - 1.
 * size: The number of items in the list should be size.
 */
class AList<Item> {
    private Item[] items;
    public int size;

    /* Creates an empty list */
    public AList() {
        items = (Item[]) new Object[100];
        size = 0;
        System.out.println("AList constructor is called...");
    }

    /* Resizes the underlying array to the target capacity. */
    public void resize(int capacity) {
        Item[] a = Arrays.copyOf(items, size + 1);
        items = a;
    }

    /* Inserts X into the back of the list. */
    public void addLast(Item x) {
        if (size == items.length) {
            resize(size * 2);
        }
        items[size] = x;
        size = size + 1;
    }

    /* Returns the item from the back of the list. */
    public Item getLast() {
        return items[size - 1];
    }

    /* Gets the ith item in the list (0 is the front). */
    public Item get(int i) {
        return items[i];
    }

    /* Returns the number of items in the list. */
    public int size() {
        return size;
    }

    /*
     * Deletes item from back of the list
     * and returns deleted item.
     */
    public Item removeLast() {
        Item x = getLast();
        size = size - 1;
        return x;
    }
}

/* This is class of IntList. */
class IntList {
    public int first;
    public IntList rest;

    public IntList() {
    }

    /* Inserts item to the front of the list. */
    public IntList(int f, IntList r) {
        first = f;
        rest = r;
        System.out.println("IntList constructor is called...");
    }

    /* Return the size of the list using... recursion! */
    public int size() {
        if (rest == null) {
            return 1;
        }
        return 1 + this.rest.size();
    }

    /* Return the size of the list using no recursion! */
    @Test
    public int iteractiveSize() {
        IntList p = this;
        int totalSize = 0;
        while (p != null) {
            totalSize += 1;
            p = p.rest;
        }
        return totalSize;
    }

    /* Returns the ith item of this IntList. */
    public int get(int i) {
        if (i == 0) {
            return first;
        }
        return rest.get(i - 1);
    }

}

/*
 * An SLList is a list of integers, which hides the terrible truth
 * of the nakedness within.
 */
class SLList<LochNess> {

    public class StuffNode {
        public LochNess item;
        public StuffNode next;

        public StuffNode(LochNess i, StuffNode n) {
            item = i;
            next = n;
        }
    }

    /* The first item (if it exists) is at sentinel.next. */
    private StuffNode first;
    private int size;

    public SLList(LochNess x) {
        first = new StuffNode(x, null);
        size = 1;
        System.out.println("SLList constructor is called...");
    }

    /* Adds x to the front of the list. */
    public void addFirst(LochNess x) {
        first = new StuffNode(x, first);
        size += 1;
    }

    /* Returns the first item in the list. */
    public LochNess getFirst() {
        return first.item;
    }

    /* Adds x to the end of the list. */
    @Test
    public void addLast(LochNess x) {
        size += 1;
        StuffNode p = first;
        /* Move p until it reaches the end of the list. */
        while (p.next != null) {
            p = p.next;
        }
        p.next = new StuffNode(x, null);
    }

    public LochNess getLast() {
        StuffNode p = first;
        while (p.next != null)
            p = p.next;
        return p.item;
    }

    public LochNess get(int i) {
        StuffNode p = first;
        int j = 0;
        while (j != i) {
            j++;
            p = p.next;
        }
        return p.item;

    }

    public int size() {
        return size;
    }

}