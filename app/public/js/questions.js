const questionsArr = [
    "I feel uncomfortable when I disagree with someone",
    "I would enjoy attending a large party",
    "I dislike being in competition with others",
    "I enjoy being the center of attention",
    "I am helpful to the people around me",
    "I have a rich fantasy life",
    "I avoid arguing, even when I disagree",
    "I am concerned for the welfare of elderly people",
    "I am determined to achieve success in life",
    "I like to spend my free time alone"
];

questionsArr.forEach((q, i) => {
    let html = ` 
    <div class="question">
        <h4>Question ${i + 1}</h4>
        <p>${q}</p>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="question${i + 1}-dropdown"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Answer
            </button>
            <div class="dropdown-menu" selection=0 aria-labelledby="question${i + 1}-dropdown">
                <button class="dropdown-item" selection=1>1-Strongly Disagree</button>
                <button class="dropdown-item" selection=2>2-Disagree</button>
                <button class="dropdown-item" selection=3>3-Neutral</button>
                <button class="dropdown-item" selection=4>4-Agree</button>
                <button class="dropdown-item" selection=5>5-Strongly Agree</button>
            </div>
        </div>
    </div>
    `
    $("#questions").append(html);
});