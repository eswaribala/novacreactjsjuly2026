//routes for registration and login
const router = require("./routerInstance");
const policyController = require('../controllers/policyController');
/**
 * @swagger
 * tags:
 *   name: Policy
 *   description: Policy management APIs
 */

/**
 * @swagger
 * /api/auth/create:
 *   post:
 *     summary: Create a new policy
 *     description: Creates a new policy.
 *     tags:
 *       - Policy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePolicyRequest'
 *     responses:
 *       201:
 *         description: Policy created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Policy created successfully
 *                 policy:
 *                   $ref: '#/components/schemas/CreatePolicyRequest'
 *       400:
 *         description: Missing fields or user already exists
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
router.post('/create', policyController.createPolicy);
/**
 * @swagger
 * /api/auth/getAll:
 *   get:
 *     summary: Get all policies
 *     description: Retrieves all policies.
 *     tags:
 *       - Policy
 *     responses:
 *       200:
 *         description: A list of policies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreatePolicyRequest'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/getAll', policyController.getAllPolicies);

/**
 * @swagger
 * /api/auth/get/{id}:
 *   get:
 *     summary: Get a policy by ID
 *     description: Retrieves a policy by its ID.
 *     tags:
 *       - Policy
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: The ID of the policy to retrieve
 *     responses:
 *       200:
 *         description: Policy found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getPolicyByIdRequest'
 *
 *       404:
 *         description: Policy not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/get/:id', policyController.getPolicyById);


module.exports = router;