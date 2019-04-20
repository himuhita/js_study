#include <stdio.h>

int main () {

   int  var1;
   char var2[10];
   int  *var3;

   printf("Address of var1 variable: %x\n", &var1  );
   printf("Address of var2 variable: %x\n", &var2  );
   printf("Address of var3 variable: %x\n", &var3  );

   return 0;
}