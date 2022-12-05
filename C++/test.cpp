#include <iostream.h>
#define m 8
void max1max2(int a[m][2], int n, int k)
{

    int s[8][2], i, max1, max2;
    if (n == 1)
        cout << "最大值：" << s[m - 1][0];
    else
    {
        for (int i = 0; i < m - 1;)
        {
            if (a[i][0] < a[i + 1][0])
            {
                max1 = a[i + 1][0];
                max2 = a[i][0];
            }
            else
            {
                max1 = a[i][0];
                max2 = a[i + 1][0];
            }
            s[k][0] = max1;
            s[k][1] = max2;
            k++;
            i = i + 2;
        }
        n = n / 2;
        for (int x = 0; x < n; x++)
            for (int j = 0; j < 2; j++)
                a[i][j] = s[i][j];
        n = n / 2;
    }
    max1max2(s, n, k);
}

void main()
{
    int a[m][2];
    for (int i = 0; i < 8; i++)
    {
        cin >> a[i][0];
        a[i][1] = 0;
    }
    max1max2(a, 8, 0);
}