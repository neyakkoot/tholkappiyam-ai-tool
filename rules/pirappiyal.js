const PirappiyalData = {
    "zh": {
        char: "ழ்",
        name: "சிறப்பு ழகரம் (Retroflex Approximant)",
        sutra: "நுனிநா அணரி அண்ணம் வருடல்... (பிறப்பியல் 13)",
        desc: "<strong>விளக்கம்:</strong> நாக்கின் நுனியை மேல்நோக்கி நன்கு வளைத்து (அணரி), மேல்வாயின் (அண்ணத்தின்) நடுப்பகுதியைத் தொடாமல் வருட வேண்டும்.",
        // நாக்கு வளைந்து அண்ணத்தை வருடும் SVG வரைபடம்
        svg: `<svg viewBox="0 0 100 100" class="tongue-diagram">
                <path d="M20,80 Q50,80 50,50 T60,20" fill="none" stroke="#e74c3c" stroke-width="5" stroke-linecap="round"/>
                <path d="M10,10 Q50,5 90,10" fill="none" stroke="#333" stroke-width="3" /> <circle cx="60" cy="20" r="3" fill="#e74c3c" /> </svg>`
    },
    "L": {
        char: "ள்",
        name: "ளகரம் (Retroflex Lateral)",
        sutra: "நா விளிம்பு வீங்கி அண்ணம் வருட... (பிறப்பியல் 14)",
        desc: "<strong>விளக்கம்:</strong> நாக்கின் இரு ஓரங்களும் தடித்து (வீங்கி), மேல்வாயை (அண்ணத்தை) வருட வேண்டும்.",
        svg: `<svg viewBox="0 0 100 100" class="tongue-diagram">
                <path d="M20,80 Q40,60 55,30" fill="none" stroke="#e74c3c" stroke-width="8" stroke-linecap="round"/> <path d="M10,10 Q50,5 90,10" fill="none" stroke="#333" stroke-width="3" />
                <circle cx="55" cy="30" r="3" fill="#e74c3c" />
              </svg>`
    },
    "R": {
        char: "ற",
        name: "வல்லின றகரம் (Alveolar Stop)",
        sutra: "நுனிநா அணரி அண்ணம் ஒற்ற... (பிறப்பியல் 13)",
        desc: "<strong>விளக்கம்:</strong> நாக்கின் நுனியை வளைத்து, மேல்வாயை (அண்ணத்தை) உறுதியாகத் தொட (ஒற்ற) வேண்டும்.",
        svg: `<svg viewBox="0 0 100 100" class="tongue-diagram">
                <path d="M20,80 Q50,50 60,15" fill="none" stroke="#e74c3c" stroke-width="5" stroke-linecap="round"/>
                <path d="M10,10 Q50,5 90,10" fill="none" stroke="#333" stroke-width="3" />
                <rect x="58" y="12" width="5" height="5" fill="#e74c3c" /> </svg>`
    },
    "n_group": {
        char: "ண vs ன",
        name: "ணகர / னகர வேறுபாடு",
        sutra: "ணகர னகரம்... (பிறப்பியல் 11)",
        desc: "<strong>விளக்கம்:</strong> 'ண' - நாக்கு வளைந்து அண்ணத்தைத் தொட வேண்டும்.<br>'ன' - நாக்கு பல்லின் அடியைத் தொட வேண்டும்.",
        svg: `<svg viewBox="0 0 200 100" class="tongue-diagram">
                <path d="M40,80 Q60,50 70,20" fill="none" stroke="#e74c3c" stroke-width="4" />
                <text x="60" y="90" font-size="12">ண (அண்ணம்)</text>
                <path d="M140,80 Q150,50 180,20" fill="none" stroke="#3498db" stroke-width="4" />
                <text x="160" y="90" font-size="12">ன (பல்)</text>
              </svg>`
    }
};
