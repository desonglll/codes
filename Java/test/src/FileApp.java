import java.io.File;

public class FileApp {
	public static void main(String[] args) {
		File file = new File("/Users/mikeshinoda/Documents/GitHub/desonglll.github.io/pages/music");
		String[] fs = file.list();
		for (int i = 0; i < fs.length; i++) {
			File f = new File(fs[i]);
			String oldName = f.getName();
			System.out.println("oldName is: " + oldName);
			// 去除空格和空白。
			oldName = oldName.replaceAll("\\s*", "");

			// 首尾再次裁剪掉空白，并把文件名变为小写。
			String newName = oldName.trim().toLowerCase();
			System.out.println("newName is:" + newName);
			System.out.println(f.renameTo(new File(newName)));
		}
	}
}
