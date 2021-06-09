const express = require('express');
const router = express.Router();
const ResearchPapersController = require('../controllers/researchPapers-controller');

router.get('/',ResearchPapersController.ViewResearchPaper);

module.exports=router;