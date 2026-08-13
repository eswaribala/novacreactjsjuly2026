// deploy api
express=require('express');
cors=require('cors');
dotenv=require('dotenv');
dotenv.config();
connectDB=require('./config/database');
swaggerSpecification=require('./config/swagger');
swaggerUi=require('swagger-ui-express');


app=express();
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL
    //credentials: true,
  })
);

//define endpoints
app.use(express.json());
//routes
app.use('/api-docs', swaggerUi.serve, 
    swaggerUi.setup(swaggerSpecification));
//Optional OpenAPI JSON endpoint
app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpecification);
});


app.use('/api/partner', require('./routes/partnerRoutes'));
app.use('/api/health', async (req, res) => {
    res.status(200).json({ message: 'API is healthy' });
}
);
const PORT = process.env.PORT || 5000;

function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
}

startServer();
