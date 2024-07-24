### The Problem

Maria juega baloncesto universitario y quiere ser profesional.Cada temporada ella mantiene un récord de su obra.Ella tabula la cantidad de veces que rompe su récord de temporada para la mayoría de los puntos y menos puntos en un juego.Los puntos anotados en el primer juego establecen su récord para la temporada, y ella comienza a contar desde allí.

### Example

Los puntajes están en el mismo orden que los juegos jugados.Ella tabula sus resultados de la siguiente manera:

Count

| Game | Score | Minimum | Maximum | Min | Max |
| ---- | ----- | ------- | ------- | --- | --- |
| 0    | 12    | 12      | 12      | 0   | 0   |
| 1    | 24    | 12      | 24      | 0   | 1   |
| 2    | 10    | 10      | 24      | 1   | 1   |
| 3    | 24    | 10      | 24      | 1   | 1   |

Dados los puntajes para una temporada, determine la cantidad de veces que María rompe sus récords para la mayoría de los puntos y menos anotados durante la temporada.

### Function Description

Complete la función BreakingRecords en el editor a continuación.
BreakingRecords tiene los siguientes parámetros:

int scores[n]: puntos anotados por juego

### Returns

int[2]: Una matriz con el número de veces que rompió sus registros.El índice 0 es para romper la mayoría de los registros de puntos, y el índice 1 es para romper los récords de puntos menos.

### Input Format

La primera línea contiene un entero, el número de juegos.
La segunda línea contiene enteros separados espaciales que describen los valores respectivos de.

### Constraints

Sample Input 0

9
10 5 20 20 4 5 2 25 1

Sample Output 0

2 4

### Ejemplos

| Game | Score | Minimum | Maximum | Min | Max |
| ---- | ----- | ------- | ------- | --- | --- |
| 1    | 10    | 10      | 10      | 0   | 0   |
| 2    | 5     | 5       | 10      | 1   | 0   |
| 3    | 20    | 5       | 20      | 0   | 1   |
| 4    | 20    | 5       | 20      | 0   | 0   |
| 5    | 4     | 4       | 20      | 1   | 0   |
| 6    | 5     | 4       | 20      | 0   | 0   |
| 7    | 2     | 2       | 20      | 1   | 0   |
| 8    | 25    | 2       | 25      | 0   | 1   |
| 9    | 1     | 1       | 25      | 1   | 0   |

Sample Output 4 2
