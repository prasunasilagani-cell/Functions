///Named functions with No input, No Return
console.log("===========Arrow functions with no input and no return=================");
//1.Print 1-10
let printnum=()=>{
    for(i=1;i<=10;i++){
        process.stdout.write(i+" ")
    }
}
printnum()
console.log();
console.log();

//2.Print even numbers
let even=()=>{
    for(i=1;i<=20;i++){
        if(i%2==0){
            process.stdout.write(i+" ")
        }
    }
}
even()
console.log();
console.log();


//3.Print odd numbers
let odd=()=>{
    for(i=1;i<=20;i++){
        if(i%2!=0){
            process.stdout.write(i+" ")
        }
    }
}
odd()
console.log();
console.log();


//4.Sum of 1-10
let sum1=()=>{
    let a=0
    for(let i=1;i<=10;i++){
        a+=i
    }
    console.log("The sum of 1-N numbers is "+a);
}
sum1()
console.log();

//5.Factorial
let factorialnum=()=>{
    let fact=1
    let x=5
    for(let i=1;i<=x;i++){
        fact*=i
    }
    console.log("The factorial of "+x+" is "+fact);
}
factorialnum()
console.log();

//6.Multiplication table
let table=()=>{
x=5
for(i=1;i<=10;i++){
    console.log(+x+" X "+i+" = "+x*i);
}
}
table()
console.log();

//7.Count digits
let countofdigitsnum=()=>{
n=1234
count=0
while(n>0){
    digit=n%10
    count+=1
    n=parseInt(n/10)
}
console.log("The no.of digits in a given number are "+count);
}
countofdigitsnum()
console.log();

//8.Sum of digits
let sumofdigitsnum=()=>{
n=1234
let add=0
while(n>0){
    digit=n%10
    add+=digit
    n=parseInt(n/10)
}
console.log("The sum of digits in a given number are "+add);
}
sumofdigitsnum()
console.log();

//9.Reverse a number
let reversenum=()=>{
n=1234
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
console.log("The reverse of a number is "+rev);
}
reversenum()
console.log();

//10.Prime number
let Prime=()=>{
n=2
count=0
for(i=1;i<=n;i++){
    if(n%i==0){
        count+=1
    }
}
if(count==2){
    console.log("Given no. 2 is Prime");
}
}
Prime()
console.log();

//11.Perfect number
let perfectnumber=()=>{
n=6
let add=0
for(let i=1;i<n;i++){
    if(n%i==0){
        add+=i
    }
}
if(add==n){
    console.log("6 is a Perfect Number");
}
}
perfectnumber()
console.log();

//12.Armstrong number
let Armstrongnumber=()=>{
n=153
temp=n
sum1=0
while(n>0){
    digit=n%10
    sum1+=digit**3 
    n=parseInt(n/10)
}
if(sum1==temp){
    console.log("153 is a Armstrong number");
}
}
Armstrongnumber()
console.log();

//13.Strong Number
let strongnumber=()=>{
n=145
temp=n
sum2=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum2+=fact
    n=parseInt(n/10)
}
if(sum2==temp){
    console.log("145 is a Strong number");
}
}
strongnumber()
console.log();

//14.Neon number
let Neonnum=()=>{
n=9
sqr_num=n**2
sum2=0
while(sqr_num>0){
    digit=sqr_num%10
    sum2+=digit
    sqr_num=parseInt(sqr_num/10)
}
if(sum2==n){
    console.log("9 is a Neon number");
}
}
Neonnum()
console.log();

//15.Palindrome number
let palindromenum=()=>{
let num=121
temp1=num
rev=0
while(num>0){
    digit=num%10
    rev=rev*10+digit
    num=parseInt(num/10)
}
if(rev==temp1){
    console.log(temp1+" is a palindrome.");
}
}
palindromenum()
console.log();

///With input,without return
console.log("===========Arrow functions with input and without return=================");
//1.Check positive or negative
let posneg=(n)=>{
 if(n>0){
    console.log("Positive");
 }
 else{
    console.log("Negative");
 }
}
posneg(43)
console.log();

//2.Check even or odd
let checkevenodd=(n)=>{
 if(n%2==0){
    console.log("Even");
 }
 else{
    console.log("Odd");
 }
}
checkevenodd(43)
console.log();

//3.Find largest of 2
let largestvthinput=(n1,n2)=>{
    if(n1>n2){
        console.log(n1+" is largest");
    }
    else{
        console.log(n2+" is largest");
    }
}
largestvthinput(50,100)
console.log();

//4.Find smallest of 3
let smallest=(n1,n2,n3)=>{
    if(n1<n2&&n1<n3){
        console.log(n1+" is smallest");
    }
    else if(n2<n1&&n2<n3){
        console.log(n2+" is smallest");
    }
    else{
        console.log(n3+" is smallest");
    }
}
smallest(30,40,100)
console.log();

//5.Print factors
let factorsofnum=(m)=>{
    console.log("The factors of given "+m+" are");
    for(i=1;i<=m;i++){
        if(m%i==0){
            process.stdout.write(i+" ")
        }
    }
}
factorsofnum(21)
console.log();
console.log();

//6.Count factors
let factors=(m)=>{
    count=0
    for(i=1;i<=m;i++){
        if(m%i==0){
            count+=1
        }
    }
     console.log("The count of factors of given "+m+" are "+count);
}
factors(21)
console.log();

//7.Factorial
let factorialvthinput=(x)=>{
    fact=1
    for(i=1;i<=x;i++){
        fact*=i
    }
    console.log("The factorial of "+x+" is "+fact);
}
factorialvthinput(20)
console.log();

//8.Sum of digits
let sumofdigitsvthinput=(n)=>{
let add=0
while(n>0){
    digit=n%10
    add+=digit
    n=parseInt(n/10)
}
console.log("The sum of digits in a given number are "+add);
}
sumofdigitsvthinput(12345)
console.log();

//9.Reverse number
let reversevthinput=(n)=>{
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
console.log("The reverse of a number is "+rev);
}
reversevthinput(34687)
console.log();

//10.Prime check
let primevthinput=(y)=>{
    count=0
    for(i=1;i<=y;i++){
        if(y%i==0){
            count+=1
        }
    }if(count==2){
        console.log(y+" is prime");
    }
    else{
        console.log(y+" is not a prime");
    }
}
primevthinput(21)
console.log();

//11.Perfect check
let perfect=(n)=>{
    sum3=0
    for(i=1;i<n;i++){
        if(n%i==0){
            sum3+=i
        }
    }if(sum3==n){
        console.log(n+" is a perfect number");
    }else{
        console.log(n+" is not a perfect number");
    }
}
perfect(6)
console.log();

//12.Armstrong check
let Armstrong=(n)=>{
temp=n
sum1=0
while(n>0){
    digit=n%10
    sum1+=digit**3 
    n=parseInt(n/10)
}
if(sum1==temp){
    console.log(temp+" is a Armstrong number");
}else{
    console.log(temp+" is not a Armstrong number");
}
}
Armstrong(153)
console.log();

//13.Strong check
let strongnumvthinput=(n)=>{
temp=n
sum2=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum2+=fact
    n=parseInt(n/10)
}
if(sum2==temp){
    console.log(temp+" is a Strong number");
}
else{
    console.log(temp+" is not a strong number");
}
}
strongnumvthinput(145)
console.log();

//14.Leap year check
let Leapyearvthinput=(n)=>{
  if(n%400==0||(n%4==0&&n%100!=0)){
    console.log(n+" is leap year");
  }
  else{
    console.log(n+" is not a leap year");
  }
}
Leapyearvthinput(2022)
console.log();

//15.Fibonacci series
let fibonacci=(n)=>{
    console.log("The febonacci series till "+n+" is ");
 a=0
 b=1
 for(i=1;i<=n;i++){
    process.stdout.write(a+" ")
    c=a+b
    a=b
    b=c
 }
}
fibonacci(10)
console.log();
console.log();

///No input,With return
console.log("===========Arrow functions with no input and with return=================");
//1.Return sum
let sumvthreturn=()=>{
    a=20
    b=30
    c=2234
    let add=a+b+c
    return "The sum of numbers is "+add
}
let addition=sumvthreturn()
console.log(addition);
console.log();

//2.Return difference
let Difference=()=>{
    b=30
    c=2234
    diff=c-b
    return "The difference of numbers is "+diff
}
let sub=Difference()
console.log(sub);
console.log();

//3.Return product
let Product=()=>{
    b=30
    c=2234
    mul=b*c
    return "The product of numbers is "+mul
}
let product=Product()
console.log(product);
console.log();

//4.Return square
let square=()=>{
   n=23
   sqr_num=n**2
    return "The square of "+n+" is "+sqr_num
}
let squares=square()
console.log(squares);
console.log();

//5.Return cube
let cube=()=>{
   n=23
   cube_num=n**3
    return "The cube of "+n+" is "+cube_num
}
let cubes=cube()
console.log(cubes);
console.log();

//6.Return factorial
let factorialvthreturn=()=>{
    let n=5
    let fact=1
    for(i=1;i<=n;i++){
        fact*=i
    }
    return "The factorial of "+n+ " is " +fact
}
let factorialn=factorialvthreturn()
console.log(factorialn);
console.log();

//7.Return digit count
let Digitcount=()=>{
n=13232    
count=0
while(n>0){
    digit=n%10
    count+=1
    n=parseInt(n/10)
}
return "The digit count of number is "+count
}
let digitscount=Digitcount()
console.log(digitscount);
console.log();

//8.Return reversed number
let reversevthreturn=()=>{
n=324
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
return "The reverse of a number is "+rev
}
let reversed=reversevthreturn()
console.log(reversed);
console.log();

//9.Return largest number
let largest=()=>{
n1=23
n2=45
n3=67
if(n1>n2&&n1>n3){
    return "The largest number is "+n1
}
else if(n2>n1&&n2>n3){
    return "The largest number is "+n2
}
else{
    return  "The largest number is "+n3
}
}
let largestnumber=largest()
console.log(largestnumber);
console.log();


//10.Return prime result
let prime=()=>{
    y=567
    count=0
    for(i=1;i<=y;i++){
        if(y%i==0){
            count+=1
        }
    }if(count==2){
        return y+" is prime"
    }
    else{
       return y+" is not a prime"
    }
}
let primecheck=prime()
console.log(primecheck);
console.log();

//11.Return palindrome
let palindrome=()=>{
let num=121
temp1=num
rev=0
while(num>0){
    digit=num%10
    rev=rev*10+digit
    num=parseInt(num/10)
}
if(rev==temp1){
    return temp1+" is a palindrome."
}
}
let number=palindrome()
console.log(number);
console.log();

//12.Return leap year
let Leapyear=()=>{
    n=2024
  if(n%400==0||(n%4==0&&n%100!=0)){
   return n+" is leap year"
  }
  else{
   return n+" is not a leap year"
  }
}
let year=Leapyear()
console.log(year);
console.log();

//13.Return max and secmax
let maxsecmax=()=>{
n=1234
max=0
secmax=0
while(n>0){
    digit=n%10
    if(digit>max&&digit>secmax){
        secmax=max
        max=digit
    }
     else if(digit<max&&digit>secmax){
    secmax=digit     
    }
    n=parseInt(n/10)
}
return "The maximum number is "+max+" and the second maximum number is "+secmax
}
let numbers=maxsecmax()
console.log(numbers);
console.log();

//14.Return number from left to right
let numberlefttoright=()=>{
    n=1234
    div=1
    result=""
    while(div<=n/10){
        div=div*10
    }
    while(n>0){
      digit=parseInt(n/div)
      result+=digit
      n=n%div
      div=parseInt(div/10)
    }
     return "The number from left to right is "+result
 }
 let m=numberlefttoright()
 console.log(m);
 console.log();
 
//15.Return strong result
let strongnum=()=>{
n=145
temp=n
sum2=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum2+=fact
    n=parseInt(n/10)
}
if(sum2==temp){
   return "145 is a Strong number"
}
}
let number1=strongnum()
console.log(number1);
console.log();

///Input and return
console.log("===========Arrow functions with input and with return=================");
//1.Sum of two numbers
let sum=(n1,n2)=>{
    c=n1+n2
    return "The sum of "+n1+" and "+n2+" is "+c
}
let twovar=sum(20,30)
console.log(twovar);
console.log();

//2.Largest of two
let largestoftwo=(n1,n2)=>{
    if(n1>n2){
        return "The largest of "+n1+" and "+n2+" is "+n1
    }else{
         return "The largest of "+n1+" and "+n2+" is "+n2
    }
}
let large=largestoftwo(567,456)
console.log(large);
console.log();


//3.Smallest of three
let smallestof3=(n1,n2,n3)=>{
    if(n1<n2&&n1<n3){
        return "The smallest number is "+n1
    }
    else if(n2<n1&&n2<n3){
        return "The smallest number is "+n2
    }
    else{
        return "The smallest number is "+n3
    }
}
let small=smallestof3(34,454,56)
console.log(small);
console.log();

//4.Even/odd result
let oddeven=(n1)=>{
    if(n1%2==0){
        return "The given number "+n1+" is even"
    }else{
        return "The given number "+n1+" is odd"
    }
}
let number2=oddeven(43)
console.log(number2);
console.log();

//5.Factorial
let factorial=(x)=>{
    fact=1
    for(i=1;i<=x;i++){
        fact*=i
    }
    return "The factorial of "+x+" is "+fact
}
let factnum=factorial(5)
console.log(factnum);
console.log();

//6.Sum of digits
let sumofdigits=(n)=>{
let add=0
while(n>0){
    digit=n%10
    add+=digit
    n=parseInt(n/10)
}
return "The sum of digits in a given number are "+add
}
let digitssum=sumofdigits(456)
console.log(digitssum);
console.log();

//7.Reverse number
let reverse=(n)=>{
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
return "The reverse of a number is "+rev
}
let num=reverse(46576)
console.log(num);
console.log();

//8.Count digits
let countofdigits=(n)=>{
count=0
while(n>0){
    digit=n%10
    count+=1
    n=parseInt(n/10)
}
return "The no.of digits in a given number are "+count
}
let countdigits=countofdigits(35658)
console.log(countdigits);
console.log();

//9.Prime check
let Primecheck=(n)=>{
count=0
for(i=1;i<=n;i++){
    if(n%i==0){
        count+=1
    }
}
if(count==2){
    return "Given no. "+n+" is Prime"
}
else{
     return "Given no. "+n+" is not a Prime"
}
}
let w=Primecheck(3)
console.log(w);
console.log();

//10.Perfect check
let perfectcheck=(n)=>{
let add=0
for(let i=1;i<n;i++){
    if(n%i==0){
        add+=i
    }
}
if(add==n){
    return +n+" is a Perfect Number"
}else{
    return +n+" is not a Perfect Number"
}
}
let q=perfectcheck(6)
console.log(q);
console.log();

//11.Armstrong check
let Armstrongcheck=(n)=>{
temp=n
sum1=0
while(n>0){
    digit=n%10
    sum1+=digit**3 
    n=parseInt(n/10)
}
if(sum1==temp){
    return temp+" is a Armstrong number"
}else{
     return temp+" is not a Armstrong number"
}
}
let s=Armstrongcheck(153)
console.log(s);
console.log();

//12.Strong check
let strongcheck=(n)=>{
temp=n
sum2=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum2+=fact
    n=parseInt(n/10)
}
if(sum2==temp){
    return temp+" is a Strong number"
}else{
     return temp+" is a Strong number"
}
}
let r=strongcheck(145)
console.log(r);
console.log();

//13.max and secmax check
let secmaxmax=(n)=>{
max=0
secmax=0
while(n>0){
    digit=n%10
    if(digit>max&&digit>secmax){
        secmax=max
        max=digit
    }
     else if(digit<max&&digit>secmax){
    secmax=digit     
    }
    n=parseInt(n/10)
}
return "The maximum number is "+max+" and the second maximum number is "+secmax
}
let d=secmaxmax(3456)
console.log(d);
console.log();

//14.Fibonacci 
let fibonacciseries=(n)=>{
 outcome=""   
 a=0
 b=1
 for(i=1;i<=n;i++){
    outcome=outcome+a+" " 
    c=a+b
    a=b
    b=c
 }
    return "The febonacci series till "+n+" is " +outcome
}
let fn=fibonacciseries(10)
console.log(fn);
console.log();

//15.Factors/counting logic
let factors_num=(m)=>{
    count=0
    for(i=1;i<=m;i++){
        if(m%i==0){
            count+=1
        }
    }
     return "The count of factors of given "+m+" are "+count
}
let f=factors_num(21)
console.log(f);
console.log();
