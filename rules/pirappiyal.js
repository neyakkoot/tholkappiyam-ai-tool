/**
 * Tholkappiyam - Pirappiyal (Articulatory Phonetics) Rules
 * * இந்தத் தொகுப்பு தொல்காப்பியத்தின் பிறப்பியல் நூற்பாக்களை அடிப்படையாகக் கொண்டது.
 * ஒவ்வொரு எழுத்தும் மனித உடலில் எங்கு, எப்படிப் பிறக்கிறது என்பதை இது விளக்குகிறது.
 * * Data Structure Designed for:
 * 1. Interactive Highlighting (e.g., lighting up 'Lips' on a diagram)
 * 2. Simple Explanations for Students
 * 3. Mapping original Sutras to letters
 */

export const pirappiyalRules = [
    {
        id: "intro_mechanism",
        sutra_number: 1,
        title: "ஒலி பிறக்கும் முறை",
        description: "உந்தியில் (Navel) தோன்றும் காற்று, தலை, மிடறு (Throat), நெஞ்சு ஆகிய இடங்களில் நிலைபெற்று, பல், இதழ், நாக்கு, மூக்கு, அண்ணம் (Palate) ஆகிய உறுப்புகளின் முயற்சியால் ஒலிகள் பிறக்கின்றன.",
        organs: ["navel", "chest", "throat", "head", "teeth", "lips", "tongue", "nose", "palate"],
        is_general_rule: true
    },
    {
        id: "vowels_general",
        sutra_number: 2,
        letters: ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"],
        category: "uyir",
        explanation: "உயிர் எழுத்துக்கள் 12-ம் மிடற்றில் (தொண்டையில்) இருந்து எழும் காற்றினால் இசைக்கின்றன.",
        action: "Air flow from throat",
        organs: ["throat"],
        visual_cue: "throat_vibration"
    },
    {
        id: "vowels_a_aa",
        sutra_number: 3,
        letters: ["அ", "ஆ"],
        category: "uyir",
        explanation: "வாயை நன்றாகத் திறத்தலால் (அங்காந்து இயலுதல்) இவை பிறக்கும்.",
        action: "Open mouth wide",
        organs: ["mouth", "jaw"],
        visual_cue: "mouth_open_wide"
    },
    {
        id: "vowels_i_series",
        sutra_number: 4,
        letters: ["இ", "ஈ", "எ", "ஏ", "ஐ"],
        category: "uyir",
        explanation: "வாயைத் திறப்பதோடு, நாக்கின் விளிம்புகள் மேல்வாய் பற்களைத் தழுவ இவை பிறக்கும்.",
        action: "Tongue edges touching upper teeth",
        organs: ["mouth", "tongue_edges", "upper_teeth"],
        visual_cue: "tongue_spread_teeth"
    },
    {
        id: "vowels_u_series",
        sutra_number: 5,
        letters: ["உ", "ஊ", "ஒ", "ஓ", "ஔ"],
        category: "uyir",
        explanation: "இதழ்களைக் குவிப்பதால் இவை பிறக்கும்.",
        action: "Rounding the lips",
        organs: ["lips"],
        visual_cue: "lips_rounded"
    },
    {
        id: "consonants_k_ng",
        sutra_number: 7,
        letters: ["க்", "ங்"],
        category: "mei",
        explanation: "நாக்கின் அடிப்பகுதி, மேல்வாய் அண்ணத்தின் அடிப்பகுதியைத் பொருந்துவதால் பிறக்கும்.",
        action: "Root tongue touches soft palate",
        organs: ["root_tongue", "soft_palate"],
        visual_cue: "back_tongue_lift"
    },
    {
        id: "consonants_c_nj",
        sutra_number: 8,
        letters: ["ச்", "ஞ்"],
        category: "mei",
        explanation: "நாக்கின் இடைப்பகுதி, மேல்வாய் அண்ணத்தின் இடைப்பகுதியைத் பொருந்துவதால் பிறக்கும்.",
        action: "Middle tongue touches middle palate",
        organs: ["middle_tongue", "middle_palate"],
        visual_cue: "mid_tongue_lift"
    },
    {
        id: "consonants_t_n",
        sutra_number: 9,
        letters: ["ட்", "ண்"],
        category: "mei",
        explanation: "நாக்கின் நுனி, மேல்வாய் அண்ணத்தின் நுனியைத் பொருந்துவதால் பிறக்கும்.",
        action: "Tip tongue touches hard palate",
        organs: ["tip_tongue", "hard_palate"],
        visual_cue: "tip_tongue_retroflex"
    },
    {
        id: "consonants_th_n",
        sutra_number: 11,
        letters: ["த்", "ந்"],
        category: "mei",
        explanation: "மேல்வாய் பற்களின் அடிப்பகுதியை, நாக்கின் நுனி பரந்து ஒற்றிக்கொள்வதால் (தொடுவதால்) பிறக்கும்.",
        action: "Spread tongue tip touches upper teeth base",
        organs: ["tip_tongue", "upper_teeth_base"],
        visual_cue: "tongue_touch_teeth"
    },
    {
        id: "consonants_r_n_alveolar",
        sutra_number: 12,
        letters: ["ற்", "ன்"],
        category: "mei",
        explanation: "நாக்கின் நுனி, மேல்வாய் அண்ணத்தை நன்கு ஒற்றிக்கொள்வதால் (பொருந்துவதால்) பிறக்கும்.",
        action: "Tip tongue presses alveolar ridge",
        organs: ["tip_tongue", "alveolar_ridge"],
        visual_cue: "tongue_press_palate"
    },
    {
        id: "consonants_r_zh",
        sutra_number: 13,
        letters: ["ர்", "ழ்"],
        category: "mei",
        explanation: "நாக்கின் நுனி மேல்நோக்கிச் சென்று அண்ணத்தைத் தடவுவதால் (வருடுவதால்) பிறக்கும்.",
        action: "Tip tongue strokes the palate",
        organs: ["tip_tongue", "hard_palate"],
        visual_cue: "tongue_stroke"
    },
    {
        id: "consonants_l_L",
        sutra_number: 14,
        letters: ["ல்", "ள்"],
        category: "mei",
        explanation: "நாக்கின் ஓரங்கள் தடித்து (வீங்கி), மேல்வாய் பற்களின் அடியையோ (ல்) அல்லது அண்ணத்தையோ (ள்) ஒற்றுவதாலும் வருடுவதாலும் பிறக்கும்.",
        action: "Sides of tongue swell and touch palate/teeth",
        organs: ["tongue_sides", "upper_teeth_base", "palate"],
        visual_cue: "lateral_airflow"
    },
    {
        id: "consonants_p_m",
        sutra_number: 15,
        letters: ["ப்", "ம்"],
        category: "mei",
        explanation: "மேல் இதழும் கீழ் இதழும் ஒன்றோடொன்று இயைந்து (பொருந்தி) ஒட்டும்போது பிறக்கும்.",
        action: "Lips closing together",
        organs: ["upper_lip", "lower_lip"],
        visual_cue: "lips_closed"
    },
    {
        id: "consonants_v",
        sutra_number: 16,
        letters: ["வ்"],
        category: "mei",
        explanation: "மேல்வாய் பற்கள், கீழ் உதட்டைக் கவ்வுவதனால் (பொருந்துவதால்) பிறக்கும்.",
        action: "Upper teeth touch lower lip",
        organs: ["upper_teeth", "lower_lip"],
        visual_cue: "teeth_on_lip"
    },
    {
        id: "consonants_y",
        sutra_number: 17,
        letters: ["ய்"],
        category: "mei",
        explanation: "மிடற்றில் எழும் காற்று, அண்ணத்தை அடைந்து வெளிப்படும்போது இது பிறக்கும்.",
        action: "Air flows over palate",
        organs: ["throat", "palate"],
        visual_cue: "palatal_glide"
    },
    {
        id: "nasals_special",
        sutra_number: 18,
        letters: ["ங்", "ஞ்", "ண்", "ந்", "ம்", "ன்"],
        category: "mei_nasal",
        explanation: "இந்த மெல்லின எழுத்துக்கள் ஆறும், தமக்குரிய இடங்களுடன் 'மூக்கின்' காற்றையும் சேர்த்துக்கொண்டு பிறக்கும்.",
        action: "Air flows through nose",
        organs: ["nose"],
        visual_cue: "nasal_airflow"
    },
    {
        id: "dependents",
        sutra_number: 19,
        letters: ["ஃ"],
        category: "sarbu",
        explanation: "சார்பெழுத்துக்கள் (ஆய்தம் போன்றவை) தமக்குரிய முதன் எழுத்துக்களின் இடத்தைச் சார்ந்து பிறக்கும்.",
        action: "Depends on primary letter context",
        organs: ["context_dependent"],
        visual_cue: "context_marker"
    }
];

// Helper function to find origin of a specific letter
export function getBirthDetails(char) {
    // Handle Meyyezhuthu with pulli (dot) or without
    const cleanChar = char.length > 1 ? char : (char + "்"); 
    
    // Check direct matches first
    const rule = pirappiyalRules.find(r => r.letters && (r.letters.includes(char) || r.letters.includes(cleanChar)));
    
    if (rule) return rule;

    // Special check for Nasals (Needs both position rule AND nasal rule)
    // This is logic you can implement in your frontend
    return null;
}
