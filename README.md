# Internship Finder Web Application

A responsive web application that helps users find and compare internship programs based on their skills, availability, and time commitment.


## 🌐 Live Website  
My website is live at: [https://aneeshsrinivas.github.io/vc-internships-web/](https://aneeshsrinivas.github.io/vc-internships-web/)  
Feel free to explore it and suggest any changes or improvements!


## 🌟 Features

### 🔍 Skill Matching
- Enter your skills (comma separated) or GitHub profile URL
- Visual matching meter shows compatibility with each internship
- Color-coded matching (high/medium/low) with gradient indicators

### ⏳ Time Commitment Calculator
- Interactive slider to select available hours per week
- Automatic feasibility assessment for each program
- Visual badges indicating schedule compatibility:
  - ✅ Fits schedule (green)
  - ⚠️ Tight schedule (yellow)
  - ❌ Schedule conflict (red)

### 📅 Availability Planner
- Interactive weekly calendar (Tetris-style)
- Click to select available time blocks
- Visual feedback on selected hours

### 🔄 Comparison Tool
- Select mode to compare two programs
- Visual selection indicators
- Detailed comparison results

### ♿ Accessibility Features
- High contrast mode
- Colorblind-friendly palette
- Reduced motion option
- Keyboard navigable interface

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic structure with ARIA attributes
- **CSS3**: Custom properties (variables), Flexbox, Grid, responsive design
- **JavaScript**: DOM manipulation, event handling

### Design System
- **CSS Variables**: For consistent theming
- **Poppins Font**: Modern, readable typography
- **Responsive Breakpoints**: Mobile-first approach

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/internship-finder.git

2. Navigate to project directory:
        cd internship-finder

3. Open in your browser:

    Simply open index.html in any modern browser

    Or use a local server like Live Server (VS Code extension)


🖥️ Usage
1. Basic Flow Enter your skills in the input field

2. Adjust your available hours per week using the slider

3. Mark your weekly availability on the calendar

4. View matching programs with compatibility indicators

5. Click "Compare Programs" to select and compare two options

Advanced Features:
1. Click the ☑️ icon for accessibility options

2. Toggle "Explain Like I'm New" for simplified explanations

3. Use the "Take Guided Tour" button for an interactive walkthrough

🎨 Customization
Adding New Programs:
Edit the HTML to add new internship cards:
<article class="card" data-skills="python,machine-learning" data-duration="60" data-hours="20">
  <!-- Card content -->
</article>

Styling Options
Modify the CSS variables in styles.css:
:root {
  --accent: #4361ee; /* Primary color */
  --match-high: #4caf50; /* High match color */
  --card-bg: #fff; /* Card background */
}


♿ Accessibility
This project includes:

Semantic HTML5 structure

ARIA attributes for screen readers

Keyboard navigable components

Multiple accessibility modes:

High contrast

Colorblind-friendly palette

Reduced motion

📱 Responsive Design
Fully responsive across all devices:

Mobile (≤480px): Compact card layout, larger touch targets

Tablet (768px): 2-column grid

Desktop (≥1025px): 3-column grid

🤝 Contributing
1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

✉️ Contact
Contact me here - aneeshsrinivas2006@gmail.com


Project Link: https://github.com/aneeshsrinivas/vc-internships-web
