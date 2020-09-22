// a comment
    //alert("hello world"); // alert function
    
    // assign click function
    document.onclick = function() {
      // do this when click happens

      var message = "the number is 2";            
      // print to the console
      console.log(message);    

      var msg = document.getElementById('myMessage');
      
      //console.log(msg);
      // put text in message into the div in the page
      msg.innerText = message;

    }