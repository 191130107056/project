import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

// The absolute difference is the positive difference between two values a and b, is written |a-b| or |b-a| and they are equal.
// if a=3 and b=2, |3-2| = |2-3| = 1. Given an array of integers, find the minimum absolute difference between any two elements in the array.

// Sample Input : [3 ,-7, 0]
// Sample Output : 3

// Example: arr=[-2,2,4]

// .There are 3 pairs of numbers: [-2,2] , [-2,4] , [2,4]. 
// .The absolute differences for these pairs are |(-2)-2| = 4, |(-2)-4| = 6 and |2-4| = 2. 
// .The minimum absolute difference is 2.

public class problem3 {
    public static void main(String[] args) {
        int num[] = { 3,-7,0 };
        int len = num.length;
        List<Integer> list = new LinkedList();
        int temp;

        for (int i = 0; i < len; i++) {
            for (int j = i + 1; j < len; j++) {
                temp = Math.abs(num[i] - num[j]);
                list.add(temp);
            }
        }
            System.out.println(Collections.min(list));
    }

}
