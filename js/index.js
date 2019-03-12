var answer = '';
answer = prompt('Welcome to the argument clinc may I have your name?');
alert('Hi '+ answer + 'welcome, I told you to come one hour earleir! Why are you late?');
answer = confirm('I never spoke to you before in my life');
answer = prompt('We have spoken before! And you are late! Before we go on is this a 5 minute argument or30 minute argument. (write 5 or 30)');
if(answer === 30) {
  confirm('Okay great 30 minutes, you must pay before we continue');
}
else if (answer === 5) {
  confirm('Okay great 5 minutes, you must pay before we continue');
}