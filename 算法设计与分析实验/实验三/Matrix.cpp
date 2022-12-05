#include <iostream>
#include <string.h>
using namespace std;
struct SIGN
{
    int num;              //加括号的个数
} l[100 + 5], r[100 + 5]; // l为左括号,r为右括号
//矩阵的个数
int n;
//矩阵的维数 第i个矩形 的维数为 p[i*2]和p[i*2+1]
int p[200 + 5];
// m[i][j]表示当前i到j最少的计算次数
int m[100 + 5][100 + 5];
// s[i][j]表示当前i到j最少计算次数需要断开的位置s[i][j]
int s[100 + 5][100 + 5];
// x[i]表示第i个矩阵要加括号的个数
void MatrixChain()
{
    memset(m, 0, sizeof(m));
    //当前矩阵的长度
    for (int r = 2; r <= n; r++)
    {
        //矩阵的起始位置
        for (int i = 1; i <= n - r + 1; i++)
        {
            //矩阵的结束位置（矩阵开始+矩阵长度-1）
            int j = i + r - 1;
            if (i > n || j > n)
                continue;
            // m[i][j]初值
            m[i][j] = m[i + 1][j] + p[2 * i] * p[2 * i + 1] * p[2 * j + 1];
            //记录当前s[i][j]的最优断开位置
            s[i][j] = i;
            //循环找i,j之间的最优断点k
            for (int k = i + 1; k < j; k++)
            {
                int t = m[i][k] + m[k + 1][j] + p[i * 2] * p[k * 2 + 1] * p[j * 2 + 1];
                if (t < m[i][j])
                {
                    //更新i 到 j的最优解
                    m[i][j] = t;
                    //更新当前s[i][j]的最优断开位置
                    s[i][j] = k;
                }
            }
            //  cout<<i<<"  "<<j<<" "<<m[i][j]<<endl;
        }
    }
}
//加括号
void Traceback(int i, int j)
{
    if (i == j)
        return;
    Traceback(i, s[i][j]);
    Traceback(s[i][j] + 1, j);
    cout << "Multiply A(" << i << "," << s[i][j];
    cout << ")and A(" << (s[i][j] + 1) << "," << j << ")" << endl;
    l[i].num++;
    r[j].num++;
}
//输出括号
void dealSign()
{
    cout << "计算次序：";
    //加括号
    for (int i = 1; i <= n; i++)
    {
        int leftCount = l[i].num;
        int rightCount = r[i].num;
        //先输出左括号 再输出当前矩阵  最后输出右括号
        for (int j = 0; j < leftCount; j++)
        {
            cout << "(";
        }
        cout << i;
        for (int j = 0; j < rightCount; j++)
        {
            cout << ")";
        }
    }
}
int main()
{
    cout << "请输入矩阵的个数：";
    cin >> n;
    cout << "请输入各矩阵的维数，空格分开" << endl;
    for (int i = 1; i <= n; i++)
    {
        cin >> p[i * 2];
        cin >> p[i * 2 + 1];
    }
    MatrixChain();
    //输出1到n的最优结果
    cout << "最小计算次数为：" << m[1][n] << endl;
    memset(l, 0, sizeof(l));
    memset(r, 0, sizeof(r));
    Traceback(1, n);
    dealSign();
    return 0;
}