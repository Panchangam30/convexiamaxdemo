# Quick Setup Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies

```bash
# Install all dependencies
pnpm install

# Install frontend dependencies
cd frontend && pnpm install

# Install backend dependencies
cd ../backend && pnpm install
```

### 2. Configure OpenAI API Key

1. **Get your OpenAI API key** from [OpenAI Platform](https://platform.openai.com/api-keys)

2. **Create environment file**:

```bash
cd backend
cp env.example .env
```

3. **Add your API key** to `backend/.env`:

```env
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### 3. Start the Application

**Terminal 1 - Backend:**

```bash
cd backend
pnpm dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
pnpm dev
```

### 4. Test the Setup

1. **Backend Health Check**: Visit `http://localhost:3001/health`
2. **Frontend**: Visit `http://localhost:5173`
3. **Test GPT Integration**:

```bash
cd backend
pnpm test:gpt
```

### 5. Use the Application

1. Fill out the drug information form
2. Click "Submit Analysis"
3. View comprehensive market analysis results across multiple tabs

## 🔧 Troubleshooting

### Common Issues:

**"OpenAI API key not configured"**

- Check that your `.env` file exists in the backend folder
- Verify your API key is correct and has credits

**"Network error"**

- Ensure both frontend (port 5173) and backend (port 3001) are running
- Check that your firewall allows localhost connections

**"CORS error"**

- Frontend should be on `http://localhost:5173`
- Backend should be on `http://localhost:3001`

## 📋 What You Get

✅ **GPT-Powered Analysis**: Real-time market insights using GPT-4  
✅ **Comprehensive Reports**: Compound profiles, market sizing, competitive landscape  
✅ **Financial Projections**: Revenue forecasts, peak sales, CAGR  
✅ **Strategic Planning**: Action plans and success factors  
✅ **Interactive UI**: Modern, responsive interface

## 🎯 Next Steps

1. **Customize the GPT prompts** in `backend/src/services/gptService.ts`
2. **Add more data sources** for enhanced analysis
3. **Implement user authentication** for production use
4. **Add database storage** for analysis history

---

**Need help?** Check the full [README.md](README.md) for detailed documentation.
