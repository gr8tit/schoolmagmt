CREATE TABLE school (
    school_id int(255) primary key auto_increment not null,
    school_name varchar(100) unique not null,
    schl_type ENUM('coeducational', 'same sex'),
    schl_desc varchar(255) not null,
    LGA_name varchar(100) not null,
    name_principal varchar(50) not null,
    no_VPs varchar(50) not null,
    no_HODs varchar(50) not null,
    no_teachers enum('male',  'females'),
    no_guidchanc varchar(50) not null,
    fund_src varchar(200) not null
);
CREATE INDEX idx_schoolmagmt
ON school (no_VPs, no_HODs);

CREATE TABLE school_profile (
    school_id int(255) references school(school_id),
    school_name varchar(100) references school(school_name),
    gender_total enum('male','female'),
    centre_code varchar(255) not null,
    street varchar(255) not null,
    PObox varchar(255) not null,
    Town_village varchar(255) not null,
    Telephone int(15) not null,
    Email varchar(50) not null,
    Ownership ENUM('public', 'private')

 );

CREATE TABLE Location(
    locat_type enum('rural', 'urban', 'others')not null,
    locate_others varchar(50) not null,
    LGA_id int primary key auto_increment,
    LGA_name varchar(50) references school(LGA_name),
    others varchar(50) not null
    
);

CREATE TABLE Evaluate_grade (
    school_id int(255) references school(school_id),
    grade enum('outstanding', 'good', 'fair', 'poor', 'v_poor')
);

CREATE INDEX idx_schoolmagmt
ON Evaluate_grade (grade);

CREATE TABLE Learners_ev (
    school_id int(255) references school(school_id),
    school_name varchar(100) references school(school_name),
    age_range varchar(30) not null,
    learner_outcom varchar(255) not null,
    provi_quality varchar(255) not null,
    guid_support varchar(255) not null,
    learn_env varchar(255) not null

);
CREATE TABLE Leadership_evalut (
    school_id int(255) references school(school_id),
    school_name varchar(100) references school(school_name),
    eveluat_date date not null,
    cordinator varchar(50) not null
);

CREATE TABLE Learning_learn(
    school_id int(255) references school(school_id),
    school_name varchar(100) references school(school_name),
    Learn_progress varchar(255) not null,
    Learn_Safety varchar(255) not null,
    Learn_needs varchar(255) not null,
    Learn_judge varchar(255) not null
    
);

CREATE TABLE Ext_evaluate (
    Evaluator_name varchar(100) not null,
    school_name varchar(100) references school(school_name),
    school_id int references school(school_id) 
);

CREATE TABLE school_type (
    school_id int(255) references school(school_id),
    school_level ENUM('pre_pry', 'pry', 'jnr_sec', 'snr_sec'),
    Boarden ENUM('morning', 'afternoon') not null,
    Day ENUM('Afternoon', 'shift') not null,
    Boardenday ENUM('evening', 'night') not null,
    op_mode enum('morning','afternoon','shift')
);

CREATE TABLE Ownership (
     Rel_body varchar(255) not null,
     individual varchar(255) not null,
     CBOs varchar(255) not null,
     NGOs varchar(255) not null,
     corp_org varchar(255) not null,
     others varchar(255) not null
);

CREATE TABLE fund_src(
    govt varchar(255) not null,
    PTA varchar(255) not null,
    dev_part varchar(255) not null,
    old_std varchar(255) not null,
    ppp varchar(255) not null,
    schl_comm varchar(255) not null,
    SBM varchar(255) not null
);
