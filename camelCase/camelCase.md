Camel Case es un estilo de nombres común en muchos lenguajes de programación. En Java, los nombres de métodos y variables suelen comenzar con una letra minúscula y todas las palabras posteriores comienzan con una letra mayúscula (ejemplo: startThread). Los nombres de clases siguen el mismo patrón, excepto que comienzan con una letra mayúscula (ejemplo: BlueCar).

- Su tarea es escribir un programa que cree o divida nombres de variables, métodos y clases de Camel Case.

### Formato de entrada

- Cada línea del archivo de entrada comenzará con una operación (S o C) seguida de un punto y coma seguido de M, C o V seguido de un punto y coma seguido de las palabras en las que necesitará operar.

La operación será
S (dividir)  
C (combinar)

M indica método,
C indica clase  
V indica variable

- En el caso de una operación de división, las palabras serán un nombre de método, clase o variable en mayúsculas y minúsculas que debe dividirse en una lista de palabras delimitadas por espacios que comiencen con una letra minúscula.

- En el caso de una operación de combinación, las palabras serán una lista de palabras delimitadas por espacios que comiencen con letras minúsculas y que deberá combinar en la cadena con mayúsculas y minúsculas adecuada. Los métodos deben terminar con un conjunto de paréntesis vacío para diferenciarlos de los nombres de las variables.

### Formato de salida

- Para cada línea de entrada, su programa debe imprimir la lista de palabras delimitada por espacios (en el caso de una operación de división) o la cadena de mayúsculas y minúsculas apropiada (en el caso de una operación de combinación).

S;M:vasoDePlastico()
C;V:teléfono móvil
C;C:maquina de café
S;C:LibroDeSoftwareGrande
C;M:hoja de papel blanca
S;V:marcoDeImagen

### Ejemplo de salida

vaso de plastico
teléfonoMóvil
MaquinaDeCafé
gran libro de software
hojaDePapelBlanca()
marco de imagen

### Explicación

- Utilice el escaner para leer toda la información como si viniera del teclado

- imprima toda la indormacion en la consola utilizando la salida estandar.

- Las salidas deben ser exactas(espacios mayusculas y minusculas)
