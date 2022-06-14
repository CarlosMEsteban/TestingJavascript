const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const lagarto = "lagarto";
const manoSpock = "spock";

const apuestas = [
   piedra,
   papel,
   tijera,
   lagarto,
   manoSpock
]

function spock(mano1, mano2){

   if (! apuestas.includes(mano1) || ! apuestas.includes(mano2))
   {
      return "NOT FIXED!"
   }
   else if (mano1 == piedra)
   {
      if (mano2 == tijera || mano2 == lagarto)
         return mano1
      else
         return mano2
   }
   else if (mano1 == papel)
   {
      if (mano2 == piedra || mano2 == manoSpock)
         return mano1
      else
         return mano2
   }
   else if (mano1 == tijera)
   {
      if (mano2 == papel || mano2 == lagarto)
         return mano1
      else
         return mano2
   }
   else if (mano1 == lagarto)
   {
      if (mano2 == manoSpock || mano2 == papel)
         return mano1
      else
         return mano2
   }
   else if (mano1 == manoSpock)
   {
      if (mano2 == tijera || mano2 == piedra)
         return mano1
      else
         return mano2
   }
   
   
}
module.exports = spock;