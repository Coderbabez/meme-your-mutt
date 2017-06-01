$(document).ready(function() {
	console.log("ready");
	
	var diva = [
		"Communicates via hair flips.",
		"On a first-name basis at DryBar.",
		"Gets mad when she doesnt get first row at SOUL.",
		"Has 3 desk fans at work.",
		"Never leaves the house without 'putting her face on'.",
		"Woke up like this.",
		"Wants to speak to your manager.",
		"Is gonna send this dish back until 'they get it right.'",
		"Swears by gel manicures.",
		"Complains that her white wine spritzer is flat.",
		"Furious that more people aren't liking her new profile picture.",
	];
	var active = [
		"Has different shoes for running, for weightlifting, for yoga, for basketball.",
		"Does tough mudder for fun.",
		"Got a fancy desk so that it could be a standing desk.",
		"Runs marathons.",
		"Sits on an exercise ball because its good for their back.",
		"Wakes up at 5am to jog.",
		"Does crossfit twice a week.",
		"Takes gym selfies (tracking those #gains.)",
		"Always carries a Whey protein shake.",
		"Never skips leg day.",
		"always carries bananas for protein shakes.",
	];
	var grumpy = [
		"Complains about the thermostat.",
		"Gives you the stink eye.",
		"Has big opinions about how strangers should drive and walk.",
		"Hates waiting in lines.",
		"Is really sarcastic to strangers on the street.",
		"Is nightmare to customer service representatives.",
		"Says 'EXCUSE ME' like it's a weapon.",
		"Says SORRY in a way that makes it clear that no YOU should be sorry.",
		"Says THANKS sarcastically.",
		"Takes personal offense to the weather.",
		"Has a voice mail memo that says 'please do not leave voicemails.'",
	];
	var basic = [
		"Can never decide between the Valencia or the X-Pro Instagram filter.",
		"DEFINITELY going to Coachella this year and DEFINITELY doesn't know who's playing.",
		"Pumpkin Spice Lattes are 'her jam.'",
		"Has perfected the 'skinny arm' pose.",
		"Go-to Karaoke song: Call Me Maybe.",
		"Wears leggings and Uggs all winter.",
		"Has every color of the Kylie lip kit.",
		"Wears LuLu Lemon for running errands.",
		"So #grateful for dry shampoo.",
		"Master of the 'duck face' selfie.",
		"Has to pee but doesn't feel like taking off her romper.",
		"Going through a 'gigantic floppy hat' phase.",
		"Favorite quote: 'Do you have any Rosé?'",
		"Couldn't tell you what 'it' is but is definitely #Overit.",
		"'Doesn't have a preference' for her bridesmaid dress but will NOT wear a halter.",
	];


	$("#submit").on("click", function(){
		console.log("user submitted");
		generatePage();
		collectInfo();
		loadImage();	
	});

	$("input").attr("required", true);

	var clickedInfo = [];
    var message = "";


    function generatePage(){
    	$(".slice1").hide();
    	$(".slice2").hide();
    	$(".slice3").hide();
    	$("#header-image").hide();
    	$("#footer").hide();
    	$("#submit").hide();
    };


    function loadImage(){
    	$("#image").show();
    	$("#image").attr("src", $("#dog-photo").val());
    };
   

    function collectInfo() {
        clickedInfo.name = $("#name").val();
        // clickedInfo.age = $("#age").val();
        clickedInfo.age = $("#age option:selected").text();
        clickedInfo.gender = $("#gender option:selected").text();
        clickedInfo.url = $("#dog-photo").val();
        clickedInfo.characteristics = [
              // {basic: $("#basic").val()},
              {basic: $("#basic").val()},  // do I need any of this? 
              {active: $("#active").val()},
              {grumpy: $("#grumpy").val()},
              {diva: $("#diva").val()},
              ]
        console.log(clickedInfo);

 		// $("#message").append("name = " + clickedInfo.name + "<br>" + "age = " +clickedInfo.age + "<br>" + "gender = "+ clickedInfo.gender + "<br>" + "image url = "+ clickedInfo.url + "<br>");
 		$("#meme-text").append(clickedInfo.name + ", " + clickedInfo.age + ", " + clickedInfo.gender  + ". ");
 		message += "message: " + clickedInfo.name + ", " + clickedInfo.age + ", " + clickedInfo.gender  + ". ";
 		console.log(message)
 		collectCharacteristics();

        // var basic = $("#basic").is(":checked");
        // var active = $("#active").is(":checked");
        // var grumpy = $("#grumpy").is(":checked");
        // var diva = $("#diva").is(":checked");
        
    };    
    

    function collectCharacteristics(){
    	$.each(clickedInfo.characteristics, function(index, checkedBasic){
    		if($("#basic").is(":checked")==true) {
		    	console.log("basic"); 
		    	// $("#message").append("characteristic = basic" + "<br>");
		    	randomBasic();
		    	randomBasic();
		    	randomBasic();
		    	return false
		    }else if($("#active").is(":checked")==true) {
		    	console.log("active");
		    	// $("#message").append("characteristic = active" + "<br>");
		    	randomActive();
		    	randomActive();
		    	randomActive();
		    	return false
		    }else if($("#grumpy").is(":checked")==true) {
		    	console.log("grumpy");
		    	// $("#message").append("characteristic = grumpy" + "<br>");
		    	randomGrumpy();
		    	randomGrumpy();
		    	randomGrumpy();
		    	return false
		    }else{
		    	console.log("diva");
		    	// $("#message").append("characteristic = diva" + "<br>");
		    	randomDiva();
		    	randomDiva();
		    	randomDiva();
		    	return false 	
           	};
    	});	
    };


    
	function randomBasic() {  
		var index = Math.floor(Math.random()*basic.length);
		var basicPhrase = basic[index];
		// $("#message").append("bio = " + basicPhrase); 
		message += basicPhrase + " ";
		$("#meme-text").append(basicPhrase + " "); 
		console.log(basicPhrase);
		
	};	

	function randomActive() {   
		var index = Math.floor(Math.random()*active.length);
		var activePhrase = active[index];
		console.log(activePhrase);
		// $("#message").append("bio = " + activePhrase);
		$("#meme-text").append(activePhrase + " ");  
		message += activePhrase + " ";
	};	
    
    function randomGrumpy() {   
		var index = Math.floor(Math.random()*grumpy.length);
		var grumpyPhrase = grumpy[index];
		console.log(grumpyPhrase);
		// $("#message").append("bio = " + grumpyPhrase);
		$("#meme-text").append(grumpyPhrase + " ");
		message += grumpyPhrase + " "; 
	};	

	function randomDiva() {   
		var index = Math.floor(Math.random()*diva.length);
		var divaPhrase = diva[index];
		console.log(divaPhrase);
		// $("#message").append("bio = " + divaPhrase);
		$("#meme-text").append(divaPhrase + " "); 
		message += divaPhrase + " ";
	};	
        


    // function assignInfo(){
    		
    // }

	// function chooseRandomWordArray()  {   // objects v. methods() v. functions weNamedFunction  // method() is passed ONTO an object. ie: .log needs to be attached to an object (log)
	// 		// var randomWord = function(){
	// 		var index = Math.floor(Math.random() * words.length);
	// 		// return words[index];
	// 		var chosenWord = words[index]
	// 		// debugger;
	// 		console.log(chosenWord);
	// 		console.log(chosenWord.split(""));
	// 		return chosenWord.split("");
	// 	}	




    
});


