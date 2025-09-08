// Application Data
const appData = {
  schools: {
    "school1": "CoE Barwani",
    "school2": "CoE Cuttak", 
    "school3": "CoE Mahisagar",
    "school4": "CoE Bundi",
    "school5": "JNV Bharuch",
    "school6": "EMRS Bhopal"
  },
  subjects: ["physics", "chemistry", "mathematics", "biology"],
  grades: [11, 12],
  curriculum: {
    "physics": {
      "11": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles and Rotational Motion", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
      "12": ["Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics and Optical Instruments", "Wave Optics", "Dual Nature of Radiation and Matter", "Atoms", "Nuclei", "Semiconductor Electronics", "Communication Systems"]
    },
    "chemistry": {
      "11": ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding and Molecular Structure", "States of Matter", "Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "The s-Block Elements", "The p-Block Elements", "Organic Chemistry", "Hydrocarbons", "Environmental Chemistry"],
      "12": ["The Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "General Principles of Metallurgy", "The p-Block Elements", "The d-Block and f-Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Organic Compounds Containing Nitrogen", "Biomolecules", "Polymers", "Chemistry in Everyday Life"]
    },
    "mathematics": {
      "11": ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction", "Complex Numbers and Quadratic Equations", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to Three Dimensional Geometry", "Limits and Derivatives", "Mathematical Reasoning", "Statistics", "Probability"],
      "12": ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Application of Derivatives", "Integrals", "Application of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"]
    },
    "biology": {
      "11": ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell: The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division", "Transport in Plants", "Mineral Nutrition", "Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development", "Digestion and Absorption", "Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination", "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration"],
      "12": ["Reproduction in Organisms", "Sexual Reproduction in Flowering Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Strategies for Enhancement in Food Production", "Microbes in Human Welfare", "Biotechnology: Principles and Processes", "Biotechnology and its Applications", "Organisms and Populations", "Ecosystem", "Biodiversity and Conservation", "Environmental Issues"]
    }
  },
  teachers: {
    "AF464": { "name": "Dr. Rajesh Kumar", "school": "school1", "subject": "physics", "email": "rajesh@coebarwani.edu", "phone": "+91 9876543210", "dob": "1980-05-15" },
    "AF248": { "name": "Prof. Priya Sharma", "school": "school1", "subject": "chemistry", "email": "priya@coebarwani.edu", "phone": "+91 9876543211", "dob": "1985-08-22" },
    "AF842": { "name": "Mr. Amit Singh", "school": "school1", "subject": "mathematics", "email": "amit@coebarwani.edu", "phone": "+91 9876543212", "dob": "1982-12-10" },
    "AF832": { "name": "Ms. Ritu Agarwal", "school": "school2", "subject": "chemistry", "email": "ritu@coecuttak.edu", "phone": "+91 9876543215", "dob": "1983-07-12" },
    "AF459": { "name": "Dr. Vikram Joshi", "school": "school2", "subject": "physics", "email": "vikram@coecuttak.edu", "phone": "+91 9876543214", "dob": "1981-09-25" },
    "admin": { "name": "System Administrator", "school": "all", "subject": "all", "email": "admin@schools.edu", "phone": "+91 9999999999", "dob": "1975-01-01" }
  }
};

// Global State
let currentUser = null;
let currentGrade = 11;
let currentModalChapter = null;
let chapterProgress = {};
let chatMessages = [];
let currentEditingTeacher = null;
let confirmCallback = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeBackgroundAnimations();
    initializeEventListeners();
    loadStoredData();
});

// Background Animations
function initializeBackgroundAnimations() {
    createParticles();
    createFloatingShapes();
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function createFloatingShapes() {
    const shapesContainer = document.getElementById('floatingShapes');
    if (!shapesContainer) return;
    
    const shapeCount = 20;
    const shapes = ['circle', 'triangle', 'square'];
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        shape.className = `floating-shape ${shapeType}`;
        
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDelay = `${Math.random() * 30}s`;
        
        shapesContainer.appendChild(shape);
    }
}

// Event Listeners
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleTeacherLogin);
    }
    
    // Admin login button  
    const adminBtn = document.getElementById('adminLoginBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleAdminLogin();
        });
    }
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(e.target.dataset.section);
        });
    });
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Grade selector
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchGrade(parseInt(e.target.dataset.grade));
        });
    });
    
    // Chapter modal handlers
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const saveChapterBtn = document.getElementById('saveChapterBtn');
    
    if (closeModal) closeModal.addEventListener('click', closeChapterModal);
    if (cancelModal) cancelModal.addEventListener('click', closeChapterModal);
    if (saveChapterBtn) saveChapterBtn.addEventListener('click', saveChapterProgress);
    
    // Profile handlers
    const photoUpload = document.getElementById('photoUpload');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (photoUpload) photoUpload.addEventListener('change', handlePhotoUpload);
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);
    
    // Chat functionality
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');
    
    if (sendMessageBtn) sendMessageBtn.addEventListener('click', sendMessage);
    if (messageInput) {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Admin functionality
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchAdminTab(e.target.dataset.tab);
        });
    });
    
    const addChapterBtn = document.getElementById('addChapterBtn');
    if (addChapterBtn) addChapterBtn.addEventListener('click', addNewChapter);
    
    // Admin subject/grade change handlers
    const adminSubject = document.getElementById('adminSubject');
    const adminGrade = document.getElementById('adminGrade');
    
    if (adminSubject) adminSubject.addEventListener('change', loadAdminChapters);
    if (adminGrade) adminGrade.addEventListener('change', loadAdminChapters);

    // Teacher management handlers
    const addNewTeacherBtn = document.getElementById('addNewTeacherBtn');
    if (addNewTeacherBtn) {
        addNewTeacherBtn.addEventListener('click', () => openTeacherModal());
    }

    // Teacher modal handlers
    const closeTeacherModal = document.getElementById('closeTeacherModal');
    const cancelTeacherModal = document.getElementById('cancelTeacherModal');
    const saveTeacherBtn = document.getElementById('saveTeacherBtn');

    if (closeTeacherModal) closeTeacherModal.addEventListener('click', closeTeacherModalHandler);
    if (cancelTeacherModal) cancelTeacherModal.addEventListener('click', closeTeacherModalHandler);
    if (saveTeacherBtn) saveTeacherBtn.addEventListener('click', saveTeacher);

    // Confirmation modal handlers
    const closeConfirmModal = document.getElementById('closeConfirmModal');
    const cancelConfirmModal = document.getElementById('cancelConfirmModal');
    const confirmActionBtn = document.getElementById('confirmActionBtn');

    if (closeConfirmModal) closeConfirmModal.addEventListener('click', closeConfirmModalHandler);
    if (cancelConfirmModal) cancelConfirmModal.addEventListener('click', closeConfirmModalHandler);
    if (confirmActionBtn) confirmActionBtn.addEventListener('click', handleConfirmAction);

    // Toast close handler
    const closeToast = document.getElementById('closeToast');
    if (closeToast) closeToast.addEventListener('click', hideToast);
}

// Toast Messages
function showToast(message, type = 'success') {
    const toast = document.getElementById('messageToast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `message-toast ${type}`;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            hideToast();
        }, 5000);
    }
}

function hideToast() {
    const toast = document.getElementById('messageToast');
    if (toast) {
        toast.classList.add('hidden');
    }
}

// Error Display Function
function showError(message) {
    console.log('Showing error:', message);
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        
        setTimeout(() => {
            errorDiv.classList.add('hidden');
        }, 5000);
    }
}

function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.classList.add('hidden');
    }
}

// Admin Password Prompt
function promptAdminPassword() {
    return new Promise((resolve) => {
        const password = prompt('Enter admin password:');
        resolve(password === 'admin123');
    });
}

// Teacher Login Handler
function handleTeacherLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Teacher login form submitted');
    hideError();
    
    const schoolField = document.getElementById('school');
    const employeeField = document.getElementById('employeeId');
    const subjectField = document.getElementById('subject');
    
    if (!schoolField || !employeeField || !subjectField) {
        console.error('Form fields not found');
        showError('Form fields not found. Please refresh the page.');
        return;
    }
    
    const school = schoolField.value;
    const employeeId = employeeField.value.trim();
    const subject = subjectField.value;
    
    console.log('Login attempt with credentials:', { school, employeeId, subject });
    
    if (!school || !employeeId || !subject) {
        showError('Please fill in all fields');
        return;
    }
    
    if (appData.teachers[employeeId]) {
        const teacher = appData.teachers[employeeId];
        console.log('Teacher found in database:', teacher);
        
        if (teacher.school === school && teacher.subject === subject) {
            console.log('Credentials are valid - proceeding with login');
            
            currentUser = {
                employeeId,
                ...teacher,
                isAdmin: false
            };
            
            console.log('Current user set:', currentUser);
            
            schoolField.value = '';
            employeeField.value = '';
            subjectField.value = '';
            
            showMainApp();
            return;
        } else {
            console.log('Credentials invalid - school or subject mismatch');
            showError('Invalid credentials. Please check your school and subject selection.');
        }
    } else {
        console.log('Employee ID not found in database');
        showError('Employee ID not found. Please check your credentials.');
    }
}

// Admin Login Handler
async function handleAdminLogin(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    console.log('Admin login button clicked');
    hideError();
    
    const isValidPassword = await promptAdminPassword();
    if (!isValidPassword) {
        showError('Invalid admin password');
        return;
    }
    
    currentUser = {
        employeeId: 'admin',
        ...appData.teachers['admin'],
        isAdmin: true
    };
    
    console.log('Admin user set:', currentUser);
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    showMainApp();
}

// Show Main Application
function showMainApp() {
    console.log('Showing main app - current user:', currentUser);
    
    if (!currentUser) {
        console.error('No current user set!');
        showError('Login failed - no user data');
        return;
    }
    
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (!loginScreen || !mainApp) {
        console.error('Screen elements not found:', { loginScreen: !!loginScreen, mainApp: !!mainApp });
        showError('Screen elements not found. Please refresh the page.');
        return;
    }
    
    console.log('Switching screens...');
    
    loginScreen.classList.remove('active');
    loginScreen.style.display = 'none';
    
    mainApp.classList.remove('hidden');
    mainApp.classList.add('active');
    mainApp.style.display = 'block';
    
    console.log('Screen transition completed');
    
    loadUserData();
    
    if (currentUser.isAdmin) {
        showAdminFeatures();
    }
}

// Load User Data
function loadUserData() {
    console.log('Loading user data for:', currentUser.name);
    loadDashboard();
    loadProfile();
    loadTeamMembers();
    loadChatMessages();
    loadChaptersList();
    
    if (currentUser.isAdmin) {
        loadAnalytics();
        loadAdminPanel();
    }
}

// Navigation
function navigateToSection(sectionName) {
    console.log('Navigating to section:', sectionName);
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionName);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Dashboard
function loadDashboard() {
    console.log('Loading dashboard...');
    const welcomeUser = document.getElementById('welcomeUser');
    if (welcomeUser && currentUser) {
        welcomeUser.textContent = currentUser.name;
        console.log('Welcome message set for:', currentUser.name);
    }
    
    if (!currentUser) return;
    
    const subject = currentUser.isAdmin ? 'physics' : currentUser.subject;
    const totalChapters11 = appData.curriculum[subject]['11'].length;
    const totalChapters12 = appData.curriculum[subject]['12'].length;
    const totalChapters = totalChapters11 + totalChapters12;
    
    let completedCount = 0;
    let testsCount = 0;
    
    [11, 12].forEach(grade => {
        appData.curriculum[subject][grade].forEach(chapter => {
            const key = `${subject}_${grade}_${chapter}`;
            if (chapterProgress[key] && chapterProgress[key].completed) {
                completedCount++;
                if (chapterProgress[key].testCompleted) {
                    testsCount++;
                }
            }
        });
    });
    
    const progressPercentage = Math.round((completedCount / totalChapters) * 100);
    
    const totalChaptersEl = document.getElementById('totalChapters');
    const completedChaptersEl = document.getElementById('completedChapters');
    const progressPercentageEl = document.getElementById('progressPercentage');
    const testsCompletedEl = document.getElementById('testsCompleted');
    const overallProgressEl = document.getElementById('overallProgress');
    
    if (totalChaptersEl) totalChaptersEl.textContent = totalChapters;
    if (completedChaptersEl) completedChaptersEl.textContent = completedCount;
    if (progressPercentageEl) progressPercentageEl.textContent = `${progressPercentage}%`;
    if (testsCompletedEl) testsCompletedEl.textContent = testsCount;
    if (overallProgressEl) overallProgressEl.style.width = `${progressPercentage}%`;
    
    console.log('Dashboard stats loaded:', { totalChapters, completedCount, progressPercentage, testsCount });
}

// Curriculum
function switchGrade(grade) {
    currentGrade = grade;
    
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-grade="${grade}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    loadChaptersList();
}

function loadChaptersList() {
    if (!currentUser) return;
    
    const subject = currentUser.isAdmin ? 'physics' : currentUser.subject;
    const chapters = appData.curriculum[subject][currentGrade];
    const container = document.getElementById('chaptersList');
    
    if (!container) return;
    
    container.innerHTML = chapters.map(chapter => {
        const key = `${subject}_${currentGrade}_${chapter}`;
        const progress = chapterProgress[key] || {};
        const isCompleted = progress.completed || false;
        const completionDate = progress.date || '';
        const testCompleted = progress.testCompleted || false;
        
        return `
            <div class="chapter-card ${isCompleted ? 'completed' : ''}" data-chapter="${chapter}">
                <div class="chapter-header">
                    <div class="chapter-checkbox ${isCompleted ? 'checked' : ''}">
                        ${isCompleted ? '✓' : ''}
                    </div>
                    <h4 class="chapter-title">${chapter}</h4>
                </div>
                <div class="chapter-details">
                    <span>${completionDate ? `Completed: ${completionDate}` : 'Not completed'}</span>
                    <span>${testCompleted ? '✅ Test Done' : '📝 Test Pending'}</span>
                </div>
            </div>
        `;
    }).join('');
    
    container.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', () => openChapterModal(card.dataset.chapter));
    });
}

function openChapterModal(chapter) {
    if (!currentUser) return;
    
    const subject = currentUser.isAdmin ? 'physics' : currentUser.subject;
    const key = `${subject}_${currentGrade}_${chapter}`;
    const progress = chapterProgress[key] || {};
    
    currentModalChapter = {
        chapter,
        key,
        subject,
        grade: currentGrade
    };
    
    const modalTitle = document.getElementById('modalChapterTitle');
    const completionDate = document.getElementById('completionDate');
    const testCompleted = document.getElementById('testCompleted');
    const modal = document.getElementById('chapterModal');
    
    if (modalTitle) modalTitle.textContent = chapter;
    if (completionDate) completionDate.value = progress.date || '';
    if (testCompleted) testCompleted.checked = progress.testCompleted || false;
    if (modal) modal.classList.remove('hidden');
}

function closeChapterModal() {
    const modal = document.getElementById('chapterModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentModalChapter = null;
}

function saveChapterProgress() {
    if (!currentModalChapter) return;
    
    const dateInput = document.getElementById('completionDate');
    const testInput = document.getElementById('testCompleted');
    
    if (!dateInput || !testInput) return;
    
    const date = dateInput.value;
    const testCompleted = testInput.checked;
    
    if (!date) {
        showToast('Please select a completion date', 'error');
        return;
    }
    
    const wasCompleted = chapterProgress[currentModalChapter.key]?.completed || false;
    
    chapterProgress[currentModalChapter.key] = {
        completed: true,
        date,
        testCompleted,
        chapter: currentModalChapter.chapter,
        subject: currentModalChapter.subject,
        grade: currentModalChapter.grade
    };
    
    saveToStorage();
    loadChaptersList();
    loadDashboard();
    closeChapterModal();
    
    showToast('Chapter progress saved successfully!');
    
    if (!wasCompleted && typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// Profile Management
function loadProfile() {
    if (!currentUser) return;
    
    const profileName = document.getElementById('profileName');
    const profileRole = document.getElementById('profileRole');
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    const editPhone = document.getElementById('editPhone');
    const editDob = document.getElementById('editDob');
    
    if (profileName) profileName.textContent = currentUser.name;
    
    if (profileRole) {
        if (currentUser.isAdmin) {
            profileRole.textContent = 'System Administrator';
        } else {
            profileRole.textContent = `${currentUser.subject.charAt(0).toUpperCase() + currentUser.subject.slice(1)} Teacher at ${appData.schools[currentUser.school]}`;
        }
    }
    
    if (editName) editName.value = currentUser.name;
    if (editEmail) editEmail.value = currentUser.email;
    if (editPhone) editPhone.value = currentUser.phone;
    if (editDob) editDob.value = currentUser.dob;
}

function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById('profileImage');
            if (profileImage) {
                profileImage.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}

function saveProfile() {
    if (!currentUser) return;
    
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    const editPhone = document.getElementById('editPhone');
    const editDob = document.getElementById('editDob');
    
    if (!editName || !editEmail || !editPhone || !editDob) return;
    
    const name = editName.value.trim();
    const email = editEmail.value.trim();
    const phone = editPhone.value.trim();
    const dob = editDob.value;
    
    if (!name || !email || !phone || !dob) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    currentUser.dob = dob;
    
    // Update in teachers data
    appData.teachers[currentUser.employeeId] = { ...currentUser };
    
    loadProfile();
    showToast('Profile updated successfully!');
}

// Team Members
function loadTeamMembers() {
    if (!currentUser) return;
    
    const container = document.getElementById('teamMembers');
    if (!container) return;
    
    const schoolTeachers = Object.entries(appData.teachers)
        .filter(([id, teacher]) => 
            currentUser.isAdmin || teacher.school === currentUser.school
        )
        .filter(([id]) => id !== 'admin');
    
    container.innerHTML = schoolTeachers.map(([id, teacher]) => `
        <div class="team-member-card">
            <div class="team-avatar">
                ${teacher.name.charAt(0).toUpperCase()}
            </div>
            <h4>${teacher.name}</h4>
            <p>${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p>${appData.schools[teacher.school]}</p>
            <p>${teacher.email}</p>
            <p>${teacher.phone}</p>
        </div>
    `).join('');
}

// Chat Functionality
function loadChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container || !currentUser) return;
    
    container.innerHTML = chatMessages.map(msg => `
        <div class="chat-message ${msg.senderId === currentUser.employeeId ? 'own' : 'other'}">
            <strong>${msg.senderName}:</strong> ${msg.message}
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    if (!currentUser) return;
    
    const input = document.getElementById('messageInput');
    if (!input) return;
    
    const message = input.value.trim();
    
    if (!message) return;
    
    const newMessage = {
        id: Date.now(),
        senderId: currentUser.employeeId,
        senderName: currentUser.name,
        message,
        timestamp: new Date().toISOString()
    };
    
    chatMessages.push(newMessage);
    input.value = '';
    
    saveToStorage();
    loadChatMessages();
}

// Admin Features
function showAdminFeatures() {
    console.log('Showing admin features...');
    document.querySelectorAll('.admin-only').forEach(element => {
        element.classList.remove('hidden');
        element.classList.add('show');
    });
}

function loadAnalytics() {
    loadSubjectChart();
    loadSchoolChart();
}

function loadSubjectChart() {
    const canvas = document.getElementById('subjectChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const subjectData = appData.subjects.map(subject => {
        let totalChapters = 0;
        let completedChapters = 0;
        
        [11, 12].forEach(grade => {
            const chapters = appData.curriculum[subject][grade];
            totalChapters += chapters.length;
            
            chapters.forEach(chapter => {
                const key = `${subject}_${grade}_${chapter}`;
                if (chapterProgress[key]?.completed) {
                    completedChapters++;
                }
            });
        });
        
        return {
            subject,
            progress: totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0
        };
    });
    
    if (typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: subjectData.map(d => d.subject.charAt(0).toUpperCase() + d.subject.slice(1)),
                datasets: [{
                    label: 'Progress (%)',
                    data: subjectData.map(d => d.progress),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

function loadSchoolChart() {
    const canvas = document.getElementById('schoolChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const schoolData = Object.entries(appData.schools).map(([schoolId, schoolName]) => {
        const schoolTeachers = Object.values(appData.teachers)
            .filter(teacher => teacher.school === schoolId);
        
        return {
            school: schoolName,
            teachers: schoolTeachers.length
        };
    });
    
    if (typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: schoolData.map(d => d.school),
                datasets: [{
                    data: schoolData.map(d => d.teachers),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

// Admin Panel
function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(`admin${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
    
    if (tab === 'chapters') {
        loadAdminChapters();
    } else if (tab === 'teachers') {
        loadAdminTeachers();
    }
}

function loadAdminPanel() {
    loadAdminChapters();
    loadAdminTeachers();
}

function loadAdminChapters() {
    const subjectSelect = document.getElementById('adminSubject');
    const gradeSelect = document.getElementById('adminGrade');
    const container = document.getElementById('adminChaptersList');
    
    if (!subjectSelect || !gradeSelect || !container) return;
    
    const subject = subjectSelect.value;
    const grade = gradeSelect.value;
    const chapters = appData.curriculum[subject][grade];
    
    container.innerHTML = chapters.map(chapter => `
        <div class="admin-chapter-item">
            <span>${chapter}</span>
            <button class="btn btn--outline btn--sm" onclick="removeChapter('${subject}', ${grade}, '${chapter}')">
                Remove
            </button>
        </div>
    `).join('');
}

// Teacher Management
function loadAdminTeachers() {
    const tableBody = document.getElementById('teachersTableBody');
    if (!tableBody) return;
    
    const teachers = Object.entries(appData.teachers)
        .filter(([id]) => id !== 'admin');
    
    tableBody.innerHTML = teachers.map(([id, teacher]) => `
        <tr>
            <td>${id}</td>
            <td>${teacher.name}</td>
            <td>${appData.schools[teacher.school]}</td>
            <td>${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</td>
            <td>${teacher.email}</td>
            <td>${teacher.phone}</td>
            <td class="teacher-actions">
                <button class="btn btn--primary btn--sm" onclick="editTeacher('${id}')">Edit</button>
                <button class="btn btn--danger btn--sm" onclick="confirmDeleteTeacher('${id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function openTeacherModal(teacherId = null) {
    const modal = document.getElementById('teacherModal');
    const modalTitle = document.getElementById('teacherModalTitle');
    const form = document.getElementById('teacherForm');
    
    if (!modal || !modalTitle || !form) return;
    
    currentEditingTeacher = teacherId;
    
    if (teacherId) {
        modalTitle.textContent = 'Edit Teacher';
        const teacher = appData.teachers[teacherId];
        if (teacher) {
            document.getElementById('teacherEmployeeId').value = teacherId;
            document.getElementById('teacherName').value = teacher.name;
            document.getElementById('teacherSchool').value = teacher.school;
            document.getElementById('teacherSubject').value = teacher.subject;
            document.getElementById('teacherEmail').value = teacher.email;
            document.getElementById('teacherPhone').value = teacher.phone;
            document.getElementById('teacherDob').value = teacher.dob;
            
            // Disable employee ID field when editing
            document.getElementById('teacherEmployeeId').disabled = true;
        }
    } else {
        modalTitle.textContent = 'Add New Teacher';
        form.reset();
        document.getElementById('teacherEmployeeId').disabled = false;
    }
    
    modal.classList.remove('hidden');
}

function closeTeacherModalHandler() {
    const modal = document.getElementById('teacherModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentEditingTeacher = null;
}

function saveTeacher() {
    const employeeId = document.getElementById('teacherEmployeeId').value.trim();
    const name = document.getElementById('teacherName').value.trim();
    const school = document.getElementById('teacherSchool').value;
    const subject = document.getElementById('teacherSubject').value;
    const email = document.getElementById('teacherEmail').value.trim();
    const phone = document.getElementById('teacherPhone').value.trim();
    const dob = document.getElementById('teacherDob').value;
    
    // Validation
    if (!employeeId || !name || !school || !subject || !email || !phone || !dob) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Check for duplicate employee ID (only for new teachers)
    if (!currentEditingTeacher && appData.teachers[employeeId]) {
        showToast('Employee ID already exists', 'error');
        return;
    }
    
    const teacherData = {
        name,
        school,
        subject,
        email,
        phone,
        dob
    };
    
    appData.teachers[employeeId] = teacherData;
    
    closeTeacherModalHandler();
    loadAdminTeachers();
    loadTeamMembers(); // Refresh team view
    
    if (currentEditingTeacher) {
        showToast('Teacher updated successfully!');
    } else {
        showToast('Teacher added successfully!');
    }
}

// Confirmation Modal
function showConfirmModal(title, message, callback) {
    const modal = document.getElementById('confirmModal');
    const modalTitle = document.getElementById('confirmModalTitle');
    const modalMessage = document.getElementById('confirmModalMessage');
    
    if (!modal || !modalTitle || !modalMessage) return;
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    confirmCallback = callback;
    
    modal.classList.remove('hidden');
}

function closeConfirmModalHandler() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    confirmCallback = null;
}

function handleConfirmAction() {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
    closeConfirmModalHandler();
}

// Global functions for onclick handlers
window.editTeacher = function(teacherId) {
    openTeacherModal(teacherId);
};

window.confirmDeleteTeacher = function(teacherId) {
    const teacher = appData.teachers[teacherId];
    if (!teacher) return;
    
    showConfirmModal(
        'Delete Teacher',
        `Are you sure you want to delete ${teacher.name} (${teacherId})? This action cannot be undone.`,
        () => deleteTeacher(teacherId)
    );
};

function deleteTeacher(teacherId) {
    if (appData.teachers[teacherId]) {
        delete appData.teachers[teacherId];
        loadAdminTeachers();
        loadTeamMembers(); // Refresh team view
        showToast('Teacher deleted successfully!');
    }
}

function addNewChapter() {
    const subjectSelect = document.getElementById('adminSubject');
    const gradeSelect = document.getElementById('adminGrade');
    const chapterInput = document.getElementById('newChapter');
    
    if (!subjectSelect || !gradeSelect || !chapterInput) return;
    
    const subject = subjectSelect.value;
    const grade = parseInt(gradeSelect.value);
    const chapterName = chapterInput.value.trim();
    
    if (!chapterName) {
        showToast('Please enter a chapter name', 'error');
        return;
    }
    
    if (appData.curriculum[subject][grade].includes(chapterName)) {
        showToast('Chapter already exists', 'error');
        return;
    }
    
    appData.curriculum[subject][grade].push(chapterName);
    chapterInput.value = '';
    loadAdminChapters();
    
    if (currentUser && currentUser.subject === subject && currentGrade === grade) {
        loadChaptersList();
    }
    
    showToast('Chapter added successfully!');
}

// Make removeChapter globally accessible
window.removeChapter = function(subject, grade, chapter) {
    showConfirmModal(
        'Remove Chapter',
        `Are you sure you want to remove "${chapter}"? This will also delete all progress data for this chapter.`,
        () => {
            const index = appData.curriculum[subject][grade].indexOf(chapter);
            if (index > -1) {
                appData.curriculum[subject][grade].splice(index, 1);
                loadAdminChapters();
                
                // Remove progress data for this chapter
                const key = `${subject}_${grade}_${chapter}`;
                delete chapterProgress[key];
                saveToStorage();
                
                // Refresh curriculum view if on that subject/grade
                if (currentUser && currentUser.subject === subject && currentGrade === grade) {
                    loadChaptersList();
                    loadDashboard();
                }
                
                showToast('Chapter removed successfully!');
            }
        }
    );
};

// Data Storage
function saveToStorage() {
    try {
        const data = {
            chapterProgress,
            chatMessages,
            curriculum: appData.curriculum,
            teachers: appData.teachers
        };
        console.log('Data saved:', data);
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadStoredData() {
    chapterProgress = {};
    chatMessages = [];
}

// Logout
function handleLogout() {
    showConfirmModal(
        'Logout',
        'Are you sure you want to logout?',
        () => {
            currentUser = null;
            currentGrade = 11;
            currentModalChapter = null;
            currentEditingTeacher = null;
            
            const loginForm = document.getElementById('loginForm');
            if (loginForm) {
                loginForm.reset();
            }
            hideError();
            hideToast();
            
            // Hide admin features
            document.querySelectorAll('.admin-only').forEach(element => {
                element.classList.add('hidden');
                element.classList.remove('show');
            });
            
            // Show login screen
            const loginScreen = document.getElementById('loginScreen');
            const mainApp = document.getElementById('mainApp');
            
            if (loginScreen && mainApp) {
                mainApp.classList.remove('active');
                mainApp.classList.add('hidden');
                mainApp.style.display = 'none';
                loginScreen.classList.add('active');
                loginScreen.style.display = 'flex';
            }
            
            // Reset navigation
            navigateToSection('dashboard');
        }
    );
}