#include <stdio.h>
#include <string.h>

int main () {

   char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
   char greets[] = "hello";
   int i=0;
   printf("Greeting message: %s\n", greeting );
   printf("Greeting message: %s\n", greets );
   for(i=0;i<strlen(greets);i++) {
       printf("%c", greets[i] );
   }
   return 0;
}