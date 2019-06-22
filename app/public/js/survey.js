
$(".dropdown-item").on("click", function () {
    const id = "#" + ($(this).parent().attr("aria-labelledby"));
    $(id).text($(this).text());
    $(this).parent().attr("selection", $(this).attr("selection"));
});

$("#submitBtn").on("click", () => {
    // check if all questions were answered
    const name = $("#name").val();

    let allQuestionsAnswered = true;
    let answers = [];

    for (let i = 0; i < $(".dropdown-menu").length; i++) {
        const element = $(".dropdown-menu")[i];
        const selection = $(element).attr("selection");
        if (selection === "0")
            return allQuestionsAnswered = false;
        answers.push(selection);
    }

    if (name === "" && !allQuestionsAnswered) {
        // raise exception Please fill out all the answers.
        return console.log()
    }

    // send post request to server
    $.post("/api/friends", {
        name,
        answers
    }, response => {
        // response data should contain the echo of the answers data sent
        console.log(response);
        $(".modal-title").text(response.result || "");
        $(".modal-body p").text(response.message || "");
        $(".modal").modal();
        // As well as the calculated best friend;
        // If the name already exist, respond with error.
    });
});

function randomEntry() {
    $.each($(".dropdown-menu"), function (index, dropdown) {
        $(dropdown).children("button")[Math.floor(Math.random() * 5)].click()
    });
}
