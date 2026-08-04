const router = require("./routesInstance");
const { addProduct } = require("../controllers/productController");
const { fetchProducts } = require("../controllers/productController");
/**
 * @swagger
 * /api/auth/add-product:
 *   post:
 *     summary: Add a new product
 *     description: Adds a new product to the catalog.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddProductRequest'
 *     responses:
 *       201:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product added successfully
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Missing fields or product already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/add-product", addProduct);

/**
 * @swagger
 * /api/auth/fetch-products:
 *   get:
 *     summary: Fetch all products
 *     description: Retrieves all products from the catalog.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FetchProductsResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

router.get("/fetch-products", fetchProducts);
module.exports = router;