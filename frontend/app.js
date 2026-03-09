cd api-gateway-node
npm install
npx ts-node server.ts
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }});
require(["vs/editor/editor.main"], function () {

window.editor = monaco.editor.create(document.getElementById('editor'), {

value: "// Paste your code here",

language: "javascript",

theme: "vs-dark",

automaticLayout:true

});

});

async function analyze(){

document.getElementById("result").innerHTML="Analyzing...";

let code = editor.getValue();

let res = await fetch("http://localhost:3000/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({code:code})

});

let data = await res.json();

document.getElementById("result").innerHTML=data.result;

}