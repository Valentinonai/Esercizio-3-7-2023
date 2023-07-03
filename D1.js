/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Risposta:
i principali datatype sono:
string= definisce una stringa ossia una parola
number= definisce una variabile contenente dei numeri
boolean= definisce una variabile che può avere come contenuto solo true o false
undefined= è il valore assegnato ad una variabile dichiarata e non inizializzata oppure ad una variabile in fase di utilizzo quando non è stata dichiarata
null= è il valore vuoto che si può assegnare ad una variabile al momento della dichiarazione

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Name = "Valentino";
console.log(Name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20); // valore non registato da nessuna parte ma mostrato in console
let z = 12, //assegno valori a variabili cosi sono riutilizzabili e rappresento risultato in console
  y = 20;
let risultato = z + y;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

Name = "Nai";
console.log(Name);

const Nome = "Valentino";
console.log(Nome);
/*Nome = "Nai";       Parte di codice commentata perchè blocca il programma
console.log(Nome);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risultato2 = 4 - x;
console.log(risultato2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john",
  name2 = "John";
let risultato3 = name1 === name2;
console.log(risultato3);
console.log(risultato3 === false ? "i nomi sono diversi" : "i nomi sono uguali");

risultato3 = name1.toLocaleLowerCase() === name2.toLocaleLowerCase();
console.log(risultato3);
console.log(risultato3 === false ? "i nomi sono diversi" : "i nomi sono uguali");
