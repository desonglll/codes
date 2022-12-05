//最大子段
public class Maxsize {
    public static void main(String[] args) {
        int arr[] = { -20, 11, -4, 13, -5, -2 };
        System.out.println(maxsize(arr, 0, arr.length - 1));

    }

    public static int maxsize(int[] arr, int left, int right) {
        int sum = 0, midSum = 0, leftSum = 0, rightSum = 0;
        int center, s1, s2, lefts, rights;
        // 如果序列长度为1时
        if (left == right) {
            sum = arr[left];
        } else {
            // 划分
            center = (left + right) / 2;
            // 左递归
            leftSum = maxsize(arr, left, center);
            // 又递归
            rightSum = maxsize(arr, center + 1, right);

            s1 = 0;
            lefts = 0;
            for (int i = center; i >= left; i--) {
                lefts += arr[i];
                if (lefts > s1) {
                    s1 = lefts;
                }
            }

            s2 = 0;
            rights = 0;
            for (int j = center + 1; j <= right; j++) {
                rights += arr[j];
                if (rights > s2) {
                    s2 = rights;
                }
            }

            midSum = s1 + s2;
            if (midSum < leftSum) {
                sum = leftSum;
            } else {
                sum = midSum;
            }
            if (sum < rightSum) {
                sum = rightSum;
            }

        }
        return sum;
    }
}