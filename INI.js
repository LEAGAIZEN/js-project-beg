const input = document.getElementById("numOfwords");
const container=document.querySelector(".container");
const generateword=(n)=>{
   let text="";
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i=0;i<n;++i){
   const random=(Math.random() * (letters.length-1)).toFixed(0);
   text+=letters[random];
}

return text;

};
let data="";
let numOfwords;
const getdata = ()=> {
   numOfwords=Number(input.value);
   console.log(numOfwords);
   // container.innerText=" ";
   const para=document.createElement("p");
   for (let i = 0; i < numOfwords; ++i) {
      const randomNumber = (Math.random() * 15).toFixed(0);
      data += generateword(randomNumber);
      data += " ";
    }
      // console.log(data);
   para.setAttribute("class","paras");
   para.innerText=data;
   container.append(para);
};
