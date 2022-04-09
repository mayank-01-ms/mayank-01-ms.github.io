const skills = {
    Concepts: {
        'Data Structures': 75,
        'Algorithms': 60,
        'DBMS': 70,
        'Operating System': 60,
        'OOPs': 70,
        'REST APIs': 65
    },
    'Programming Languages': {
        'C': 80,
        'C++': 85,
        'Java': 50
    },
    'Web Development': {
        'HTML5': 90,
        'CSS3': 90,
        'SAAS': 50,
        'JavaScript (ES 6)': 85,
        'PHP': 85,
        'MySQL': 70
    },
    'Version Control System': {
        'Git': 50,
        'Github': 85
    },
    'Tech Stack': {
        'MongoDB': 60,
        'Express': 60,
        'ReactJS': 70,
        'NodeJS': 60,
        'React Native': 60
    },
    'Developer Tools': {
        'VS Code': 75,
        'Postman': 65,
        'Chrome Debugging': 75
    },
    'Other Skills': {
        'Content Writing': 75,
        'Adobe Photoshop': 60,
        'UI/UX Designing': 50,
        'Microsoft Office': 45
    }
};

const projects = {
    first: {
        title: 'Tech Forum',
        imageURI: 'images/Forum-preview.png',
        image_alt: 'Tech Forum Preview'
    },
    second: {
        title: 'Nexus',
        imageURI: 'images/Nexus-preview.png',
        image_alt: 'Social Media preview'
    },
    third: {
        title: 'Admin Dashboard',
        imageURI: 'images/AdminDashboard-preview.gif',
        image_alt: 'Admin Dashboard preview'
    },
    fourth: {
        title: 'JavaScript Clock App',
        imageURI: 'images/Clock-preview.png',
        image_alt: 'Clock preview'
    },
    fifth: {
        title: 'Weather App (PWA)',
        imageURI: 'images/Weather-preview.png',
        image_alt: 'Weather preview'
    },
    sixth: {
        title: 'Real-time Messenger',
        imageURI: 'images/Messenger-preview.png',
        image_alt: 'Messenger preview'
    },
    seventh: {
        title: 'Always On Display',
        imageURI: 'images/AOD-preview.png',
        image_alt: 'AOD preview'
    },
    eigth: {
        title: 'Bus App Web',
        imageURI: 'images/BusAppWeb-preview.png',
        image_alt: 'Bus App Web preview'
    },
    ninth: {
        title: 'Bus App',
        imageURI: 'images/BusApp-preview.png',
        image_alt: 'Bus App native preview'
    },
    tenth: {
        title: 'Music Streaming App',
        imageURI: 'images/MusicApp-preview.png',
        image_alt: 'Music App preview'
    }
};

const projectData = {
    first: {
        title: "Tech Forum",
        desc: `My first <strong>dynamic</strong> project built from scratch without any framework | A user-based forum / a discussion site for tech geeks.<br>
                Features:<br>
                ➤ Responsive<br>
                ➤ Has both light and dark theme<br>
                ➤ Users can post articles in different categories<br>
                ➤ Comments feature for and view counter for posts<br>
                ➤ Notification system to keep users updated<br>
                ➤ Users Profile Page<br>
                ➤ Secure login<br>
                ➤ SEO friendly URLs<br>
                ➤ Admin panel to manage users and posts.`,
        techUsed: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL"],
        url: "https://techatglance.tk/"        
    },
    second: {
        title: "Social Media",
        desc: `This one being mine favourite project, 
                an instagram like social media Progressive Web Application built from scratch with custom features. <br>
                Features:<br>
                ➤ Eye catching UI with beautiful animations <br> 
                ➤ Stories, saving posts feature <br> 
                ➤ Follow / unfollow & private account system <br> 
                ➤ Dark theme support <br> 
                ➤ Image as well as quick status upload <br> 
                ➤ Notification system for account activity <br>
                ➤ Secure login <br>
                ➤ Clean URLs <br>
                ➤ Dashboard for admins to manage user and reports <br>
                <br> Responsive<br>
                Sleek, modern and minimal UI.<br>
                `,
        features: ``,
        techUsed: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        url: "https://nexus-ig.cf"        
    },
    third:{
        title: "Admin Dashboard",
        desc: `Admin panel built to manage Nexus (a social media application).<br>
                Features:-<br>
                ➤ Glassmorphism UI <br>
                ➤ Has different themes<br>
                ➤ Shows complete stats of the application <br>
                ➤ Perform actions such as disable,enable logins / new registerations or new posts <br>
                ➤ Manage reports, users and admins
                `,
        techUsed: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        url: ""
    },
    fourth: {
        title: "JavaScript Clock App",
        desc: `Clock app built using Vanilla JavaScript.<br>
                Features:-<br>
                ➤ Has both light and dark theme<br>
                ➤ Toggle for 24 Hour time format`,
        techUsed: ["HTML5", "CSS3", "Vanilla JavaScript"],
        url: "https://mayank-01-ms.github.io/clock"
    },
    fifth: {
        title: "Animated Weather App (PWA)",
        desc: `Get 7 days full forecast in a beautifully designed UI based on the latest trend glassmorphism. 
                <br>
                Weather data can be retrieved based on the current location or for a particular city. 
                Animations are previewed according to the current weather. 
                Being a Progressive Web Application, it can be installed and used like a native app. 
                It has an offline page when the application has no network connectivity, instead of the boring browser message.
                <br><br>
                I request you to go through it once and I'm sure you gonna like it. 🔥`,
        techUsed: ["HTML5", "CSS3", "Vanilla JS"],
        url: "https://mayank-01-ms.github.io/weather"
    },
    sixth: {
        title: "Real time chat messenger",
        desc: "Real time chat messenger with Whatsapp like UI",
        techUsed: ["ReactJS", "Material UI", "Firebase CLI", "Firebase hosting"],
        url: ""
    },
    seventh: {
        title: "Always On Display",
        desc: `A web-based Always On Display built using Battery API of the browser with the live battery status.   
                Charger plugged in/out detection feature and a beautiful charging animation while the device is charging. 
                Supports both laptops and smartphones.`,
        techUsed: ["HTML5", "SCSS", "JavaScript", "Battery API"],
        url: "http://mayank-01-ms.github.io/aod"
    },
    eigth: {
        title: "Bus App Web",
        desc: ` Application designed to eliminate the need of carrying physical bus pass,
            which we used to present before getting into our university bus.   
            <br>
            Features:
            <br>
            ➤ Minimal UI <br>
            ➤ Single Page application <br>
            ➤ Students can present QR code, edit and manage their profile from web <br>
            ➤ Designed Admin panel using Material UI to manage drivers, buses, student, and their pass <br>
        `,
        techUsed: ["Mongo DB", "ExpressJS", "ReactJS", "NodeJS", "Material UI"],
        url: "https://gehu-bus.herokuapp.com"
    }, 
    ninth: {
        title: "Bus App",
        desc: `
            Android app designed to eliminate the need of carrying physical bus pass,
            which we used to present before getting into our university bus.
            <br>
            Features:
            <br>
            ➤ Onboarding screen <br> 
            ➤ Beautiful animations <br>
            ➤ Minimal and clean UI <br>
            ➤ Login and new registration <br> 
            ➤ Both user groups can manage and edit their profile from within the app <br>
            ➤ Student's data is kept offline on the app. So there is no need for a network unless logged out manually <br>
        `,
        techUsed: ["React Native"],
        url: "https://gehu-bus.herokuapp.com/downloads/app.apk"
    },
    tenth: {
        title: "Music Streaming App",
        desc: `
            Music streaming Progressive Web Application 
            <br>
            Features:
            <br>
            ➤ Music Streaming Web Application <br> 
            ➤ Minimal and clean UI <br>
            ➤ Playlist creation feature with custom songs <br>
            ➤ No ads 😂😂 <br>
        `,
        techUsed: ["ReactJS", "ExpressJS", "MySQL"],
        url: ""
    }
}
