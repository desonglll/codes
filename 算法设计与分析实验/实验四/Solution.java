
public class Solution {

    public static void main(String[] args) {
        int[] s1 = { 1, 3, 4, 5, 6, 7, 7, 8 };
        int[] s2 = { 3, 5, 7, 4, 8, 6, 7, 8, 2 };
        System.out.println(longestCommonSubsequence(s1, s2));
    }

    public static int longestCommonSubsequence(int s1[], int[] s2) {
        int count = 0;
        int previous = -1;
        for (int i = 0; i < s1.length; i++) {
            for (int j = 0; j < s2.length; j++) {
                if (s1[i] == s2[j] && j > previous) {
                    previous = j;
                    count++;
                    System.out.print(s1[i] + " ");
                }
            }
        }
        System.out.println();
        return count;
    }
}
