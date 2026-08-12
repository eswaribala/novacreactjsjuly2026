//routes for registration and login
const router = require("./routerInstance");
const partnerController = require('../controllers/partnerController');
/**
 * @swagger
 * tags:
 *   name: Partner
 *   description: Partner management APIs
 */

/**
 * @swagger
 * /api/partner/create:
 *   post:
 *     summary: Create a new partner
 *     description: Creates a new partner.
 *     tags:
 *       - Partner
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePartnerRequest'
 *     responses:
 *       201:
 *         description: Partner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Partner created successfully
 *                 partner:
 *                   $ref: '#/components/schemas/CreatePartnerRequest'
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
router.post('/create', partnerController.createPartner);
/**
 * @swagger
 * /api/partner/getAll:
 *   get:
 *     summary: Get all partners
 *     description: Retrieves all partners.
 *     tags:
 *       - Partner
 *     responses:
 *       200:
 *         description: A list of partners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetAllPartnersResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/getAll', partnerController.getAllPartners);

/**
 * @swagger
 * /api/partner/getPartner:
 *   post:
 *     summary: Get a partner by mobile number
 *     description: Retrieves a partner by its mobile number.
 *     tags:
 *       - Partner
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GetPartnerByMobileNoRequest'
 *     responses:
 *       200:
 *         description: Partner found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetPartnerByMobileNoRequest'
 *
 *       404:
 *         description: Partner not found
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
router.post('/getPartner', partnerController.getPartnerByMobileNo);




module.exports = router;