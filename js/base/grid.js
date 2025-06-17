
// FOUNDATIONS GRID VISUAL TEMPLATE ----------------------------
function updateMeasurements() {
    const viewportWidth = window.innerWidth;
    const container = document.querySelector('.grid-container');
    const containerWidth = container.offsetWidth;
    
    // Determine current breakpoint
    let currentBreakpoint = 'Small';
    if (viewportWidth >= 1024) {
        currentBreakpoint = 'Large';
    } else if (viewportWidth >= 640) {
        currentBreakpoint = 'Medium';
    }
    
    // Calculate single column width
    // Foundation uses 20px total gutter (10px on each side)
    const gutterWidth = 16;
    const singleColumnWidth = (containerWidth - (gutterWidth * 11)) / 12;
    
    // Update display
    document.getElementById('viewport-width').textContent = viewportWidth + 'px';
    document.getElementById('container-width').textContent = containerWidth + 'px';
    document.getElementById('current-breakpoint').textContent = currentBreakpoint;
    document.getElementById('single-column-width').textContent = Math.round(singleColumnWidth) + 'px';
    
    // Update individual cell measurements
    updateCellMeasurements();
    
    // Update twelve columns display
    updateTwelveColumns();
  }
  
  function updateCellMeasurements() {
    const cells = [
        { id: 'cell-1-width', element: document.querySelector('.cell.small-12.medium-6.large-4') },
        { id: 'cell-2-width', element: document.querySelectorAll('.cell.small-12.medium-6.large-4')[1] },
        { id: 'cell-3-width', element: document.querySelector('.cell.small-12.medium-12.large-4') },
        { id: 'sidebar-width', element: document.querySelector('.cell.small-12.medium-4.large-4') },
        { id: 'main-content-width', element: document.querySelector('.cell.small-12.medium-8.large-8:last-child') }
    ];
    
    cells.forEach(cell => {
        if (cell.element) {
            const width = cell.element.offsetWidth;
            const measurementElement = document.getElementById(cell.id);
            if (measurementElement) {
                measurementElement.textContent = width + 'px';
            }
        }
    });
  }
  
  function updateTwelveColumns() {
    const container = document.getElementById('twelve-columns');
    container.innerHTML = '';
    
    for (let i = 1; i <= 12; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell small-1 grid-cell';
        cell.innerHTML = `
            <div class="cell-label">${i}</div>
            <div class="cell-measurement">${Math.round(cell.offsetWidth || 0)}px</div>
        `;
        container.appendChild(cell);
    }
    
    // Update measurements after DOM insertion
    setTimeout(() => {
        const cells = container.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            const measurement = cell.querySelector('.cell-measurement');
            if (measurement) {
                measurement.textContent = cell.offsetWidth + 'px';
            }
        });
    }, 10);
  }
  
  // Initial measurement
  updateMeasurements();
  
  // Update on resize
  window.addEventListener('resize', function() {
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(updateMeasurements, 100);
  });
  
  // Update measurements periodically to catch any changes
  setInterval(updateMeasurements, 1000);