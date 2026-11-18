# Ismails Showcase

Build a modern, professional, highly attractive single-page portfolio website for a Flutter App Developer named Mohammed Ismail. The goal is to impress recruiters and clients in under 30 seconds. Use React + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion, and make it fully responsive (mobile first).

DESIGN STYLE
- Clean, premium, minimal "developer portfolio" look, similar to Linear, Vercel or Stripe.
- Dark theme by default with a light/dark toggle.
- Color palette: deep navy/near-black background, with a blue-to-cyan gradient accent (Flutter-inspired).
- Typography: Inter or Poppins for body text, bold large headings, plenty of white space.
- Glassmorphism cards with soft borders and subtle glow on hover.
- Smooth scroll, fade-up and stagger animations on scroll, animated gradient background in the hero, and a sticky blurred navbar with active section highlighting.
- Subtle micro-interactions on buttons and cards. No clutter, no stock clip-art.

SECTIONS (in this order)
1. Navbar: logo "MI", links (Home, About, Skills, Projects, Education, Contact), theme toggle, and a "Download CV" button.

2. Hero:
   - Small greeting: "Hi, I'm"
   - Large name: Mohammed Ismail
   - Animated typing text rotating through: "Flutter App Developer", "Mobile App Developer", "CSE Undergraduate", "Problem Solver"
   - Short tagline: "I build fast, responsive cross-platform mobile apps with Flutter and Dart."
   - Buttons: "View Projects" (primary), "Download CV" (outline), "Contact Me"
   - Social icons: GitHub (https://github.com/igismail) and LinkedIn (https://www.linkedin.com/in/mohammed-ismail-b2009022b/) and Email
   - Right side: circular/rounded profile photo placeholder with a gradient ring and floating tech badges (Flutter, Dart, Firebase, Arduino) that gently float.
   - Show a small badge: "Open to opportunities".

3. About:
   Motivated and detail-oriented Computer Science & Engineering student at Port City International University (CGPA 3.53) with hands-on experience building responsive cross-platform mobile apps using Flutter and Dart, plus embedded systems projects with Arduino. Strong in problem solving, communication and task management, and comfortable in remote or team-based environments.
   Add 3 animated stat cards: "3+ Projects", "Flutter & Dart", "CGPA 3.53".
   Add location: Chattogram, Bangladesh.

4. Skills (grouped cards with icons and animated tags or progress bars):
   - Languages: Dart, Python, C/C++
   - Mobile: Flutter, Cross-Platform Development, Android, Responsive UI, UI/UX
   - State Management & Networking: GetX, BLoC, REST APIs, HTTP, Dio
   - Backend & Cloud: Firebase, FlutterFire
   - Embedded Systems: Arduino Uno, Ultrasonic Sensors, Servo Motors, Sensor Integration, Serial Communication
   - Tools: Git, GitHub, VS Code, Android Studio
   - Soft Skills: Problem Solving, Communication, Teamwork, Task Management

5. Projects (grid of attractive cards with a gradient thumbnail or mockup placeholder, tech tags, short description, and "GitHub" and "Live Demo" buttons; hover lift effect; optional category filter: All / Flutter / AI / Embedded):
   a) AI Resume ATS Checker (Flutter, Dart): analyzes resumes and gives structured feedback with an ATS score. Features: resume upload, keyword analysis, section checking, formatting evaluation, report generation. Screens: splash, login, registration, upload, analysis, report.
   b) Face Detection App (Flutter, Computer Vision): detects and locates human faces in images with a clean, user-friendly interface.
   c) Bus Management & Ticket Booking System (Flutter, Dart): manage bus information, view available buses, book tickets and calculate travel cost.
   d) Smart Iron Dome Prototype (Arduino, C/C++, Embedded Systems): defense-inspired prototype using Arduino Uno, ultrasonic sensors, servo motors and laser modules that detects objects, tracks position and rotates toward the target automatically.

6. Education (vertical animated timeline):
   - Port City International University, Chattogram: B.Sc. in Computer Science and Engineering, July 2023 - Present, CGPA 3.53
   - Omorgani M.E.S College, Chattogram: Higher Secondary Certificate (Science), 2020 - 2022, GPA 4.08
   - Bakolia High School, Chattogram: Secondary School Certificate (Science), 2018 - 2020, GPA 4.22

7. Contact:
   - Heading: "Let's build something great together"
   - Contact form (name, email, message) with validation and a success toast. Make it work with a mailto fallback to mohammodismail2020@gmail.com.
   - Contact cards: Email mohammodismail2020@gmail.com, Phone +880 1892-945568, Location: Khulshi, Chattogram, Bangladesh, plus GitHub and LinkedIn links.

8. Footer: "© 2026 Mohammed Ismail. Built with Flutter passion and React." with social icons and a "Back to top" button.

EXTRA REQUIREMENTS
- Add SEO meta tags (title "Mohammed Ismail | Flutter App Developer", description, Open Graph tags) and a favicon.
- Use semantic HTML, good accessibility (alt text, focus states, contrast) and fast loading with lazy-loaded images.
- Include a scroll progress bar at the top and a subtle custom cursor glow effect on desktop only.
- The "Download CV" button should link to /Mohammed_Ismail_CV.pdf (I will upload the file).
- Keep the code clean and component-based, with all content stored in one data file so it is easy to edit.
- Make it feel polished, modern and trustworthy, not generic or template-like.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ismails-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c092430-6bf7-5f38-8a7c-291fd0d564bc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
