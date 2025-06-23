document.addEventListener('DOMContentLoaded', function () {
    const cameraMotions = {
        '': 'Pilih Pergerakan...',
        'Static Shot': 'Static Shot (Gambar Diam)',
        'Pan Left': 'Pan Left (Geser Kiri)',
        'Pan Right': 'Pan Right (Geser Kanan)',
        'Tilt Up': 'Tilt Up (Miring ke Atas)',
        'Tilt Down': 'Tilt Down (Miring ke Bawah)',
        '360 Orbit': '360 Orbit (Orbit 360 Derajat)',
        '3D Rotation': '3D Rotation (Rotasi 3D)',
        'Action Run': 'Action Run (Lari Aksi)',
        'Agent Reveal': 'Agent Reveal (Penampakan Agen)',
        'Angel Wings': 'Angel Wings (Sayap Malaikat)',
        'Arc Left': 'Arc Left (Busur Kiri)',
        'Arc Right': 'Arc Right (Busur Kanan)',
        'Bloom Mouth': 'Bloom Mouth (Mulut Mekar)',
        'Buckle Up': 'Buckle Up (Kencangkan Sabuk)',
        'Bullet Time': 'Bullet Time (Waktu Peluru)',
        'Car Chasing': 'Car Chasing (Kejar-kejaran Mobil)',
        'Car Explosion': 'Car Explosion (Ledakan Mobil)',
        'Car Grip': 'Car Grip (Pegangan Mobil)',
        'Crane Down': 'Crane Down (Derek Turun)',
        'Crane Up': 'Crane Up (Derek Naik)',
        'Crash Zoom In': 'Crash Zoom In (Zoom Cepat Masuk)',
        'Crash Zoom Out': 'Crash Zoom Out (Zoom Cepat Keluar)',
        'Datamosh': 'Datamosh (Datamosh)',
        'Diamond': 'Diamond (Berlian)',
        'Disintegration': 'Disintegration (Disintegrasi)',
        'Dolly In': 'Dolly In (Dolly Masuk)',
        'Dolly Left': 'Dolly Left (Dolly Kiri)',
        'Dolly Out': 'Dolly Out (Dolly Keluar)',
        'Dolly Zoom In': 'Dolly Zoom In (Dolly Zoom Masuk)',
        'Dolly Zoom Out': 'Dolly Zoom Out (Dolly Zoom Keluar)',
        'Double Dolly': 'Double Dolly (Dolly Ganda)',
        'Dutch Angle': 'Dutch Angle (Sudut Belanda)',
        'Duplicate': 'Duplicate (Duplikat)',
        'Eyes In': 'Eyes In (Mata Masuk)',
        'Face Punch': 'Face Punch (Pukulan Wajah)',
        'Fisheye': 'Fisheye (Mata Ikan)',
        'Floating Fish': 'Floating Fish (Ikan Melayang)',
        'Flood': 'Flood (Banjir)',
        'Floral Eyes': 'Floral Eyes (Mata Bunga)',
        'Flying': 'Flying (Terbang)',
        'Focus Change': 'Focus Change (Perubahan Fokus)',
        'FPV Drone': 'FPV Drone (Drone FPV)',
        'Freezing': 'Freezing (Membeku)',
        'Garden Bloom': 'Garden Bloom (Taman Mekar)',
        'Glam': 'Glam (Glamor)',
        'Glowshift': 'Glowshift (Pergeseran Cahaya)',
        'Handheld': 'Handheld (Genggam)',
        'Head Explosion': 'Head Explosion (Ledakan Kepala)',
        'Hyperlapse': 'Hyperlapse (Hyperlapse)',
        'Incline': 'Incline (Miring)',
        'Invisible': 'Invisible (Tak Terlihat)',
        'Jelly Drift': 'Jelly Drift (Drift Kenyal)',
        'Jib Down': 'Jib Down (Jib Turun)',
        'Jib Up': 'Jib Up (Jib Naik)',
        'Kiss': 'Kiss (Ciuman)',
        'Lazy Susan': 'Lazy Susan (Lazy Susan)',
        'Lens Crack': 'Lens Crack (Retak Lensa)',
        'Lens Flare': 'Lens Flare (Suar Lensa)',
        'Levitation': 'Levitation (Levitasi)',
        'Low Shutter': 'Low Shutter (Rana Lambat)',
        'Medusa Gorgona': 'Medusa Gorgona (Medusa Gorgon)',
        'Melting': 'Melting (Meleleh)',
        'Morphskin': 'Morphskin (Kulit Berubah)',
        'Mouth In': 'Mouth In (Mulut Masuk)',
        'Push To Glass': 'Push To Glass (Dorong ke Kaca)',
        'Robo Arm': 'Robo Arm (Lengan Robot)',
        'Roll Transition': 'Roll Transition (Transisi Gulung)',
        'Sand Storm': 'Sand Storm (Badai Pasir)',
        'Set on Fire': 'Set on Fire (Terbakar)',
        'Skin Surge': 'Skin Surge (Lonjakan Kulit)',
        'Snorricam': 'Snorricam (Snorricam)',
        'Soul Jump': 'Soul Jump (Lompatan Jiwa)',
        'Static': 'Static (Statis)',
        'Super Dolly In': 'Super Dolly In (Super Dolly Masuk)',
        'Super Dolly Out': 'Super Dolly Out (Super Dolly Keluar)',
        'Tentacles': 'Tentacles (Tentakel)',
        'Thunder God': 'Thunder God (Dewa Petir)',
        'Timelapse Human': 'Timelapse Human (Timelapse Manusia)',
        'Turning Metal': 'Turning Metal (Berubah Menjadi Logam)',
        'Whip Pan': 'Whip Pan (Pan Cepat)',
        'Wiggle': 'Wiggle (Goyangan)',
        'Wind to Face': 'Wind to Face (Angin ke Wajah)',
        'YoYo Zoom': 'YoYo Zoom (Zoom YoYo)',
        'Zoom In': 'Zoom In (Perbesar)',
        'Zoom Out': 'Zoom Out (Perkecil)'
    };

    const cameraSelect = document.getElementById('kamera');
    for (const key in cameraMotions) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cameraMotions[key];
        cameraSelect.appendChild(option);
    }

    const form = document.getElementById('prompt-form');
    const generateBtn = document.getElementById('generate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const hasilPrompt = document.getElementById('hasil-prompt');
    const promptIndonesia = document.getElementById('prompt-indonesia');
    const promptInggris = document.getElementById('prompt-inggris');

    resetBtn.addEventListener('click', () => {
        hasilPrompt.classList.add('hidden');
    });

    generateBtn.addEventListener('click', () => {
        const judul = document.getElementById('judul').value;
        const deskripsiKarakter = document.getElementById('deskripsi-karakter').value;
        const suaraKarakter = document.getElementById('suara-karakter').value;
        const aksiKarakter = document.getElementById('aksi-karakter').value;
        const ekspresiKarakter = document.getElementById('ekspresi-karakter').value;
        const latar = document.getElementById('latar').value;
        const visualTambahan = document.getElementById('visual-tambahan').value;
        const kamera = document.getElementById('kamera').value;
        const suasana = document.getElementById('suasana').value;
        const suaraLingkungan = document.getElementById('suara-lingkungan').value;
        const dialog = document.getElementById('dialog').value;
        const negativePrompt = document.getElementById('negative-prompt').value;
        
        // --- Generate Indonesian Prompt ---
        let promptID = `**Judul Scene:** ${judul}\n\n`;
        promptID += `**Karakter Utama:**\nSeorang karakter bernama [NAMA KARAKTER], dideskripsikan sebagai berikut: ${deskripsiKarakter}\n\n`;
        promptID += `**Detail Suara Karakter:**\nKarakter ini memiliki suara yang khas: ${suaraKarakter}\n\n`;
        promptID += `**Scene:**\n`;
        promptID += `Video dimulai dengan menampilkan karakter yang sedang ${aksiKarakter}. `;
        promptID += `Ekspresi wajahnya menunjukkan ${ekspresiKarakter}. `;
        promptID += `Latar tempat adalah ${latar}. `;
        promptID += `Suasana keseluruhan terasa ${suasana}. `;
        promptID += `Secara visual, scene ini memiliki detail sebagai berikut: ${visualTambahan}. \n\n`;
        
        if (kamera) {
            promptID += `**Gerakan Kamera:**\nMenggunakan gerakan kamera: ${kamera} untuk menambah dinamika pada scene.\n\n`;
        }

        promptID += `**Audio:**\nSuara lingkungan yang dominan adalah ${suaraLingkungan}. `;
        if (dialog) {
            promptID += `Karakter kemudian mengucapkan dialog berikut dengan jelas dalam Bahasa Indonesia: "${dialog}". Pastikan lip-sync sesuai dan natural.\n\n`;
        }

        promptID += `**Negative Prompt:**\n${negativePrompt}`;

        promptIndonesia.value = promptID;


        // --- Generate English Prompt (with Indonesian Dialog) ---
        let promptEN = `**Scene Title:** ${judul}\n\n`;
        promptEN += `**Main Character:**\nA character named [CHARACTER NAME], described as follows: ${deskripsiKarakter}\n\n`;
        promptEN += `**Character Voice Details:**\nThis character has a distinctive voice: ${suaraKarakter}\n\n`;
        promptEN += `**Scene:**\n`;
        promptEN += `The video opens showing the character who is ${aksiKarakter}. `;
        promptEN += `Their facial expression shows ${ekspresiKarakter}. `;
        promptEN += `The setting is ${latar}. `;
        promptEN += `The overall atmosphere feels ${suasana}. `;
        promptEN += `Visually, the scene has the following details: ${visualTambahan}.\n\n`;

        if (kamera) {
            promptEN += `**Camera Movement:**\nUsing a camera movement: ${kamera} to add dynamics to the scene.\n\n`;
        }
        
        promptEN += `**Audio:**\nThe dominant ambient sound is ${suaraLingkungan}. `;
        if (dialog) {
            promptEN += `The character then says the following dialogue clearly in Indonesian: "${dialog}". Ensure the lip-sync is accurate and natural.\n\n`;
        }

        promptEN += `**Negative Prompt:**\n${negativePrompt}`;
        
        promptInggris.value = promptEN;

        hasilPrompt.classList.remove('hidden');
    });
});
