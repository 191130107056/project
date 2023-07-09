

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



public class problem6 {

//     Problem 2:

// 1. You are given a number n representing number of stairs in a staircase.
// 2. You are standing at the bottom of staircase. You are allowed to climb 1 step, 2 steps or 3 steps in one move.
// 3. get the list of all paths that can be used to climb the staircase up.

// Use sample input and output to take idea about output.

// constraints: 
// 0 <= n <= 10

// sample:

// input : 3
// output: [111, 12, 21, 3]

    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {
            // System.out.print("enter a number :");

            // int n = sc.nextInt();

            int n = 4;
            List<String> ways = climbIt(n);
            System.out.println(ways);
        }
    }

    public static List<String> climbIt(int n) {
        List<String> result = new ArrayList<>();
        if (n == 0) { //STAND BY
            result.add("");
            return result;
        }
        if (n >= 1) { // ONE AT A TIME
            List<String> demoR1 = climbIt(n - 1);
            for (String way : demoR1) {
                result.add("1" + way);
            }
        }
        if (n >= 2) { //TWO AT A TIME
            List<String> demoR2 = climbIt(n - 2);
            for (String way : demoR2) {
                result.add("2" + way);
            }
        }
        if (n >= 3) { //THREE AT A TIME
            List<String> demoR3 = climbIt(n - 3);
            for (String way : demoR3) {
                result.add("3" + way);
            }
        }
        return result;
    }
}



// public static int fib(int n){
//     if(n==1 || n==2){
//         return n;
//     }
//     if(n>2){
//         return fib(n-2)+fib(n-1);
//     }
//     return n;
// }


// public static void main(String[] args) {
    
//     for(int i=0; i<=4; i++){
//         System.out.println(fib(i));
//     }
    
    
// }
        
    
// }
