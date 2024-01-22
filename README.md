# Tic-Bark-Purr
An animal-themed Tic-Tac-Toe game using JavaScript, HTML and CSS.  <br>
Hosted on AWS with **Amplify**: [Tic-Bark-Purr](https://main.d2ujymcth4l85e.amplifyapp.com/)

![game demo](demo.gif)

## How to host this project on AWS Amplify
1. Fork this repository
2. On the console, navigate to the **AWS Amplify** service
3. Click 'New app' > 'Host web app'
4. Select GitHub to host your app from your fork of this repository
5. Authorize Amplify to access your repository. You should reach the following page:
<img src="https://github.com/mgrinstein/tic-bark-purr/assets/61131318/d34dc236-ad15-44d6-afc2-3d3f71be6ab8" width="500"> <br>
7. Select the repository and branch, and click 'Next'
8. Type your App name
9. Keep 'Build and test' settings as default, and check the box to "Allow AWS Amplify to automatically deploy all files hosted in your project root directory"
10. Review the app details, and click 'Save and deploy'
11. AWS Amplify will automatically run the Provision, Build and Deploy steps. A URL for your app is provided.
 
## Game Features
- Place Xs and Os on a grid (or cats and dogs, rather)
- Alternate turns between players
- Display next player up
- Detect a winner, and display they've won
- Detect a draw, and display it
- Reset game
