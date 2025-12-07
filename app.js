// Tab Switching
function openTab(tabName) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// ---------------------------------------------
// ஒருங்கிணைந்த ஆய்வு செயல்பாடு (Integrated Analysis)
// ---------------------------------------------
function analyzeWord() {
    const word = document.getElementById('wordInput').value.trim();
    const resultBox = document.getElementById('grammarResult');
    
    if (!word) { 
        resultBox.classList.add('hidden'); 
        return; 
    }

    resultBox.classList.remove('hidden', 'error', 'success');

    // 1. மொழிமுதல் சோதனை (Mozhimuthal Check)
    const startCheck = MozhimuthalRules.check(word);
    if (!startCheck.isValid) {
        showError(resultBox, startCheck.reason);
        return;
    }

    // 2. மொழியிறுதி சோதனை (Mozhiyiruthi Check)
    const endCheck = MozhiyiruthiRules.check(word);
    if (!endCheck.isValid) {
        showError(resultBox, endCheck.reason);
        return;
    }

    // 3. மெய்ம்மயக்கச் சோதனை (Meimayakkam Check)
    const clusterCheck = MeimayakkamRules.check(word);
    if (!clusterCheck.isValid) {
        showError(resultBox, clusterCheck.reason);
        return;
    }

    // எல்லாம் சரியாக இருந்தால்
    showSuccess(resultBox, `"${word}" - இச்சொல் தொல்காப்பிய இலக்கண விதிகளுக்கு உட்பட்டுள்ளது.`);
}

function showError(element, msg) {
    element.className = 'result-box error';
    element.innerHTML = `<strong>பிழை:</strong> ${msg}`;
}

function showSuccess(element, msg) {
    element.className = 'result-box success';
    element.innerHTML = `<strong>சரி:</strong> ${msg}`;
}

// ---------------------------------------------
// உச்சரிப்புப் பயிற்சியாளர் (Pronunciation Tutor)
// ---------------------------------------------
function loadPronunciation() {
    const key = document.getElementById('phonemeSelect').value;
    const resultBox = document.getElementById('pronunciationResult');
    
    if (!key || !PirappiyalData[key]) {
        resultBox.classList.add('hidden');
        return;
    }

    const data = PirappiyalData[key];
    resultBox.className = 'result-box';
    resultBox.classList.remove('hidden');

    resultBox.innerHTML = `
        <h3 style="text-align:center; color:#2980b9;">${data.letter}</h3>
        <div class="diagram-circle">
            <span>${data.imageText}</span>
        </div>
        <p><strong>விளக்கம்:</strong> ${data.instruction}</p>
        <span class="sutra">"${data.sutra}" - (${data.ref})</span>
    `;
}
