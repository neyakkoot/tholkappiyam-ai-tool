const MozhimuthalRules = {
    check: function(word) {
        const firstChar = word[0];
        const base = getBaseConsonant(firstChar); 

        // 1. பிழைச் சோதனை
        if (/^வ[ுூொோௌ]/.test(word)) {
            return {
                title: "மொழிமுதல் ஆய்வு",
                isValid: false,
                description: "பிழை: 'வ'கரம் உ, ஊ, ஒ, ஓ ஆகிய உயிர்களுடன் மொழிக்கு முதலில் வராது. (மொழிமரபு நூற்பா 30)"
            };
        }
        if (/^[டறலளழண]/.test(word)) {
            return {
                title: "மொழிமுதல் ஆய்வு",
                isValid: false,
                description: "பிழை: ட, ற, ல, ள, ழ, ண ஆகிய மெய்கள் மொழிக்கு முதலில் வராது. (நூன்மரபு)"
            };
        }

        // 2. வெற்றிச் செய்தி
        return {
            title: "மொழிமுதல் ஆய்வு",
            isValid: true,
            description: `சரி: '${firstChar}' மொழிக்கு முதலில் வரலாம். (நூன்மரபு: அனுமதிக்கப்பட்ட முதலெழுத்து).`
        };
    }
};
