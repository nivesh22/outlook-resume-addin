# Outlook Resume Add-in

A minimal Outlook Web Add-in that attaches a resume from OneDrive to the current email compose window.

## Prerequisites

- Node.js and npm installed.
- Outlook on the web or Outlook for Windows.

## Deployment & Setup

This add-in is configured to be hosted on **GitHub Pages**.

1.  **Push to GitHub**:
    Push this code to a new GitHub repository.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    git push -u origin main
    ```

2.  **Enable GitHub Pages**:
    - Go to Repo Settings -> Pages.
    - Source: **Deploy from a branch**.
    - Branch: **`gh-pages`** / **`/(root)`**.
    - Save.

3.  **Update Manifest**:
    - Ensure `manifest.xml` points to your GitHub Pages URL (e.g., `https://yourname.github.io/repo-name`).
    - (The current manifest is set to: `https://nivesh22.github.io/outlook-resume-addin`).

## Sideloading

1.  Open Outlook (Web or Desktop).
2.  **New Message** -> **...** -> **Get Add-ins** -> **My add-ins**.
3.  **Add a custom add-in** -> **Add from file...**.
4.  Select `manifest.xml`.

## Usage

1.  Compose a new email.
2.  Click the **Attach Resume** button in the ribbon.
3.  **Wait a moment**: You will see a "Attaching resume..." notification at the top of the email.
4.  **Done**: The resume will be attached automatically.

## Configuration

To change the resume URL, edit `src/taskpane/taskpane.ts`:

```typescript
const RESUME_URL = "https://onedrive.live.com/your-resume-link";
const RESUME_NAME = "Nivesh_Elangovanraaj_Resume.pdf";
```

## Troubleshooting

### PowerShell "running scripts is disabled" error
If you see an error like `File ...\npm.ps1 cannot be loaded because running scripts is disabled`, try running the command with `cmd /c`:

```bash
cmd /c npm start
```

Or run the commands in a standard **Command Prompt (cmd.exe)** instead of PowerShell.
