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


module.exports = router;