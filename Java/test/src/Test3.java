
/* 1、使用final声明一个属性，就是常量，常量的命名规则建议使用全大写
 * 2、常量必须在定义时进行初始化
 * 3、使用final声明的方法(类)只能被继承，不能被重写
 */

public class Test3 {
    public static void main(String[] args) {
        System.out.println(Constant.PERSON_NUM);
        FinalClass fc = new FinalClass();
        fc.setLength(20);
    }

}

// 常量类
class Constant {
    public static final int PERSON_NUM = 10;
}

class FinalClass {
    public final int DAY_NUMBER;

    public FinalClass() {
        DAY_NUMBER = 22;
    }

    public final void print() {
        System.out.println("I am final method.");
    }

    public void setLength(final int size) {
        System.out.println(size);
    }
}