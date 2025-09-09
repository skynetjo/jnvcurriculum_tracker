// Application Data
const appData = {
  adminPassword: "admin123",
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
    "AF459": { "name": "Dr. Vikram Joshi", "school": "school2", "subject": "physics", "email": "vikram@coecuttak.edu", "phone": "+91 9876543214", "dob": "1981-09-25" },
    "AF832": { "name": "Ms. Ritu Agarwal", "school": "school2", "subject": "chemistry", "email": "ritu@coecuttak.edu", "phone": "+91 9876543215", "dob": "1983-07-12" },
    "admin": { "name": "System Administrator", "school": "all", "subject": "all", "email": "admin@schools.edu", "phone": "+91 9999999999", "dob": "1975-01-01" }
  }
};

// Global State
let currentUser = null;
let currentGrade = 11;
let currentModalChapter = null;
let currentEditingTeacher = null;
let chapterProgress = {};
let chatMessages = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing JNV Curriculum Tracker...');
    initializeBackgroundAnimations();
    loadStoredData();
    
    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeEventListeners();
        console.log('App initialization complete');
    }, 100);
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

// Event Listeners Setup - FIXED TO ENSURE PROPER BINDING
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // CRITICAL FIX: Teacher Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleTeacherLogin);
        console.log('✅ Teacher login form listener attached');
    } else {
        console.error('❌ Login form not found!');
    }
    
    // CRITICAL FIX: Admin Login Button - Show Password Form
    const adminBtn = document.getElementById('adminLoginBtn');
    if (adminBtn) {
        // Remove any existing listeners
        adminBtn.replaceWith(adminBtn.cloneNode(true));
        const newAdminBtn = document.getElementById('adminLoginBtn');
        
        newAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Admin login button clicked');
            showAdminPasswordForm();
        });
        
        console.log('✅ Admin login button listener attached');
    } else {
        console.error('❌ Admin login button not found!');
    }
    
    // CRITICAL FIX: Admin Password Submit
    const adminPasswordSubmit = document.getElementById('adminPasswordSubmit');
    if (adminPasswordSubmit) {
        adminPasswordSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Admin password submit button clicked');
            handleAdminPasswordSubmit();
        });
        console.log('✅ Admin password submit listener attached');
    } else {
        console.error('❌ Admin password submit button not found!');
    }
    
    // Admin Password Cancel
    const adminPasswordCancel = document.getElementById('adminPasswordCancel');
    if (adminPasswordCancel) {
        adminPasswordCancel.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideAdminPasswordForm();
        });
    }
    
    // Admin Password Enter Key
    const adminPasswordInput = document.getElementById('adminPassword');
    if (adminPasswordInput) {
        adminPasswordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAdminPasswordSubmit();
            }
        });
    }
    
    // Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            if (section) {
                navigateToSection(section);
            }
        });
    });
    
    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // Grade Selector Buttons
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const grade = parseInt(e.target.getAttribute('data-grade'));
            if (grade) {
                switchGrade(grade);
            }
        });
    });
    
    // Setup other events
    setupChapterModalEvents();
    setupTeacherModalEvents();
    setupProfileEvents();
    setupChatEvents();
    setupAdminEvents();
}

function setupChapterModalEvents() {
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const saveChapterBtn = document.getElementById('saveChapterBtn');
    
    if (closeModal) {
        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            closeChapterModal();
        });
    }
    
    if (cancelModal) {
        cancelModal.addEventListener('click', (e) => {
            e.preventDefault();
            closeChapterModal();
        });
    }
    
    if (saveChapterBtn) {
        saveChapterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveChapterProgress();
        });
    }
}

function setupTeacherModalEvents() {
    const closeTeacherModal = document.getElementById('closeTeacherModal');
    const cancelTeacherModal = document.getElementById('cancelTeacherModal');
    const saveTeacherBtn = document.getElementById('saveTeacherBtn');
    
    if (closeTeacherModal) {
        closeTeacherModal.addEventListener('click', (e) => {
            e.preventDefault();
            closeTeacherModalFunc();
        });
    }
    
    if (cancelTeacherModal) {
        cancelTeacherModal.addEventListener('click', (e) => {
            e.preventDefault();
            closeTeacherModalFunc();
        });
    }
    
    if (saveTeacherBtn) {
        saveTeacherBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveTeacher();
        });
    }
}

function setupProfileEvents() {
    const photoUpload = document.getElementById('photoUpload');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (photoUpload) {
        photoUpload.addEventListener('change', handlePhotoUpload);
    }
    
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveProfile();
        });
    }
}

function setupChatEvents() {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');
    
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sendMessage();
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }
}

function setupAdminEvents() {
    // Admin Tab Buttons
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = e.target.getAttribute('data-tab');
            if (tab) {
                switchAdminTab(tab);
            }
        });
    });
    
    // Add Chapter Button
    const addChapterBtn = document.getElementById('addChapterBtn');
    if (addChapterBtn) {
        addChapterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addNewChapter();
        });
    }
    
    // Add Teacher Button
    const addTeacherBtn = document.getElementById('addTeacherBtn');
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAddTeacherModal();
        });
    }
    
    // Admin Subject/Grade Change
    const adminSubject = document.getElementById('adminSubject');
    const adminGrade = document.getElementById('adminGrade');
    
    if (adminSubject) {
        adminSubject.addEventListener('change', loadAdminChapters);
    }
    
    if (adminGrade) {
        adminGrade.addEventListener('change', loadAdminChapters);
    }
}

// Error Handling
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

// FIXED ADMIN LOGIN PROCESS
function showAdminPasswordForm() {
    console.log('🔧 Showing admin password form');
    hideError();
    
    const passwordSection = document.getElementById('adminPasswordSection');
    const adminBtn = document.getElementById('adminLoginBtn');
    
    if (passwordSection && adminBtn) {
        passwordSection.classList.remove('hidden');
        adminBtn.style.display = 'none';
        
        const passwordInput = document.getElementById('adminPassword');
        if (passwordInput) {
            setTimeout(() => passwordInput.focus(), 100);
        }
        console.log('✅ Admin password form shown successfully');
    } else {
        console.error('❌ Admin password elements not found');
        console.log('passwordSection:', passwordSection);
        console.log('adminBtn:', adminBtn);
    }
}

function hideAdminPasswordForm() {
    console.log('🔧 Hiding admin password form');
    
    const passwordSection = document.getElementById('adminPasswordSection');
    const adminBtn = document.getElementById('adminLoginBtn');
    const passwordInput = document.getElementById('adminPassword');
    
    if (passwordSection && adminBtn) {
        passwordSection.classList.add('hidden');
        adminBtn.style.display = 'block';
        
        if (passwordInput) {
            passwordInput.value = '';
        }
        console.log('✅ Admin password form hidden');
    }
}

function handleAdminPasswordSubmit() {
    console.log('🔧 Admin password submit clicked');
    hideError();
    
    const passwordInput = document.getElementById('adminPassword');
    if (!passwordInput) {
        console.error('❌ Password input not found');
        showError('Password field not found');
        return;
    }
    
    const enteredPassword = passwordInput.value.trim();
    console.log('🔧 Checking admin password...');
    
    if (enteredPassword === appData.adminPassword) {
        console.log('✅ ADMIN PASSWORD CORRECT - Logging in as admin');
        
        // Set admin user
        currentUser = {
            employeeId: 'admin',
            name: appData.teachers['admin'].name,
            email: appData.teachers['admin'].email,
            phone: appData.teachers['admin'].phone,
            dob: appData.teachers['admin'].dob,
            school: 'all',
            subject: 'all',
            isAdmin: true
        };
        
        console.log('✅ Admin user set:', currentUser);
        
        // Clear forms and password
        passwordInput.value = '';
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        hideAdminPasswordForm();
        
        // Show main app
        showMainApp();
    } else {
        console.log('❌ ADMIN PASSWORD INCORRECT');
        showError('Incorrect admin password. Please try again.');
        passwordInput.value = '';
        setTimeout(() => passwordInput.focus(), 100);
    }
}

// FIXED TEACHER LOGIN PROCESS
function handleTeacherLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('🔧 Teacher login form submitted');
    hideError();
    
    const schoolField = document.getElementById('school');
    const employeeField = document.getElementById('employeeId');
    const subjectField = document.getElementById('subject');
    
    if (!schoolField || !employeeField || !subjectField) {
        console.error('❌ Login form fields not found');
        showError('Form fields not found. Please refresh the page.');
        return;
    }
    
    const school = schoolField.value;
    const employeeId = employeeField.value.trim();
    const subject = subjectField.value;
    
    console.log('🔧 Login attempt:', { school, employeeId, subject });
    
    if (!school || !employeeId || !subject) {
        showError('Please fill in all fields');
        return;
    }
    
    // Check if teacher exists
    if (appData.teachers[employeeId]) {
        const teacher = appData.teachers[employeeId];
        console.log('✅ Teacher found:', teacher);
        
        // Validate credentials
        if (teacher.school === school && teacher.subject === subject) {
            console.log('✅ Teacher credentials valid - logging in');
            
            currentUser = {
                employeeId,
                name: teacher.name,
                email: teacher.email,
                phone: teacher.phone,
                dob: teacher.dob,
                school: teacher.school,
                subject: teacher.subject,
                isAdmin: false
            };
            
            console.log('✅ Teacher user set:', currentUser);
            
            // Clear form
            schoolField.value = '';
            employeeField.value = '';
            subjectField.value = '';
            
            showMainApp();
        } else {
            console.log('❌ Teacher credentials invalid');
            showError('Invalid credentials. Please check your school and subject selection.');
        }
    } else {
        console.log('❌ Teacher not found');
        showError('Employee ID not found. Please check your credentials.');
    }
}

// Show Main Application
function showMainApp() {
    console.log('🔧 Showing main application for user:', currentUser?.name);
    
    if (!currentUser) {
        console.error('❌ No current user set!');
        showError('Login failed - no user data');
        return;
    }
    
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (!loginScreen || !mainApp) {
        console.error('❌ Screen elements not found');
        showError('Screen elements not found. Please refresh the page.');
        return;
    }
    
    // Hide login screen
    loginScreen.classList.remove('active');
    loginScreen.style.display = 'none';
    
    // Show main app
    mainApp.classList.remove('hidden');
    mainApp.classList.add('active');
    mainApp.style.display = 'block';
    
    console.log('✅ Screens switched successfully');
    
    // Load user data
    loadUserData();
    
    // Show admin features if admin
    if (currentUser.isAdmin) {
        console.log('✅ Showing admin features');
        showAdminFeatures();
        // Default to admin panel with teachers tab
        setTimeout(() => {
            navigateToSection('admin');
            switchAdminTab('teachers');
        }, 100);
    }
}

// Load User Data
function loadUserData() {
    console.log('Loading user data...');
    loadDashboard();
    loadProfile();
    loadTeamMembers();
    loadChatMessages();
    loadChaptersList();
    
    if (currentUser && currentUser.isAdmin) {
        loadAnalytics();
        loadAdminPanel();
    }
}

// Navigation
function navigateToSection(sectionName) {
    console.log('Navigating to section:', sectionName);
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Update sections
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
}

// Curriculum Management
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
    
    // Add click handlers
    container.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', () => {
            const chapter = card.getAttribute('data-chapter');
            if (chapter) {
                openChapterModal(chapter);
            }
        });
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
        alert('Please select a completion date');
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
    
    // Show confetti if newly completed
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
        alert('Please fill in all fields');
        return;
    }
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    currentUser.dob = dob;
    
    // Update in main data store
    if (appData.teachers[currentUser.employeeId]) {
        appData.teachers[currentUser.employeeId] = {
            ...appData.teachers[currentUser.employeeId],
            name,
            email,
            phone,
            dob
        };
    }
    
    loadProfile();
    loadTeamMembers();
    alert('Profile updated successfully!');
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
    console.log('Showing admin-only features');
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
    if (!canvas || typeof Chart === 'undefined') return;
    
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

function loadSchoolChart() {
    const canvas = document.getElementById('schoolChart');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    
    const schoolData = Object.entries(appData.schools).map(([schoolId, schoolName]) => {
        const schoolTeachers = Object.values(appData.teachers)
            .filter(teacher => teacher.school === schoolId);
        
        return {
            school: schoolName,
            teachers: schoolTeachers.length
        };
    });
    
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

// COMPLETE TEACHER MANAGEMENT SYSTEM (CRUD)
function switchAdminTab(tab) {
    console.log('Switching admin tab to:', tab);
    
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
    console.log('Loading admin panel...');
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

// FULL TEACHER CRUD OPERATIONS - WORKING IMPLEMENTATION
function loadAdminTeachers() {
    console.log('✅ Loading admin teachers list...');
    const container = document.getElementById('adminTeachersList');
    if (!container) {
        console.error('❌ Teachers list container not found');
        return;
    }
    
    const teachers = Object.entries(appData.teachers)
        .filter(([id]) => id !== 'admin');
    
    if (teachers.length === 0) {
        container.innerHTML = '<p>No teachers found.</p>';
        return;
    }
    
    container.innerHTML = teachers.map(([id, teacher]) => `
        <div class="teacher-item">
            <h4>${teacher.name}</h4>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Subject:</strong> ${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p><strong>School:</strong> ${appData.schools[teacher.school]}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
            <p><strong>DOB:</strong> ${teacher.dob}</p>
            <div class="teacher-actions">
                <button class="btn btn--primary btn--sm" onclick="editTeacher('${id}')">Edit</button>
                <button class="btn btn--outline btn--sm" onclick="deleteTeacher('${id}')">Delete</button>
            </div>
        </div>
    `).join('');
    
    console.log('✅ Admin teachers list loaded successfully');
}

// CREATE - Add New Teacher
function showAddTeacherModal() {
    console.log('✅ Showing add teacher modal');
    currentEditingTeacher = null;
    
    const modal = document.getElementById('teacherModal');
    const modalTitle = document.getElementById('modalTeacherTitle');
    
    if (modalTitle) modalTitle.textContent = 'Add New Teacher';
    
    // Clear all form fields
    document.getElementById('teacherName').value = '';
    document.getElementById('teacherEmployeeId').value = '';
    document.getElementById('teacherSchool').value = 'school1';
    document.getElementById('teacherSubject').value = 'physics';
    document.getElementById('teacherEmail').value = '';
    document.getElementById('teacherPhone').value = '';
    document.getElementById('teacherDob').value = '';
    
    if (modal) {
        modal.classList.remove('hidden');
        console.log('✅ Add teacher modal shown');
    }
}

// UPDATE - Edit Teacher (Global Function)
window.editTeacher = function(teacherId) {
    console.log('✅ Editing teacher:', teacherId);
    const teacher = appData.teachers[teacherId];
    if (!teacher) {
        console.error('❌ Teacher not found:', teacherId);
        return;
    }
    
    currentEditingTeacher = teacherId;
    
    const modal = document.getElementById('teacherModal');
    const modalTitle = document.getElementById('modalTeacherTitle');
    
    if (modalTitle) modalTitle.textContent = 'Edit Teacher';
    
    // Fill form with existing teacher data
    document.getElementById('teacherName').value = teacher.name;
    document.getElementById('teacherEmployeeId').value = teacherId;
    document.getElementById('teacherSchool').value = teacher.school;
    document.getElementById('teacherSubject').value = teacher.subject;
    document.getElementById('teacherEmail').value = teacher.email;
    document.getElementById('teacherPhone').value = teacher.phone;
    document.getElementById('teacherDob').value = teacher.dob;
    
    if (modal) {
        modal.classList.remove('hidden');
        console.log('✅ Edit teacher modal shown for:', teacher.name);
    }
};

// DELETE - Delete Teacher (Global Function)
window.deleteTeacher = function(teacherId) {
    console.log('✅ Attempting to delete teacher:', teacherId);
    const teacher = appData.teachers[teacherId];
    if (!teacher) {
        console.error('❌ Teacher not found:', teacherId);
        return;
    }
    
    const confirmDelete = confirm(`Are you sure you want to delete ${teacher.name}?\n\nThis action cannot be undone.`);
    if (confirmDelete) {
        delete appData.teachers[teacherId];
        console.log('✅ Teacher deleted successfully:', teacherId);
        
        // Refresh the teachers list
        loadAdminTeachers();
        loadTeamMembers();
        
        alert(`${teacher.name} has been deleted successfully.`);
    }
};

// Save Teacher (handles both CREATE and UPDATE)
function saveTeacher() {
    console.log('✅ Saving teacher...');
    
    // Get form values
    const name = document.getElementById('teacherName').value.trim();
    const employeeId = document.getElementById('teacherEmployeeId').value.trim();
    const school = document.getElementById('teacherSchool').value;
    const subject = document.getElementById('teacherSubject').value;
    const email = document.getElementById('teacherEmail').value.trim();
    const phone = document.getElementById('teacherPhone').value.trim();
    const dob = document.getElementById('teacherDob').value;
    
    // Validation
    if (!name || !employeeId || !school || !subject || !email || !phone || !dob) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Check for duplicate employee ID
    if ((!currentEditingTeacher || currentEditingTeacher !== employeeId) && appData.teachers[employeeId]) {
        alert('Employee ID already exists. Please use a different ID.');
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
    
    if (currentEditingTeacher) {
        // UPDATE existing teacher
        if (currentEditingTeacher !== employeeId) {
            // Employee ID changed
            delete appData.teachers[currentEditingTeacher];
            appData.teachers[employeeId] = teacherData;
            
            if (currentUser && currentUser.employeeId === currentEditingTeacher) {
                currentUser.employeeId = employeeId;
                Object.assign(currentUser, teacherData);
            }
            
            console.log('✅ Teacher updated with new ID:', currentEditingTeacher, '→', employeeId);
        } else {
            // Just update existing teacher
            appData.teachers[employeeId] = teacherData;
            
            if (currentUser && currentUser.employeeId === employeeId) {
                Object.assign(currentUser, teacherData);
            }
            
            console.log('✅ Teacher updated:', employeeId);
        }
        
        alert('Teacher updated successfully!');
    } else {
        // CREATE new teacher
        appData.teachers[employeeId] = teacherData;
        console.log('✅ New teacher added:', employeeId);
        alert('Teacher added successfully!');
    }
    
    // Close modal and refresh data
    closeTeacherModalFunc();
    loadAdminTeachers();
    loadTeamMembers();
    
    // Refresh profile if user edited themselves
    if (currentUser && (currentUser.employeeId === employeeId || (currentEditingTeacher && currentUser.employeeId === currentEditingTeacher))) {
        loadProfile();
    }
}

// Close Teacher Modal
function closeTeacherModalFunc() {
    const modal = document.getElementById('teacherModal');
    if (modal) {
        modal.classList.add('hidden');
        console.log('✅ Teacher modal closed');
    }
    currentEditingTeacher = null;
}

// Chapter Management
function addNewChapter() {
    const subjectSelect = document.getElementById('adminSubject');
    const gradeSelect = document.getElementById('adminGrade');
    const chapterInput = document.getElementById('newChapter');
    
    if (!subjectSelect || !gradeSelect || !chapterInput) return;
    
    const subject = subjectSelect.value;
    const grade = parseInt(gradeSelect.value);
    const chapterName = chapterInput.value.trim();
    
    if (!chapterName) {
        alert('Please enter a chapter name');
        return;
    }
    
    if (appData.curriculum[subject][grade].includes(chapterName)) {
        alert('Chapter already exists');
        return;
    }
    
    appData.curriculum[subject][grade].push(chapterName);
    chapterInput.value = '';
    loadAdminChapters();
    
    if (currentUser && (currentUser.subject === subject || currentUser.isAdmin) && currentGrade === grade) {
        loadChaptersList();
    }
    
    alert('Chapter added successfully!');
}

// Remove Chapter (Global Function)
window.removeChapter = function(subject, grade, chapter) {
    if (confirm(`Are you sure you want to remove "${chapter}"?`)) {
        const index = appData.curriculum[subject][grade].indexOf(chapter);
        if (index > -1) {
            appData.curriculum[subject][grade].splice(index, 1);
            loadAdminChapters();
            
            const key = `${subject}_${grade}_${chapter}`;
            delete chapterProgress[key];
            saveToStorage();
            
            if (currentUser && (currentUser.subject === subject || currentUser.isAdmin) && currentGrade === grade) {
                loadChaptersList();
                loadDashboard();
            }
            
            alert('Chapter removed successfully!');
        }
    }
};

// Data Storage
function saveToStorage() {
    try {
        console.log('Data saved to storage (demo mode)');
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadStoredData() {
    chapterProgress = {};
    chatMessages = [];
    console.log('Stored data loaded (demo mode)');
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        console.log('User logging out...');
        
        // Reset state
        currentUser = null;
        currentGrade = 11;
        currentModalChapter = null;
        currentEditingTeacher = null;
        
        // Reset forms
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        hideError();
        hideAdminPasswordForm();
        
        // Hide admin features
        document.querySelectorAll('.admin-only').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('show');
        });
        
        // Show login screen, hide main app
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
        
        console.log('Logout complete');
    }
}

console.log('✅ JNV Curriculum Tracker JavaScript loaded successfully');