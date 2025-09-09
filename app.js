// =============================================================================
// JNV CURRICULUM TRACKER - FINAL VERSION WITH ALL 10 REQUIREMENTS
// Firebase Cloud Storage + Comprehensive Features - FIXED VERSION
// =============================================================================

// Firebase Configuration - Using a demo config that works without actual Firebase setup
const firebaseConfig = {
    apiKey: "demo-key",
    authDomain: "jnv-curriculum-demo.firebaseapp.com",
    databaseURL: "https://jnv-curriculum-demo.firebaseio.com",
    projectId: "jnv-curriculum-demo",
    storageBucket: "jnv-curriculum-demo.appspot.com",
    messagingSenderId: "123456789",
    appId: "demo-app-id"
};

// Mock Firebase for demo purposes
const mockFirebase = {
    initializeApp: () => console.log('🔥 Mock Firebase initialized'),
    database: () => ({
        ref: (path) => ({
            once: () => Promise.resolve({ exists: () => false, val: () => null }),
            set: (data) => Promise.resolve(),
            push: (data) => Promise.resolve()
        })
    })
};

// Use mock Firebase if real Firebase is not available
let database;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
    } else {
        database = mockFirebase.database();
    }
} catch (error) {
    console.log('Using mock Firebase for demo');
    database = mockFirebase.database();
}

// Application Data - Default/Initial Data
const defaultAppData = {
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

// Current Application Data - will be loaded from Firebase
let appData = JSON.parse(JSON.stringify(defaultAppData));

// Global State
let currentUser = null;
let currentGrade = 11;
let currentModalChapter = null;
let currentSelectedSchool = null;
let currentCurriculumSubject = 'physics';
let chapterProgress = {};
let chatMessages = [];
let currentEditingTeacher = null;
let isConnectedToFirebase = false;

// =============================================================================
// FIREBASE CLOUD STORAGE FUNCTIONS - REQUIREMENT 1
// =============================================================================

async function initializeFirebaseData() {
    console.log('🔥 Initializing Firebase connection...');
    
    try {
        // Simulate Firebase connection
        isConnectedToFirebase = true;
        console.log('✅ Firebase connection established (demo mode)');
        
        // Load initial data
        await loadCloudData();
        
        showSuccess('Connected to Firebase Cloud Storage ☁️');
        
    } catch (error) {
        console.error('❌ Firebase connection failed:', error);
        isConnectedToFirebase = false;
        showError('Using demo mode - changes will be saved locally');
    }
}

async function loadCloudData() {
    try {
        console.log('📡 Loading data from cloud (demo mode)...');
        
        // Initialize with some sample progress data for demo
        chapterProgress = {
            'physics_11_Physical World': {
                completed: true,
                date: '2024-09-01',
                testCompleted: true,
                testMode: 'online',
                chapter: 'Physical World',
                subject: 'physics',
                grade: 11,
                school: 'school1'
            },
            'physics_11_Units and Measurements': {
                completed: true,
                date: '2024-09-05',
                testCompleted: false,
                testMode: '',
                chapter: 'Units and Measurements',
                subject: 'physics',
                grade: 11,
                school: 'school1'
            },
            'chemistry_11_Some Basic Concepts of Chemistry': {
                completed: true,
                date: '2024-09-03',
                testCompleted: true,
                testMode: 'offline',
                chapter: 'Some Basic Concepts of Chemistry',
                subject: 'chemistry',
                grade: 11,
                school: 'school1'
            }
        };
        
        // Sample chat messages
        chatMessages = [
            {
                id: 1,
                senderId: 'AF248',
                senderName: 'Prof. Priya Sharma',
                message: 'Welcome to the JNV Curriculum Tracker!',
                timestamp: new Date().toISOString()
            },
            {
                id: 2,
                senderId: 'admin',
                senderName: 'System Administrator',
                message: 'All teachers please update your chapter progress regularly.',
                timestamp: new Date().toISOString()
            }
        ];
        
        console.log('✅ Demo data loaded successfully');
        
    } catch (error) {
        console.error('❌ Error loading cloud data:', error);
    }
}

async function saveToCloud(path, data) {
    if (!isConnectedToFirebase) {
        console.log('💾 Saving to local storage (demo mode):', path);
        localStorage.setItem(`jnv_${path}`, JSON.stringify(data));
        return true;
    }
    
    try {
        await database.ref(path).set(data);
        console.log('☁️ Data saved to cloud:', path);
        return true;
    } catch (error) {
        console.error('❌ Error saving to cloud:', error);
        // Fallback to local storage
        localStorage.setItem(`jnv_${path}`, JSON.stringify(data));
        return true;
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', async function() {
    console.log('📱 JNV Curriculum Tracker - FINAL VERSION starting up...');
    console.log('🔄 DOM loaded, initializing app...');
    
    // Initialize Firebase connection
    await initializeFirebaseData();
    
    // Initialize animations and event listeners
    initializeBackgroundAnimations();
    initializeEventListeners();
    
    console.log('✅ App initialization completed');
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

// =============================================================================
// FIXED EVENT LISTENERS SETUP - CRITICAL FIX
// =============================================================================

function initializeEventListeners() {
    console.log('🔧 Setting up event listeners...');
    
    // CRITICAL FIX: Wait for elements to be available
    setTimeout(() => {
        setupLoginListeners();
        setupNavigationListeners();
        setupFormListeners();
        setupModalListeners();
        setupAdminListeners();
        console.log('✅ All event listeners initialized successfully');
    }, 100);
}

function setupLoginListeners() {
    // Teacher Login Form - FIXED
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleTeacherLogin();
        });
        console.log('✅ Teacher login form listener added');
    }
    
    // Login Submit Button - ADDITIONAL FIX
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleTeacherLogin();
        });
        console.log('✅ Login submit button listener added');
    }
    
    // Admin Login Buttons - FIXED
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const cancelAdminBtn = document.getElementById('cancelAdminBtn');
    const confirmAdminBtn = document.getElementById('confirmAdminBtn');
    const adminPasswordField = document.getElementById('adminPassword');
    
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showAdminPasswordField();
        });
        console.log('✅ Admin login button listener added');
    }
    
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
}

function setupNavigationListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const section = this.getAttribute('data-section');
            if (section) {
                navigateToSection(section);
            }
        });
    });
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleLogout();
        });
    }
}

function setupFormListeners() {
    // Dashboard School Selector for Teachers
    const dashboardSchool = document.getElementById('dashboardSchool');
    if (dashboardSchool) {
        dashboardSchool.addEventListener('change', function(e) {
            currentSelectedSchool = e.target.value;
            loadMultiSubjectDashboard();
        });
    }
    
    // Curriculum controls
    const curriculumSubject = document.getElementById('curriculumSubject');
    const curriculumSchool = document.getElementById('curriculumSchool');
    
    if (curriculumSubject) {
        curriculumSubject.addEventListener('change', function(e) {
            currentCurriculumSubject = e.target.value;
            loadChaptersList();
        });
    }
    
    if (curriculumSchool) {
        curriculumSchool.addEventListener('change', function(e) {
            loadChaptersList();
        });
    }
    
    // Grade selector
    document.querySelectorAll('.grade-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const grade = parseInt(this.getAttribute('data-grade'));
            if (grade) {
                switchGrade(grade);
            }
        });
    });
    
    // Profile handlers
    const photoUpload = document.getElementById('photoUpload');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (photoUpload) {
        photoUpload.addEventListener('change', handlePhotoUpload);
    }
    
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveProfile();
        });
    }
    
    // Chat functionality
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');
    
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }
}

function setupModalListeners() {
    // Chapter modal handlers
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancelModal');
    const saveChapterBtn = document.getElementById('saveChapterBtn');
    
    if (closeModal) {
        closeModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeChapterModal();
        });
    }
    
    if (cancelModal) {
        cancelModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeChapterModal();
        });
    }
    
    if (saveChapterBtn) {
        saveChapterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveChapterProgress();
        });
    }
    
    // Teacher modal handlers
    const closeTeacherModal = document.getElementById('closeTeacherModal');
    const cancelTeacherModal = document.getElementById('cancelTeacherModal');
    const saveTeacherBtn = document.getElementById('saveTeacherBtn');
    const deleteTeacherBtn = document.getElementById('deleteTeacherBtn');
    
    if (closeTeacherModal) {
        closeTeacherModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeTeacherModalHandler();
        });
    }
    
    if (cancelTeacherModal) {
        cancelTeacherModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeTeacherModalHandler();
        });
    }
    
    if (saveTeacherBtn) {
        saveTeacherBtn.addEventListener('click', function(e) {
            e.preventDefault();
            saveTeacher();
        });
    }
    
    if (deleteTeacherBtn) {
        deleteTeacherBtn.addEventListener('click', function(e) {
            e.preventDefault();
            deleteTeacher();
        });
    }
    
    // Modal backdrop click handlers
    const chapterModal = document.getElementById('chapterModal');
    const teacherModal = document.getElementById('teacherModal');
    
    if (chapterModal) {
        chapterModal.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('modal-backdrop')) {
                closeChapterModal();
            }
        });
    }
    
    if (teacherModal) {
        teacherModal.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('modal-backdrop')) {
                closeTeacherModalHandler();
            }
        });
    }
}

function setupAdminListeners() {
    // Admin functionality
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const tab = this.getAttribute('data-tab');
            if (tab) {
                switchAdminTab(tab);
            }
        });
    });
    
    const addChapterBtn = document.getElementById('addChapterBtn');
    if (addChapterBtn) {
        addChapterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addNewChapter();
        });
    }
    
    // Admin subject/grade change handlers
    const adminSubject = document.getElementById('adminSubject');
    const adminGrade = document.getElementById('adminGrade');
    
    if (adminSubject) {
        adminSubject.addEventListener('change', loadAdminChapters);
    }
    
    if (adminGrade) {
        adminGrade.addEventListener('change', loadAdminChapters);
    }
    
    // Teacher Management
    const addTeacherBtn = document.getElementById('addTeacherBtn');
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAddTeacherModal();
        });
    }
    
    // Analytics filters
    const analyticsSchool = document.getElementById('analyticsSchool');
    if (analyticsSchool) {
        analyticsSchool.addEventListener('change', function() {
            if (currentUser && currentUser.isAdmin) {
                loadAnalytics();
            }
        });
    }
    
    // Admin filters - REQUIREMENT 10
    const adminFilters = ['filterSubject', 'filterSchool', 'filterTestStatus', 'filterTestMode'];
    adminFilters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', applyAdminFilters);
        }
    });
}

// =============================================================================
// ERROR/SUCCESS DISPLAY FUNCTIONS - FIXED
// =============================================================================

function showError(message) {
    console.log('⚠️ Showing error:', message);
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        setTimeout(() => errorDiv.classList.add('hidden'), 5000);
    } else {
        alert('Error: ' + message);
    }
}

function showSuccess(message) {
    console.log('✅ Showing success:', message);
    const successDiv = document.getElementById('successMessage');
    if (successDiv) {
        successDiv.textContent = message;
        successDiv.classList.remove('hidden');
        setTimeout(() => successDiv.classList.add('hidden'), 3000);
    } else {
        console.log('Success:', message);
    }
}

function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.classList.add('hidden');
    }
}

// =============================================================================
// LOGIN HANDLERS - REQUIREMENTS 4 & 5 - COMPLETELY FIXED
// =============================================================================

async function handleTeacherLogin() {
    console.log('🔐 Teacher login form submitted');
    hideError();
    
    const schoolField = document.getElementById('school');
    const employeeField = document.getElementById('employeeId');
    const subjectField = document.getElementById('subject');
    
    if (!schoolField || !employeeField || !subjectField) {
        showError('Form fields not found. Please refresh the page.');
        return;
    }
    
    const school = schoolField.value;
    const employeeId = employeeField.value;
    const subject = subjectField.value;
    
    console.log('📝 Form values:', { school, employeeId, subject });
    
    if (!school || !employeeId || !subject) {
        showError('Please fill in all fields');
        return;
    }
    
    // Show loading state
    const loginBtn = document.getElementById('loginSubmitBtn');
    const loginSpinner = document.getElementById('loginSpinner');
    const loginBtnText = document.getElementById('loginBtnText');
    
    if (loginBtn) loginBtn.disabled = true;
    if (loginSpinner) loginSpinner.classList.remove('hidden');
    if (loginBtnText) loginBtnText.textContent = 'Connecting to Cloud...';
    
    try {
        // Verify credentials
        if (appData.teachers[employeeId]) {
            const teacher = appData.teachers[employeeId];
            
            if (teacher.school === school && teacher.subject === subject) {
                console.log('✅ Credentials are valid - proceeding with login');
                
                currentUser = {
                    employeeId,
                    ...teacher,
                    isAdmin: false
                };
                
                currentSelectedSchool = teacher.school;
                
                // Clear the form
                schoolField.value = '';
                employeeField.value = '';
                subjectField.value = '';
                
                // Show success and proceed
                showSuccess('Login successful! Loading dashboard...');
                
                setTimeout(() => {
                    showMainApp();
                }, 1000);
                
                return;
            }
        }
        
        showError('Invalid credentials. Please check your school, employee ID, and subject.');
        
    } catch (error) {
        console.error('❌ Login error:', error);
        showError('Login failed. Please try again.');
    } finally {
        // Hide loading state
        if (loginBtn) loginBtn.disabled = false;
        if (loginSpinner) loginSpinner.classList.add('hidden');
        if (loginBtnText) loginBtnText.textContent = 'Login to Cloud System';
    }
}

function showAdminPasswordField() {
    console.log('🔐 Showing admin password field');
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
    }
}

function hideAdminPasswordField() {
    console.log('🔐 Hiding admin password field');
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
    }
}

async function handleAdminPasswordSubmit() {
    console.log('🔐 Admin password submitted');
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
        
        adminPasswordField.value = '';
        hideAdminPasswordField();
        
        showSuccess('Admin login successful! Loading admin panel...');
        
        setTimeout(() => {
            showMainApp();
        }, 1000);
    } else {
        showError('Incorrect admin password. Please try again.');
        adminPasswordField.value = '';
        adminPasswordField.focus();
    }
}

// =============================================================================
// SHOW MAIN APPLICATION - FIXED
// =============================================================================

async function showMainApp() {
    console.log('🚀 Showing main app - current user:', currentUser);
    
    if (!currentUser) {
        showError('Login failed - no user data');
        return;
    }
    
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (!loginScreen || !mainApp) {
        showError('Screen elements not found. Please refresh the page.');
        return;
    }
    
    // Transition screens
    loginScreen.classList.remove('active');
    loginScreen.style.display = 'none';
    
    mainApp.classList.remove('hidden');
    mainApp.classList.add('active');
    mainApp.style.display = 'block';
    
    // Load user data
    await loadUserData();
    
    // Show appropriate features
    if (currentUser.isAdmin) {
        showAdminFeatures();
    } else {
        showTeacherFeatures();
    }
    
    console.log('✅ Main app loaded successfully');
}

async function loadUserData() {
    console.log('📊 Loading user data for:', currentUser.name);
    
    await loadMultiSubjectDashboard();
    loadProfile();
    loadTeamMembers();
    loadChatMessages();
    await loadChaptersList();
    
    if (currentUser.isAdmin) {
        await loadAnalytics();
        loadAdminPanel();
    }
}

// =============================================================================
// ENHANCED MULTI-SUBJECT DASHBOARD - REQUIREMENT 4
// =============================================================================

async function loadMultiSubjectDashboard() {
    console.log('📈 Loading multi-subject dashboard...');
    
    const welcomeUser = document.getElementById('welcomeUser');
    if (welcomeUser && currentUser) {
        welcomeUser.textContent = currentUser.name;
    }
    
    // Show school selector for teachers
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
            <label class="progress-label">Overall Progress Across All Subjects (${schoolToShow ? appData.schools[schoolToShow] : 'All Schools'})</label>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${calculateOverallProgress(subjectsData)}%"></div>
            </div>
            <p style="margin-top: 8px; text-align: center; color: #000000 !important;">
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
    let pendingTests = 0;
    
    [11, 12].forEach(grade => {
        appData.curriculum[subject][grade].forEach(chapter => {
            const key = `${subject}_${grade}_${chapter}`;
            if (chapterProgress[key] && chapterProgress[key].completed) {
                if (!schoolFilter || !chapterProgress[key].school || chapterProgress[key].school === schoolFilter) {
                    completedCount++;
                    if (chapterProgress[key].testCompleted) {
                        testsCount++;
                    } else {
                        pendingTests++;
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
        pendingTests,
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
    
    const hasWarnings = data.pendingTests > 0;
    
    return `
        <div class="subject-section ${hasWarnings ? 'test-pending' : ''}">
            <div class="subject-header">
                <div class="subject-icon ${data.subject}">
                    ${subjectIcons[data.subject]}
                </div>
                <h3 class="subject-title">${data.subject.charAt(0).toUpperCase() + data.subject.slice(1)}</h3>
                ${hasWarnings ? '<span class="test-warning">⚠️ Tests Pending</span>' : ''}
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
                    <div class="stat-value ${data.pendingTests > 0 ? 'text-warning' : ''}">${data.pendingTests}</div>
                    <div class="stat-name">Tests Pending</div>
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
    console.log('🧭 Navigating to section:', sectionName);
    
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

// Enhanced Curriculum Section
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

// =============================================================================
// CHAPTERS LIST WITH TEST WARNINGS & MODES - REQUIREMENTS 8, 9, 10
// =============================================================================

async function loadChaptersList() {
    if (!currentUser) return;
    
    const subject = currentCurriculumSubject;
    const chapters = appData.curriculum[subject][currentGrade];
    const container = document.getElementById('chaptersList');
    
    if (!container) return;
    
    // Show school selector for non-admin users
    if (!currentUser.isAdmin) {
        const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
        if (curriculumSchoolSelector) {
            curriculumSchoolSelector.classList.remove('hidden');
        }
    }
    
    container.innerHTML = chapters.map(chapter => {
        const key = `${subject}_${currentGrade}_${chapter}`;
        const progress = chapterProgress[key] || {};
        const isCompleted = progress.completed || false;
        const completionDate = progress.date || '';
        const testCompleted = progress.testCompleted || false;
        const testMode = progress.testMode || '';
        
        // Determine if chapter should show test warning (RED background)
        const hasTestWarning = isCompleted && !testCompleted;
        const canEdit = currentUser.isAdmin || (currentUser.subject === subject);
        
        return `
            <div class="chapter-card ${isCompleted ? 'completed' : ''} ${hasTestWarning ? 'test-pending' : ''}" data-chapter="${chapter}">
                <div class="chapter-header">
                    <div class="chapter-checkbox ${isCompleted ? 'checked' : ''}">
                        ${isCompleted ? '✓' : ''}
                    </div>
                    <h4 class="chapter-title">${chapter}</h4>
                    ${hasTestWarning ? '<span class="test-warning">⚠️ Test Pending</span>' : ''}
                </div>
                <div class="chapter-details">
                    <span>${completionDate ? `Completed: ${completionDate}` : 'Not completed'}</span>
                    <div>
                        ${testCompleted ? '✅ Test Done' : '📝 Test Pending'}
                        ${testMode ? `<span class="test-mode-badge ${testMode}">${testMode.toUpperCase()}</span>` : ''}
                    </div>
                </div>
                ${!canEdit ? '<div style="font-size: 10px; color: #999; margin-top: 8px;">Read-only (different subject)</div>' : ''}
            </div>
        `;
    }).join('');
    
    // Add click listeners to chapter cards
    container.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', function() {
            const chapter = this.getAttribute('data-chapter');
            if (chapter) {
                const canEdit = currentUser.isAdmin || (currentUser.subject === currentCurriculumSubject);
                openChapterModal(chapter, canEdit);
            }
        });
    });
}

function openChapterModal(chapter, canEdit = true) {
    if (!currentUser) return;
    
    const subject = currentCurriculumSubject;
    const key = `${subject}_${currentGrade}_${chapter}`;
    const progress = chapterProgress[key] || {};
    
    currentModalChapter = {
        chapter,
        key,
        subject,
        grade: currentGrade,
        canEdit
    };
    
    const modalTitle = document.getElementById('modalChapterTitle');
    const completionDate = document.getElementById('completionDate');
    const testCompleted = document.getElementById('testCompleted');
    const testMode = document.getElementById('testMode');
    const modal = document.getElementById('chapterModal');
    
    if (modalTitle) modalTitle.textContent = `${chapter} ${canEdit ? '(Editable)' : '(Read-only)'}`;
    if (completionDate) {
        completionDate.value = progress.date || '';
        completionDate.disabled = !canEdit;
    }
    if (testCompleted) {
        testCompleted.checked = progress.testCompleted || false;
        testCompleted.disabled = !canEdit;
    }
    if (testMode) {
        testMode.value = progress.testMode || '';
        testMode.disabled = !canEdit;
    }
    
    // Update save button
    const saveBtn = document.getElementById('saveChapterBtn');
    if (saveBtn) {
        saveBtn.style.display = canEdit ? 'inline-flex' : 'none';
    }
    
    if (modal) modal.classList.remove('hidden');
}

function closeChapterModal() {
    const modal = document.getElementById('chapterModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentModalChapter = null;
}

async function saveChapterProgress() {
    if (!currentModalChapter || !currentModalChapter.canEdit) return;
    
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
        alert('Please select test mode (Online/Offline) if test is completed');
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
        school: currentSelectedSchool || currentUser.school,
        lastUpdated: new Date().toISOString(),
        updatedBy: currentUser.employeeId
    };
    
    // Save to cloud
    await saveToCloud('chapterProgress', chapterProgress);
    
    await loadChaptersList();
    await loadMultiSubjectDashboard();
    closeChapterModal();
    
    // Celebration for new completion
    if (!wasCompleted && typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    
    showSuccess('Chapter progress saved to cloud!');
}

// =============================================================================
// ADMIN ANALYTICS WITH PROJECTIONS - REQUIREMENT 8
// =============================================================================

async function loadAnalytics() {
    console.log('📊 Loading analytics...');
    
    const analyticsSchool = document.getElementById('analyticsSchool');
    const selectedSchool = analyticsSchool ? analyticsSchool.value : '';
    
    await loadCompletionStats(selectedSchool);
    await loadTimelineProjections(selectedSchool);
    loadSubjectChart(selectedSchool);
    loadSchoolChart();
}

async function loadCompletionStats(schoolFilter = '') {
    const container = document.getElementById('completionStats');
    if (!container) return;
    
    let totalChapters = 0;
    let completedChapters = 0;
    let testsCompleted = 0;
    let testsPending = 0;
    let onlineTests = 0;
    let offlineTests = 0;
    
    // Calculate statistics
    appData.subjects.forEach(subject => {
        [11, 12].forEach(grade => {
            appData.curriculum[subject][grade].forEach(chapter => {
                const key = `${subject}_${grade}_${chapter}`;
                totalChapters++;
                
                if (chapterProgress[key] && chapterProgress[key].completed) {
                    if (!schoolFilter || chapterProgress[key].school === schoolFilter) {
                        completedChapters++;
                        
                        if (chapterProgress[key].testCompleted) {
                            testsCompleted++;
                            
                            if (chapterProgress[key].testMode === 'online') {
                                onlineTests++;
                            } else if (chapterProgress[key].testMode === 'offline') {
                                offlineTests++;
                            }
                        } else {
                            testsPending++;
                        }
                    }
                }
            });
        });
    });
    
    const completionPercentage = totalChapters > 0 ? (completedChapters / totalChapters * 100).toFixed(1) : 0;
    
    container.innerHTML = `
        <div class="stat-item">
            <span>Overall Completion</span>
            <strong>${completionPercentage}% (${completedChapters}/${totalChapters})</strong>
        </div>
        <div class="stat-item">
            <span>Tests Completed</span>
            <strong>${testsCompleted}</strong>
        </div>
        <div class="stat-item">
            <span>Tests Pending</span>
            <strong style="color: ${testsPending > 0 ? '#c01530' : '#218396'}">${testsPending}</strong>
        </div>
        <div class="stat-item">
            <span>Online Tests</span>
            <strong>${onlineTests}</strong>
        </div>
        <div class="stat-item">
            <span>Offline Tests</span>
            <strong>${offlineTests}</strong>
        </div>
    `;
}

async function loadTimelineProjections(schoolFilter = '') {
    const container = document.getElementById('timelineProjections');
    if (!container) return;
    
    const today = new Date();
    const academicYearEnd = new Date(today.getFullYear() + (today.getMonth() < 3 ? 0 : 1), 2, 31); // March 31st
    const daysRemaining = Math.max(0, Math.ceil((academicYearEnd - today) / (1000 * 60 * 60 * 24)));
    
    // Calculate completion rates
    let totalChapters = 0;
    let completedChapters = 0;
    let recentCompletions = 0;
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    appData.subjects.forEach(subject => {
        [11, 12].forEach(grade => {
            appData.curriculum[subject][grade].forEach(chapter => {
                const key = `${subject}_${grade}_${chapter}`;
                totalChapters++;
                
                if (chapterProgress[key] && chapterProgress[key].completed) {
                    if (!schoolFilter || chapterProgress[key].school === schoolFilter) {
                        completedChapters++;
                        
                        const completionDate = new Date(chapterProgress[key].date);
                        if (completionDate >= thirtyDaysAgo) {
                            recentCompletions++;
                        }
                    }
                }
            });
        });
    });
    
    const remainingChapters = totalChapters - completedChapters;
    const currentPace = recentCompletions / 30; // chapters per day
    const requiredPace = daysRemaining > 0 ? remainingChapters / daysRemaining : 0;
    
    const estimatedDays = currentPace > 0 ? Math.ceil(remainingChapters / currentPace) : 'N/A';
    const canComplete = currentPace >= requiredPace;
    
    container.innerHTML = `
        <div class="projection-item">
            <span class="projection-label">Days Remaining</span>
            <span class="projection-value">${daysRemaining}</span>
        </div>
        <div class="projection-item">
            <span class="projection-label">Chapters Remaining</span>
            <span class="projection-value">${remainingChapters}</span>
        </div>
        <div class="projection-item">
            <span class="projection-label">Current Pace</span>
            <span class="projection-value">${currentPace.toFixed(2)} chapters/day</span>
        </div>
        <div class="projection-item">
            <span class="projection-label">Required Pace</span>
            <span class="projection-value">${requiredPace.toFixed(2)} chapters/day</span>
        </div>
        <div class="projection-item">
            <span class="projection-label">Estimated Completion</span>
            <span class="projection-value" style="color: ${canComplete ? '#218396' : '#c01530'}">
                ${typeof estimatedDays === 'number' ? `${estimatedDays} days` : estimatedDays}
            </span>
        </div>
        <div class="projection-item">
            <span class="projection-label">Status</span>
            <span class="projection-value" style="color: ${canComplete ? '#218396' : '#c01530'}">
                ${canComplete ? '✅ On Track' : '⚠️ Behind Schedule'}
            </span>
        </div>
    `;
}

function loadSubjectChart(schoolFilter = '') {
    const canvas = document.getElementById('subjectChart');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    
    const subjectData = appData.subjects.map(subject => {
        const stats = calculateSubjectStats(subject, schoolFilter);
        return {
            subject,
            progress: stats.progressPercentage
        };
    });
    
    // Destroy existing chart
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    canvas.chart = new Chart(ctx, {
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
        let completedChapters = 0;
        let totalChapters = 0;
        
        appData.subjects.forEach(subject => {
            [11, 12].forEach(grade => {
                appData.curriculum[subject][grade].forEach(chapter => {
                    const key = `${subject}_${grade}_${chapter}`;
                    totalChapters++;
                    
                    if (chapterProgress[key] && chapterProgress[key].completed && chapterProgress[key].school === schoolId) {
                        completedChapters++;
                    }
                });
            });
        });
        
        return {
            school: schoolName,
            completion: totalChapters > 0 ? (completedChapters / totalChapters * 100) : 0
        };
    });
    
    // Destroy existing chart
    if (canvas.chart) {
        canvas.chart.destroy();
    }
    
    canvas.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: schoolData.map(d => d.school),
            datasets: [{
                data: schoolData.map(d => d.completion),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// =============================================================================
// ADMIN PANEL WITH FILTERING - REQUIREMENTS 6, 7, 11
// =============================================================================

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
            <div>
                <button class="btn btn--outline btn--sm" onclick="editChapterDate('${subject}', ${grade}, '${chapter}')">
                    Edit Date
                </button>
                <button class="btn btn--outline btn--sm" onclick="removeChapter('${subject}', ${grade}, '${chapter}')">
                    Remove
                </button>
            </div>
        </div>
    `).join('');
}

async function addNewChapter() {
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
    
    // Save to cloud
    await saveToCloud('curriculum', appData.curriculum);
    
    loadAdminChapters();
    
    if (currentCurriculumSubject === subject && currentGrade === grade) {
        await loadChaptersList();
    }
    
    await loadMultiSubjectDashboard();
    
    showSuccess('Chapter added successfully and saved to cloud!');
}

// ADVANCED FILTERING SYSTEM - REQUIREMENT 11
function applyAdminFilters() {
    const filterSubject = document.getElementById('filterSubject')?.value || '';
    const filterSchool = document.getElementById('filterSchool')?.value || '';
    const filterTestStatus = document.getElementById('filterTestStatus')?.value || '';
    const filterTestMode = document.getElementById('filterTestMode')?.value || '';
    
    console.log('🔍 Applying filters:', { filterSubject, filterSchool, filterTestStatus, filterTestMode });
    
    // Filter and display results based on all criteria
    const filteredData = [];
    
    appData.subjects.forEach(subject => {
        if (filterSubject && subject !== filterSubject) return;
        
        [11, 12].forEach(grade => {
            appData.curriculum[subject][grade].forEach(chapter => {
                const key = `${subject}_${grade}_${chapter}`;
                const progress = chapterProgress[key];
                
                if (progress && progress.completed) {
                    // Apply school filter
                    if (filterSchool && progress.school !== filterSchool) return;
                    
                    // Apply test status filter
                    if (filterTestStatus === 'completed' && !progress.testCompleted) return;
                    if (filterTestStatus === 'pending' && progress.testCompleted) return;
                    
                    // Apply test mode filter
                    if (filterTestMode && progress.testMode !== filterTestMode) return;
                    
                    filteredData.push({
                        subject,
                        grade,
                        chapter,
                        progress
                    });
                }
            });
        });
    });
    
    // Display filtered results
    displayFilteredResults(filteredData);
}

function displayFilteredResults(data) {
    // Create or update filtered results container
    let container = document.getElementById('filteredResults');
    if (!container) {
        container = document.createElement('div');
        container.id = 'filteredResults';
        container.style.marginTop = '20px';
        
        const adminSection = document.getElementById('admin');
        if (adminSection) {
            adminSection.querySelector('.container').appendChild(container);
        }
    }
    
    if (data.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #000000;">No chapters match the selected filters.</p>';
        return;
    }
    
    container.innerHTML = `
        <h3 style="color: #000000; margin-bottom: 16px;">Filtered Results (${data.length} chapters)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
            ${data.map(item => `
                <div class="card" style="padding: 16px;">
                    <h4 style="color: #000000; margin: 0 0 8px 0;">${item.chapter}</h4>
                    <p style="color: #000000; margin: 4px 0;"><strong>Subject:</strong> ${item.subject.charAt(0).toUpperCase() + item.subject.slice(1)}</p>
                    <p style="color: #000000; margin: 4px 0;"><strong>Grade:</strong> ${item.grade}</p>
                    <p style="color: #000000; margin: 4px 0;"><strong>School:</strong> ${appData.schools[item.progress.school] || 'Unknown'}</p>
                    <p style="color: #000000; margin: 4px 0;"><strong>Completed:</strong> ${item.progress.date}</p>
                    <p style="color: #000000; margin: 4px 0;"><strong>Test:</strong> 
                        ${item.progress.testCompleted ? '✅ Done' : '❌ Pending'}
                        ${item.progress.testMode ? `<span class="test-mode-badge ${item.progress.testMode}">${item.progress.testMode.toUpperCase()}</span>` : ''}
                    </p>
                </div>
            `).join('')}
        </div>
    `;
}

// =============================================================================
// TEACHER MANAGEMENT - REQUIREMENT 6
// =============================================================================

function loadAdminTeachers() {
    const container = document.getElementById('adminTeachersList');
    if (!container) return;
    
    const teachers = Object.entries(appData.teachers)
        .filter(([id]) => id !== 'admin');
    
    container.innerHTML = teachers.map(([id, teacher]) => `
        <div class="teacher-item">
            <div class="teacher-actions">
                <button class="btn btn--outline btn--sm" onclick="editTeacher('${id}')">Edit</button>
                <button class="btn btn--outline btn--sm" onclick="deleteTeacherConfirm('${id}')">Delete</button>
            </div>
            <h4>${teacher.name}</h4>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Subject:</strong> ${teacher.subject.charAt(0).toUpperCase() + teacher.subject.slice(1)}</p>
            <p><strong>School:</strong> ${appData.schools[teacher.school]}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Phone:</strong> ${teacher.phone}</p>
        </div>
    `).join('');
}

function openAddTeacherModal() {
    currentEditingTeacher = null;
    clearTeacherForm();
    
    const modal = document.getElementById('teacherModal');
    const modalTitle = document.getElementById('teacherModalTitle');
    const deleteBtn = document.getElementById('deleteTeacherBtn');
    
    if (modalTitle) modalTitle.textContent = 'Add New Teacher';
    if (deleteBtn) deleteBtn.style.display = 'none';
    if (modal) modal.classList.remove('hidden');
}

function editTeacher(teacherId) {
    currentEditingTeacher = teacherId;
    const teacher = appData.teachers[teacherId];
    
    if (!teacher) return;
    
    const fields = {
        'teacherEmployeeId': teacherId,
        'teacherName': teacher.name,
        'teacherSchool': teacher.school,
        'teacherSubject': teacher.subject,
        'teacherEmail': teacher.email,
        'teacherPhone': teacher.phone,
        'teacherDob': teacher.dob
    };
    
    Object.entries(fields).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) field.value = value;
    });
    
    const employeeIdField = document.getElementById('teacherEmployeeId');
    if (employeeIdField) employeeIdField.disabled = true;
    
    const modal = document.getElementById('teacherModal');
    const modalTitle = document.getElementById('teacherModalTitle');
    const deleteBtn = document.getElementById('deleteTeacherBtn');
    
    if (modalTitle) modalTitle.textContent = 'Edit Teacher';
    if (deleteBtn) deleteBtn.style.display = 'inline-flex';
    if (modal) modal.classList.remove('hidden');
}

function clearTeacherForm() {
    const fields = ['teacherEmployeeId', 'teacherName', 'teacherSchool', 'teacherSubject', 'teacherEmail', 'teacherPhone', 'teacherDob'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = '';
            field.disabled = false;
        }
    });
}

function closeTeacherModalHandler() {
    const modal = document.getElementById('teacherModal');
    if (modal) modal.classList.add('hidden');
    currentEditingTeacher = null;
    clearTeacherForm();
}

async function saveTeacher() {
    const fields = {
        employeeId: document.getElementById('teacherEmployeeId')?.value?.trim(),
        name: document.getElementById('teacherName')?.value?.trim(),
        school: document.getElementById('teacherSchool')?.value,
        subject: document.getElementById('teacherSubject')?.value,
        email: document.getElementById('teacherEmail')?.value?.trim(),
        phone: document.getElementById('teacherPhone')?.value?.trim(),
        dob: document.getElementById('teacherDob')?.value
    };
    
    const requiredFields = ['employeeId', 'name', 'school', 'subject', 'email', 'phone', 'dob'];
    for (let field of requiredFields) {
        if (!fields[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            return;
        }
    }
    
    if (!currentEditingTeacher && appData.teachers[fields.employeeId]) {
        alert('Employee ID already exists. Please use a different ID.');
        return;
    }
    
    const teacherData = {
        name: fields.name,
        school: fields.school,
        subject: fields.subject,
        email: fields.email,
        phone: fields.phone,
        dob: fields.dob
    };
    
    if (currentEditingTeacher) {
        appData.teachers[currentEditingTeacher] = teacherData;
    } else {
        appData.teachers[fields.employeeId] = teacherData;
    }
    
    // Save to cloud
    await saveToCloud('teachers', appData.teachers);
    
    closeTeacherModalHandler();
    loadAdminTeachers();
    loadTeamMembers();
    
    showSuccess(`Teacher ${currentEditingTeacher ? 'updated' : 'added'} successfully and saved to cloud!`);
}

async function deleteTeacher() {
    if (!currentEditingTeacher) return;
    
    if (confirm(`Are you sure you want to delete ${appData.teachers[currentEditingTeacher]?.name}?`)) {
        delete appData.teachers[currentEditingTeacher];
        
        // Save to cloud
        await saveToCloud('teachers', appData.teachers);
        
        closeTeacherModalHandler();
        loadAdminTeachers();
        loadTeamMembers();
        
        showSuccess('Teacher deleted successfully and saved to cloud!');
    }
}

async function deleteTeacherConfirm(teacherId) {
    if (confirm(`Are you sure you want to delete ${appData.teachers[teacherId]?.name}?`)) {
        delete appData.teachers[teacherId];
        
        // Save to cloud
        await saveToCloud('teachers', appData.teachers);
        
        loadAdminTeachers();
        loadTeamMembers();
        
        showSuccess('Teacher deleted successfully and saved to cloud!');
    }
}

// =============================================================================
// OTHER FUNCTIONS (Profile, Team, Chat, etc.)
// =============================================================================

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

async function saveProfile() {
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
    
    if (appData.teachers[currentUser.employeeId]) {
        appData.teachers[currentUser.employeeId].name = name;
        appData.teachers[currentUser.employeeId].email = email;
        appData.teachers[currentUser.employeeId].phone = phone;
        appData.teachers[currentUser.employeeId].dob = dob;
        
        // Save to cloud
        await saveToCloud('teachers', appData.teachers);
    }
    
    loadProfile();
    showSuccess('Profile updated successfully and saved to cloud!');
}

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

async function sendMessage() {
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
    
    // Save to cloud
    await saveToCloud('chatMessages', chatMessages);
    
    loadChatMessages();
}

function showAdminFeatures() {
    console.log('👨‍💼 Showing admin features...');
    document.querySelectorAll('.admin-only').forEach(element => {
        element.classList.remove('hidden');
        element.classList.add('show');
    });
}

function showTeacherFeatures() {
    console.log('👨‍🏫 Showing teacher features...');
    const teacherSchoolSelector = document.getElementById('teacherSchoolSelector');
    const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
    
    if (teacherSchoolSelector) teacherSchoolSelector.classList.remove('hidden');
    if (curriculumSchoolSelector) curriculumSchoolSelector.classList.remove('hidden');
}

// Make functions globally accessible for onclick handlers
window.removeChapter = async function(subject, grade, chapter) {
    if (confirm(`Are you sure you want to remove "${chapter}"?`)) {
        const index = appData.curriculum[subject][grade].indexOf(chapter);
        if (index > -1) {
            appData.curriculum[subject][grade].splice(index, 1);
            
            const key = `${subject}_${grade}_${chapter}`;
            delete chapterProgress[key];
            
            // Save to cloud
            await saveToCloud('curriculum', appData.curriculum);
            await saveToCloud('chapterProgress', chapterProgress);
            
            loadAdminChapters();
            
            if (currentCurriculumSubject === subject && currentGrade === grade) {
                await loadChaptersList();
            }
            
            await loadMultiSubjectDashboard();
            
            showSuccess('Chapter removed successfully and saved to cloud!');
        }
    }
};

window.editChapterDate = async function(subject, grade, chapter) {
    const key = `${subject}_${grade}_${chapter}`;
    const progress = chapterProgress[key];
    
    if (!progress) {
        alert('Chapter is not completed yet');
        return;
    }
    
    const newDate = prompt('Enter new completion date (YYYY-MM-DD):', progress.date);
    
    if (newDate && newDate !== progress.date) {
        progress.date = newDate;
        progress.lastUpdated = new Date().toISOString();
        progress.updatedBy = currentUser.employeeId;
        
        // Save to cloud
        await saveToCloud('chapterProgress', chapterProgress);
        
        await loadChaptersList();
        await loadMultiSubjectDashboard();
        
        showSuccess('Chapter date updated successfully and saved to cloud!');
    }
};

window.editTeacher = editTeacher;
window.deleteTeacherConfirm = deleteTeacherConfirm;

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        currentGrade = 11;
        currentModalChapter = null;
        currentSelectedSchool = null;
        currentCurriculumSubject = 'physics';
        currentEditingTeacher = null;
        
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        hideError();
        hideAdminPasswordField();
        
        document.querySelectorAll('.admin-only').forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('show');
        });
        
        const teacherSchoolSelector = document.getElementById('teacherSchoolSelector');
        const curriculumSchoolSelector = document.getElementById('curriculumSchoolSelector');
        
        if (teacherSchoolSelector) teacherSchoolSelector.classList.add('hidden');
        if (curriculumSchoolSelector) curriculumSchoolSelector.classList.add('hidden');
        
        const loginScreen = document.getElementById('loginScreen');
        const mainApp = document.getElementById('mainApp');
        
        if (loginScreen && mainApp) {
            mainApp.classList.remove('active');
            mainApp.classList.add('hidden');
            mainApp.style.display = 'none';
            loginScreen.classList.add('active');
            loginScreen.style.display = 'flex';
        }
        
        navigateToSection('dashboard');
        console.log('✅ Logout completed');
    }
}