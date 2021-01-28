console.log("hola")
function f(n: number):number {
   if (n==0 || n==1) return 0;
   return n * f(n-1);
}
f(1)
