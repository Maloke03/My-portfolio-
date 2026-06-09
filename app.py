from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

# ── Portfolio data — edit this to personalise ──────────────────────────────
PORTFOLIO = {
    "name": "Maloke Thabelo",
    "tagline": "BIT Student · Developer · Data Analyst · Network Enthusiast",
    "bio": (
        "I'm a Business Information Technology student with a passion for "
        "coding, data analysis, and networking. I enjoy building solutions "
        "that sit at the intersection of business and technology — from "
        "Python scripts and web apps to network simulations in Packet Tracer "
        "and Active Directory environments."
    ),
    "email": "malokethabelo88@gmail.com",
    "github": "https://github.com/Maloke03",
    "linkedin": "https://linkedin.com/in/Thabelo Maloke",
    "skills": [
        {"category": "Languages",    "items": ["Python", "HTML/CSS", "SQL", "JavaScript"]},
        {"category": "Data & Tools", "items": ["Pandas", "Excel", "Power BI", "Jupyter"]},
        {"category": "Networking",   "items": ["Packet Tracer", "Active Directory", "TCP/IP", "DNS/DHCP"]},
        {"category": "Web & DevOps", "items": ["Flask", "Git", "GitHub", "Render"]},
    ],
    "projects": [
        {
            "title": "Network Topology Simulator",
            "description": "Designed and configured a multi-router enterprise network in Cisco Packet Tracer, implementing VLANs, DHCP, and inter-VLAN routing.",
            "tags": ["Networking", "Packet Tracer", "VLAN"],
            "link": "#",
        },
        {
            "title": "Sales Data Dashboard",
            "description": "Built a Python + Pandas pipeline to clean and analyse sales data, producing an interactive visual report with Matplotlib.",
            "tags": ["Python", "Pandas", "Data Analysis"],
            "link": "#",
        },
        {
            "title": "Active Directory Lab",
            "description": "Set up a Windows Server AD environment: created OUs, group policies, user accounts, and mapped shared drives across a simulated company.",
            "tags": ["Active Directory", "Windows Server", "IT Admin"],
            "link": "#",
        },
        {
            "title": "Portfolio Website",
            "description": "This site! A Flask web app deployed on Render — responsive, mobile-friendly, and built entirely in Python.",
            "tags": ["Python", "Flask", "Web Dev", "Render"],
            "link": "#",
        },
    ],
}


@app.route("/")
def index():
    return render_template("index.html", data=PORTFOLIO, year=datetime.now().year)


@app.route("/api/contact", methods=["POST"])
def contact():
    """Simple contact endpoint — logs the message (extend to send email later)."""
    body = request.get_json(silent=True) or {}
    name    = body.get("name", "").strip()
    email   = body.get("email", "").strip()
    message = body.get("message", "").strip()

    if not all([name, email, message]):
        return jsonify({"ok": False, "error": "All fields are required."}), 400

    # TODO: plug in SendGrid / smtplib to forward messages to your inbox
    print(f"[Contact] {name} <{email}>: {message}")
    return jsonify({"ok": True, "message": "Thanks! I'll be in touch soon."})


if __name__ == "__main__":
    app.run(debug=True)
