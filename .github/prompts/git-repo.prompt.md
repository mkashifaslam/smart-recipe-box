---
description: Create a new public GitHub repository and push the current local repository to it.
agent: agent
---

# Create GitHub Repository and Push Code

Create a new **public** GitHub repository and push the current local repository to it.

## Parameters

- **GIT_USER**: GitHub username (default: `mkashifaslam` if not provided, use current authenticated GitHub user)
- **REPO_NAME**: Repository name (default: current workspace folder name)

## Task Requirements

1. **Create Repository**: Create a new public repository named `GIT_USER/REPO_NAME` on GitHub
2. **Configure Remote**: Add the repository as the remote origin
3. **Push Code**: Push the current local repository to the new remote repository

## Preferred Method: GitHub CLI

Use GitHub CLI (`gh`) for creating the repository:

```bash
# Verify authenticated user
gh auth status

# Get GitHub username `mkashifaslam` (if not provided, use authenticated user)
GIT_USER=${GIT_USER:-$(gh auth status --show-token | grep 'github.com account' | awk '{print $7}' | head -n 1)}

# Create public repository and add as remote
gh repo create REPO_NAME --public --source=. --remote=origin

# Check repository status
git status

# Add all files and commit
git add .
git commit -m "Initial commit"

# Push to remote
git push origin main
```

## Alternative Method: Git Commands

If GitHub CLI is not available, manually create the repository on GitHub.com first, then:

```bash
# Check repository status
git status

# Initialize git if not already done
git init

# Add all files and commit
git add .
git commit -m "Initial commit"

# Create GitHub repository using Github agent (if supported)
# (This step may require manual creation on GitHub.com if agent does not support repo creation

# Add remote origin (format: git@github.com:GIT_USER/REPO_NAME.git)
git remote add origin git@github.com:GIT_USER/REPO_NAME.git

# Push to remote
git push origin main
```

## Troubleshooting

- If `gh auth status` shows a different user, run `gh auth switch` to switch accounts
- If remote already exists, use `git remote set-url origin <REPO_URL>` instead
- Ensure you have push permissions for the specified GitHub account
