const API_BASE_URL = 'http://localhost:8080/api';

const state = {
    currentView: 'dashboard',
    stats: {
        totalRooms: 0,
        totalResidents: 0,
        totalComplaints: 0,
        totalPayments: 0
    },
    rooms: [],
    residents: []
};

// --- View Rendering Logic ---

async function renderDashboard() {
    try {
        const response = await fetch(`${API_BASE_URL}/stats`);
        const stats = await response.json();
        
        const container = document.getElementById('main-view-container');
        container.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-bed"></i></div>
                    <div class="stat-value">${stats.totalRooms}</div>
                    <div class="stat-label">Total Rooms</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-users"></i></div>
                    <div class="stat-value">${stats.totalResidents}</div>
                    <div class="stat-label">Total Residents</div>
                </div>
                <div class="stat-card" style="--primary: #f59e0b">
                    <div class="stat-icon" style="color: #f59e0b"><i class="fas fa-file-invoice-dollar"></i></div>
                    <div class="stat-value">${stats.totalPayments}</div>
                    <div class="stat-label">Payments Done</div>
                </div>
                <div class="stat-card" style="--primary: #ef4444">
                    <div class="stat-icon" style="color: #ef4444"><i class="fas fa-exclamation-triangle"></i></div>
                    <div class="stat-value">${stats.totalComplaints}</div>
                    <div class="stat-label">Active Complaints</div>
                </div>
            </div>
            
            <div class="data-card">
                <div class="card-header">
                    <h2 class="card-title">Recent Activity</h2>
                </div>
                <p style="color: var(--text-muted)">System is running smoothly. No new alerts.</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching stats:', error);
        document.getElementById('main-view-container').innerHTML = '<p>Error loading dashboard. Ensure backend is running.</p>';
    }
}

async function renderRooms() {
    try {
        const response = await fetch(`${API_BASE_URL}/rooms`);
        const rooms = await response.json();
        
        const container = document.getElementById('main-view-container');
        container.innerHTML = `
            <div class="data-card">
                <div class="card-header">
                    <h2 class="card-title">Room Inventory</h2>
                    <button class="btn-add">+ Add New Room</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Room No</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rooms.map(room => `
                            <tr>
                                <td>${room.roomNumber}</td>
                                <td>${room.type}</td>
                                <td>₹${room.price}</td>
                                <td><span class="badge-status ${room.isOccupied ? 'badge-occupied' : 'badge-available'}">${room.isOccupied ? 'Occupied' : 'Available'}</span></td>
                                <td><i class="fas fa-ellipsis-h" style="cursor:pointer"></i></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching rooms:', error);
    }
}

async function renderResidents() {
     // Placeholder similar to rooms
     document.getElementById('main-view-container').innerHTML = `<div class="data-card"><h2>Resident Management</h2><p>Feature coming soon...</p></div>`;
}

// --- Navigation Logic ---

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update active state
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Header
            viewTitle.innerText = view.charAt(0).toUpperCase() + view.slice(1);
            
            // Switch View
            switchView(view);
        });
    });
}

function switchView(view) {
    state.currentView = view;
    if (view === 'dashboard') renderDashboard();
    else if (view === 'rooms') renderRooms();
    else if (view === 'residents') renderResidents();
    else {
        document.getElementById('main-view-container').innerHTML = `<div class="data-card"><h2>${view}</h2><p>This module is under development.</p></div>`;
    }
}

// --- Initialize App ---

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderDashboard();
});
