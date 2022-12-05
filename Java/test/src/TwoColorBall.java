import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class TwoColorBall {
    public static void main(String[] args) {

        // Define variables.

        // RedBall number user chooses.
        int[] userRedBall = new int[6];

        // RedBall number system creates.
        int[] sysRedBall = new int[6];

        // BlueBall user chooses.
        int userBlueBall = 0;

        // BlueBall system creates.
        int sysBlueBall = 0;

        // Records the correct RedBall numbers of user chooses.
        int redCount = 0;

        // Records the correct BlueBall numbers of user chooses.
        int blueCount = 0;

        // Creates 6 numbers randomly between 1 and 33 which is not repeated.
        int[] redBall = new int[33];
        for (int i = 0; i < redBall.length; i++) {
            redBall[i] = i + 1;
        }
        System.out.println("Double-Color Ball begins, good luck! ");
        System.out.println("Please choose the method that you want: (1: System creates; 2: Manual)");
        Scanner input = new Scanner(System.in);
        Random r = new Random();
        boolean flag = true;
        while (flag) {
            int isAuto = input.nextInt();
            switch (isAuto) {
                case 1:
                    // System
                    computerSelection(redBall, userRedBall);
                    userBlueBall = r.nextInt(16) + 1;
                    flag = false;
                    break;
                case 2:
                    // Manual
                    System.out.println("Please enter 6 numbers for RedBall: (1 - 33)");
                    for (int i = 0; i < userRedBall.length; i++) {
                        userRedBall[i] = input.nextInt();
                    }
                    System.out.println("Please enter 1 number for BlueBall: (1 - 16)");
                    userBlueBall = input.nextInt();
                    flag = false;
                    break;
                default:
                    System.out.println("Please choose the method that you want: (1: System creates; 2: Manual)");
                    break;
            }
        }

        // System creates numbers randomly.
        // RedBall
        computerSelection(redBall, sysRedBall);
        // BlueBall
        sysBlueBall = r.nextInt(16) + 1;

        // Calc result.
        // Calc RedBall.
        for (int i = 0; i < userRedBall.length; i++) {
            for (int j = 0; j < sysRedBall.length; j++) {
                if (userRedBall[i] == sysRedBall[j]) {
                    int temp = sysRedBall[j];
                    sysRedBall[j] = sysRedBall[sysRedBall.length - 1 - redCount];
                    sysRedBall[sysRedBall.length - 1 - redCount] = temp;
                    redCount += 1;
                    break;
                }
            }
        }
        // Calc BlueBall
        if (userBlueBall == sysBlueBall) {
            blueCount = 1;
        }

        // Whether prize.
        if (blueCount == 0 && redCount <= 3) {
            System.out.println("Sorry, you don't have prize, continue to go!");
            System.out.println();
        } else if (blueCount == 1 && redCount < 3) {
            System.out.println("Congratulation! 6 level!");
        } else if ((blueCount == 1 && redCount == 3) || (blueCount == 0 && redCount == 4)) {
            System.out.println("Congratulation! 5 level!");
        } else if ((blueCount == 1 && redCount == 4) || (blueCount == 0 && redCount == 5)) {
            System.out.println("Congratulation! 4 level!");
        } else if ((blueCount == 1 && redCount == 5)) {
            System.out.println("Congratulation! 3 level!");
        } else if ((blueCount == 0 && redCount == 6)) {
            System.out.println("Congratulation! 2 level!");
        } else if ((blueCount == 1 && redCount == 6)) {
            System.out.println("Congratulation! 1 level!");
        } else {
            System.out.println("Sorry, system error!");
        }

        // System numbers.
        System.out.println("Prize numbers of RedBall: ");
        sort(sysRedBall);
        System.out.println(Arrays.toString(sysRedBall));
        System.out.println("Prize numbers of BlueBall: " + sysBlueBall);

        // User numbers.
        System.out.println("The number of RedBall you chose: ");
        sort(userRedBall);
        System.out.println(Arrays.toString(userRedBall));
        System.out.println("The number of BlueBall you chose is " + userBlueBall);

        System.out.println("Buy Double-Color Ball is a contribution to our country! Try again next time! ");

        input.close();
    }

    public static void sort(int[] ball) {
        Arrays.sort(ball);
    }

    // Creates some numbers randomly that are not repeat.
    public static void computerSelection(int[] redBall, int[] userRedBall) {
        Random r = new Random();
        int index = -1;
        for (int i = 0; i < userRedBall.length; i++) {
            index = r.nextInt(redBall.length - i);
            userRedBall[i] = redBall[index];
            int temp = redBall[index];
            redBall[index] = redBall[redBall.length - 1 - i];
            redBall[redBall.length - 1 - i] = temp;
        }
    }
}
