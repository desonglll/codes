public interface List61B<Item> {

    /*
     * Insert X into the back of the list.
     * */
    public void addLast(Item x);

    /*
     * Returns the item from the back of the list.
     * */
    public Item getLast();

    /*
     * Gets the ith item in the list (0 is the front).
     * */
    public Item get(int i);

    /*
     * Returns the number of items in the lists.
     * */
    public int size();

    /*
     * Deletes item from back of the list and
     * returns deleted item.
     * */
    public Item removeLast();

    /*
     * Inserts item into given position.
     * Code from discussion #3
     * */
    public void insert(Item x, int position);

    /*
     * Inserts an item at the front.
     * */
    public void addFirst(Item x);

    /*
     * Gets an item from the front.
     * */
    public Item getFirst();

    /*
     * Prints out the entire list.
     * */

    default public void print() {
        for (int i = 0; i < size(); i += 1) {
            System.out.println(get(i) + " ");
        }
        System.out.println();
    }


}
