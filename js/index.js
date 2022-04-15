// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

let hacker1="Tony";

//1.2 Print `"The driver's name is XXXX"`.

console.log(hacker1);

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2="Steve";

//1.4 Print `"The navigator's name is YYYY"`.

console.log(hacker2);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length>hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length<hacker2.length)
{
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else
{
    console.log(`Wow, you both have equally long names, ${hacker1.length+hacker2.length} characters!`)
};

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let nameUp =hacker1.split("");
let nameDef="";

for (let i=0; i<nameUp.length;i++)
  {
   if(i!==(nameUp.length-1))
   {
     nameDef+=nameUp[i]+" ";
   }
    else
   {
     nameDef+=nameUp[i]  
    }
  }

nameDef=nameDef.toUpperCase();
console.log(nameDef);
    
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let nameReverse =hacker2.split("");
let nameDef2="";

for (let i=nameReverse.length-1;i>=0;i--)
  {
     nameDef2+=nameReverse[i];
  }

console.log(nameDef2);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.

const order=hacker2.localeCompare(hacker1);

if(order>0)
{
  console.log("The driver's name goes first");
}
//- Yo, the navigator goes first definitely.

else if (order<0)
{
  console.log("Yo, the navigator goes first definitely");
}

//- What?! You both have the same name?

else
{
  console.log("What?! You both have the same name?");
}

/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.

*/

const ipsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis accumsan quam non euismod. Cras pellentesque est id sapien sollicitudin, eget venenatis urna hendrerit. Etiam nisi purus, venenatis quis sem sit amet, vehicula laoreet elit. Quisque finibus luctus nisl nec hendrerit. Nulla at placerat libero. Donec feugiat interdum urna, at malesuada elit aliquam sed. Etiam vel quam scelerisque, euismod ex sit amet, maximus est. Sed ultricies elit malesuada facilisis pellentesque. Fusce vitae porttitor ipsum. Vestibulum nec consectetur metus, ac lobortis ipsum. Vivamus aliquet nec risus non bibendum. Quisque odio nisi, facilisis vel euismod quis, rhoncus in nisl. Nullam purus tellus, facilisis nec facilisis sed, euismod eget libero. Quisque imperdiet nunc ac sem imperdiet, eu maximus lorem tempor. Donec dapibus eget leo eget ornare. Integer suscipit, nisl a lobortis feugiat, enim tellus gravida lectus, vitae semper massa quam sit amet lacus. Quisque sit amet orci malesuada, iaculis ex sit amet, laoreet tortor. Vivamus pellentesque augue at feugiat vehicula. Nulla facilisi. Fusce enim turpis, ultrices id ex a, vulputate finibus orci. Morbi interdum sapien eget massa finibus finibus. Mauris ut velit et nulla varius placerat. Nam ut eros eget libero fringilla placerat. Etiam ante metus, ultricies sed consequat et, lacinia eu leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique fringilla semper. Nullam luctus posuere lorem, eu suscipit arcu auctor nec. Nunc rutrum aliquam nulla quis feugiat. Proin sit amet libero mattis, rutrum nunc sit amet, sagittis magna. Donec tellus elit, finibus sit amet felis id, condimentum interdum quam. In massa tellus, eleifend in vulputate vel, vulputate nec purus. Nulla laoreet neque quis elit ullamcorper tempus. Sed ultricies auctor nunc, eget convallis dolor gravida a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non mollis elit. Nam quam est, dignissim at euismod sed, varius in sapien. In hac habitasse platea dictumst. Mauris dapibus nunc finibus orci ullamcorper vulputate. Vestibulum ante nibh, euismod sed turpis ac, maximus sagittis urna. Aenean aliquet augue dignissim elit commodo, vel gravida ex lacinia.";

//Make your program count the number of words in the string.

let ipsumDivided=ipsum.split(",");
let ipsumWithOutCommas="";

for (let i=0; i<ipsumDivided.length;i++)
  {
     ipsumWithOutCommas+=ipsumDivided[i];
  }

ipsumDivided=ipsumWithOutCommas.split(".");
let ipsumClean="";

for (let i=0; i<ipsumDivided.length;i++)
  {
     ipsumClean+=ipsumDivided[i];
  }

ipsumClean=ipsumClean.split(" ");
console.log(`la cantidad de palabras son ${ipsumClean.length}`);

//Make your program count the number of times the Latin word et appears.

let wordEt=0;
for (let i=0; i<ipsumClean.length;i++)
{
  if(ipsumClean[i]=="et")
  {
    wordEt+=1
  }
}
console.log(`la cantidad de veces que se repite la palabra "et" son ${wordEt}`);
