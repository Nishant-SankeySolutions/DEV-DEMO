# CI/CD Deployment via GitHub Actions + SSH

## Overview
Deploy a Node.js app to AWS EC2 / DigitalOcean using GitHub Actions.

## Setup
1. Create your server and install Node.js.
2. Configure GitHub Secrets:
   - `HOST`
   - `USERNAME`
   - `PRIVATE_KEY`
   - `DESTINATION`

3. Push to `main` branch to trigger deployment.
