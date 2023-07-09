public class XorProblem {

    public static int findNonDuplicateVal(int arr[]) {
        int result = arr[0];

        for (int i = 1; i < arr.length; i++) {
            result = result ^ arr[i];
            // System.out.println("result "+result);
        }
        return result;
    }

    public static void main(String[] args) {

        int arr[] = { 1, 2, 3, 4, 3, 2, 1 };

        System.out.println(findNonDuplicateVal(arr));

    }
}
