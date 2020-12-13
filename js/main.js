$(document).ready(function() {



    $(".milk-input").on("input", function() {

        var desiredMilkFat = $("#desiredMilkFat").val();
        var desiredMilkVolume = $("#desiredMilkVolume").val();

        var inputMilkFat1 = $("#inputMilkFat1").val();
        var inputMilkFat2 = $("#inputMilkFat2").val();

        if (desiredMilkFat && desiredMilkVolume && inputMilkFat1 && inputMilkFat2) {

            var inputMilkVolume1 = ((desiredMilkVolume * (desiredMilkFat - inputMilkFat2)) / (inputMilkFat1 - inputMilkFat2)).toFixed(2);

            var inputMilkVolume2 = (desiredMilkVolume - inputMilkVolume1).toFixed(2);


			$("#inputMilkVolume1Label").text("Volume of "+inputMilkFat1+"%");

			$("#inputMilkVolume2Label").text("Volume of "+inputMilkFat2+"%");

            $("#inputMilkVolume1").val(inputMilkVolume1);

            $("#inputMilkVolume2").val(inputMilkVolume2);
        }

    });
});