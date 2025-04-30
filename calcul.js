document.addEventListener('DOMContentLoaded', function() {
    // === Gestion des onglets ===
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabId = tab.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    // === Estimation ===
    document.getElementById('estimate-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const address = document.getElementById('property-address').value;
        const size = parseInt(document.getElementById('property-size').value);
        const type = document.getElementById('property-type').value;
        
        // Simulation d'estimation (remplacer par une API en réel)
        const pricePerSqm = {
            apartment: 6000,
            house: 4500,
            villa: 8000
        };
        
        const estimatedPrice = parseFloat(size) * pricePerSqm[type];
if (isNaN(estimatedPrice)) {
    alert("Erreur : Vérifiez la surface et le type de bien.");
    return;
}

const resultBox = document.getElementById('estimate-result');
resultBox.innerHTML = `
    <h3>CFA Estimation : <strong>${estimatedPrice.toLocaleString()} CFA</strong></h3>
    <p>Adresse : ${address}</p>
    <p>Surface : ${size} m² | Type : ${type}</p>
    <button id="save-estimate">💾 Sauvegarder</button>
`;
        
        document.getElementById('save-estimate').addEventListener('click', () => {
            alert('Estimation sauvegardée ! Nous vous contacterons.');
        });
    });

    // === Comparaison (exemple avec données statiques) ===
    const properties = [
        { id: 1, price: 25000000, size: 100, type: 'appartement', address: 'Abidjan' },
        { id: 2, price: 15000000, size: 100, type: 'appartement', address: 'Yamoussoukro' },
    ];
    
    function renderComparison() {
        const grid = document.getElementById('comparaison-grid');
        grid.innerHTML = properties.map(property => `
            <div class="property-card">
                <h4>${property.type} à ${property.address}</h4>
                <p>${property.size} m² | ${property.price.toLocaleString()} CFA</p>
                <p>${Math.round(property.price / property.size)} CFA/m²</p>
            </div>
        `).join('');
    }
    
    renderComparison();
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023'], // 4 éléments
            datasets: [{
                label: 'Prix moyen au m²',
                data: [5000, 5500, 6200, 6500], // 4 éléments
                borderColor: '#4CAF50',
                tension: 0.3
            }]
        },
        options: { 
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });
});
