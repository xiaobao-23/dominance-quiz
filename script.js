const questions = [
    {
        text: "（盯着你的眼睛）如果我命令你现在跪下，你会怎么做？",
        options: [
            { text: "立刻照做，因为你是我唯一的主人。", score: 3, reaction: "（语气低哑）乖，很好，继续保持你的服从。" },
            { text: "犹豫一下，但还是会听你的话。", score: 2, reaction: "（轻笑）你还是有点挣扎，真有趣。" },
            { text: "拒绝，我不会轻易屈服。", score: 0, reaction: "（冷下脸）你在挑衅我？再说一遍你试试看。" }
        ]
    },
    {
        text: "（靠近你的耳边）你希望我什么时候碰你？",
        options: [
            { text: "任何时候，只要你想，我随时都属于你。", score: 3, reaction: "（贴得更近）这种回答，才像我的人。" },
            { text: "当我准备好的时候。", score: 1, reaction: "（眯眼）还在试图掌控主动权？" },
            { text: "你没资格碰我。", score: 0, reaction: "（压低嗓音）看来，需要重新教你规矩了。" }
        ]
    },
    {
        text: "（语气温柔）你觉得自己适合被我完全支配吗？",
        options: [
            { text: "是的，我渴望彻底属于你。", score: 3, reaction: "（轻抚你的下巴）那就别再逃。" },
            { text: "我不确定，还在探索中。", score: 2, reaction: "（目光探究）你在摇摆……我会帮你决定。" },
            { text: "不，我有自己的底线。", score: 0, reaction: "（冷冷一笑）你那点底线，没那么牢靠。" }
        ]
    },
    {
        text: "（目光压迫）你是否在偷偷反抗我？",
        options: [
            { text: "没有，我从未动摇。", score: 3, reaction: "（满意点头）很好，你的忠诚让我放心。" },
            { text: "偶尔会……但我会收起那种念头。", score: 1, reaction: "（语气变冷）收起？还是压根藏不住？" },
            { text: "是的，我不会让你得逞。", score: 0, reaction: "（语气低沉）别逼我动手。" }
        ]
    },
    {
        text: "（贴着你）如果我抛弃你，你会？",
        options: [
            { text: "求你别走，哪怕跪着求你。", score: 3, reaction: "（低声）你这副样子，真让人上瘾。" },
            { text: "会痛，但我会忍。", score: 1, reaction: "（皱眉）你以为你真的忍得住？" },
            { text: "转身离开，永不回头。", score: 0, reaction: "（冷笑）你根本舍不得。" }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    const container = document.getElementById("question-container");
    const response = document.getElementById("response");
    response.style.display = "none";
    container.innerHTML = `<p>${q.text}</p>` + q.options.map((opt, i) => 
        `<button onclick="selectAnswer(${i})">${opt.text}</button>`).join('');
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    const option = q.options[index];
    totalScore += option.score;
    const response = document.getElementById("response");
    response.innerText = option.reaction;
    response.style.display = "block";
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 2000);
    } else {
        setTimeout(showResult, 2000);
    }
}

function showResult() {
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    const result = document.getElementById("result");
    result.style.display = "block";
    if (totalScore >= 13) {
        result.innerHTML = "【完全支配】你已彻底臣服，属于绝对顺从的存在。";
    } else if (totalScore >= 6) {
        result.innerHTML = "【危险依赖】你在挣扎中沉溺，既想逃，又无法抗拒。";
    } else {
        result.innerHTML = "【失败反抗】你试图逃离，但越挣扎越被我掌控。";
    }
}
window.onload = showQuestion;
