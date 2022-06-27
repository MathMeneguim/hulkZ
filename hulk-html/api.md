<!-- 

//To send an HTTP request:
//1)create an XMLHttpRequest object
//2)open a URL
//3)and send the request.

// function reqListener () {
//   console.log(this.responseText);

//   const httpRequest = new XMLHttpRequest(); //1)create an XMLHttpRequest object
  
//   httpRequest.addEventListener("load", reqListener);
//     //The first parameter of the call is the HTTP request method |
//     //The second parameter is the URL you're sending the request to |
//     //The optional third parameter sets whether the request is asynchronous.
//   httpRequest.open("GET", "http://www.example.org/example.txt"); //2)open a URL
//     //The parameter can be any data you want to send to the server if POST-ing the request.
//   httpRequest.send(); //3)and send the request.
// }

//After the transaction completes, the object will contain
//useful information
//response body and
//the HTTP status of the result.

/*
//tomar atitude de acordo com o status
if (httpRequest.status === 200) {
  // Perfect!
} else {
  // There was a problem with the request.
  // For example, the response may have a 404 (Not Found)
  // or 500 (Internal Server Error) response code.
}
*/

/*
propriedades 
  readyState: 0 //como esta no momento
  status: 0 //status http
  response: "" //resposta


  onreadystatechange: null
*/ -->
