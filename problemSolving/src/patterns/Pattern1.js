//========================== ^(XOR)  => find non repeating number  =====================================
// let a = [1,12,1,5,1,12,13];

// let result = a[0];
// for(let i=1;i<a.length; i++){
   
//      result =  result ^ a[i]; 
//     //  tempArr.push(result)
//     }
//     console.log(result);
    















// ////========================================== TASK 1 =============================================================================================================
// Given	two	strings,	txt1.	The	string	txt1	consists	of	words	separated	by	space.	
// a) Create	an	array	of	words	in	the	string	txt1. For	e.g.	if	txt1	is	"i enjoy	coding	and	writing	code	is	a	
// lot	of	fun"	then the	array	is	["i",	"enjoy",	"coding",	"and",	"writing",	"code",	"is",	"a",	"lot",	"of",	
// "fun"]

// let txt1 = "i enjoy coding and writing code is a lot of fun";

// // let arr = txt1.split(" ")
// // console.log(arr);

// //===== OR

// let arr =[];
//     let newItem = '';
// [...txt1].map((item,index) => {
//     newItem += txt1.toString().charAt(index)
//     if(item === ' '){
//         arr.push(newItem)
//         newItem = ''
//     }
// })

// console.log(arr);


//========================================== TASK 2 =============================================================================================================


productMaster = [
    {id:'A441', name:'Pepsi',category:'Soft	Drink',	price:15,	quantity:2},
{id:'B234', name:'Coke',	category:'Soft	Drink',	price:10,	quantity:8},
{id:'A617', name:'Mirinda',	category:'Soft	Drink',	price:20,	quantity:20},
{id:'B003', name:'Sprite',	category:'Soft	Drink',	price:16,	quantity:5},
{id:'B225', name:'Minute	Maid',	category:'Soft	Drink',	price:25,	quantity:12},
{id:'A742', name:'5Star',	category:'Chocloate',	price:10,	quantity:3},
{id:'B388', name:'Appy',	category:'Soft	Drink',	price:35,	quantity:9},
{id:'A899', name:'Gems',	category:'Chocloate',	price:12,	quantity:11},
{id:'B635', name:'KitKat',	category:'Chocloate',	price:15,	quantity:7},
{id:'B408', name:'Perk',	category:'Chocloate',	price:8,	quantity:15},
{id:'A354', name:'Dairy	Milk',	category:'Chocloate',	price:30,	quantity:4}
]



//g) Sort	the	array	in	decreasing	order	of	price	and	print	it	on	the	console.
// function sortArrayByPrice(arr){
//      arr.sort((a,b) => {
//         return +b.price - +a.price;
//     })
//     return arr
// }
// console.log(sortArrayByPrice(productMaster));

//h) Sort	the	array	by	id	in	ascending	order	of	id	and	print	it	on	the	console  
// function sortArrayById(arr){
//     arr.sort((a,b) => {
//         return a.id.toLowerCase().localeCompare(b.id.toLowerCase());
//     })
//     return arr;
// }
// console.log(sortArrayById(productMaster));

//i) Sort	the	array	in	increasing	order	of	quantity	and	print	it	on	the	console.
// function sortArrayByQuantity(arr){
//     arr.sort((a,b) => {
//         return +a.quantity - +b.quantity;
//     })
//     return arr
// }
// console.log(sortArrayByQuantity(productMaster));


//j) Sort	the	array	by	category	and	name	in	ascending	order.	So	the	output	should	have	the	products	
// with	category	Chocolate	followed	by	products	with	category	Soft	Drink.	Products	within	the	
// same	category	are	sorted	by	name.

// function sortArrayByCategoryName(arr){
//     arr = arr.sort((a,b) => a.category.toLowerCase().localeCompare(b.category.toLowerCase()))
//     arr = arr.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
//     return arr
// }
// console.log(sortArrayByCategoryName(productMaster));


//k) Create	an	array	of	all	products	whose	category	is	Soft	Drink	and	print	it	on	the	console.

// let newArr = [];
// productMaster.map(item => {
//     if(item.category === "Soft	Drink"){
//         newArr.push(item)
//     }

// })
// console.log(newArr);

// l) Create	an	array	of	all	products	with	price	greater	than	16	and	quantity	greater	than	5 and	print	it	
// on	the	console.

// let newArr = [];
// productMaster.map(item => {
//     if(item.price>16 && item.quantity > 5){
//         newArr.push(item)
//     }
// })
// console.log(newArr);

//m) Create	an	array	of	all	products	whose	id	starts	with	the	alphabet	A
// let newArr =  [];
// productMaster.map(item => {
//     if(item.id[0] === 'A'){
//         newArr.push(item)
//     }
// })
// console.log(newArr);

//n) Value	is	defined	as	price	*	quantity.	Create	an	array	of	all	products	whose	value	is	less	than	150.
// let newArr = [];
// productMaster.map(item => {
//     if((item.price * item.quantity)<150 ){
//         newArr.push(item)
//     }
// })
// console.log(newArr);


//o) On	the	console,	print	the	name	of	the	product	whose	price	is	the	highest
// let maxPrice = 0;
// productMaster.map(item => {
//     if(item.price > maxPrice){
//         maxPrice = item.price;
//     }
// })
// productMaster.map(item => {
//     if(item.price === maxPrice){
//        console.log(item.name);
//     }
// })


// //p) On	the	console,	print	the	name	of	a	product	whose	name	contains	the	string	'Milk'
// productMaster.map(item => {
//     if(item.name.includes('Milk')){
//         console.log(item.name);
//     }
// })


// //q) Each	product	is	described	in	as	sentence	like
// // Pepsi	belongs	to	the	category	Soft	Drink.	Its	id	is	A441	and	price	is	15.
// // Use	map	to	create	an	array	of	product	descriptions	and	display	it	on	the	console

// productMaster.map(item => {
//     console.log(`${item.name} belongs to the category ${item.category}. Its id is ${item.id} and price is ${item.price}`);
// })



// //r) The	JSON	for	each	product	has	to	be	modified	and	a	new	attribute	to	be	added	to	it.	This	is	the	
// // type	of	product,	which	is	Food	for	all	the	products.	So now	a	JSON	would	look	like
// // {id:'B003',name:'Sprite', category:'Soft	Drink',	price:16,	quantity:5,	type:'Food'}
// // Use	map	to	create	an updated array	of	products where	all	the	products	have	the	type	attribute	
// // with	the	value	Food	and	Display	it	on	the	console.

// let newArr=[]
// productMaster.forEach(element => {
//     newArr .push( {...element , type:'Food'})
// });
// console.log(newArr);



// //s) There	is	a	change	in	prices.	The	prices	of	all	soft	drinks	have	been	increased	by	3.	The	price	of	all	
// // chocolates	has	been	reduced	by	2.
// // Use	map	to	create	an	updated	array	of	products	and	display	it	on	the	console

// productMaster.map(item => {
//     if(item.category === "Soft	Drink"){
//         item.price = item.price + 3
//     }
//     if(item.category === "Chocloate"){
//         item.price = item.price - 2;
//     }
// })
// console.log(productMaster);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????/
//t) New	stock	has been	purchased.	The	details	of	the	purchase	are	provided	in	a JSON.	A	sample	
// JSON	is	
// {id:'B635',	purchaseQuantity:	6}
// Define	a	function	that	takes	the	purchase	details	as	a	parameter	and	update	the	productMaster	
// based	on	the	purchase	details.	Print	the	updated	productMaster on	the	console.


// let purchasedItem = {id:'B635',	purchaseQuantity:	6};
// function purchasedItemFunc(purchasedItem){
//     productMaster.map(item => {
//         if(item.id == purchasedItem.id ){
//             productMaster.push({...item, purchaseQuantity: quantity = item.quantity})
//         }
//     })
//     return productMaster
// }
// console.log(purchasedItemFunc(purchasedItem));





// // u) A customer	order	has	arrived.	The	customer	order	is	an	array	of	JSON	having	the	id	and	
// // orderQuantity.	A	sample	JSON	is	
// // [{id:'A441',	orderQuantity:	2},
// // {id:'A354',	orderQuantity:	5},
// // {id:'B003',	orderQuantity:	9}]
// // Define	a	function	that	takes	a	customer	order	as	parameter	and	creates a	new	array	which	has	
// // the	id,	orderQuantity,	name	and	price	for	each	entry	in	the	order.	Print	the	new	array on	the	
// // console. Use	map	and	find.	Do	not	use	for	loops.
// // So,	for	the	above	sample,	the	new	array	should	be
// // [{id:'A441',	orderQuantity:	2,	name:'Pepsi',	price:15},
// // {id:'A354',	orderQuantity:	5,	name:'Dairy	Milk',	price:30},
// // {id:'B003',	orderQuantity:	9,	name:'Sprite',	price:16}]

// let newArr = [];
// let order = [{id:'A441',	orderQuantity:	2},
// {id:'A354',	orderQuantity:	5},
// {id:'B003',	orderQuantity:	9}]

// function customerOrderFunc(customerOrder){
//     productMaster.map(item => {
//         customerOrder.find((element) => {
//            if(element.id === item.id  ){
//             newArr.push({id : item.id , orderQuantity : item.quantity , name : item.name , price : item.price})
//            }
//         })
//     })
//     return newArr
// }

// console.log(customerOrderFunc(order));






////========================================== TASK 3 =============================================================================================================

let salesMaster = [
    {id:'A441', sales:[10,12,13,10,16,22,30]	},
{id:'B234', sales:[2,4,3,4,2,6,8,10]	},
{id:'A617', sales:[5,5,5,5,5]	},
{id:'C229', sales:[9,7,6,8,8,10,9,3,4,5,6]	},
{id:'D412', sales:[25,25,23,21]	},
{id:'A054', sales:[2,2,3,1,5,6,7,11,2]	},
{id:'B955', sales:[1,1,1,1,1,1]	},
{id:'M341', sales:[4,5,4,5,4]	},
{id:'H103', sales:[3,2,2,3,1,1]	},
{id:'B199', sales:[6,5,4]	},
{id:'D388', sales:[7,8,9,8,4,4,4,3,2,1]}
]


//a) Create	an	array	with	the	id	of	the	product	and	the	total	sales.
// let newArr = []
// salesMaster.map((item,index) => {
//     totalSales = item.sales.reduce((total,current) => total+current)
//     newArr.push({id : item.id , totalSales : totalSales})
// })
// console.log(newArr);


// //b) Find	out	the	total	number	of	units	sold.
// let newArr = [];
// salesMaster.map(item => {
//     newArr.push({id: item.id , unitsSold : item.sales.length})
// })
// console.log(newArr);


// c) Create	an	array	with	the	id	of	the	product	and	the	maximum	sale	for	the	product	that	happened	
// on	a	day.	So,	or	example	for	A441	it	is	30,	for	D412	it	is	25,	for	A054	it	is	11.

// let newArr = [];

// salesMaster.map(item => {
//     let maxSales = 0;
//     item.sales.map(itm => {
//         if(itm > maxSales){
//             maxSales = itm
//         }
//     })
//     newArr.push({id:item.id , maximumSale : maxSales})
// })
// console.log(newArr);



//?????????????????????????????????????????????????????????????????????????????????????????????
//d) Define	a	function	that	takes	an	array	of	new	sales	orders.	Each	sales	order	is	a	JSON	with	the	
// fields	id	and	quantity.	A	sample	sales	order	is	{id:'A054',	quantity:6}.	For	each	sales	order,	push	
// the	quantity	in	the	sales	registered	for	that	product	whose	id	it	matches.




























////=======================================================================================================================================================================
//======= find value of Y from equation like => // let m = cy + d ; => y = (m-d)/c  // let m = cy - d;   => y = (m+d)/c


// function findValueOfY (str){
// let newStr = str.replaceAll(' ','');
// // console.log(newStr);

// // console.log(newStr.includes('+'));
// // console.log(newStr.indexOf('-'));


// let firstIndex = newStr.indexOf('y')
// let secondIndex=0;
// let thirdIndex = newStr.indexOf('=');

// if(newStr.indexOf('+') !== -1){
//     secondIndex =   newStr.indexOf('+')
// }
// if(newStr.indexOf('-') !== -1){
//     secondIndex = newStr.indexOf('-')
// }

// // console.log("second",secondIndex);

// let c = Number(newStr.substring(0,firstIndex));
// // console.log(c);
// let d = Number(newStr.substring(secondIndex,thirdIndex));
// // console.log("d",d);
// let m = Number(newStr.substring(thirdIndex+1))
// // console.log(m);

// return y = (m - d) / c;


// }

// console.log("y =",findValueOfY("5y + 10 = 40"));  //y=6
// console.log("y =",findValueOfY("3y + 7 = 1"));    //y=-2
// console.log("y =",findValueOfY("25y-30=1070"));  //y=44
// console.log("y =",findValueOfY("100y-101=2399"));  //y=25


//============== OR =================================




// let m = cy + d ;
// let m = cy - d;   //y = (m+d)/c

// for finout the y we make the subject y


// function findValueOfY (str){
// let newStr = str.replaceAll(' ','');
// console.log(newStr);

// console.log(newStr.includes('+'));


// let firstIndex = newStr.indexOf('y')
// let secondIndex=0;
// let thirdIndex = newStr.indexOf('=');

// if(newStr.includes('+')){
//     secondIndex =   newStr.indexOf('+')
// }
// if(newStr.includes('-')){
//     secondIndex = newStr.indexOf('-')
// }

// // console.log("second",secondIndex);

// let c = Number(newStr.substring(0,firstIndex));
// // console.log(c);
// let d = Number(newStr.substring(secondIndex,thirdIndex));
// // console.log("d",d);
// let m = Number(newStr.substring(thirdIndex+1))
// // console.log(m);

// return y = (m - d) / c;


// }

// console.log("y =",findValueOfY("5y + 10 = 40"));  //y=6
// console.log("y =",findValueOfY("3y + 7 = 1"));    //y=-2
// console.log("y =",findValueOfY("25y-30=1070"));  //y=44
// console.log("y =",findValueOfY("100y-101=2399"));  //y=25





////=======================================================================================================================================================================
// validate the email for example : s1@s2.com => where s1 and s2 should not be empty 


// //-=========== using indexOf() and substring()

// function isValideEmail(email){
//     let firstIndex = 0;
//     let secondIndex = 0;

//     firstIndex = email.indexOf('@');
//     secondIndex = email.indexOf('.');

//     console.log(firstIndex,secondIndex);

//     let beforeStr = email.substring(0,firstIndex)
//     let afterStr = email.substring(firstIndex+1 , secondIndex)

//     console.log(beforeStr , afterStr);

//     if(beforeStr === ''){
//         return false;
//     }
//     if(afterStr === ''){
//         return false;
//     }
//     return true;

// }

// let email = "dipu@123.com"
// let email = '@wer.xyz'
// let email = 'hello@.com'
// let email = 'a1234@q.com'
// let email = '231@8.com'
// let email = 'asdf@.com'

// if(isValideEmail(email)){
//     console.log("Proper");
// }else{
//     console.log('Not Proper');
// }



//==================== OR ===========================

//=============== using slice

// function isValideEmail (email){

// let firstIndex = 0;
// let secondIndex = 0;

// for(let i=0 ; i<email.length ; i++){

//     if(email[i]==='@'){
//         firstIndex = i
//     }
//     if(email[i] === '.'){
//         secondIndex = i
//     }
// }
//     let beforeStr = email.slice(0,firstIndex)
//     console.log(beforeStr);

//     let afterStr = email.slice(firstIndex+1 , secondIndex )
//     console.log(afterStr);

//     console.log(firstIndex , secondIndex);
//     if(beforeStr === ''){
//         return false
//     }
//     if(afterStr === ''){
//         return false
//     }

//     // let lastStr = email.slice(secondIndex+1)
//     // if(lastStr !== 'com'){
//     //     return false
//     // }
   

//     return true;
// }


// // let email = "dipu@123.com"
// // let email = '@wer.xyz'
// let email = 'hello@.com'

// if(isValideEmail(email)){
//     console.log('Proper');
// }else{
//     console.log('Not Proper');
// }





//=======================================================================================================================================================================
//task===========================


// let str = '1234567';
// let newStr = '';

// if(str.length %2 === 0){
//     for(let i=0 ; i<str.length ; i++){
//         newStr += str[i+1]
//         newStr += str[i]
//         i++;
//     }
// }else{
//     for(let i=0 ; i<str.length-1 ; i++){
//         newStr += str[i+1]
//         newStr += str[i]
//         i++;
//     }
//     newStr += str[str.length-1]
// }

// console.log(newStr);





//=====================================================================================================================================================================
// Problem: Given an array of integers, find the two elements that sum up to a given target value.

// const arr = [2, 4, 6, 8, 10,4];
// const target = 12;

// function findTwoSum(arr,target){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if((arr[i]+arr[j])=== target){
//                 newArr.push(arr[i]);
//                 newArr.push(arr[j]);
//                 break;  
//             }
//         }
//     }
//     if(newArr.length <= 0){
//         return null;
//     }
//     return newArr.splice(0,2);
// }

// console.log(findTwoSum(arr,target));




//=====================================================================================================================================================================
// Problem: Given an array of integers, find the longest increasing subarray.

// function findLongestIncreasingSubarray(arr){
//     let maxLength = 0;
//     let endIndex = 0;

//     let currentLength = 1;
//     let currenEndIndex = 0;

//     for(let i=1; i<arr.length ; i++){
//         if(arr[i] > arr[i-1]){
//             currentLength++;
//             if(currentLength > maxLength){
//                 maxLength = currentLength;
//                 endIndex = i;
//             }
//         }else{
//             currentLength = 1;
//             currenEndIndex = i;
//         }
//     }

//     const startIndex  = endIndex-maxLength+1;
//     return arr.slice(startIndex,endIndex+1);

// }

// console.log(findLongestIncreasingSubarray([1, 3, 2, 4, 0, 5, 7, 6]));;


//=====================================================================================================================================================================
// Problem: Given a string, determine if it is a valid palindrome after removing at most one character

// function isValidPalindrome(str){
// let n=str.length;
// let tempIndex = n/2 ;
//   for(let i=0 ;i<n/2;i++){
//     // console.log(str[i],str[n-1-i]);
//     if(str[i] !== str[n-1-i]){
//         tempIndex = n-1-i;
//             break;
//     }
//   }
  
//  let tempStr = str.slice(0,tempIndex) + str.slice(tempIndex+1);
//  console.log(tempStr);
//  let reverStr = tempStr.split('').reverse().join('');
    
//   if(tempStr === reverStr){
//     return true;
//   }else{
//     return false;
//   }

// }

// console.log(isValidPalindrome('manmam')); //true
// console.log(isValidPalindrome('abccdba')); //true
// console.log(isValidPalindrome('racecar')); //true
// console.log(isValidPalindrome('12321'));   //true
// console.log(isValidPalindrome('hello'));   //false
// console.log(isValidPalindrome('dimpal'));  //false
// console.log(isValidPalindrome('meryyrkem')); //true



//====== OR =======

// function isValidPalindrome(str){
//     let left = 0;  //str's starting index
//     let right  = str.length - 1; //str's last index
//     while(left < right){
//         if(str[left] !== str[right]){
//             // Try removing character from the left side
//             let strWithoutLeftChar = str.slice(0,left)+str.slice(left+1);
//             if(isPalindrome(strWithoutLeftChar)){
//                 return true;
//             }
//              // Try removing character from the right side
//              let strWithoutRightChar = str.slice(0,right)+str.slice(right+1);
//              if(isPalindrome(strWithoutRightChar)){
//                 return true;
//              }
//              return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// function isPalindrome(str){
//     let reverse = str.split('').reverse().join('');
//     return reverse === str;
// }

// console.log(isValidPalindrome("racecar"));  // Output: true
// console.log(isValidPalindrome("abccdba"));  // Output: true
// console.log(isValidPalindrome("12321"));  // Output: true
// console.log(isValidPalindrome("hello"));  // Output: false
// console.log(isValidPalindrome('manmam')); //true
// console.log(isValidPalindrome('dimpal'));  //false
// console.log(isValidPalindrome('meryyrkem')); //true





//=====================================================================================================================================================================
//Problem: Given an array of integers, find the longest subarray with the maximum sum.

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //

// function findLongestSubArray(arr){
//         let maxSum = 0;
//         let currentSum = arr[0];
//         let startIndex = 0;
//         let endIndex = 0;
//         let tempStartIndex = 0;

//         for(let i=1;i<arr.length ; i++){
//             if(currentSum<0){
//                 currentSum = arr[i];
//                 tempStartIndex = i;
//             }else{
//                 currentSum += arr[i];
//             }

//             if(currentSum > maxSum){
//                 maxSum = currentSum;
//                 startIndex = tempStartIndex;
//                 endIndex = i;
//             }   

//              }
//              return arr.slice(startIndex,endIndex+1);
// }

// console.log(findLongestSubArray(arr));





// ====  write program for given string ,create a string in which a certain number of x are put after each character in the input as shown below. Print the string on the console.
//======================= or =======================================

// let string = "dimpal";
// let newStr = "";

// for(let i=0;i<string.length ; i++){
//     newStr += string[i]
//     for(let j=1 ; j<=i+1;j++){
//        newStr += "x"
//     }
// }

// console.log(newStr);

//======================= or =======================================
// let string = "dimpal";
// let newStr = "";
// let count = 1;

// for(let i=0; i<string.length ; i++){
//     newStr += string[i];
//     newStr += "x".repeat(i+1)
// }

// console.log(newStr);

//======================= or =======================================

// let string = "HUMAN";
// let newStr = "";
// let str = "";
// for(let i=0; i<string.length ; i++){
//     newStr += string[i]
//     while(str.length <= i){
//         str += "x"
//     }
//     newStr += str;
//     str = "" 
// }
// console.log(newStr);


//======= or ======== without loop and without in built function

// let string = "HUMAN";
// let newStr = "";
// let str = "";
// for(let i=0; i<string.length ; i++){
//     newStr += string[i]
//     str += "x";
//     newStr += str
    
// }
// console.log(newStr);



// //====== or ========
// let string = "HUMAN";
// let newStr = "";
// let str = "x";
// for(let i=0; i<string.length ; i++){
//     newStr += string[i]+str
//     str += "x"; 
// }
// console.log(newStr);










//=====================================================================================================================================================================
// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 


// let n=5;
// let string1 = "";
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=n ; j++){
//         if((i==1 && j<=n )|| (i==n && j<=n) || (j==1 && i<=n) || (j==n && i<=n)){
//             string1 += "* "
//         }
//         else{
//             string1 += "  "
//         } 
//     }
// string1+="\n"
// }
// console.log(string1);





//=====================================================================================================================================================================
// * * * * * 
// * *     * 
// *   *   * 
// *     * * 
// * * * * * 


// let n=5;
// let string2= "";
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=n ; j++){

//         if((i==1 && j<=n )|| (i==n && j<=n) || (j==1 && i<=n) || (j==n && i<=n) || (i==j)){
//             string2 += "* "
//         }
//         else{
//             string2 += "  "
//         } 
//     }
// string2 += "\n"
// }
// console.log(string2);



//=====================================================================================================================================================================
// * * * * * 
// *       * 
// *   *   * 
// *       * 
// * * * * * 


// let n=5;
// let string = "";
// for(let i=1; i<=n ;i++){
//     for(let j=1; j<=n;j++){
//         if((i==1 && j<=n) || (i==n && j<=n) || (j==1 && i<=n) || (j==n && i<=n) || (i == Math.round(n/2) && j == Math.round(n/2))){
//             string += "* ";
//         }else{
//             string += "  ";
//         }
//     }
//     string += "\n"
// }
// console.log(string);


//=====================================================================================================================================================================
//     *     
//     *      
// * * * * * 
//     *     
//     *     


// let n=5;
// let string3 = "";
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=n ; j++){

//         if((i==Math.round(n/2) && j<=n) || (j==Math.round(n/2) && j<=n) ){
//             string3 += "* "
//         }else{
//             string3 += "  "
//         }

//     }
// string3 += "\n"
// }
// console.log(string3);




// Write a program to generate the first N prime numbers. ========================================================================================================

// function generatePrimeNumbers(n){
//     let primes = [];
//     let count = 0;
//     let num = 2;

//     while(count < n){
//         if(isPrime(num)){
//             primes.push(num);
//             count++;
//         }
//         num++;
//     }
//     return primes;
// }
// function isPrime(number){
//     if(number <=1){
//         return false;
//     }
//     for(let i=2; i<= Math.sqrt(number); i++){
//         if(number % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(generatePrimeNumbers(5));
// console.log(generatePrimeNumbers(10));





// Write a program to find the second largest element in an array. ===========================================================================================

// function findSecondLargestFromArr(arr){
//     let largest = arr[0];
//     let secondLargest = arr[0];

//     for(let i=1; i<arr.length ; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }
//         else if(arr[i] > secondLargest && arr[i] !== largest){
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }
// console.log(findSecondLargestFromArr([4,9,2,7,5]));





// Write a program to find the factorial of a given number using recursion. =================================================================================

// function factorial(number){
//     if(number===0 || number === 1){
//         return 1;
//     }

//     return number*factorial(number-1);
// }
// console.log(factorial(5));






// Write a program to check if two strings are anagrams of each other. ======================================================================================

// function areAnagram(str1,str2){
//     let sortedStr1 = str1.split('').sort().join('');
//     let sortedStr2 = str2.split('').sort().join('');
//     if(sortedStr1 === sortedStr2){
//         return true;
//     }
//     return false;
// }
// console.log(areAnagram('hello','world'));
// console.log(areAnagram('mary','army'));





// Write a program to find the sum of all numbers in an array. =============================================================================================

// function findSumOfArr(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;   
// }
// console.log(findSumOfArr([2,3,4,5,6,7]));




// Write a program to remove duplicates from an array. =========================================================================

// function removeDuplicateFromAr(arr){
//     let uniqueArr = [];
//     for(let i=0; i< arr.length ; i++){
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicateFromAr(['dipu','shilu','dipu','dipu','nimu','shilu','nimu']));
// console.log(removeDuplicateFromAr([34,34,65,23,6,5,65,65,65,70]));




// Write a program to find the largest element in an array. ============================================================================

// function findLargestElementFromArr(arr){
//     let largest = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargestElementFromArr([34,65,12,-12,-65,89]));


//================================================  isPrime  =====================================================================================================================

// function isPrime(number){
//     if(number <= 1){
//         return false;
//     }
//     for(let i=2; i<= Math.sqrt(number);i++){
//         if(number % i === 0){
//             return false
//         }
//     }
//     return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(11));
// console.log(isPrime(50));



//================================================  factorial =====================================================================================================================
// function factorial(number){
//     if(number===0 || number === 1){
//         return 1;
//     }
//     let result = 1;
//     for(let i=2;i<=number ; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(0));




//================================================  finonacci series =====================================================================================================================

// function fibonacciSeries(number){
//     let series = [0,1];
//     for(let i=2 ; i< number; i++){
//         let nextNumber = series[i-1] + series[i-2];
//         if(nextNumber <= number){
//             series.push(nextNumber);
//         }else{
//             break;
//         }
//     }
//     return series
// }
// console.log(fibonacciSeries(5));





//================================================  TOW PATTERN =====================================================================================================================
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 

//====== OR =====


//     A 
//    B C 
//   D E F 
//  G H I J 
// K L M N O 
//  P Q R S 
//   T U V 
//    W X 
//     Y 


// let n=5;
// let pattern = '';
// let count = 0;

// for(let i=1;i<=n;i++){
//     //spaces
//     for(let j=1 ; j<=n-i ; j++){
//         pattern += " ";
//     }
//     //star
//     for(let j=1;j<=i;j++){
//         // pattern += "* "
//         pattern += String.fromCharCode(count+65)+" ";
//         count++
//     }
    
//     pattern += "\n";
// }
// for(let i=1 ; i<=n ;i++ ){
//     //spaces
//     for(let j=1 ; j<=i ;j++){
//         pattern += " "
//     }
//     //reverse star
//     for(let j=1 ; j<=n-i;j++){
//         // pattern += "* ";
//         pattern += String.fromCharCode(count+65)+" ";
//         count++
//     }
//     pattern += "\n"
// }

// console.log(pattern);



//=====================================================================================================================================================================
//     1 
//    1 2 
//   1 2 3 
//  1 2 3 4 
// 1 2 3 4 5 


// let n=5
// let string = '';
// for(let i=1 ; i<=n ; i++){
//     //spaces
//     for(let j = 1; j<=n-i ; j++){
//         string += " "
//     }

//     //numbers
//     for(let j=1;j<=i;j++){
//         string += j+" ";
//     }

//     string+="\n"
// }

// console.log(string);



//===================================== leap year ====================================================================================================================

// function isLeapYear(year){
//     if((year%4===0 && year%100 !==0 ) || year % 400===0){
//         return 'Leap Year';
//     }else{
//         return 'Not a Leap Year'; 
//     }
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021));




//========================================== largest num ===============================================================================================================

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let max = num1;

// if(num2 > max){
//     max = num2;
// }
// if(num3 > max){
//     max = num3;
// }

// console.log("Largest number",max);



//=========================================================================================================================================================

// const person  = {
//   name : 'dimpal',
//   age : 20,
//   marks: { math: 66, english: 73}
// }


// const clonePerson = {...person}
// console.log(clonePerson);
// console.log(clonePerson.marks);


//=========================================================================================================================================================

// let num = 144;
// let result = Math.sqrt(num);
// console.log(result);

//=========================================================================================================================================================

// let a = 5;
// let b = 50;

// console.log(a,b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);


// let c = 10;
// let d = 20;
// console.log(c,d);
// [c,d] = [d,c];
// console.log(c,d);

//=========================================================================================================================================================

// const num = 15;
// let isPrime = true;
// if(num === 1){
//   console.log("1 is neither prime nor composite number.");
// }else if(num > 1){
//   for(let i=2; i<num ; i++){
//     if(num%i===0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log("PRIME");
//   }else{
//     console.log("NOT PRIME");
//   }
// }
//=========================================================================================================================================================

// const num = 5;

// if(num < 0){
//   console.log("error");
// }else if(num === 0){
//   console.log(1);
// }else{
//   let fact = 1;
//   for(let i=1; i<=num;i++){
//     fact *= i;
//   }
//   console.log(fact);
// }

//=========================================================================================================================================================

// program to generate fibonacci series up to n terms

// take input from the user
// const number = 5;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for(let i=1; i<= number ; i++){
//   console.log(n1);
//   nextTerm = n1+n2;
//   n1 = n2;
//   n2 = nextTerm;
// }



//=========================================================================================================================================================




// JavaScript Program to Remove All Whitespaces From a Text

// let str = "             H   e llo          ";
// str = str.split(' ').join('');
// console.log(str);

// //========== OR ============
// function trimString(string){
//   let result =  string.replace(/\s/g,'');
//   return result;
// }
// console.log(trimString("             H   e llo          "));


//=========================================================================================================================================================

// var firstWord = "Mary";
// var secondWord = "Army";

// isAnagram(firstWord, secondWord); // true

// function isAnagram(first, second) {
//   // For case insensitivity, change both words to lowercase.
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();

//   // Sort the strings, and join the resulting array to a string. Compare the results
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");
//   console.log(a,b);

//   return a === b;
// }

// console.log(isAnagram(firstWord,secondWord));




//=========================================================================================================================================================

// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// console.log(checkPalindrome("manam"));

///======== OR ==========================================

// let str = "MANAM";
// let revers = str.split('').reverse().join('');
// if(str === revers){
//     console.log("PALINDROM");
// }else{
//     console.log("NOT PALINDROME");
// }


//=========================================================================================================================================================
// O
// OL
// OLL
// OLLE
// OLLEH

// let string = "HELLO";
// let revString = string.split('').reverse().join('');
// let result = "";

// for(let i=0;i<string.length;i++){
//     for(let j=0; j<=i ; j++){
//         result += revString.charAt(j);
//     }
//     result += "\n";
// }
// console.log(result);


//==========================================================================================================================================================
// A
// AB
// ABC
// ABCD
// ABCDE

// let n = 5;
// let string = "";

// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         string += String.fromCharCode(j+65);
//     }
//     string += "\n";
// }
// console.log(string);


//=========================================================================================================================================================
// A
// BB
// CCC
// DDDD
// EEEEE

// let n = 5;
// let string = "";

// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         string += String.fromCharCode(i-1+65);
//     }
//     string += "\n";
// }
// console.log(string);


//=========================================================================================================================================================
// A
// BC
// DEF
// GHIJ
// KLMNO

// let n = 5;
// let string = "";
// let count = 0;

// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         string += String.fromCharCode(count+65);
//         count++;
//     }
//     string += "\n";
// }
// console.log(string);


//=========================================================================================================================================================
// ABCDE
// ABCD
// ABC
// AB
// A

// let n = 5;
// let string = "";

// for(let i=1;i<=n;i++){
//     for(let j=0;j<n-i+1;j++){
//         string += String.fromCharCode(j+65)
//     }
//     string += "\n";
// }
// console.log(string);



//=========================================================================================================================================================
// EDCBA
// EDCB
// EDC
// ED  
// E

// let n = 5;
// let string = "";

// for(let i=1; i<=n;i++){
//     for(let j=0;j<n-i+1;j++){
//         string += String.fromCharCode((n-1-j)+65)
//     }
//     string += "\n";
// }
// console.log(string);
















