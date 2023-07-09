public class problem5 {
    public static void main(String[] args) {
        int n = 4;
        String num = "";
        for (int i = 0; i <= n; i++) {
            num = (Math.round(Math.pow(11, i))) + " ";

            System.out.println(num);

            System.out.println();
        }
        

    }
}

// String space(String seq){
// String spacedNumber = "";
// for (int k = 0; k < seq.length; k++) {
// spacedNumber +=seq[k];
// if (k < seq.length - 1) {
// spacedNumber += " ";
// }
// }
// return spacedNumber;
// }
// int n = 5;
// for (int i = 0; i < n; i++) {
// for (int j = 0; j <= i; j++) {
// var input=pow(11, i);
// String seq=input.toString();
// stdout.write(space(seq));
// break;
// }
// stdout.writeln();
// }
// }

// int x = 1;

// for(int i=0;i<n;i++){
// for(int j=0; j<n; j++){
// if(j==0 || i==j){
// System.out.print(x+" ");
// }
// else if( (i-j) >= x ){
// System.out.print(i+" ");
// }
// }
// System.out.println();
// }
