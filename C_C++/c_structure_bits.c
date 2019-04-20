#include <stdio.h>
#include <string.h>

/* define simple structure */
struct {
   unsigned int widthValidated;
   unsigned int heightValidated;
} status1;

/* define a structure with bit fields */
struct {
   unsigned int widthValidated : 1;
   unsigned int heightValidated : 1;
} status2;

/* define simple union */
union {
   unsigned int widthValidated;
   unsigned int heightValidated;
} ustatus1;

/* define a union with bit fields */
union {
   unsigned int widthValidated : 1;
   unsigned int heightValidated : 32;
} ustatus2;
int main( ) {

   printf( "Memory size occupied by status1 : %d\n", sizeof(status1));
   printf( "Memory size occupied by status2 : %d\n", sizeof(status2));

   printf( "Memory size occupied by ustatus1 : %d\n", sizeof(ustatus1));
   printf( "Memory size occupied by ustatus2 : %d\n", sizeof(ustatus2));

   return 0;
}