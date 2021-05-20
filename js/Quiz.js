class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   
    //write code here to hide question elements
 question.hide()
    //write code to change the background color here
fill("black")
textSize(30)
text("RESULT OF THE GAME",300,30)
    //write code to show a heading for showing the result of Quiz
   
Contestant.getPlayerInfo()
    
    
     fill("blue")
     textSize(20)
     text("NOTE : CORRECT ANSWER IS HIGHLIGHTED IN GREEN",200,250)
     

    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants)
    {
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer)
      {
      
        fill("green")
        textSize(20)
        text(allContestants[plr].name + "-" + allContestants[plr].answer,200,300)
      }
      else{
        fill("red")
        textSize(20)

        text(allContestants[plr].name + "-" + allContestants[plr].answer,200,330)
      }
    
        
    }
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
  }
    }
  


