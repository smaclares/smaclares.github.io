/*
  Author: Samantha Maclaren
  email: sam.j.maclaren@gmail.com
  version: 1.0
  update: n/a
*/

$(function(){

//multi-dimensional string array to store quotes and their authors
  var sQuotes = [["Life doesn't give us purpose. We give life purpose.", "The Flash"],
                 ["When you decide not to be afraid, you find friends in super unexpected places.", "Ms. Marvel"],
                 ["You're much stronger than you think you are. Trust me.", "Superman"],
                 ["If there is nothing but what we make in this world, then let's make it good, brothers.", "Beta Ray Bill"],
                 ["The future is worth it. All the pain. All the tears. The future is worth the fight.", "Martian Manhunter"],
                 ["In a world of ordinary mortals, you are a Wonder Woman.", "Queen Hippolyta to Wonder Woman"]];

//this method generates a new, random quote when the author clicks the "generate quote!" button

  $('#generate-quote').click(function(){
      var nRandomInt = 1 + Math.floor(Math.random() * 6); //choose random number between 1 and 6
      $('#quote-text').text(sQuotes[nRandomInt][0]); //input first string in multi-dem array to quote text
      $('#quote-author').text (sQuotes[nRandomInt][1]); //input second string in multi-dem array to author text
  });

//this method calls the twitter API to allow the user to tweet the quote

  $('#tweet-quote').click(function(){

  });

});
