/*
A valid path is a string that starts with a slash "/" followed by a series of folder names separated by slashes. Example: "/ab/cd/ef"

There are two folder names that are not true folder names, but have special meaning. They are:
Single dot is a null operation. "/ab/cd/./ef" is the same as "/ab/cd/ef"
Double dot means go up one directory. "/ab/cd/../ef" is the same as "/ab/ef"
These two patterns must be by themselves. If they are part of any other combination of characters, there is no special treatment e.g. "/..." or "/.test"

"/ab/cd/./ef" -> "/ab/cd/ef"
"/ab/cd/../ef" -> "/ab/ef"
"/ab/cd/../.././ef" -> "/ef"
"/ab/cd/.../ef" -> "/ab/cd/.../ef"
*/


function validPath(path: string){
  
    let directoryDetails = path.split("/");
    let output = [];
    
    for(let dir of directoryDetails){
      if((dir != "." && dir != "") && dir != ".." ){
        output.push(`/${dir}`);
      } else{
        output.pop();
      }
    }
    console.log(output)
  }
  


  validPath("/ab/cd/../ef");
  
  
  
  
  /*
  On a brand new web app, you create a signup page with two fields: email and password. There is a submit button, which creates a user account. Do not worry about sign-in concerns (e.g. auth, tokens, session persistence), just create the user account.
  What needs to happen in the frontend and the backend to achieve this? No actual coding is needed, just a conversation, and maybe can jot down notes to help explain as needed.
  */
  