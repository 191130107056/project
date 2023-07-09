// Problem 2 

// . Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// . Example :
 
//   - a = [1,1,2,2,4,4,5,5,5]
//   - There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]
//   - The maximum length subarray has 5 elements.

// . sample input: n = 9 and arr = [1,1,2,2,4,4,5,5,5]
//   sample output: 5




public class problem2 {
    public static void main(String[] args) {
		
		int arr[] = {1,1,2,2,4,4,5,5,5};
		int n = arr.length;
		int count = 0;
		
		for(int i=0;  i<n; i++) {

			if(i+1 == n) {
				break;
			}
			if(arr[i+1]-arr[i] <= 1  ) {
				
					
				count++;
				System.out.print(arr[i]+" " );
			}else {
				continue;
			}
			
		}
		System.out.println();
		System.out.println(count);

    } 
}
