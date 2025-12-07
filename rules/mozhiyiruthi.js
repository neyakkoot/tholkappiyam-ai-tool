const MozhiyiruthiRules = {
    check: function(word) {
        const lastChar = word.slice(-1);

        // பிழைச் சோதனை
        if (/[க்ஞ்ட்ண்த்ந்ப்ம்ய்ர்ல்வ்ழ்ள்ற்ன்]/.test(lastChar)) {
             if (/[க்ஞ்ட்ண்த்ந்ப்]/.test(lastChar)) { 
                 return {
                     title: "மொழியிறுதி ஆய்வு",
                     isValid: false,
                     description: "பிழை: வல்லின மெய்கள் (க், ச், த், ப்...) மொழிக்கு இறுதியில் வராது. குற்றியலுகரமாகவே வரும்."
                 };
             }
        }
        
        // வெற்றிச் செய்தி
        return {
            title: "மொழியிறுதி ஆய்வு",
            isValid: true,
            description: `சரி: '${lastChar}' மொழிக்கு இறுதியில் வரலாம். (தொல்காப்பியம்: உயிரீறுகள் மற்றும் அனுமதிக்கப்பட்ட மெய்கள்).`
        };
    }
};
