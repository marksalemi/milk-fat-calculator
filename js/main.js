var desiredMilkFat = 0.1;
var desiredMilkVolume;
var milkFat1 = 0.1;
var milkFat2 = 0.1;

$(document).ready(function() {});


$("#selectDesiredMilkFat").on("input", function() {
    desiredMilkFat = $("#selectDesiredMilkFat").val();
    $("#inputDesiredMilkFat").val("");

    if (desiredMilkFat == "other") {
        $("#divDesiredMilkFat").css('display', 'block');
        $("#inputDesiredMilkFat").focus();
    } else {
        $("#divDesiredMilkFat").css('display', 'none');
        desiredMilkFat = parseFloat(desiredMilkFat);
    }

    calculateMilkFat();
});

$("#inputDesiredMilkFat").on("input", function() {
    desiredMilkFat = parseFloat($("#inputDesiredMilkFat").val());
    $("#selectDesiredMilkFat").val("other").change();

    calculateMilkFat();
});


$("#inputDesiredMilkVolume").on("input", function() {

    desiredMilkVolume = parseFloat($("#inputDesiredMilkVolume").val());

    calculateMilkFat();
});


$("#selectMilkFat1").on("input", function() {
    milkFat1 = $("#selectMilkFat1").val();
    $("#inputMilkFat1").val("");

    if (milkFat1 == "other") {
        $("#divMilkFat1").css('display', 'block');
        $("#inputMilkFat1").focus();
    } else {
        $("#divMilkFat1").css('display', 'none');
        milkFat1 = parseFloat(milkFat1);
    }

    calculateMilkFat();
});

$("#inputMilkFat1").on("input", function() {
    milkFat1 = parseFloat($("#inputMilkFat1").val());
    $("#selectMilkFat1").val("other").change();

    calculateMilkFat();
});


$("#selectMilkFat2").on("input", function() {
    milkFat2 = $("#selectMilkFat2").val();
    $("#inputMilkFat2").val("");

    if (milkFat2 == "other") {
        $("#divMilkFat2").css('display', 'block');
        $("#inputMilkFat2").focus();
    } else {
        $("#divMilkFat2").css('display', 'none');
        milkFat2 = parseFloat(milkFat2);
    }

    calculateMilkFat();
});

$("#inputMilkFat2").on("input", function() {
    milkFat2 = parseFloat($("#inputMilkFat2").val());
    $("#selectMilkFat2").val("other").change();

    calculateMilkFat();
});


function calculateMilkFat() {

    var inputMilkVolume1
    var inputMilkVolume2
    var milkFat1Output;
    var milkFat2Output;

    if (desiredMilkFat>=0 && desiredMilkVolume>=0 && milkFat1>=0 && milkFat2>=0 && milkFat1 != milkFat2) {


        if ((milkFat1 <= desiredMilkFat && desiredMilkFat <= milkFat2) || (milkFat2 <= desiredMilkFat && desiredMilkFat <= milkFat1)) {

            inputMilkVolume1 = ((desiredMilkVolume * (desiredMilkFat - milkFat2)) / (milkFat1 - milkFat2)).toFixed(2);

            inputMilkVolume2 = (desiredMilkVolume - inputMilkVolume1).toFixed(2);



            milkFat1Output = "Volume of " + milkFat1 + "%";

            milkFat2Output = "Volume of " + milkFat2 + "%";
        } else {
            inputMilkVolume1 = "Impossible";
            inputMilkVolume2 = "Impossible";
        }

    } else {

        inputMilkVolume1 = "";
        inputMilkVolume2 = "";
        milkFat1Output = "Milk 1 Volume";
        milkFat2Output = "Milk 2 Volume";

    }

    $("#inputMilkVolume1Label").text(milkFat1Output);

    $("#inputMilkVolume2Label").text(milkFat2Output);

    $("#inputMilkVolume1").val(inputMilkVolume1);

    $("#inputMilkVolume2").val(inputMilkVolume2);

}