#include <stdio.h>
int while_loop();
int for_loop();
int do_while_loop();
int nested_loop();

int main () {

    printf("\nSTART WHILE LOOP\n");
    while_loop();
    printf("END WHILE LOOP\n");

    printf("\nSTART FOR LOOP\n");
    for_loop();
    printf("END FOR LOOP\n");

    printf("\nSTART DO..WHILE LOOP\n");
    do_while_loop();
    printf("END DO..WHILE LOOP\n");

    printf("\nSTART NESTED LOOP\n");
    nested_loop();
    printf("\nSTART NESTED LOOP\n");

   return 0;
}

int while_loop() {
    /* local variable definition */
   int a = 0;
   /* while loop execution */
   while( a < 10 ) {
      printf("value of a: %d\n", a);
      a++;
   }
   return 0;
}

int for_loop() {
    int a;
    /* for loop execution */
    for( a = 10; a < 20; a = a + 1 ){
      printf("value of a: %d\n", a);
    }
    return 0;
}

int do_while_loop() {
    /* local variable definition */
   int a = 10;
   /* do loop execution */
   do {
      printf("value of a: %d\n", a);
      a = a + 1;
   }while( a < 20 );
 
   return 0;
}

int nested_loop() {
    /* local variable definition */
   int i, j;
   
   for(i = 2; i<100; i++) {

      for(j = 2; j <= (i/j); j++) 
      if(!(i%j)) break; // if factor found, not prime
      if(j > (i/j)) printf("%d is prime\n", i);
   }
 
   return 0;
}