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
  adminPassword: "admin123",
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
let currentEditingTeacher = null;
let currentSelectedSchool = null;
let currentCurriculumSubject = 'physics';
let chapterProgress = {};
let chatMessages = [];
let analyticsFilters = {
  school: '',
  subject: '',
  testMode: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeBackgroundAnimations();
    initializeEventListeners();
    loadStoredData();
    generateSampleData(); // Generate some sample progress data
    console.log('App initialization completed');
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

// Generate Sample Data for Testing
function generateSampleData() {
    const sampleProgress = {};
    const subjects = ['physics', 'chemistry', 'mathematics', 'biology'];
    const schools = Object.keys(appData.schools);
    const testModes = ['online', 'offline'];
    
    subjects.forEach(subject => {
        [11, 12].forEach(grade => {
            const chapters = appData.curriculum[subject][grade];
            chapters.forEach((chapter, index) => {
                // Generate progress for some chapters (70% completion rate)
                if (Math.random() < 0.7) {
                    const key = `${subject}_${grade}_${chapter}`;
                    const randomSchool = schools[Math.floor(Math.random() * schools.length)];
                    const randomDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
                    
                    sampleProgress[key] = {
                        completed: true,
                        date: randomDate.toISOString().split('T')[0],
                        testCompleted: Math.random() < 0.8, // 80% of completed chapters have tests done
                        testMode: testModes[Math.floor(Math.random() * testModes.length)],
                        chapter: chapter,
                        subject: subject,
                        grade: grade,
                        school: randomSchool
                    };
                }
            });
        });
    });
    
    chapterProgress = sampleProgress;
    saveToStorage();
}

// FIXED Event Listeners Setup
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Teacher Login Form - FIXED
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Login form submitted');
            handleTeacherLogin();
        });
        console.log('✅ Teacher login form listener added');
    }
    
    // Fix for login submit button specifically
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Login button clicked directly');
            handleTeacherLogin();
        });
        console.log('✅ Login submit button listener added');
    }
    
    // Admin Login Button - FIXED  
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Admin login button clicked');
            showAdminPasswordField();
        });
        console.log('✅ Admin login button listener added');
    }
    
    // Admin Password Buttons - FIXED
    const cancelAdminBtn = document.getElementById('cancelAdminBtn');
    const confirmAdminBtn = document.getElementById('confirmAdminBtn');
    const adminPasswordField = document.getElementById('adminPassword');
    
    if (cancelAdminBtn) {
        cancelAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideAdminPasswordField();
        });
    }
    
    if (confirmAdminBtn) {
        confirmAdminBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleAdminPasswordSubmit();
        });
    }
    
    if (adminPasswordField) {
        adminPasswordField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAdminPasswordSubmit();
            }
        });
    }
    
    setupOtherEventListeners();
}

function setupOtherEventListeners() {
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
    
    // Dashboard School Selector for Teachers
    const dashboardSchool = document.getElementById('dashboardSchool');
    if (dashboardSchool) {
        dashboardSchool.addEventListener('change', (e) => {
            currentSelectedSchool = e.target.value;
            loadMultiSubjectDashboard();
        });
    }
    
    // Curriculum controls
    const curriculumSubject = document.getElementById('curriculumSubject');
    const curriculumSchool = document.getElementById('curriculumSchool');
    
    if (curriculumSubject) {
        curriculumSubject.addEventListener('change', (e) => {
            currentCurriculumSubject = e.target.value;
            loadChaptersList();
        });
    }
    
    if (curriculumSchool) {
        curriculumSchool.addEventListener('change', loadChaptersList);
    }
    
    // Grade selector
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchGrade(parseInt(e.target.dataset.grade));
        });
    });
    
    // Modal handlers
    setupModalHandlers();
    
    // Profile handlers
    setupProfileHandlers();
    
    // Chat functionality
    setupChatHandlers();
    
    // Admin functionality
    setupAdminHandlers();
    
    // Analytics filters
    setupAnalyticsFilters();
}

function setupModalHandlers() {
    // Chapter Modal
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const saveChapterBtn = document.getElementById('saveChapterBtn');
    
    if (closeModal) closeModal.addEventListener('click', closeChapterModal);
    if (cancelModal) cancelModal.addEventListener('click', closeChapterModal);
    if (saveChapterBtn) saveChapterBtn.addEventListener('click', saveChapterProgress);
    
    // Teacher Modal
    const closeTeacherModal = document.getElementById('closeTeacherModal');
    const cancelTeacherModal = document.getElementById('cancelTeacherModal');
    const saveTeacherBtn = document.getElementById('saveTeacherBtn');
    
    if (closeTeacherModal) closeTeacherModal.addEventListener('click', closeTeacherModal);
    if (cancelTeacherModal) cancelTeacherModal.addEventListener('click', closeTeacherModal);
    if (saveTeacherBtn) saveTeacherBtn.addEventListener('click', saveTeacher);
}

function setupProfileHandlers() {
    const photoUpload = document.getElementById('photoUpload');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (photoUpload) photoUpload.addEventListener('change', handlePhotoUpload);
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);
}

function setupChatHandlers() {
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

function setupAdminHandlers() {
    // Tab switching
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchAdminTab(e.target.dataset.tab);
        });
    });
    
    // Chapter management
    const addChapterBtn = document.getElementById('addChapterBtn');
    if (addChapterBtn) addChapterBtn.addEventListener('click', addNewChapter);
    
    // Teacher management
    const addTeacherBtn = document.getElementById('addTeacherBtn');
    if (addTeacherBtn) addTeacherBtn.addEventListener('click', showAddTeacherModal);
    
    // Admin subject/grade change handlers
    const adminSubject = document.getElementById('adminSubject');
    const adminGrade = document.getElementById('adminGrade');
    
    if (adminSubject) adminSubject.addEventListener('change', loadAdminChapters);
    if (adminGrade) adminGrade.addEventListener('change', loadAdminChapters);
}

function setupAnalyticsFilters() {
    const analyticsSchool = document.getElementById('analyticsSchool');
    const analyticsSubject = document.getElementById('analyticsSubject');
    const analyticsTestMode = document.getElementById('analyticsTestMode');
    
    if (analyticsSchool) {
        analyticsSchool.addEventListener('change', (e) => {
            analyticsFilters.school = e.target.value;
            updateAnalytics();
        });
    }
    
    if (analyticsSubject) {
        analyticsSubject.addEventListener('change', (e) => {
            analyticsFilters.subject = e.target.value;
            updateAnalytics();
        });
    }
    
    if (analyticsTestMode) {
        analyticsTestMode.addEventListener('change', (e) => {
            analyticsFilters.testMode = e.target.value;
            updateAnalytics();
        });
    }
}

// Error Display Functions
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

// FIXED Login Handlers
function handleTeacherLogin() {
    console.log('🔄 Teacher login form submitted');
    hideError();
    
    const schoolField = document.getElementById('school');
    const employeeField = document.getElementById('employeeId');
    const subjectField = document.getElementById('subject');
    
    if (!schoolField || !employeeField || !subjectField) {
        console.error('❌ Form fields not found');
        showError('Form fields not found. Please refresh the page.');
        return;
    }
    
    const school = schoolField.value.trim();
    const employeeId = employeeField.value.trim();
    const subject = subjectField.value.trim();
    
    console.log('🔍 Login attempt with credentials:', { school, employeeId, subject });
    
    if (!school || !employeeId || !subject) {
        showError('Please fill in all fields');
        return;
    }
    
    // Check if user exists in teachers data
    if (appData.teachers[employeeId]) {
        const teacher = appData.teachers[employeeId];
        console.log('✅ Teacher found in database:', teacher);
        
        // Validate school and subject match
        if (teacher.school === school && teacher.subject === subject) {
            console.log('✅ Credentials are valid - proceeding with login');
            
            // Set current user
            currentUser = {
                employeeId,
                ...teacher,
                isAdmin: false
            };
            
            currentSelectedSchool = teacher.school;
            
            console.log('✅ Current user set:', currentUser);
            
            // Clear the form
            schoolField.value = '';
            employeeField.value = '';
            subjectField.value = '';
            
            // Proceed to main app
            showMainApp();
            return;
        } else {
            console.log('❌ Credentials invalid - school or subject mismatch');
            showError('Invalid credentials. Please check your school and subject selection.');
        }
    } else {
        console.log('❌ Employee ID not found in database');
        showError('Employee ID not found. Please check your credentials.');
    }
}

function showAdminPasswordField() {
    console.log('🔄 Showing admin password field');
    hideError();
    
    const adminPasswordSection = document.getElementById('adminPasswordSection');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    
    if (adminPasswordSection && adminLoginBtn) {
        adminPasswordSection.classList.remove('hidden');
        adminLoginBtn.style.display = 'none';
        
        const passwordField = document.getElementById('adminPassword');
        if (passwordField) {
            setTimeout(() => passwordField.focus(), 100);
        }
        console.log('✅ Admin password field shown');
    }
}

function hideAdminPasswordField() {
    console.log('🔄 Hiding admin password field');
    hideError();
    
    const adminPasswordSection = document.getElementById('adminPasswordSection');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminPasswordField = document.getElementById('adminPassword');
    
    if (adminPasswordSection && adminLoginBtn) {
        adminPasswordSection.classList.add('hidden');
        adminLoginBtn.style.display = 'block';
        
        if (adminPasswordField) {
            adminPasswordField.value = '';
        }
        console.log('✅ Admin password field hidden');
    }
}

function handleAdminPasswordSubmit() {
    console.log('🔄 Admin password submitted');
    hideError();
    
    const adminPasswordField = document.getElementById('adminPassword');
    if (!adminPasswordField) {
        showError('Password field not found. Please refresh the page.');
        return;
    }
    
    const password = adminPasswordField.value.trim();
    
    if (!password) {
        showError('Please enter admin password');
        return;
    }
    
    if (password === appData.adminPassword) {
        console.log('✅ Admin password correct - proceeding with login');
        
        currentUser = {
            employeeId: 'admin',
            ...appData.teachers['admin'],
            isAdmin: true
        };
        
        currentSelectedSchool = 'school1';
        
        console.log('✅ Admin user set:', currentUser);
        
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        adminPasswordField.value = '';
        hideAdminPasswordField();
        
        showMainApp();
    } else {
        console.log('❌ Admin password incorrect');
        showError('Incorrect admin password. Please try again.');
        adminPasswordField.value = '';
        adminPasswordField.focus();
    }
}

// Show Main Application
function showMainApp() {
    console.log('🔄 Showing main app - current user:', currentUser);
    
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
    
    console.log('🔄 Switching screens...');
    
    loginScreen.classList.remove('active');
    loginScreen.style.display = 'none';
    
    mainApp.classList.remove('hidden');
    mainApp.classList.add('active');
    mainApp.style.display = 'block';
    
    console.log('✅ Screen transition completed');
    
    loadUserData();
    
    if (currentUser.isAdmin) {
        showAdminFeatures();
    } else {
        showTeacherFeatures();
    }
}

// Load User Data
function loadUserData() {
    console.log('🔄 Loading user data for:', currentUser.name);
    loadMultiSubjectDashboard();
    loadProfile();
    loadTeamMembers();
    loadChatMessages();
    loadChaptersList();
    
    if (currentUser.isAdmin) {
        loadAnalytics();
        loadAdminPanel();
    }
}

// Enhanced Multi-Subject Dashboard
function loadMultiSubjectDashboard() {
    console.log('🔄 Loading multi-subject dashboard...');
    
    const welcomeUser = document.getElementById('welcomeUser');
    if (welcomeUser && currentUser) {
        welcomeUser.textContent = currentUser.name;
        console.log('✅ Welcome message set for:', currentUser.name);
    }
    
    // Show teacher school selector
    if (!currentUser.isAdmin) {
        const teacherSchoolSelector = document.getElementById('teacherSchoolSelector');
        const dashboardSchool = document.getElementById('dashboardSchool');
        
        if (teacherSchoolSelector && dashboardSchool) {
            teacherSchoolSelector.classList.remove('hidden');
            dashboardSchool.value = currentSelectedSchool;
        }
    }
    
    const container = document.getElementById('multiSubjectStats');
    if (!container) return;
    
    const schoolToShow = currentUser.isAdmin ? null : (currentSelectedSchool || currentUser.school);
    
    const subjectsData = appData.subjects.map(subject => {
        const subjectStats = calculateSubjectStats(subject, schoolToShow);
        return {
            subject,
            ...subjectStats
        };
    });
    
    container.innerHTML = `
        <div class="subjects-grid">
            ${subjectsData.map(data => createSubjectCard(data)).join('')}
        </div>
        
        <div class="progress-bar-container">
            <label class="progress-label">Overall Progress Across All Subjects</label>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${calculateOverallProgress(subjectsData)}%"></div>
            </div>
            <p style="margin-top: 8px; text-align: center;">
                ${calculateOverallProgress(subjectsData).toFixed(1)}% Complete
            </p>
        </div>
    `;
}

function calculateSubjectStats(subject, schoolFilter = null) {
    const totalChapters11 = appData.curriculum[subject]['11'].length;
    const totalChapters12 = appData.curriculum[subject]['12'].length;
    const totalChapters = totalChapters11 + totalChapters12;
    
    let completedCount = 0;
    let testsCount = 0;
    
    [11, 12].forEach(grade => {
        appData.curriculum[subject][grade].forEach(chapter => {
            const key = `${subject}_${grade}_${chapter}`;
            if (chapterProgress[key] && chapterProgress[key].completed) {
                if (!schoolFilter || !chapterProgress[key].school || chapterProgress[key].school === schoolFilter) {
                    completedCount++;
                    if (chapterProgress[key].testCompleted) {
                        testsCount++;
                    }
                }
            }
        });
    });
    
    const progressPercentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;
    
    return {
        totalChapters,
        completedCount,
        testsCount,
        progressPercentage
    };
}

function createSubjectCard(data) {
    const subjectIcons = {
        physics: '⚛️',
        chemistry: '🧪',
        mathematics: '📊',
        biology: '🧬'
    };
    
    return `
        <div class="subject-section">
            <div class="subject-header">
                <div class="subject-icon ${data.subject}">
                    ${subjectIcons[data.subject]}
                </div>
                <h3 class="subject-title">${data.subject.charAt(0).toUpperCase() + data.subject.slice(1)}</h3>
            </div>
            
            <div class="subject-stats">
                <div class="stat-item">
                    <div class="stat-value">${data.completedCount}</div>
                    <div class="stat-name">Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${data.totalChapters}</div>
                    <div class="stat-name">Total</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${data.testsCount}</div>
                    <div class="stat-name">Tests Done</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${Math.round(data.progressPercentage)}%</div>
                    <div class="stat-name">Progress</div>
                </div>
            </div>
            
            <div class="subject-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${data.progressPercentage}%"></div>
                </div>
            </div>
        </div>
    `;
}

function calculateOverallProgress(subjectsData) {
    if (subjectsData.length === 0) return 0;
    const totalProgress = subjectsData.reduce((sum, data) => sum + data.progressPercentage, 0);
    return totalProgress / subjectsData.length;
}

// Navigation
function navigateToSection(sectionName) {
    console.log('🔄 Navigating to section:', sectionName);
    
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
        
        // Load section-specific data
        if (sectionName === 'analytics' && currentUser && currentUser.isAdmin) {
            updateAnalytics();
        }
    }
}

// Curriculum Section with Teacher Restrictions
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
    
    const subject = currentCurriculumSubject;
    const chapters = appData.curriculum[subject][currentGrade];
    const container = document.getElementById('chaptersList');
    
    if (!container) return;
    
    // Show school selector for teachers (they can view other schools but only edit their own subject)
    if (!currentUser.isAdmin) {
        const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
        if (curriculumSchoolSelector) {
            curriculumSchoolSelector.classList.remove('hidden');
        }
    }
    
    const selectedSchool = currentUser.isAdmin ? null : (document.getElementById('curriculumSchool')?.value || currentUser.school);
    const canEdit = currentUser.isAdmin || (currentUser.subject === subject);
    
    container.innerHTML = chapters.map(chapter => {
        const key = `${subject}_${currentGrade}_${chapter}`;
        const progress = chapterProgress[key] || {};
        const isCompleted = progress.completed || false;
        const completionDate = progress.date || '';
        const testCompleted = progress.testCompleted || false;
        const testMode = progress.testMode || '';
        
        // Warning for incomplete tests (requirement 8)
        const hasTestWarning = isCompleted && !testCompleted;
        const testStatus = testCompleted ? 
            `✅ Test Done (${testMode ? testMode.charAt(0).toUpperCase() + testMode.slice(1) : 'Unknown'})` : 
            '❌ Test Pending';
        
        return `
            <div class="chapter-card ${isCompleted ? 'completed' : ''} ${hasTestWarning ? 'test-warning' : ''}" 
                 data-chapter="${chapter}" ${canEdit ? 'style="cursor: pointer;"' : 'style="cursor: default;"'}>
                <div class="chapter-header">
                    <div class="chapter-checkbox ${isCompleted ? 'checked' : ''}">
                        ${isCompleted ? '✓' : ''}
                    </div>
                    <h4 class="chapter-title">${chapter}</h4>
                    ${!canEdit ? '<span style="font-size: 12px; opacity: 0.7;">(View Only)</span>' : ''}
                </div>
                <div class="chapter-details">
                    <span>${completionDate ? `Completed: ${completionDate}` : 'Not completed'}</span>
                    <span class="${hasTestWarning ? 'test-warning-indicator' : ''}">${testStatus}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers only for editable chapters
    container.querySelectorAll('.chapter-card').forEach(card => {
        if (canEdit) {
            card.addEventListener('click', () => openChapterModal(card.dataset.chapter));
        }
    });
}

function openChapterModal(chapter) {
    if (!currentUser) return;
    
    const subject = currentCurriculumSubject;
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
    const testMode = document.getElementById('testMode');
    const modal = document.getElementById('chapterModal');
    
    if (modalTitle) modalTitle.textContent = chapter;
    if (completionDate) completionDate.value = progress.date || '';
    if (testCompleted) testCompleted.checked = progress.testCompleted || false;
    if (testMode) testMode.value = progress.testMode || '';
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
    const testModeInput = document.getElementById('testMode');
    
    if (!dateInput || !testInput || !testModeInput) return;
    
    const date = dateInput.value;
    const testCompleted = testInput.checked;
    const testMode = testModeInput.value;
    
    if (!date) {
        alert('Please select a completion date');
        return;
    }
    
    if (testCompleted && !testMode) {
        alert('Please select test mode when marking test as completed');
        return;
    }
    
    const wasCompleted = chapterProgress[currentModalChapter.key]?.completed || false;
    
    chapterProgress[currentModalChapter.key] = {
        completed: true,
        date,
        testCompleted,
        testMode: testCompleted ? testMode : '',
        chapter: currentModalChapter.chapter,
        subject: currentModalChapter.subject,
        grade: currentModalChapter.grade,
        school: currentSelectedSchool || currentUser.school
    };
    
    saveToStorage();
    loadChaptersList();
    loadMultiSubjectDashboard();
    closeChapterModal();
    
    // Confetti for first-time completion
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
    }
    
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
    
    const name = editName.value;
    const email = editEmail.value;
    const phone = editPhone.value;
    const dob = editDob.value;
    
    if (!name || !email || !phone || !dob) {
        alert('Please fill in all fields');
        return;
    }
    
    // Update in appData.teachers if admin
    if (currentUser.isAdmin || currentUser.employeeId in appData.teachers) {
        appData.teachers[currentUser.employeeId] = {
            ...appData.teachers[currentUser.employeeId],
            name,
            email,
            phone,
            dob
        };
    }
    
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    currentUser.dob = dob;
    
    loadProfile();
    saveToStorage();
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

// Admin and Teacher Features
function showAdminFeatures() {
    console.log('🔄 Showing admin features...');
    document.querySelectorAll('.admin-only').forEach(element => {
        element.classList.remove('hidden');
        element.classList.add('show');
    });
}

function showTeacherFeatures() {
    console.log('🔄 Showing teacher features...');
    const teacherSchoolSelector = document.getElementById('teacherSchoolSelector');
    const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
    
    if (teacherSchoolSelector) teacherSchoolSelector.classList.remove('hidden');
    if (curriculumSchoolSelector) curriculumSchoolSelector.classList.remove('hidden');
}

// Advanced Analytics with Filtering
function loadAnalytics() {
    updateAnalytics();
}

function updateAnalytics() {
    updateAnalyticsOverview();
    loadSubjectChart();
    loadSchoolChart();
    loadTestChart();
    loadTimelineChart();
    generateAnalysisReport();
}

function updateAnalyticsOverview() {
    const filteredProgress = getFilteredProgress();
    const totalChapters = getTotalChaptersCount();
    
    const completedChapters = Object.values(filteredProgress).filter(p => p.completed).length;
    const testsCompleted = Object.values(filteredProgress).filter(p => p.completed && p.testCompleted).length;
    const overallCompletion = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;
    
    // Calculate projected completion
    const completedWithDates = Object.values(filteredProgress)
        .filter(p => p.completed && p.date)
        .map(p => new Date(p.date))
        .sort((a, b) => a - b);
    
    let projectedCompletion = 'N/A';
    if (completedWithDates.length > 5) {
        const recentCompletions = completedWithDates.slice(-5);
        const avgDaysBetween = (recentCompletions[recentCompletions.length - 1] - recentCompletions[0]) / (recentCompletions.length - 1) / (1000 * 60 * 60 * 24);
        const remainingChapters = totalChapters - completedChapters;
        const daysToComplete = remainingChapters * avgDaysBetween;
        const projectedDate = new Date();
        projectedDate.setDate(projectedDate.getDate() + daysToComplete);
        projectedCompletion = projectedDate.toLocaleDateString();
    }
    
    // Update overview cards
    const overallCompletionEl = document.getElementById('overallCompletion');
    const totalChaptersEl = document.getElementById('totalChapters');
    const testsCompletedEl = document.getElementById('testsCompleted');
    const projectedCompletionEl = document.getElementById('projectedCompletion');
    
    if (overallCompletionEl) overallCompletionEl.textContent = `${overallCompletion.toFixed(1)}%`;
    if (totalChaptersEl) totalChaptersEl.textContent = totalChapters.toString();
    if (testsCompletedEl) testsCompletedEl.textContent = testsCompleted.toString();
    if (projectedCompletionEl) projectedCompletionEl.textContent = projectedCompletion;
}

function getFilteredProgress() {
    let filtered = { ...chapterProgress };
    
    if (analyticsFilters.school) {
        filtered = Object.fromEntries(
            Object.entries(filtered).filter(([key, progress]) => 
                progress.school === analyticsFilters.school
            )
        );
    }
    
    if (analyticsFilters.subject) {
        filtered = Object.fromEntries(
            Object.entries(filtered).filter(([key, progress]) => 
                progress.subject === analyticsFilters.subject
            )
        );
    }
    
    if (analyticsFilters.testMode) {
        if (analyticsFilters.testMode === 'incomplete') {
            filtered = Object.fromEntries(
                Object.entries(filtered).filter(([key, progress]) => 
                    progress.completed && !progress.testCompleted
                )
            );
        } else {
            filtered = Object.fromEntries(
                Object.entries(filtered).filter(([key, progress]) => 
                    progress.testMode === analyticsFilters.testMode
                )
            );
        }
    }
    
    return filtered;
}

function getTotalChaptersCount() {
    let total = 0;
    const subjects = analyticsFilters.subject ? [analyticsFilters.subject] : appData.subjects;
    
    subjects.forEach(subject => {
        total += appData.curriculum[subject]['11'].length;
        total += appData.curriculum[subject]['12'].length;
    });
    
    return total;
}

function loadSubjectChart() {
    const canvas = document.getElementById('subjectChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const subjects = analyticsFilters.subject ? [analyticsFilters.subject] : appData.subjects;
    const subjectData = subjects.map(subject => {
        const stats = calculateSubjectStats(subject, analyticsFilters.school);
        return {
            subject,
            progress: stats.progressPercentage
        };
    });
    
    if (typeof Chart !== 'undefined') {
        // Destroy existing chart if it exists
        if (window.subjectChartInstance) {
            window.subjectChartInstance.destroy();
        }
        
        window.subjectChartInstance = new Chart(ctx, {
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
    
    const schools = analyticsFilters.school ? [analyticsFilters.school] : Object.keys(appData.schools);
    const schoolData = schools.map(schoolId => {
        const schoolProgress = Object.values(chapterProgress)
            .filter(p => p.school === schoolId && p.completed);
        
        return {
            school: appData.schools[schoolId],
            completed: schoolProgress.length
        };
    });
    
    if (typeof Chart !== 'undefined') {
        // Destroy existing chart if it exists
        if (window.schoolChartInstance) {
            window.schoolChartInstance.destroy();
        }
        
        window.schoolChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: schoolData.map(d => d.school),
                datasets: [{
                    data: schoolData.map(d => d.completed),
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

function loadTestChart() {
    const canvas = document.getElementById('testChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const filteredProgress = getFilteredProgress();
    const completedChapters = Object.values(filteredProgress).filter(p => p.completed);
    
    const onlineTests = completedChapters.filter(p => p.testCompleted && p.testMode === 'online').length;
    const offlineTests = completedChapters.filter(p => p.testCompleted && p.testMode === 'offline').length;
    const incompleteTests = completedChapters.filter(p => !p.testCompleted).length;
    
    if (typeof Chart !== 'undefined') {
        // Destroy existing chart if it exists
        if (window.testChartInstance) {
            window.testChartInstance.destroy();
        }
        
        window.testChartInstance = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Online Tests', 'Offline Tests', 'Incomplete Tests'],
                datasets: [{
                    data: [onlineTests, offlineTests, incompleteTests],
                    backgroundColor: ['#5D878F', '#D2BA4C', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

function loadTimelineChart() {
    const canvas = document.getElementById('timelineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const filteredProgress = getFilteredProgress();
    const completionsWithDates = Object.values(filteredProgress)
        .filter(p => p.completed && p.date)
        .map(p => ({ date: new Date(p.date), count: 1 }))
        .sort((a, b) => a.date - b.date);
    
    // Group by month
    const monthlyData = {};
    completionsWithDates.forEach(item => {
        const monthKey = `${item.date.getFullYear()}-${item.date.getMonth() + 1}`;
        if (!monthlyData[monthKey]) {
            monthlyData[monthKey] = 0;
        }
        monthlyData[monthKey]++;
    });
    
    const sortedMonths = Object.keys(monthlyData).sort();
    const labels = sortedMonths.map(month => {
        const [year, monthNum] = month.split('-');
        return new Date(year, monthNum - 1).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    });
    const data = sortedMonths.map(month => monthlyData[month]);
    
    if (typeof Chart !== 'undefined') {
        // Destroy existing chart if it exists
        if (window.timelineChartInstance) {
            window.timelineChartInstance.destroy();
        }
        
        window.timelineChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Chapters Completed',
                    data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function generateAnalysisReport() {
    const reportContainer = document.getElementById('analysisReport');
    if (!reportContainer) return;
    
    const filteredProgress = getFilteredProgress();
    const completedChapters = Object.values(filteredProgress).filter(p => p.completed);
    const totalChapters = getTotalChaptersCount();
    const testsCompleted = completedChapters.filter(p => p.testCompleted).length;
    const overallCompletion = totalChapters > 0 ? (completedChapters.length / totalChapters) * 100 : 0;
    
    // Calculate subject-wise performance
    const subjectPerformance = appData.subjects.map(subject => {
        const stats = calculateSubjectStats(subject, analyticsFilters.school);
        return { subject, progress: stats.progressPercentage };
    }).sort((a, b) => b.progress - a.progress);
    
    // Calculate school-wise performance
    const schoolPerformance = Object.keys(appData.schools).map(schoolId => {
        const schoolProgress = Object.values(chapterProgress)
            .filter(p => p.school === schoolId && p.completed);
        return { school: appData.schools[schoolId], completed: schoolProgress.length };
    }).sort((a, b) => b.completed - a.completed);
    
    const report = `
        <div class="analysis-section">
            <h5>Current Status Overview</h5>
            <p><strong>Overall Completion:</strong> ${overallCompletion.toFixed(1)}% (${completedChapters.length}/${totalChapters} chapters)</p>
            <p><strong>Test Completion Rate:</strong> ${completedChapters.length > 0 ? ((testsCompleted / completedChapters.length) * 100).toFixed(1) : 0}% (${testsCompleted}/${completedChapters.length} completed chapters)</p>
        </div>
        
        <div class="analysis-section">
            <h5>Subject Performance Ranking</h5>
            <ul>
                ${subjectPerformance.map((subj, index) => 
                    `<li>${index + 1}. ${subj.subject.charAt(0).toUpperCase() + subj.subject.slice(1)}: ${subj.progress.toFixed(1)}%</li>`
                ).join('')}
            </ul>
        </div>
        
        <div class="analysis-section">
            <h5>School Performance Ranking</h5>
            <ul>
                ${schoolPerformance.slice(0, 3).map((school, index) => 
                    `<li>${index + 1}. ${school.school}: ${school.completed} chapters completed</li>`
                ).join('')}
            </ul>
        </div>
        
        <div class="analysis-section">
            <h5>Recommendations</h5>
            <ul>
                ${overallCompletion < 50 ? '<li><strong>Priority Action Required:</strong> Overall progress is below 50%. Consider increasing teaching pace and additional support.</li>' : ''}
                ${testsCompleted / completedChapters.length < 0.8 ? '<li><strong>Test Completion Issue:</strong> Many completed chapters lack proper testing. Focus on conducting chapter tests.</li>' : ''}
                ${subjectPerformance[subjectPerformance.length - 1].progress < 30 ? `<li><strong>Subject Focus:</strong> ${subjectPerformance[subjectPerformance.length - 1].subject} needs immediate attention with only ${subjectPerformance[subjectPerformance.length - 1].progress.toFixed(1)}% completion.</li>` : ''}
                <li><strong>Current Phase:</strong> ${overallCompletion > 75 ? 'Final Phase - Focus on revision and remaining chapters' : overallCompletion > 50 ? 'Mid Phase - Maintain current pace and ensure quality' : 'Initial Phase - Accelerate teaching and establish consistent pace'}</li>
            </ul>
        </div>
    `;
    
    reportContainer.innerHTML = report;
}

// Admin Panel Functions
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
            <div class="teacher-actions">
                <button class="btn btn--outline btn--sm" onclick="editChapterCompletion('${subject}', ${grade}, '${chapter}')">
                    Edit Status
                </button>
                <button class="btn btn--outline btn--sm" onclick="removeChapter('${subject}', ${grade}, '${chapter}')">
                    Remove
                </button>
            </div>
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
            <h4>${teacher.name}</h4>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Subject:</strong> ${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p><strong>School:</strong> ${appData.schools[teacher.school]}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
            <div class="teacher-actions">
                <button class="btn btn--secondary btn--sm" onclick="editTeacher('${id}')">Edit</button>
                <button class="btn btn--outline btn--sm" onclick="removeTeacher('${id}')">Remove</button>
            </div>
        </div>
    `).join('');
}

// Make functions globally accessible for onclick handlers
window.editChapterCompletion = function(subject, grade, chapter) {
    currentCurriculumSubject = subject;
    currentGrade = parseInt(grade);
    openChapterModal(chapter);
};

window.removeChapter = function(subject, grade, chapter) {
    if (confirm(`Are you sure you want to remove "${chapter}"?`)) {
        const index = appData.curriculum[subject][grade].indexOf(chapter);
        if (index > -1) {
            appData.curriculum[subject][grade].splice(index, 1);
            loadAdminChapters();
            
            const key = `${subject}_${grade}_${chapter}`;
            delete chapterProgress[key];
            saveToStorage();
            
            if (currentCurriculumSubject === subject && currentGrade === grade) {
                loadChaptersList();
            }
            
            loadMultiSubjectDashboard();
            alert('Chapter removed successfully!');
        }
    }
};

window.editTeacher = function(teacherId) {
    currentEditingTeacher = teacherId;
    const teacher = appData.teachers[teacherId];
    
    if (!teacher) return;
    
    // Populate modal with teacher data
    document.getElementById('modalTeacherTitle').textContent = 'Edit Teacher';
    document.getElementById('teacherEmployeeId').value = teacherId;
    document.getElementById('teacherName').value = teacher.name;
    document.getElementById('teacherSchool').value = teacher.school;
    document.getElementById('teacherSubject').value = teacher.subject;
    document.getElementById('teacherEmail').value = teacher.email;
    document.getElementById('teacherPhone').value = teacher.phone;
    document.getElementById('teacherDob').value = teacher.dob;
    
    // Disable employee ID editing
    document.getElementById('teacherEmployeeId').disabled = true;
    
    // Show modal
    document.getElementById('teacherModal').classList.remove('hidden');
};

window.removeTeacher = function(teacherId) {
    if (confirm('Are you sure you want to remove this teacher?')) {
        delete appData.teachers[teacherId];
        loadAdminTeachers();
        loadTeamMembers();
        saveToStorage();
        alert('Teacher removed successfully!');
    }
};

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
    
    if (currentCurriculumSubject === subject && currentGrade === grade) {
        loadChaptersList();
    }
    
    loadMultiSubjectDashboard();
    saveToStorage();
    alert('Chapter added successfully!');
}

// Teacher Modal Functions
function showAddTeacherModal() {
    currentEditingTeacher = null;
    
    // Clear and reset modal
    document.getElementById('modalTeacherTitle').textContent = 'Add New Teacher';
    document.getElementById('teacherEmployeeId').value = '';
    document.getElementById('teacherName').value = '';
    document.getElementById('teacherSchool').value = '';
    document.getElementById('teacherSubject').value = '';
    document.getElementById('teacherEmail').value = '';
    document.getElementById('teacherPhone').value = '';
    document.getElementById('teacherDob').value = '';
    
    // Enable employee ID editing
    document.getElementById('teacherEmployeeId').disabled = false;
    
    // Show modal
    document.getElementById('teacherModal').classList.remove('hidden');
}

function closeTeacherModal() {
    document.getElementById('teacherModal').classList.add('hidden');
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
        alert('Please fill in all fields');
        return;
    }
    
    // Check for duplicate employee ID when adding new teacher
    if (!currentEditingTeacher && appData.teachers[employeeId]) {
        alert('Employee ID already exists');
        return;
    }
    
    // Save teacher data
    appData.teachers[employeeId] = {
        name,
        school,
        subject,
        email,
        phone,
        dob
    };
    
    closeTeacherModal();
    loadAdminTeachers();
    loadTeamMembers();
    saveToStorage();
    
    alert(currentEditingTeacher ? 'Teacher updated successfully!' : 'Teacher added successfully!');
}

// Data Storage
function saveToStorage() {
    try {
        const data = {
            chapterProgress,
            chatMessages,
            curriculum: appData.curriculum,
            teachers: appData.teachers
        };
        // In a real application, this would save to a backend
        console.log('Data saved:', data);
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadStoredData() {
    // In a real application, this would load from a backend
    // For now, we'll use the generated sample data
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // Reset state
        currentUser = null;
        currentGrade = 11;
        currentModalChapter = null;
        currentEditingTeacher = null;
        currentSelectedSchool = null;
        currentCurriculumSubject = 'physics';
        analyticsFilters = { school: '', subject: '', testMode: '' };
        
        // Clear forms
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.reset();
        hideError();
        hideAdminPasswordField();
        
        // Hide admin features
        document.querySelectorAll('.admin-only').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('show');
        });
        
        // Hide teacher features
        const teacherSchoolSelector = document.getElementById('teacherSchoolSelector');
        const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
        
        if (teacherSchoolSelector) teacherSchoolSelector.classList.add('hidden');
        if (curriculumSchoolSelector) curriculumSchoolSelector.classList.add('hidden');
        
        // Switch back to login screen
        const loginScreen = document.getElementById('loginScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (loginScreen && mainApp) {
            mainApp.classList.remove('active');
            mainApp.classList.add('hidden');
            mainApp.style.display = 'none';
            loginScreen.classList.add('active');
            loginScreen.style.display = 'flex';
        }
        
        // Reset to dashboard
        navigateToSection('dashboard');
        
        // Destroy chart instances
        if (window.subjectChartInstance) window.subjectChartInstance.destroy();
        if (window.schoolChartInstance) window.schoolChartInstance.destroy();
        if (window.testChartInstance) window.testChartInstance.destroy();
        if (window.timelineChartInstance) window.timelineChartInstance.destroy();
    }
}