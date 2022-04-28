PUI Assignment 8 README
Video: https://drive.google.com/file/d/1_GtPVR1EYaMSIPF2yrUdqPS462GRN_k_/view?usp=sharing (use andrew account)
Figma: https://www.figma.com/file/rRjvLO5LWio3Ct5vqxTzug/PUI-Final-Project?node-id=0%3A1
Github pages hosting: https://meliyang.github.io/pui-8/

Description: This is my personal website and supplemental to my current resume, such as personal facts about me and extra work that I've done that aren't on my resume. It adjusts to screen size and has simple animations on the home page. While rudimentary and simple now, the target audience for the future will be recruiters. It also adheres to WCAG.

Using the site:
starting on index.html (home page)
- click "works" in navbar
    - click "projects", scroll to view projects, adjust screen size
    OR
    - click "photography", scroll to view photos, adjust screen size
- click "about" in navbar
- click "MY" in the top left corner to come back to index.html

External libraries: I used Bootstrap because it adds interactivity to my site, particularly the adjustable screen size function and navbar. I also added small animations for feedback (e.g. hover highlights) and to bring life (my name and description slide in) to the home page.
- Bootstrap: I chose to use it because there are builtin functions that allow responsiveness and interactivity that is difficult to hard-code. The navbar, footer, and grid style are from bootstrap. It's especially useful in the responsiveness in adjusting the screen size.
- Animations (CSS): I used CSS Animations because I felt like the text in my home page was lacking interactivity. So on first load, the title and description will slide in. It definitely brings liveliness to the webpage.

Iteration: I made two prototypes on Figma because I thought the first one would be too simple, but the second idea was too complex animations-wise, so I stuck with the general flow of the first one and tried to keep the font and color theme similar to the second.

Major challenges: I had issues with adding animations. I wish I could slide in the background color separately from the text. I also realized that my css style sheet had to be added after the bootstrap file to overwrite anything.