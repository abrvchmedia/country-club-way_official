import express from 'express';
import { z } from 'zod';
import Lead from '../models/Lead.js';
import { leadRateLimit } from '../middleware/rateLimit.js';

const router = express.Router();

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  address: z.string().optional(),
  message: z.string().optional(),
});

router.post('/', leadRateLimit, async (req, res, next) => {
  try {
    const validatedData = leadSchema.parse(req.body);

    const lead = new Lead(validatedData);
    await lead.save();

    res.status(201).json({ ok: true, message: 'Lead submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.errors 
      });
    }
    next(error);
  }
});

export default router;
