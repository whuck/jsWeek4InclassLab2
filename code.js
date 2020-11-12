$(document).ready(function () {

    $(".form-control").change(function(){
        var output = $("#message");
        $(".schedule").hide();
        switch(this.id) {
            case "mon":
                output.text('Monday:');
                $("#monSchedule").show();
                break;
            case "tue":
                output.text('Tuesday:');
                $("#tueSchedule").show();
                break;
            case "wed":
                output.text('Wednesday:');
                $("#wedSchedule").show();
                break;
            case "thur":
                output.text('Thursday:');
                $("#thurSchedule").show();
                break;
            case "fri":
                output.text('Friday:');
                $("#friSchedule").show();
                break;
            case "sat":
                output.text('Saturday:');
                $("#satSchedule").show();
                break;
            case "sun":
                output.text('Sunday:');
                $("#sunSchedule").show();
                break;
        }
    });
});