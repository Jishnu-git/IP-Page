$(document).ready(function () {
    const navHeight = $("#navbar").innerHeight();
    var overview = $("#Overview").offset().top - navHeight;
    var existing = $("#Existing").offset().top - navHeight;
    var goals = $("#Goals").offset().top - navHeight;
    var devs = $("#Devs").offset().top - navHeight;

    $(window).resize(function () { 
        overview = $("#Overview").offset().top - navHeight;
        existing = $("#Existing").offset().top - navHeight;
        goals = $("#Goals").offset().top - navHeight;
        devs = $("#Devs").offset().top - navHeight;

    });
    $(document).scroll(function () { 
        var scroll = $(this).scrollTop();
        // if (scroll >= overview - 2) {
        //     $("#navbar").removeClass("bg-black");
        //     $("#navbar").addClass("bg-green");
        // } else {
        //     $("#navbar").addClass("bg-black");
        //     $("#navbar").removeClass("bg-green");
        // }

        if (scroll >= overview - 2 && scroll < existing - 2) {
            $("#OverviewLi").removeClass("bg-trans");
            $("#OverviewLi").addClass("bg-cur");
            $("#OverviewBg").addClass("bg-green-topdown");
        } else {
            $("#OverviewLi").addClass("bg-trans");
            $("#OverviewLi").removeClass("bg-cur");
            $("#OverviewBg").removeClass("bg-green-topdown");
        }

        if (scroll >= existing - 2 && scroll < goals - 2) {
            $("#ExistingLi").removeClass("bg-trans");
            $("#ExistingLi").addClass("bg-cur");
            $("#ExistingBg").addClass("bg-green-topdown");
        } else {
            $("#ExistingLi").addClass("bg-trans");
            $("#ExistingLi").removeClass("bg-cur");
            $("#ExistingBg").removeClass("bg-green-topdown");
        }

        if (scroll >= goals - 2 && scroll < devs - 2) {
            $("#GoalsLi").removeClass("bg-trans");
            $("#GoalsLi").addClass("bg-cur");
            $("#GoalsBg").addClass("bg-green-topdown");
        } else {
            $("#GoalsLi").addClass("bg-trans");
            $("#GoalsLi").removeClass("bg-cur");
            $("#GoalsBg").removeClass("bg-green-topdown");
        }

        if (scroll >= devs - 2) {
            $("#DevsLi").removeClass("bg-trans");
            $("#DevsLi").addClass("bg-cur");
            $("#DevsBg").addClass("bg-green");
        } else {
            $("#DevsLi").addClass("bg-trans");
            $("#DevsLi").removeClass("bg-cur");
            $("#DevsBg").removeClass("bg-green");
        }
    });

    $("#OverviewLink").click(function (e) { 
        scrollTo(0, overview);
    });

    $("#ExistingLink").click(function (e) { 
        scrollTo(0, existing);
    });

    $("#GoalsLink").click(function (e) { 
        scrollTo(0, goals);
    });

    $("#DevsLink").click(function (e) { 
        scrollTo(0, devs);
    });
});