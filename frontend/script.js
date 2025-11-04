const loadBtn = document.getElementById('loadBtn');
const eqBody = document.getElementById('eqBody');

loadBtn.addEventListener('click', async () => {
  eqBody.innerHTML = '<tr><td colspan="4">Loading data...</td></tr>';

  try {
    const res = await fetch('/api/earthquakes');
    const data = await res.json();

    if (!data.features || data.features.length === 0) {
      eqBody.innerHTML = '<tr><td colspan="4">No data found.</td></tr>';
      return;
    }

    eqBody.innerHTML = ''; 
    data.features.forEach(eq => {
      const { place, mag, time } = eq.properties;
      const [lon, lat] = eq.geometry.coordinates;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${place}</td>
        <td>${mag}</td>
        <td>${new Date(time).toLocaleString()}</td>
        <td>${lat.toFixed(2)}, ${lon.toFixed(2)}</td>
      `;
      eqBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    eqBody.innerHTML = '<tr><td colspan="4">Failed to load data.</td></tr>';
  }
});
