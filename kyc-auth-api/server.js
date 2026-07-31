// deploy api
express=require('express');
cors=require('cors');
dotenv=require('dotenv');
dotenv.config();
connectDB=require('./config/database');
app=express();
connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL,
}));

//define endpoints
app.use(express.json());
//routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/health', async (req, res) => {
    res.status(200).json({ message: 'API is healthy' });
}
);
const PORT = process.env.PORT || 5000;

function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
