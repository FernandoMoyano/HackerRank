# Enunciado en español - divisibleSumPairs -

---

Dado un arreglo de números enteros y un número entero positivo k,
determine el número de pares ( i , j ) donde i < j y ar[ i ] +
ar[ j ] es divisible por k.

### Ejemplo

---

ar = [1,2,3,4,5,6]
k = 5

Tres pares cumplen los criterios: [1,4], [2,3] y [4,6]

### Descripción de la función

---

Complete la función divisibleSumPairs en el editor a continuación.

divisibleSumPairs tiene los siguientes parámetros:

- **int n** : la longitud del arreglo **ar**
- **int ar[ n ]**: un arreglo de números enteros
- **int k**: el divisor de números enteros

### Devuelve

---

- **int**: el número de pares

### Formato de entrada

---

- La primera línea contiene 2 números enteros separados por espacios, **n** y **k**.
- La segunda línea contiene **n** números enteros separados por espacios, cada uno de ellos un valor de **arr[ i ]**.

### Restricciones

---

- **2** < = **n** < = **100**
- **1** < = **k** < = **100**
- **1** < = **ar[ i ]** < = **100**

### Entrada de muestra

---

| STDIN       | Function                |
| ----------- | ----------------------- |
| 6 3         | n = 6 , k = 3           |
| 1 3 2 6 1 2 | ar = [1, 3, 2, 6, 1, 2] |

### Salida de muestra

---

5

### Explicación

---

A continuación, se muestran los pares válidos cuando k = 3:

ar = [1, 3, 2, 6, 1, 2]

- ( 0 , 2 ) → ar[ 0 ] + ar[ 2 ] = 1 + 2 = 3
- ( 0 , 5 ) → ar[ 0 ] + ar[ 5 ] = 1 + 2 = 3
- ( 1 , 3 ) → ar[ 1 ] + ar[ 3 ] = 3 + 6 = 9
- ( 2 , 4 ) → ar[ 2 ] + ar[ 4 ] = 2 + 1 = 3
- ( 4 , 5 ) → ar[ 4 ] + ar[ 5 ] = 1 + 2 = 3
