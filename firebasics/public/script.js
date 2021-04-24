const auth = firebase.auth();

const signedIn = document.getElementById('signedIn');
const signedOut = document.getElementById('signedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider =  new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if(user){
    signedIn.hidden = false;
    signedOut.hidden = true;
    userDetails.innerHTML = '<h3>Hello fellow user</h3>';
  }else{
    signedIn.hidden = true;
    signedOut.hidden = false;
    userDetails.innerHTML = '';
  }
})