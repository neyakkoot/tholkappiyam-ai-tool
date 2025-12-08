// --- TAB SWITCHING LOGIC ---
    function openTab(tabName) {
        // Hide all contents
        document.getElementById('grammar').style.display = 'none';
        document.getElementById('pronunciation').style.display = 'none';
        
        // Reset buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = '#555';
            btn.style.borderBottom = 'none';
        });

        // Show specific tab
        document.getElementById(tabName).style.display = 'block';
        
        // Highlight button (Simple logic for demo)
        // In a real app, use classes. Here we just ensure content visibility.
    }

    // --- PRONUNCIATION TUTOR LOGIC ---
    function loadPronunciation() {
        const key = document.getElementById('phonemeSelect').value;
        const box = document.getElementById('tutorBox');
        
        if (!key || !PirappiyalData[key]) {
            box.style.display = 'none';
            return;
        }

        const data = PirappiyalData[key];
        box.style.display = 'block';

        box.innerHTML = `
            <div class="pronunciation-card">
                <div class="letter-display">${data.char}</div>
                <div class="diagram-container">
                    ${data.svg}
                </div>
                <h3>${data.name}</h3>
                <div class="desc-text">${data.desc}</div>
                
                <div class="sutra-box">
                    <div class="sutra-title">தொல்காப்பிய விதி (AI Logic):</div>
                    <div class="sutra-text">"${data.sutra}"</div>
                </div>
            </div>
        `;
    }
