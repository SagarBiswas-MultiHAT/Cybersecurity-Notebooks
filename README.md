# Cybersecurity Notebooks Vault

<div align="right">

[![GitHub Pages](https://img.shields.io/github/pages/status/SagarBiswas-MultiHAT/Cybersecurity-Notebooks?style=for-the-badge)](https://sagarbiswas-multihat.github.io/Cybersecurity-Notebooks/)
&nbsp;
[![Release](https://img.shields.io/github/v/release/SagarBiswas-MultiHAT/Cybersecurity-Notebooks?style=for-the-badge)](https://github.com/SagarBiswas-MultiHAT/Cybersecurity-Notebooks/releases)
&nbsp;
![Last commit](https://img.shields.io/github/last-commit/SagarBiswas-MultiHAT/Cybersecurity-Notebooks?style=for-the-badge)
&nbsp;
[![License](https://img.shields.io/github/license/SagarBiswas-MultiHAT/Cybersecurity-Notebooks?style=for-the-badge)](LICENSE)

</div>

> A practical collection of my cybersecurity notebooks, projects, and learning notes. I wrote this README in a simple student style, but I made it very complete so someone can understand all major notebook topics and subtopics without opening each PDF first.

## Why this repo exists

I wanted one place where beginners and intermediate learners can:
- Understand cybersecurity basics fast
- See how topics connect (networking -> DNS -> OSINT -> phishing -> career paths)
- Find direct PDF notes and quick revision points
- Follow a clean learning sequence with real-world examples

## GitHub Pages Website

This repository includes a full GitHub Pages website with a dramatic hacker aesthetic and responsive layout.

- Entry page: `index.html`
- Styles: `assets/css/style.css`
- Behavior: `assets/js/main.js`
- 404 page: `404.html`
- Workflow check: `.github/workflows/get-started-check.yml`

### How to host on GitHub Pages
1. Push this repo to GitHub.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select `main` branch and `/ (root)` folder.
5. Save.
6. Wait 1-2 minutes and open your Pages URL.

## Notebook Index (Direct PDF Links)

1. [Foundations of Networking](<Foundations of Networking.pdf>)
2. [DNS in Detail](<DNS_in_Detail.pdf>)
3. [Google Dorks](<Google Dorks.pdf>)
4. [Introduction to Cyber Security](<Short_Introduction_to_Cyber Security.pdf>)
5. [Securing the Future (Cybersecurity Career Paths)](<Cybersecurity-CareerPaths.pdf>)
6. [Understanding Phishing: How Attacks Are Crafted and Caught](<Understanding Phishing How Attacks Are Crafted and Caught.pdf>)

---

## Notebook 1: Foundations of Networking (Complete Topic Map)

### Chapter 1: Networking Basics
- What networking means
- What the internet is
- Historical context of internet communication
- Types of networks (LAN, WAN, etc.)
- Identifying devices in a network

### Device Identity Basics
- IP address
- MAC address
- Difference between logical identity and hardware identity
- Practical case idea: MAC spoofing awareness

### ICMP and Ping
- What ICMP is
- How ping works
- Why ping is useful in troubleshooting
- Practical use cases (reachability checks, latency checks)

### Chapter 2: Core Building Blocks
- IP address as destination identity
- Ports as service entry points
- Protocols as communication rules

### Ports
- Number of total ports
- Well-known ports
- Registered ports
- Dynamic/private ports
- Port range summary
- Real dynamic-port communication example

### Protocols
- TCP (reliable, ordered)
- UDP (fast, lightweight)
- Why protocols matter
- TCP/IP model relation

### Chapter 3: LAN (Local Area Network)
- LAN definition and scope
- High speed and low latency behavior
- Typical LAN topologies: star, bus, ring
- LAN technologies: Ethernet, Wi-Fi (802.11)
- Hardware components: switch, router, WAP, NIC, end devices
- Addressing in LAN: MAC, IP, DHCP
- LAN security basics: firewall, VLAN, Wi-Fi encryption, MAC filtering

### Chapter 4: TCP and UDP Deep Dive

#### TCP
- Control flags: URG, FIN, RST, PSH, ACK, SYN
- Three-way handshake: SYN -> SYN-ACK -> ACK
- Connection termination examples (FIN/ACK)

#### UDP
- Connectionless communication
- No guaranteed delivery
- No ACK/retransmission
- Low overhead and high speed
- Use cases: streaming, gaming, VoIP, DNS
- Advantages and trade-offs

#### TCP vs UDP
- Reliability vs speed
- Ordered vs unordered packets
- Overhead comparison
- Service suitability map

### Chapter 5: All About IP Addressing
- Practical analogy for IP understanding
- IPv4 limits and exhaustion problem
- IPv4 vs IPv6 (size, format, capacity)
- CIDR prefix notation
- Prefix length meaning

### IP Types
- Public IP
- Private IP
- Static IP
- Dynamic IP
- Public/private comparison rules
- Localhost (`127.0.0.1`)
- How to check your own IP

### Chapter 6: Router and Address Translation
- Router behavior with public/private networks
- DHCP address assignment
- ARP role in local mapping
- NAT step-by-step source/destination translation example

### Chapter 7: Domain and DNS Networking
- What a domain name is
- Why domains are needed
- Website basics: static public IP + domain mapping

### DNS Records and Usage
- A
- CNAME
- MX
- TXT
- NS
- SOA
- SRV
- PTR

### DNS Resolution
- How DNS lookup works
- Practical checks: `nslookup`, `dig`, online tools
- Zone file concept and characteristics

### Chapter 8: OSI and TCP/IP Models

#### OSI Model
- 7 layers:
  - Physical
  - Data Link
  - Network
  - Transport
  - Session
  - Presentation
  - Application
- Encapsulation and decapsulation flow

#### TCP/IP Model
- 4-layer and 5-layer views
- Functional mapping with OSI
- Layer comparison and protocol references
- Why application-layer exposure is high-risk

### Chapter 9: Other Security Concepts
- Wi-Fi attack overview
- Aircrack-ng use cases:
  - Packet capture
  - WEP/WPA/WPA2 cracking concepts
  - Replay/deauth context

### CIA Triad
- Confidentiality
- Integrity
- Availability
- Real examples and why the balance matters
- Hashing context (MD5, SHA family) for integrity checks

---

## Notebook 2: DNS in Detail (Complete Topic Map)

### DNS Fundamentals
- DNS as internet phonebook concept
- Why domain-to-IP translation is required
- Domain hierarchy levels:
  - Root
  - TLD
  - Second-level domain
  - Subdomain

### TLD Categories
- gTLD examples (`.com`, `.org`, `.edu`)
- ccTLD examples (`.ca`, `.co.uk`)

### Domain Naming Rules
- Label max length: 63 chars
- Allowed chars: letters, digits, hyphen
- No underscore in standard host labels
- Full domain max length: 253 chars

### DNS Records (in practical language)
- A -> IPv4 mapping
- AAAA -> IPv6 mapping
- CNAME -> alias to canonical name
- MX -> mail routing with priority
- TXT -> SPF, DKIM, DMARC and verification text
- NS -> nameserver authority
- SOA -> zone authority metadata

### DNS Query Resolution Path
1. Local cache check
2. Recursive resolver check
3. Root server referral
4. TLD server referral
5. Authoritative server final answer
6. TTL-based caching at different levels

### Practical Lookup Commands
- `nslookup -type=A <domain>`
- `nslookup -type=AAAA <domain>`
- `nslookup -type=CNAME <domain>`
- `nslookup -type=MX <domain>`
- `nslookup -type=TXT <domain>`
- `nslookup -type=NS <domain>`
- `nslookup -type=SOA <domain>`

---

## Notebook 3: Google Dorks (Complete Topic Map)

### Part 1: What Google Dorks Are
- Advanced search operators
- Why normal search misses many useful results
- Use by security researchers, students, journalists, analysts

### Essential Dorks
- `site:`
- `intitle:`
- `inurl:`
- `filetype:`
- `ext:`
- `cache:` (with Wayback Machine fallback)
- `related:`
- `info:`
- `intext:`
- `allintitle:`

### Part 2: Advanced Operators

#### Boolean and logic
- `OR` / `|`
- `AND`
- Exclusion with `-`

#### Phrase and wildcard
- Exact phrase with quotes
- Wildcard `*` to fill unknown words

#### Range and filters
- Numeric range with `..`
- Date filters: `before:` and `after:`
- Location filters

#### Link/text relation operators
- `inanchor:`
- `allinanchor:`

### Part 3: Real-World Applications
- Ethical security audits on owned/permitted targets
- OSINT investigations
- SEO and competitive analysis
- Academic data and publication discovery

### Part 4: Defensive Hardening Against Dork Exposure
- Self-auditing using safe dork patterns
- `robots.txt` for crawler guidance
- Access controls (`.htaccess`, auth layers)
- Search Console index checks and removals
- Patch/update hygiene
- 2FA/MFA improvements
- Exposure monitoring with alerts
- Team awareness training
- Cloud sharing control reviews
- Backup and recovery strategy

### Part 5: Legal and Ethical Boundaries
- Public search vs unauthorized access
- Permission-first testing rule
- Responsible disclosure basics
- "Findable does not mean legal to access" principle

### Part 6: Bonus Resource
- Curated bug bounty dork collection references
- Caution: use only where explicit authorization exists

---

## Notebook 4: Introduction to Cyber Security (Complete Topic Map)

### Core Mindset
- Think like an attacker to defend better
- Offensive and defensive views are complementary

### Offensive Security
- Ethical exploitation with permission
- Vulnerability discovery and validation
- Typical roles:
  - Penetration Tester
  - Red Teamer
  - Security Engineer (security architecture/controls)

### Example Tooling
- Gobuster basics
- Directory brute-force command pattern
- HTTPS self-signed handling with `-k`

### Defensive Security
- Security awareness training
- Asset and patch management
- Firewall/IPS policy and monitoring

### Defensive Domains
- SOC operations
- Threat intelligence
- DFIR
- Malware analysis

### Career Paths Mentioned
- Security Analyst
- Security Engineer
- Incident Responder
- Digital Forensics Examiner
- Malware Analyst
- Penetration Tester
- Red Teamer

### SOC Investigation Workflow Example
- Detect suspicious auth pattern
- Check threat intel/reputation (example services)
- Correlate failed and successful access patterns
- Escalate correctly to SOC Team Lead

### Mindset Quiz Themes
- Prioritization under pressure
- Curiosity and technical exploration
- Strategic thinking
- Continuous learning attitude

### Glossary Highlights
- SSH authentication
- Firewall
- IPS
- SIEM
- IP address
- CTF/flag concept

---

## Notebook 5: Securing the Future (Cybersecurity Career Paths)

### Offensive Operations

#### Baseline
- Network penetration testing
- Web application pentesting
- Bug bounty workflows
- AI-assisted pentesting context

#### Specialized
- Cloud pentesting
- Mobile application security testing
- IoT/OT security testing
- Wireless and ICS testing

#### Advanced
- Exploit development
- Malware and C2 development context
- Red teaming operations

### Defensive Operations

#### Baseline
- Application security
- Incident handling
- Network security engineering
- Vulnerability assessment
- Security operations
- Endpoint security engineering

#### Specialized
- Digital forensics
- Incident response
- DevSecOps
- Secure coding
- Cloud security engineering/operations
- Cloud DFIR
- ICS security operations
- ICS DFIR
- Cryptography-focused roles

#### Advanced
- Detection engineering
- Malware analysis
- Reverse engineering
- Threat intelligence
- Threat hunting
- OSINT-focused defense
- Hardware security

### GRC Domain
- Governance
- Risk management
- Compliance mapping
- Risk assessment workflows
- Tooling awareness (e.g., enterprise GRC platforms)
- Frameworks and regulation references:
  - GDPR
  - HIPAA
  - ISO 27001
  - NIST guidance families

### Career Clarity Value
- Role-by-role explanation
- Skills map per role
- Common tools per role
- Real-world examples and operational goals

---

## Notebook 6: Understanding Phishing (Complete Topic Map)

### Phishing Evolution
- Early phishing patterns to modern targeted campaigns
- AI-enhanced phishing trends (voice/deepfake/social engineering scale)

### Major Attack Variants
- Mass email phishing
- Spear phishing
- Whaling
- Smishing (SMS)
- Vishing (voice calls)
- Clone phishing
- Quishing (QR)
- Social-media phishing
- AiTM/MiTM phishing
- Page hijacking / injected redirect patterns

### Impact Areas
- Financial losses and operational disruption
- Compliance and legal exposure
- Reputation damage
- Personal harm and identity theft

### Social Engineering Psychology
- Urgency
- Fear
- Authority pressure
- Curiosity bait
- Reciprocity
- Social proof

### Technical Evasion Tactics
- Fast-flux infrastructure
- Reverse proxies
- DNS tunneling patterns
- Bulletproof hosting ecosystems

### User and Org Defenses
- Sender/domain verification
- Link-hover and destination inspection
- Password manager usage
- Strong MFA (FIDO2 preferred)
- IOC enrichment with external reputation tools
- Layered defense: mail filtering + endpoint + firewall
- Immediate reporting workflow

### Policy and Compliance Side
- Acceptable Use Policy importance
- Regulatory expectations (GDPR, HIPAA, CCPA, ISO-aligned controls)
- Continuous simulation-based awareness programs

---

## Recommended Learning Sequence

1. Introduction to Cyber Security
2. Foundations of Networking
3. DNS in Detail
4. Google Dorks
5. Understanding Phishing
6. Securing the Future (choose specialization)

---

## Quick Command Revision

```bash
# DNS lookups
nslookup -type=A example.com
nslookup -type=MX example.com
nslookup -type=TXT example.com

# Networking checks
ping 8.8.8.8
traceroute example.com

# Web content discovery (authorized testing only)
gobuster -u https://example.com -w wordlist.txt dir -k
```

---

## Project and Community Links

- GitHub Profile: https://github.com/SagarBiswas-MultiHAT
- Blogs: https://sagarbiswas-multihat.github.io/blog/
- Facebook Community: https://www.facebook.com/groups/aiubcybersecurityandprogrammingsociety


<details><summary><h2>📂 Projects </h2></summary>

<div align="center"><h2>📔NoteBooks AND Facebook Community Group</h2></div>

<p align="center">
  <a href="https://github.com/SagarBiswas-MultiHAT/Google_Dorks_Notebook">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Google_Dorks_Notebook&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Google_Dorks_Notebook"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/noteBooks-maintainingBYme">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=noteBooks-maintainingBYme&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Google_Dorks_Notebook"></a>

<br>

    NOTE: To find more notebooks, projects, tips and tricks like this, join my Facebook community group and check the featured section for notebooks and explore the Posts to discover real-world projects.

<div align="center">
  <a href="https://www.facebook.com/groups/aiubcybersecurityandprogrammingsociety">
    AIUB CyberSecurity & Programming Society
  </a>
</div>
</p>

<div align="center"><h2>Useful Repositories</h2></div>

<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/Web_Penetration_Testing_Roadmap">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Web_Penetration_Testing_Roadmap&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Web_Penetration_Testing_Roadmap"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/infosec-vocabulary">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=infosec-vocabulary&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="infosec-vocabulary"></a>
  
  <a href="https://github.com/SagarBiswas-MultiHAT/Cybersecurity-Library">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Cybersecurity-Library&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Cybersecurity-Library"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WSL-Installation_Guide/">
    <img width="328" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WSL-Installation_Guide&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WSL-Installation_Guide"></a>
</p>

<div align="center"><h2>🤖AI Based Projects</h2></div>
<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/Web_Vulnerability_Scanner-AI">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Web_Vulnerability_Scanner-AI&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Web_Vulnerability_Scanner-AI"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Speech2Speech-AIAssistant">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Speech2Speech-AIAssistant&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Speech2Speech-AIAssistant"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/PythonicHackathon-CLI">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=PythonicHackathon-CLI&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="PythonicHackathon-CLI"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Ai-Resume-Analyzer">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Ai-Resume-Analyzer&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Ai-Resume-Analyzer"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Ai-Phishy-Playground">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Ai-Phishy-Playground&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Ai-Phishy-Playground"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Chat-Automation-Bot_Ai-Assistant">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Chat-Automation-Bot_Ai-Assistant&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Chat-Automation-Bot_Ai-Assistant"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Cyber-Command_AI-Assistant.exe">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Cyber-Command_AI-Assistant.exe&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Cyber-Command_AI-Assistant.exe"></a>
</p>

<div align="center"><h2>🤖 Tools/Automation</h2></div>

<p align="center">
  <a href="https://github.com/SagarBiswas-MultiHAT/MacChanger-V1-MAX">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=MacChanger-V1-MAX&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="MacChanger-V1-MAX"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Phoneint-OSINT-Toolkit">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Phoneint-OSINT-Toolkit&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Phoneint-OSINT-Toolkit"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WebSource-Harvester">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WebSource-Harvester&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WebSource-Harvester"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/HashAttackDemos">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=HashAttackDemos&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="HashAttackDemos"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/A_Pythonic-Keylogger">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=A_Pythonic-Keylogger&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="A_Pythonic-Keylogger"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/BruteforceLab1">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=BruteforceLab1&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="BruteforceLab1"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/BruteforceLab2">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=BruteforceLab2&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="BruteforceLab2"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/EmailBomber">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=EmailBomber&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="EmailBomber"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/NmapScanningTool-V1-MAX">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=NmapScanningTool-V1-MAX&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="NmapScanningTool-V1-MAX"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WinTempCleaner">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WinTempCleaner&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WinTempCleaner"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WiFi-Dictionary-Attack">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WiFi-Dictionary-Attack&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WiFi-Dictionary-Attack"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SeleniumFirefoxGoogleSearchAutomation">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SeleniumFirefoxGoogleSearchAutomation&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SeleniumFirefoxGoogleSearchAutomation"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/TextBombing-Toolkit">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=TextBombing-Toolkit&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="TextBombing-Toolkit"></a>

</p>

<div align="center"><h2>🛜 Networking</h2></div>

<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/TCP-Playground">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=TCP-Playground&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="TCP-Playground"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Saved-WiFi-Restore">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Saved-WiFi-Restore&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Saved-WiFi-Restore"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WiFi-Dictionary-Attack">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WiFi-Dictionary-Attack&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WiFi-Dictionary-Attack"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/WiFi-QR-Generator">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=WiFi-QR-Generator&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="WiFi-QR-Generator"></a>
    
  <a href="https://github.com/SagarBiswas-MultiHAT/domain2ip">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=domain2ip&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="domain2ip"></a>
</p>


<div align="center"><h2>🧑‍💻 Development</h2></div>

<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/SharpLink-URL-Allies/">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SharpLink-URL-Allies&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SharpLink-URL-Allies"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Photo-PDF-Bidirectional-Converter/">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Photo-PDF-Bidirectional-Converter&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Photo-PDF-Bidirectional-Converter"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/AirportDesk-Assistant/">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=AirportDesk-Assistant&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="AirportDesk-Assistant"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Library-Management-System">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Library-Management-System&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Library-Management-System"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Multi-FA-Auth/">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Multi-FA-Auth&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Multi-FA-Auth"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/PyTextEditor/">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=PyTextEditor&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="PyTextEditor"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SafeTodoManager">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SafeTodoManager&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SafeTodoManager"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SecurePay_E-Wallet-V1">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SecurePay_E-Wallet-V1&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SecurePay_E-Wallet-V1"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Student-Management-MVC-Learning-Project">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Student-Management-MVC-Learning-Project&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Student-Management-MVC-Learning-Project"></a>
  
  <a href="https://github.com/SagarBiswas-MultiHAT/TicTacToe-Game">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=TicTacToe-Game&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="TicTacToe-Game"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SecureBank-CLI">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SecureBank-CLI&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SecureBank-CLI"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SecureBankingSystem">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SecureBankingSystem&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SecureBankingSystem"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/CustomerSlip-CLI">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=CustomerSlip-CLI&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="CustomerSlip-CLI"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/PyCalculator">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=PyCalculator&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="PyCalculator"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Contact-Management-System">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Contact-Management-System&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Contact-Management-System"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SnakeWaterGun-Game">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=SnakeWaterGun-Game&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="SnakeWaterGun-Game"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/SnakeWaterGun-Game">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=PyAlarmClock&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="PyAlarmClock"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/AirportDesk-Assistant">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=AirportDesk-Assistant&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="AirportDesk-Assistant"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/Fake_FACEBOOK_Login_Page">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Fake_FACEBOOK_Login_Page&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Fake_FACEBOOK_Login_Page"></a>

</p>

<div align="center"><h2>🤖 Small Projects</h2></div>

<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/Password-Strength-Checker">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Password-Strength-Checker&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Password-Strength-Checker"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/XSS-WebGuard">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=XSS-WebGuard&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="XSS-WebGuard"></a>


  <a href="https://github.com/SagarBiswas-MultiHAT/Port_Scanner-Python">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Port_Scanner-Python&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Port_Scanner-Python"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/RandomPasswordGeneratorCpp">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=RandomPasswordGeneratorCpp&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="RandomPasswordGeneratorCpp"></a>

  <a href="https://github.com/SagarBiswas-MultiHAT/virusNewFolder">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=virusNewFolder&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="virusNewFolder"></a>

</p>

<div align="center"><h2>Collected Projects</h2></div>

<p align="center">

  <a href="https://github.com/SagarBiswas-MultiHAT/Impress-Crush-CPP-ASCII">
    <img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=SagarBiswas-MultiHAT&repo=Impress-Crush-CPP-ASCII&theme=github_dark&border_color=02D892&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&show_icons=false" alt="Impress-Crush-CPP-ASCII"></a>
</p>

</details>


## Blogs: 

https://sagarbiswas-multihat.github.io/blogs/

---

## Hashtags

#CyberSecurity #Networking #DNS #GoogleDorks #OSINT #PhishingAwareness #BlueTeam #RedTeam #SOC #ThreatIntelligence #DFIR #DevSecOps #InfoSec #CyberEducation #LearnCybersecurity
