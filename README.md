# meme-your-mutt

Click handler 
- create meme copy 
- send to api
- display api response (the meme)


Create meme:
	1. store information (create a var to temporarily store info)

	var clickedInfo = [form information]; // when we reload, the reset var info = {}

	$("#submit").on(click, function()){
			collectInfo;

	}

	function collectInfo() = 
		clickedInfo.name = $("#name").val();
		info.age = $("#age").val();
		info.gender = 
		info.photo = THIS LINK

		info.basic = true or false (checked or not) for each of the characteristics

		OR

		info.characteristics = [
						{basic:$("#basic").val()},
						{active: $("#active).val()},

		]


	var message - ""; (a variable to hold stuff)


	2. assign random value to each characteristic

	getting all characteristics that are true to perform some action

		info.characteristics.basic
		$.each(info.characteristics) --> if TRUE, then DO SOMETHING

		loop through info.characteristics --> if basic = true, pull a random element out of that array, and push it to something else. 

		message += basic[exampleRandomNumber]  (this pushes to var message) // we can't use .push because that's only adding to an ARRAY


	3. Create Meme copy

	var copy = info.name + "," + info.age + "," + message
	var message =  []




on click

