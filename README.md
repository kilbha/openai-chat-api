Sure! Here's the complete `README.md` file, all in one — ready to copy-paste into your repo:

---

````markdown
# 🤖 Simple OpenAI Chat API (Node.js + TypeScript)

This is a minimal Express.js server written in TypeScript that acts as a wrapper for the OpenAI Chat API (`gpt-3.5-turbo`). You can make a POST request to the server and get AI-generated responses based on your input.

---

## ✨ Features

- Built with Node.js, Express, and TypeScript
- Connects to OpenAI’s GPT model
- Lightweight and beginner-friendly
- Easily extendable for more advanced use cases

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kilbha/openai-chat-api.git
cd openai-chat-api
````

Replace the URL with your actual GitHub repo URL.

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create a `.env` File

Since the `.env` file is not included for security reasons, you need to create it manually in the root of the project:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```

> 🔐 You can get your OpenAI API key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

---

### 4. Run the Server

```bash
npm run dev
```

If everything is set up correctly, the server will start at:

```
http://localhost:5000
```

---

## 📬 Making a Request

Send a `POST` request to the `/ask` endpoint with your question.

### ✅ Endpoint

```
POST http://localhost:5000/ask
```

### 📦 Example Request Body (JSON)

```json
{
  "question": "What is TypeScript?"
}
```

### 💬 Example Response

```json
{
  "answer": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
}
```

You can use Postman, curl, or any other HTTP client to test it.

---

## 📁 Project Structure

```
├── src/
│   └── index.ts        # Main server file
├── .env                # Not committed (you must create this)
├── package.json
├── tsconfig.json
```

---

## 🛡️ Notes

* Do **not** commit your `.env` file or API key.
* This project uses the `gpt-3.5-turbo` model by default.
* You can change the model or add additional OpenAI settings in `src/index.ts`.

---

## 🧠 License

MIT — use it, share it, improve it.
