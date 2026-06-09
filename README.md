# My Portfolio — Flask App

A personal portfolio site built with Python + Flask, deployable to Render for free.

---

## 📁 Project Structure

```
portfolio/
├── app.py              ← Flask app + your portfolio data
├── requirements.txt    ← Python dependencies
├── Procfile            ← Tells Render how to start the app
├── render.yaml         ← Render deploy config
├── templates/
│   └── index.html      ← The single-page HTML template
└── static/
    ├── css/style.css   ← All styles
    └── js/main.js      ← Nav toggle + contact form JS
```

---

## ✏️ Personalise It

Open `app.py` and edit the `PORTFOLIO` dictionary at the top:

```python
PORTFOLIO = {
    "name": "Your Real Name",
    "email": "yourreal@email.com",
    "github": "https://github.com/yourusername",
    ...
}
```

Add your own projects to the `projects` list. That's it — the HTML auto-generates from this data.

---

## 🖥️ Run Locally

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the dev server
python app.py

# 3. Open http://127.0.0.1:5000 in your browser
```

---

## 🚀 Deploy to Render (Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
```
- Create a new repo on GitHub (github.com → New repository)
- Follow GitHub's instructions to push your code

### Step 2 — Connect to Render
1. Go to **https://render.com** and sign up (free)
2. Click **New → Web Service**
3. Connect your GitHub account and select your portfolio repo
4. Render auto-detects the settings from `render.yaml`
5. Click **Deploy** — takes ~2 minutes

### Step 3 — Your live URL
Render gives you a free URL like:
`https://portfolio-xxxx.onrender.com`

Open it on your phone — it's fully responsive! ✅

---

## 📝 Notes

- The free Render tier **spins down after 15 min of inactivity** — first load may take ~30 seconds to wake up. Upgrade to a paid plan ($7/mo) to keep it always-on.
- To add email delivery for the contact form, see `app.py`'s TODO comment — plug in SendGrid or Python's `smtplib`.
