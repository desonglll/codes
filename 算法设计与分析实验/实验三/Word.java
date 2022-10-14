package 算法设计与分析实验.实验三;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Word {
    public static void main(String[] args) {
        String s = "catsandog";
        List<String> wordDict = Arrays.asList("cats", "dog", "sand", "and", "cat");
        System.out.println(wordBreak(0, s, new HashSet(wordDict)));
    }

    public static boolean wordBreak(int p, String s, Set<String> dict) {
        int n = s.length();
        if (p == n) {
            return true;
        }
        for (int i = p + 1; i <= n; i++) {
            if (dict.contains(s.substring(p, i)) && wordBreak(i, s, dict)) {
                return true;
            }
        }
        return false;
    }
}
