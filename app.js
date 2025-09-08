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
    "AF709": { "name": "Dr. Sunita Gupta", "school": "school2", "subject": "biology", "email": "sunita@coecuttak.edu", "phone": "+91 9876543213", "dob": "1979-03-18" },
    "AF459": { "name": "Dr. Vikram Joshi", "school": "school2", "subject": "physics", "email": "vikram@coecuttak.edu", "phone": "+91 9876543214", "dob": "1981-09-25" },
    "AF832": { "name": "Ms. Ritu Agarwal", "school": "school2", "subject": "chemistry", "email": "ritu@coecuttak.edu", "phone": "+91 9876543215", "dob": "1983-07-12" },
    "AF843": { "name": "Prof. Deepak Patel", "school": "school3", "subject": "mathematics", "email": "deepak@coemahisagar.edu", "phone": "+91 9876543216", "dob": "1984-11-08" },
    "AF620": { "name": "Dr. Meera Shah", "school": "school3", "subject": "physics", "email": "meera@coemahisagar.edu", "phone": "+91 9876543217", "dob": "1986-01-30" },
    "AF635": { "name": "Ms. Kavita Jain", "school": "school3", "subject": "biology", "email": "kavita@coemahisagar.edu", "phone": "+91 9876543218", "dob": "1988-04-14" },
    "AF789": { "name": "Dr. Anil Verma", "school": "school4", "subject": "chemistry", "email": "anil@coebundi.edu", "phone": "+91 9876543219", "dob": "1977-06-20" },
    "AF788": { "name": "Prof. Sanjay Kumar", "school": "school4", "subject": "physics", "email": "sanjay@coebundi.edu", "phone": "+91 9876543220", "dob": "1982-10-05" },
    "AF790": { "name": "Ms. Pooja Sharma", "school": "school4", "subject": "mathematics", "email": "pooja@coebundi.edu", "phone": "+91 9876543221", "dob": "1987-12-17" },
    "AF786": { "name": "Dr. Ramesh Patel", "school": "school5", "subject": "biology", "email": "ramesh@jnvbharuch.edu", "phone": "+91 9876543222", "dob": "1980-02-28" },
    "AF804": { "name": "Prof. Nisha Gupta", "school": "school5", "subject": "chemistry", "email": "nisha@jnvbharuch.edu", "phone": "+91 9876543223", "dob": "1985-05-11" },
    "AF800": { "name": "Mr. Suresh Singh", "school": "school5", "subject": "physics", "email": "suresh@jnvbharuch.edu", "phone": "+91 9876543224", "dob": "1983-09-03" },
    "AF723": { "name": "Ms. Divya Joshi", "school": "school5", "subject": "mathematics", "email": "divya@jnvbharuch.edu", "phone": "+91 9876543225", "dob": "1989-11-26" },
    "AF529": { "name": "Dr. Ashok Tiwari", "school": "school6", "subject": "physics", "email": "ashok@emrsbhopal.edu", "phone": "+91 9876543226", "dob": "1979-08-15" },
    "AF834": { "name": "Prof. Rekha Pandey", "school": "school6", "subject": "chemistry", "email": "rekha@emrsbhopal.edu", "phone": "+91 9876543227", "dob": "1984-12-02" },
    "AF840": { "name": "Ms. Madhuri Singh", "school": "school6", "subject": "biology", "email": "madhuri@emrsbhopal.edu", "phone": "+91 9876543228", "dob": "1986-03-19" },
    "admin": { "name": "System Administrator", "school": "all", "subject": "all", "email": "admin@schools.edu", "phone": "+91 9999999999", "dob": "1975-01-01" }
  }
};

// Global State
let currentUser = null;
let currentGrade = 11;
let currentModalChapter = null;
let chapterProgress = {};
let chatMessages = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing JNV Curriculum Tracker...');
    
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeBackgroundAnimations();
        initializeEventListeners();
        loadStoredData();
        enforceTextVisibility();
        fixFormElements();
    }, 100);
});

// Fix form elements to ensure they work properly
function fixFormElements() {
    console.log('Fixing form elements...');
    
    // Ensure all form controls have proper styling and functionality
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.style.pointerEvents = 'auto';
        control.style.zIndex = '10';
        
        if (control.tagName === 'SELECT') {
            // Fix select elements
            control.style.cursor = 'pointer';
            control.addEventListener('focus', function() {
                console.log('Select focused:', control.id);
            });
            control.addEventListener('change', function() {
                console.log('Select changed:', control.id, control.value);
            });
        }
    });
    
    // Specifically fix the dropdowns
    const schoolSelect = document.getElementById('school');
    const subjectSelect = document.getElementById('subject');
    
    if (schoolSelect) {
        schoolSelect.style.pointerEvents = 'auto';
        schoolSelect.style.cursor = 'pointer';
        console.log('School select fixed');
    }
    
    if (subjectSelect) {
        subjectSelect.style.pointerEvents = 'auto';
        subjectSelect.style.cursor = 'pointer';
        console.log('Subject select fixed');
    }
}

// Critical function to enforce black text visibility
function enforceTextVisibility() {
    console.log('Enforcing text visibility...');
    
    // Force all text elements to be black/dark
    const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'div:not(.btn)', 'label', 
        '.form-label', '.nav-link', '.section-title',
        '.welcome-text', '.user-name', '.stat-number', '.stat-label',
        '.chapter-title', '.profile-name', '.profile-role', '.card-title',
        '.modal-title', '.checkbox-text', '.footer-text',
        '.app-title', '.app-tagline', '.nav-brand-title', '.nav-brand-tagline',
        '.login-section-title', '.divider-text', '.progress-label'
    ];
    
    textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Skip certain elements that should have different colors
            if (!el.classList.contains('btn--primary') && 
                !el.classList.contains('team-avatar') && 
                !el.classList.contains('chat-message') &&
                !el.classList.contains('error-message')) {
                el.style.color = '#000000';
                el.style.setProperty('color', '#000000', 'important');
            }
        });
    });
}

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
        
        // Random size between 2-8px
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
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
        
        // Random position
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        shape.style.animationDelay = `${Math.random() * 30}s`;
        
        shapesContainer.appendChild(shape);
    }
}

// Event Listeners
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Wait for DOM to be fully ready
    setTimeout(() => {
        setupLoginListeners();
        setupNavigationListeners();
        setupModalListeners();
        setupProfileListeners();
        setupChatListeners();
        setupAdminListeners();
    }, 200);
}

function setupLoginListeners() {
    // Login form - with multiple attempts to attach
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Remove any existing listeners first
        loginForm.removeEventListener('submit', handleTeacherLogin);
        loginForm.addEventListener('submit', handleTeacherLogin);
        console.log('Teacher login form listener added');
    } else {
        console.error('Login form not found!');
    }
    
    // Admin login button - with multiple attempts to attach
    const adminBtn = document.getElementById('adminLoginBtn');
    if (adminBtn) {
        // Remove any existing listeners first
        adminBtn.removeEventListener('click', handleAdminLoginClick);
        adminBtn.addEventListener('click', handleAdminLoginClick);
        adminBtn.style.pointerEvents = 'auto';
        adminBtn.style.cursor = 'pointer';
        console.log('Admin login button listener added');
    } else {
        console.error('Admin login button not found!');
    }
    
    // Also try to find and fix the button by class
    const adminButtons = document.querySelectorAll('button');
    adminButtons.forEach(btn => {
        if (btn.textContent.includes('Login as Admin') || btn.id === 'adminLoginBtn') {
            btn.removeEventListener('click', handleAdminLoginClick);
            btn.addEventListener('click', handleAdminLoginClick);
            btn.style.pointerEvents = 'auto';
            btn.style.cursor = 'pointer';
            console.log('Found admin button and attached listener');
        }
    });
}

function handleAdminLoginClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Admin login clicked!');
    handleAdminLogin();
}

function setupNavigationListeners() {
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
}

function setupModalListeners() {
    // Modal handlers
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const saveChapterBtn = document.getElementById('saveChapterBtn');
    
    if (closeModal) closeModal.addEventListener('click', closeChapterModal);
    if (cancelModal) cancelModal.addEventListener('click', closeChapterModal);
    if (saveChapterBtn) saveChapterBtn.addEventListener('click', saveChapterProgress);
}

function setupProfileListeners() {
    // Profile photo upload
    const photoUpload = document.getElementById('photoUpload');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (photoUpload) photoUpload.addEventListener('change', handlePhotoUpload);
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);
}

function setupChatListeners() {
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
}

function setupAdminListeners() {
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
}

// Error Display Function
function showError(message) {
    console.log('Showing error:', message);
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        errorDiv.style.setProperty('color', '#c0152f', 'important');
        
        // Hide error after 5 seconds
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

// Teacher Login Handler - IMPROVED
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
    
    // Check if user exists in teachers data
    if (appData.teachers[employeeId]) {
        const teacher = appData.teachers[employeeId];
        console.log('Teacher found in database:', teacher);
        
        // Validate school and subject match
        if (teacher.school === school && teacher.subject === subject) {
            console.log('Credentials are valid - proceeding with login');
            
            // Set current user
            currentUser = {
                employeeId,
                ...teacher,
                isAdmin: false
            };
            
            console.log('Current user set:', currentUser);
            
            // Clear the form
            schoolField.value = '';
            employeeField.value = '';
            subjectField.value = '';
            
            // Proceed to main app
            showMainApp();
            return;
        } else {
            console.log('Credentials invalid - school or subject mismatch');
            console.log('Expected:', { school: teacher.school, subject: teacher.subject });
            console.log('Provided:', { school, subject });
            showError('Invalid credentials. Please check your school and subject selection.');
        }
    } else {
        console.log('Employee ID not found in database');
        showError('Employee ID not found. Please check your credentials.');
    }
}

// Admin Login Handler - IMPROVED
function handleAdminLogin() {
    console.log('Admin login initiated');
    hideError();
    
    try {
        // Set admin user
        currentUser = {
            employeeId: 'admin',
            ...appData.teachers['admin'],
            isAdmin: true
        };
        
        console.log('Admin user set:', currentUser);
        
        // Clear the teacher form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        
        // Proceed to main app
        showMainApp();
    } catch (error) {
        console.error('Error in admin login:', error);
        showError('Admin login failed. Please try again.');
    }
}

// Show Main Application - IMPROVED
function showMainApp() {
    console.log('Showing main app - current user:', currentUser);
    
    if (!currentUser) {
        console.error('No current user set!');
        showError('Login failed - no user data');
        return;
    }
    
    try {
        const loginScreen = document.getElementById('loginScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (!loginScreen || !mainApp) {
            console.error('Screen elements not found:', { loginScreen: !!loginScreen, mainApp: !!mainApp });
            showError('Screen elements not found. Please refresh the page.');
            return;
        }
        
        console.log('Switching screens...');
        
        // Hide login screen
        loginScreen.classList.remove('active');
        loginScreen.style.display = 'none';
        
        // Show main app
        mainApp.classList.remove('hidden');
        mainApp.classList.add('active');
        mainApp.style.display = 'block';
        
        console.log('Screen transition completed');
        
        // Load user data and setup app
        setTimeout(() => {
            loadUserData();
            
            // Show admin features if admin user
            if (currentUser.isAdmin) {
                showAdminFeatures();
            }
            
            // Ensure text visibility after app loads
            setTimeout(enforceTextVisibility, 300);
        }, 100);
        
    } catch (error) {
        console.error('Error showing main app:', error);
        showError('Failed to load main application. Please refresh the page.');
    }
}

// Load User Data
function loadUserData() {
    console.log('Loading user data for:', currentUser.name);
    try {
        loadDashboard();
        loadProfile();
        loadTeamMembers();
        loadChatMessages();
        loadChaptersList();
        
        if (currentUser.isAdmin) {
            loadAnalytics();
            loadAdminPanel();
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Navigation
function navigateToSection(sectionName) {
    console.log('Navigating to section:', sectionName);
    
    try {
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
        
        // Enforce text visibility after navigation
        setTimeout(enforceTextVisibility, 100);
    } catch (error) {
        console.error('Error navigating to section:', error);
    }
}

// Dashboard
function loadDashboard() {
    console.log('Loading dashboard...');
    const welcomeUser = document.getElementById('welcomeUser');
    if (welcomeUser && currentUser) {
        welcomeUser.textContent = currentUser.name;
        welcomeUser.style.setProperty('color', '#000000', 'important');
        console.log('Welcome message set for:', currentUser.name);
    }
    
    if (!currentUser) return;
    
    const subject = currentUser.isAdmin ? 'physics' : currentUser.subject; // Default for admin
    const totalChapters11 = appData.curriculum[subject]['11'].length;
    const totalChapters12 = appData.curriculum[subject]['12'].length;
    const totalChapters = totalChapters11 + totalChapters12;
    
    let completedCount = 0;
    let testsCount = 0;
    
    // Count completed chapters across both grades
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
    
    if (totalChaptersEl) {
        totalChaptersEl.textContent = totalChapters;
        totalChaptersEl.style.setProperty('color', '#000000', 'important');
    }
    if (completedChaptersEl) {
        completedChaptersEl.textContent = completedCount;
        completedChaptersEl.style.setProperty('color', '#000000', 'important');
    }
    if (progressPercentageEl) {
        progressPercentageEl.textContent = `${progressPercentage}%`;
        progressPercentageEl.style.setProperty('color', '#000000', 'important');
    }
    if (testsCompletedEl) {
        testsCompletedEl.textContent = testsCount;
        testsCompletedEl.style.setProperty('color', '#000000', 'important');
    }
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
                    <h4 class="chapter-title" style="color: #000000 !important;">${chapter}</h4>
                </div>
                <div class="chapter-details">
                    <span style="color: #333333 !important;">${completionDate ? `Completed: ${completionDate}` : 'Not completed'}</span>
                    <span style="color: #333333 !important;">${testCompleted ? '✅ Test Done' : '📝 Test Pending'}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers and ensure text visibility
    container.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', () => openChapterModal(card.dataset.chapter));
        
        // Ensure chapter text is visible
        const title = card.querySelector('.chapter-title');
        const details = card.querySelectorAll('.chapter-details span');
        if (title) title.style.setProperty('color', '#000000', 'important');
        details.forEach(span => span.style.setProperty('color', '#333333', 'important'));
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
    
    if (modalTitle) {
        modalTitle.textContent = chapter;
        modalTitle.style.setProperty('color', '#000000', 'important');
    }
    if (completionDate) completionDate.value = progress.date || '';
    if (testCompleted) testCompleted.checked = progress.testCompleted || false;
    if (modal) modal.classList.remove('hidden');
    
    // Ensure modal text visibility
    setTimeout(enforceTextVisibility, 50);
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
    
    if (profileName) {
        profileName.textContent = currentUser.name;
        profileName.style.setProperty('color', '#000000', 'important');
    }
    
    if (profileRole) {
        if (currentUser.isAdmin) {
            profileRole.textContent = 'System Administrator';
        } else {
            profileRole.textContent = `${currentUser.subject.charAt(0).toUpperCase() + currentUser.subject.slice(1)} Teacher at ${appData.schools[currentUser.school]}`;
        }
        profileRole.style.setProperty('color', '#333333', 'important');
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
    
    const name = editName.value;
    const email = editEmail.value;
    const phone = editPhone.value;
    const dob = editDob.value;
    
    if (!name || !email || !phone || !dob) {
        alert('Please fill in all fields');
        return;
    }
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    currentUser.dob = dob;
    
    loadProfile();
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
            <h4 style="color: #000000 !important;">${teacher.name}</h4>
            <p style="color: #333333 !important;">${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p style="color: #333333 !important;">${appData.schools[teacher.school]}</p>
            <p style="color: #333333 !important;">${teacher.email}</p>
            <p style="color: #333333 !important;">${teacher.phone}</p>
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
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#000000'
                        }
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
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#000000'
                        }
                    }
                }
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
    
    // Ensure text visibility
    setTimeout(enforceTextVisibility, 100);
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
            <span style="color: #000000 !important;">${chapter}</span>
            <button class="btn btn--outline btn--sm" onclick="removeChapter('${subject}', ${grade}, '${chapter}')">
                Remove
            </button>
        </div>
    `).join('');
}

function loadAdminTeachers() {
    const container = document.getElementById('adminTeachersList');
    if (!container) return;
    
    const teachers = Object.entries(appData.teachers)
        .filter(([id]) => id !== 'admin');
    
    container.innerHTML = teachers.map(([id, teacher]) => `
        <div class="teacher-item">
            <h4 style="color: #000000 !important;">${teacher.name}</h4>
            <p style="color: #333333 !important;"><strong>ID:</strong> ${id}</p>
            <p style="color: #333333 !important;"><strong>Subject:</strong> ${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p style="color: #333333 !important;"><strong>School:</strong> ${appData.schools[teacher.school]}</p>
            <p style="color: #333333 !important;"><strong>Email:</strong> ${teacher.email}</p>
            <p style="color: #333333 !important;"><strong>Phone:</strong> ${teacher.phone}</p>
        </div>
    `).join('');
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
    
    // Refresh curriculum view if on that subject/grade
    if (currentUser && currentUser.subject === subject && currentGrade === grade) {
        loadChaptersList();
    }
    
    alert('Chapter added successfully!');
}

// Make removeChapter globally accessible
window.removeChapter = function(subject, grade, chapter) {
    if (confirm(`Are you sure you want to remove "${chapter}"?`)) {
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
            
            alert('Chapter removed successfully!');
        }
    }
};

// Data Storage
function saveToStorage() {
    try {
        const data = {
            chapterProgress,
            chatMessages,
            curriculum: appData.curriculum
        };
        // In a real app, this would be saved to a backend
        console.log('Data saved:', data);
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadStoredData() {
    // Initialize with empty data
    chapterProgress = {};
    chatMessages = [];
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        currentGrade = 11;
        currentModalChapter = null;
        
        // Reset forms
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        hideError();
        
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
}