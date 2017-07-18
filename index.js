var divaArray = [
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
        "Furious that more people aren't liking her new profile picture."
    ];

var activeArray = [
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
    "always carries bananas for protein shakes."
];

var grumpyArray = [
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
    "Has a voice mail memo that says 'please do not leave voicemails.'"
];

var basicArray = [
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
    "'Doesn't have a preference' for her bridesmaid dress but will NOT wear a halter."
];


$(document).ready(function() {

    $("#submit").on("click", function() {
        // $("#form-basics").validate();
        // $("#form-characteristics").validate();
        console.log("user submitted");
        validateForm();
    });

    // function validateForm(){
    //     $("#form-basics").validate({
    //         rules: {
    //             name: "required",
    //             age: "required",
 
    //         },
    //         messages: {
    //             name: "Please enter your name",
    //             age: "Please enter your dog's age",
    //         },
            
    //         submitHandler: function(form) {
    //             form.submit();
    //         }
    //     });
    // };           

 function validateForm(){
        clickedInfo.name = $("#name").val();
        clickedInfo.age = $("#age option:selected").text()  ;
        clickedInfo.gender = $("#gender option:selected").text();
        clickedInfo.characteristics = {
              basic: $("#basic").is(":checked"),
              active: $("#active").is(":checked"),
              grumpy: $("#grumpy").is(":checked"),
              diva: $("#diva").is(":checked")
        };
        if (clickedInfo.name == "") {
            window.alert("You need to type your dog's name!");
        } else if (clickedInfo.age == ""){
             window.alert("You need to type your dog's name!");
        } else{
            generatePage();
            collectInfo();
            createMeme();
        };
};        

        
            
    var clickedInfo = [];
    var message = "";

    function createMeme() {
        var fileInput = $("#file-input");
        var file = fileInput[0].files[0];

        ImageTools.resize(file, {
            width: 2048,
            height: 2048
        }, function(blob, hasResized) {
            var reader = new window.FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                var base64 = reader.result;

                var data = {
                    "type": "MEME",
                    "image": base64,
                    "text": message
                };

                $.ajax({
                    'data': JSON.stringify(data),
                    'url': 'https://mibvtyr870.execute-api.us-east-1.amazonaws.com/dev/',
                    'type': 'POST',
                    'dataType': 'json',
                    'contentType': "application/json; charset=utf-8",
                    'headers': {
                        'x-api-key': 'PwzgbUdjKv9oy2p6PBs32zD6qzAs74laRKRrlx1g'
                    },
                    'processData': false,
                    success: function(data) {
                        $("#image").show();
                        $("#image").attr("src", data.body.url);
                    },
                    failure: function(err) {
                        console.log(arguments);
                        console.log(err);
                    }
                });

            };
        });
    }

    function generatePage() {
        $("#intro-page").hide();
        $("body").css("background-color", "#b4e2f7");
    };

    function collectInfo() {
        clickedInfo.name = $("#name").val();
        clickedInfo.age = $("#age option:selected").text();
        clickedInfo.gender = $("#gender option:selected").text();
        clickedInfo.characteristics = {
              basic: $("#basic").is(":checked"),
              active: $("#active").is(":checked"),
              grumpy: $("#grumpy").is(":checked"),
              diva: $("#diva").is(":checked")
         };
         message += clickedInfo.name + ", " + clickedInfo.age + ", " + clickedInfo.gender  + ". ";
         collectCharacteristics();
    };

    function collectCharacteristics() {
        $.each(clickedInfo.characteristics, function (key, value) {
           if (value==true) {
                var characteristicArray = window[key + "Array"];
                var index = Math.floor(Math.random()*characteristicArray.length);
                var phrase = characteristicArray[index];
                message += phrase + " ";
            };
       });
    };
});

