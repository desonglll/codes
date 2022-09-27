import java.util.Arrays;
import org.junit.Test;

/**
 * test
 */

public class Test2 {
    @Test
    public void main() {
        // SortCosmeticManager cm = new SortCosmeticManager();
        ImportCosmeticManager cm = new ImportCosmeticManager();
        cm.add(new Cosmetic("香奈儿", "进口", 1000));
        cm.add(new Cosmetic("圣罗兰", "进口", 800));
        cm.add(new Cosmetic("大宝", "国产", 20));
        cm.add(new Cosmetic("万紫千红", "国产", 15));

        cm.printInfo();
    }
}

// 可输出进口化妆品的管理类
class ImportCosmeticManager extends CosmeticManager {
    public void printInfo() {
        for (int i = 0; i < count; i++) {
            if ("进口".equals(cs[i].getType())) {
                System.out.println(cs[i].getInfo());
            }
        }
    }
}

class SortCosmeticManager extends CosmeticManager {
    // 排序输出所有产品
    public void printInfo() {
        Cosmetic[] temp = Arrays.copyOf(cs, count);
        // System.out.println(temp.length);

        Cosmetic c = null;
        for (int i = 0; i < temp.length; i++) {
            for (int j = 0; j < temp.length - i - 1; j++) {
                if (temp[j].getPrice() > temp[j + 1].getPrice()) {
                    c = temp[j];
                    temp[j] = temp[j + 1];
                    temp[j + 1] = c;
                }
            }
        }
        // 增强的for循环
        for (Cosmetic cosmetic : temp) {
            System.out.println(cosmetic.getInfo());
        }
    }
}

// 化妆品管理类
class CosmeticManager {
    protected Cosmetic[] cs = new Cosmetic[4];
    protected int count = 0;

    // 进货
    public void add(Cosmetic c) {
        int size = cs.length;
        if (count >= size) {
            int newLen = size * 2;
            cs = Arrays.copyOf(cs, newLen);
        }
        cs[count] = c;
        count++;
    }

    // 输出所有产品
    public void printInfo() {
        for (int i = 0; i < count; i++) {
            System.out.println(cs[i].getInfo());
        }
    }
}

// 化妆品类
class Cosmetic {
    private String name;
    private String type;
    private int price;

    public Cosmetic() {

    }

    public Cosmetic(String name, String type, int price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getInfo() {
        return "name = " + name + ", type =  " + type + ", price = " + price;
    }

}
