// Problem 1 

// Sales by Match : 

// .There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors 
//  there are

// . Example: 
//   - n = 7 and arr = [1,2,1,2,1,3,2]
//   - There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// . Sample Input : n = 9 and arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// . Sample Output : 3


public class problem1{
  public static void main(String[] args) {
		
		int arr[] = {1,2,3,1,2,3,4};
		int n = arr.length;
		
		int pair = 0;
		
		for(int i=0; i<n; i++) {
			for(int j=i+1; j<n; j++) {
				if(arr[i]==arr[j] && i!=j) {
					pair++;
//					System.out.println(arr[i]);
				}
			}
		}
		
		System.out.println(pair);;
		
		
	}
}

