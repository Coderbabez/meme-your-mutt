$(document).ready(function() {
    var clickedInfo = [];
    var message = "";

    // Load data from S3.
    $.ajax({
        "url": "https://s3.amazonaws.com/meme-your-mutt/descriptions.json",
        "type": "GET",
        "dataType": "json",
        success: function(data) {
            console.log(data);
            // TODO: Save data to window.
        },
        failure: function(err) {
            console.log(err);
        }
    });

    $("#submit").on("click", function() {
        console.log("user submitted");
        validateForm();
    });

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
                    "data": JSON.stringify(data),
                    "url": "https://mibvtyr870.execute-api.us-east-1.amazonaws.com/dev/",
                    "type": "POST",
                    "dataType": "json",
                    "contentType": "application/json; charset=utf-8",
                    "headers": {
                        "x-api-key": "PwzgbUdjKv9oy2p6PBs32zD6qzAs74laRKRrlx1g"
                    },
                    "processData": false,
                    success: function(data) {
                        $("#image").show();
                        $("#image").attr("src", data.body.url);
                    },
                    failure: function(err) {
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
        // TODO: Rework collectCharacteristics functions to rely on the data saved on the widow.
        // PRO TIP: Use the debugger liberally.
        $.each(clickedInfo.characteristics, function (key, value) {
            if (value == true) {
                var characteristicArray = window[key + "Array"];
                var index = Math.floor(Math.random()*characteristicArray.length);
                var phrase = characteristicArray[index];
                message += phrase + " ";
            };
       });
    };
});

