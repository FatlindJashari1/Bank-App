document.addEventListener('DOMContentLoaded', () => {
// --- State Variables ---
const transactions = [
{ id: 1, description: 'Amazon Purchase', date: 'Oct 25, 2025', amount: -145.50, type: 'debit' },
{ id: 2, description: 'Salary Deposit', date: 'Oct 23, 2025', amount: 4500.00, type: 'credit' },
{ id: 3, description: 'Coffee Shop', date: 'Oct 23, 2025', amount: -4.99, type: 'debit' },
{ id: 4, description: 'Investment Transfer', date: 'Oct 20, 2025', amount: -500.00, type: 'debit' }
];

// --- DOM Elements ---
const transactionList = document.getElementById('transaction-list');
const navLinks = document.querySelectorAll('.nav-link');
const allViews = document.querySelectorAll('.view');
const viewTitle = document.getElementById('view-title');
const actionButtons = document.querySelectorAll('.action-btn');
const settingButtons = document.querySelectorAll('.setting-btn');
const logoutButtons = document.querySelectorAll('.logout');

// --- Core Functionality ---

function renderTransactions() {
transactionList.innerHTML = '';
transactions.forEach(tx => {
const listItem = document.createElement('li');
listItem.className = `transaction-item type-${tx.type}`;
const formattedAmount = `${tx.type === 'debit' ? '-' : '+'}$${Math.abs(tx.amount).toFixed(2)}`;

listItem.innerHTML = `
<div class="transaction-info">
<p class="transaction-description">${tx.description}</p>
<p class="transaction-date">${tx.date}</p>
</div>
<div class="transaction-amount">${formattedAmount}</div>
`;
transactionList.appendChild(listItem);
});
}

// --- View Routing / Navigation ---

function changeView(viewId) {
// 1. Hide all views
allViews.forEach(view => view.classList.remove('active'));

// 2. Show the requested view
const activeView = document.getElementById(`${viewId}-view`);
if (activeView) {
activeView.classList.add('active');
}

// 3. Update active link in sidebar
navLinks.forEach(link => link.classList.remove('active'));
const activeLink = document.querySelector(`.nav-link[data-view="${viewId}"]`);
if (activeLink) {
activeLink.classList.add('active');
}

// 4. Update Header Title
const titleMap = {
'dashboard': 'Welcome back, John!',
'settings': 'Account Settings',
'accounts': 'Your Accounts',
'payments': 'Payments & Transfers',
'investments': 'Investment Portfolio'
};
viewTitle.textContent = titleMap[viewId] || 'Digital Bank Dashboard';
}

// --- Simulated Functionality Handlers ---

function handleQuickAction(action) {
alert(`Simulating action: ${action.toUpperCase()}.\nIn a real app, this would open a dedicated form/modal.`);
}

function handleSettingAction(setting) {
alert(`Simulating setting: ${setting.toUpperCase()} modification.\nThis would lead to a dedicated configuration page.`);
}

function handleLogout() {
if (confirm("Are you sure you want to securely log out?")) {
// In a real application, this would clear cookies/session tokens
alert("Logout successful. Redirecting to login page...");
// window.location.href = "/login"; // Uncomment in a real app
}
}

// --- Event Listeners ---

// Navigation listener
navLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const viewId = e.currentTarget.getAttribute('data-view');
changeView(viewId);
});
});

// Quick Action listeners
actionButtons.forEach(button => {
button.addEventListener('click', (e) => {
const action = e.currentTarget.getAttribute('data-action');
handleQuickAction(action);
});
});

// Setting Button listeners
settingButtons.forEach(button => {
button.addEventListener('click', (e) => {
const setting = e.currentTarget.getAttribute('data-setting');
handleSettingAction(setting);
});
});

// Logout listeners
logoutButtons.forEach(button => {
button.addEventListener('click', handleLogout);
});


// Initial setup: Render transactions and ensure dashboard is active
renderTransactions();
changeView('dashboard');
});
