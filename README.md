# 🎪 Eventller
### Advanced Event Management Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/eventller-devs/eventller-event-management/main.yml)
![PHP Version](https://img.shields.io/badge/php-%3E%3D8.1-brightgreen.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue)
![JIRA](https://img.shields.io/badge/JIRA-Active-blue)

> Building the future of event management, one feature at a time.


## 📚 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Project Management](#-project-management)
- [Documentation](#-documentation)
- [Security](#-security)
- [Contributing](#-contributing)

## 🚀 Features

### For Event Organizers
- 📅 Comprehensive event creation and management
- 🎫 Multiple ticket tiers with dynamic pricing
- 📊 Real-time analytics and reporting
- 🏷️ Promotional code management

### For Attendees
- 🔍 Advanced event discovery
- 🛒 Seamless ticket purchasing
- 📱 Mobile-friendly experience
- 📧 Automated notifications

### For Administrators
- 👥 User management and moderation
- 📈 Platform-wide analytics
- 🛡️ Content moderation tools
- ⚙️ System configuration controls

## 💻 Technology Stack

### Backend Infrastructure
```
🔷 PHP 8.1
🔶 PostgreSQL
🔷 PDO
🔶 Twig
🔷 Composer
```

### Frontend Technologies
```
🔷 NextJs
🔶 Tailwind CSS
🔷 Fetch API/AJAX
```

### Development Tools
```
🔷 Git & GitHub
🔶 JIRA
🔷 PHPUnit
🔶 Docker
```

## 🚀 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/eventller-devs/eventller-event-management.git
cd eventller-event-management
```

2. **Environment Setup**
```bash
cp .env.example .env
composer install
```

3. **Database Configuration**
```bash
# Update .env with your PostgreSQL credentials
php artisan migrate
```

4. **Start Development Server**
```bash
php -S localhost:8000 -t public
```

## 📋 Project Management

We use JIRA for project management and issue tracking. Access our board at:
[Eventller JIRA Board](https://amineyoucode.atlassian.net/jira/software/projects/EV/boards/13)

### Sprint Management
- Sprint Planning: Every Monday
- Daily Standups: 9:30 AM GMT+1
- Sprint Review: Every Friday
- Retrospective: End of each sprint

### Issue Types
- 🐛 Bugs
- ✨ Features
- 🛠️ Technical Tasks
- 📝 Documentation

## 📚 Documentation

Detailed documentation is available in the `/docs` directory:

- 📐 [Architecture Overview](docs/ARCHITECTURE.md)
- 💾 [Database Schema](docs/database.md)
- 📊 [API Documentation](docs/api.md)
- 🔄 [Workflow Guides](docs/workflows.md)

## 🔒 Security

Security is our priority:

- 🛡️ CSRF Protection
- 🔐 XSS Prevention
- 📝 SQL Injection Guards
- 🔒 Data Encryption
- 🚦 Rate Limiting

## 🤝 Contributing

1. Create a JIRA issue for your task
2. Branch naming convention: `feature/EV-[ticket-number]-description`
3. Commit messages should reference JIRA tickets: `[EV-123] Add feature X`
4. Submit PRs with detailed descriptions
5. Ensure tests pass before requesting review

## 📄 License

Eventller is MIT licensed. See [LICENSE](LICENSE) for details.

---

<div align="center">
Made with ❤️ by the Eventller Team
</div>
