## Enunciado

Dados cinco números enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco números enteros. Luego imprima los valores mínimo y máximo respectivos como una sola línea de dos enteros largos separados por espacios.

Ejemplo
arr=[1,3,5,7,9]
La suma mínima es 1 + 3 + 5 + 7 = 16 y la suma máxima es 3 + 5 + 7 + + 9 = 24. La función imprime

16 24

### Función descriptiva

Complete la función miniMaxSum en el editor a continuación.

miniMaxSum tiene los siguientes parámetros:

arr: una matriz de 5 números enteros

### Imprimir

Imprime dos números enteros separados por espacios en una línea: la suma mínima y la suma máxima de 4 de 5 elementos.

### Formato de entrada

Una sola línea de cinco números enteros separados por espacios.

### Restricciones

1<= arr[i] <= 10^9

### Formato de salida

Imprima dos números enteros largos separados por espacios que denotan los valores mínimo y máximo respectivos que se pueden calcular sumando exactamente cuatro de los cinco números enteros. (La salida puede ser mayor que un entero de 32 bits).

- Entrada de muestra

1 2 3 4 5

- Salida de muestra

10 14

#### Explicación

Los números son 1, 2, 3, 4 y 5. Calcula las siguientes sumas usando cuatro de los cinco números enteros:

- Suma todo excepto 1, la suma es 2+3+4+5 = 14.
- Suma todo excepto 2, la suma es 1+3+4+5 = 13.
- Suma todo excepto 3, la suma es 1+2+4+5 = 12.
- Suma todo excepto 4, la suma es 1+2+3+5 = 11.
- Suma todo excepto 5, la suma es 1+2+3+4 = 10.
- Sugerencias: ¡Cuidado con el desbordamiento de enteros! Utilice un entero de 64 bits.

¿Necesita ayuda para empezar? Pruebe el problema Resolverme primero
