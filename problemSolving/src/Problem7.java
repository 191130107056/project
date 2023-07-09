public class Problem7 {
    
    public static String meetOrNot(int x1 , int v1, int x2,int v2){
        if( ((x1-x2) % (v1-v2)) == 0){
            return "YES";
        }else{
            return "NO";
        }
    }
    public static void main(String[] args) {
        System.out.println(meetOrNot(2, 1, 1, 2));
        System.out.println(meetOrNot(0, 3, 4, 2));
        System.out.println(meetOrNot(2, 4, 3, 0));
        
    }
}
