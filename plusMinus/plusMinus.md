Dada una matriz de números enteros, calcula el radio de sus elementos que son positivos , negativos y cero . Imprima el valor decimal de cada fracción en una nueva línea conlugares después del decimal.

Nota: Este desafío introduce problemas de precisión. Los casos de prueba están escalados a seis decimales, aunque las respuestas con error absoluto de hasta son aceptables.

### Ejemplo

arr=[1,1,0,-1,-1]

Hay N=5 elementos, dos positivos, dos negativos y uno cero. Sus proporciones son 2/5 = 0.400000, 2/5 = 0.400000 y 1/5 = 0.200000. Los resultados se imprimen como:

0.400000
0.400000
0.200000

### Función descriptiva

Complete la función plusMinus en el editor a continuación.

plusMinus tiene los siguientes parámetros:

int arr[N] : una matriz de números enteros

### Imprimir

Imprime las proporciones de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada condígitos después del decimal. La función no debe devolver un valor.

### Formato de entrada

La primera línea contiene un número entero,N, el tamaño de la matriz.
La segunda línea contiene N enteros separados por espacios que describen.
arr[N]

### Restricciones

0 < N <=100
-100 <= arr[i]<=100

### Formato de salida

##### Imprime lo siguiente 3líneas, cada una a 6 decimales:

1-proporción de valores positivos
2-proporción de valores negativos
3-proporción de ceros
Entrada de muestra:

| STDIN              | FUNCTION                   |
| ------------------ | -------------------------- |
| 6                  | arr[]size n=6              |
| ------------------ | --------------------       |
| -4 3 -9 0 4 1      | arr = [-4, 3, -9, 0, 4, 1] |
| ------------------ | -------------------------- |

### Salida de muestra

0.500000
0.333333
0.166667
Explicación

Hay 3 números positivos,2 números negativos y 1 cero en la matriz.
Las proporciones de ocurrencia son positivas:3/6 =0.500000 , negativo:2/6 = 0.333333
y ceros: 1/6= 0.166667 .
