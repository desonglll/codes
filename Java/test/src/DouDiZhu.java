
/**
 * ClassName:    DouDiZhu
 * Package:    com.wybing.demo1
 * Description: 斗地主案例代码实现（https://www.bilibili.com/video/BV1uJ411k7wy?p=254&spm_id_from=pageDriver）
 * Datetime:    2021/7/4   19:24
 * Author:   wybing(wybingcom@126.com)
 */

import java.util.ArrayList;
import java.util.Collections;

/**
 * 实现思路：
 * 1.准备牌
 * 2.洗牌
 * 3.发牌
 * 4.看牌
 *
 */

public class DouDiZhu {
    public static void main(String[] args) {
        // 准备牌
        // 定义一个存储54张牌的ArrayList集合，泛型使用String
        ArrayList<String> poker = new ArrayList<>();
        // 定义两个数组，一个数组存储花色，一个数组存储牌的序号
        String[] colors = { "♠", "♥", "♣", "♦" };
        String[] numbers = { "2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3" };
        // 先把大王和小王存储到poker集合中
        poker.add("大王");
        poker.add("小王");
        // 循环嵌套遍历两个数组，组装52张牌
        for (String number : numbers) {
            for (String color : colors) {
                // System.out.println(color+number);
                // 把组装好的牌存储到poker集合中
                poker.add(color + number);
            }
        }
        // System.out.println(poker);
        /**
         * 洗牌
         * 使用集合工具类Collection中的方法
         * static void shuffle(List<?> list) 使用默认随机源堆指定列表进行置换
         *
         */

        Collections.shuffle(poker);

        // System.out.println(poker);

        /**
         * 发牌
         * 定义4个集合，存储玩家的牌和底牌
         * 遍历poker集合，获取每一张牌
         * 使用poker集合的索引%3给3个玩家轮流发牌
         * 剩余3张牌给底牌
         * 注意：
         * 先判断底牌（i>= 51），否则牌就发没了
         */
        ArrayList<String> player1 = new ArrayList<>();
        ArrayList<String> player2 = new ArrayList<>();
        ArrayList<String> player3 = new ArrayList<>();
        ArrayList<String> dipai = new ArrayList<>();

        for (int i = 0; i < poker.size(); i++) {
            // 获取每一张牌
            String p = poker.get(i);
            // 轮流发牌
            if (i >= 51) {
                dipai.add(p);
            } else if (i % 3 == 0) {
                player1.add(p);
            } else if (i % 3 == 1) {
                player2.add(p);
            } else if (i % 3 == 2) {
                player3.add(p);
            }
        }

        // 看牌
        System.out.println("玩家1" + player1);
        System.out.println("玩家2" + player2);
        System.out.println("玩家3" + player3);
        System.out.println("底牌" + dipai);
    }
}
