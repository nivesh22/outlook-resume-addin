# Outlook Resume Add-in

A minimal Outlook Web Add-in that attaches a resume from OneDrive to the current email compose window.

## Prerequisites

- Node.js and npm installed.
- Outlook on the web or Outlook for Windows.

## Setup

1.  **Install dependencies:**
    Open a terminal in the project directory and run:
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    This will start a local server at `https://localhost:3000`.
    Note: You might see a warning about self-signed certificates. This is normal for development. You may need to open `https://localhost:3000/taskpane.html` in your browser once and accept the certificate warning.

## Sideloading the Add-in

### Outlook on the Web (OWA)

1.  Go to [Outlook on the web](https://outlook.office.com/mail/).
2.  Create a **New Message**.
3.  Click the **...** (More actions) menu at the bottom of the compose window (or in the ribbon).
4.  Select **Get Add-ins**.
5.  Go to **My add-ins**.
6.  Scroll down to **Custom add-ins**.
7.  Click **Add a custom add-in** -> **Add from file...**.
8.  Select the `manifest.xml` file from this project directory.
9.  Click **Install**.

### Outlook for Windows

1.  Open Outlook.
2.  Click **Get Add-ins** (usually on the Home tab).
3.  Go to **My add-ins**.
4.  Scroll down to **Custom add-ins**.
5.  Click **Add a custom add-in** -> **Add from file...**.
6.  Select the `manifest.xml` file from this project directory.
7.  Click **Install**.

## Usage

1.  Open a new email or reply to an email.
2.  Look for the **Resume Add-in** group in the ribbon (it might be under the "Message" tab or the "..." menu).
3.  Click the **Attach Resume** button.
4.  A task pane will open on the right.
5.  Click the **Attach my resume** button.
6.  The status will update to indicate success or failure.

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
