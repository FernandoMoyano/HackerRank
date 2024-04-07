Dado un tiempo en el formato de hora am/PM, conviértalo en tiempo militar (24 horas).

Nota:-12:00:00 am en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.
-12:00:00 pm en un reloj de 12 horas es las 12:00:00 en un reloj las 24 horas.

### Example

---

s= "12:01:00PM"

- Return '12:01:00'.

s="12:01:00AM'

- Return '00:01:00'.

### Function Description

---

Complete la función TimeConversion en el editor a continuación.Debería devolver una nueva cadena que represente el tiempo de entrada en formato de 24 horas.

time Conversion Tiene Los Siguientes Parámetros:

string s: un formato de hora en hora

### Returns

---

string: la hora en formato de 24 horas.

### Input Format

---

Una sola cadena que representa la hora en formato de reloj de 24 hs
(i.e.: hh:mm:ssAN or hh:mm:ssPM ).

### Constraints

---

Todos los tiempos de entrada son válidos

- Sample Input

07:05:45PM

- Sample Output

19:05:45
