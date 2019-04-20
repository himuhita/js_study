#include <stdio.h>
#include <limits.h>
#include <float.h>

int main() {
   printf("\nStorage size for void : %d ", sizeof(void));
   printf("\nStorage size for char : %d ", sizeof(char));
   printf("\nStorage size for int : %d ", sizeof(int));
   printf("\nStorage size for float : %d ", sizeof(float));
   printf("\nMinimum float positive value: %E", FLT_MIN );
   printf("\nMaximum float positive value: %E", FLT_MAX );
   printf("\nPrecision value: %d", FLT_DIG );
   printf("\nStorage size for float : %d \n", sizeof(double));
   printf("\nStorage size for float : %d \n", sizeof(long double));
   
   return 0;
}