import java.util.Scanner;

public class ProblemPattern {

    public static void pyramid(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i * 2 - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void leftStar(int n) {
        for (int i = 1; i <= n; i++) {
        
            for (int k = 1; k <=i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void rightStar(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <=i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }



    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // int n = 5;
        // System.out.println("enter between 1 to 3");
        // int idx = sc.nextInt();
        

        // switch (idx) {
        //     case 1:
        //         pyramid(n);
        //         break;
        //     case 2:
        //         leftStar(n);
        //         break;
        //     case 3:
        //         rightStar(n);
        //         break;
        //     default:
        //         System.out.println("Please enter valid input");
        //         break;
        // }


        pyramid(5);
        leftStar(5);
        rightStar(5);
    }
}
