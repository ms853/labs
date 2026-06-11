import router  from 'express';
import UserController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';

const userRouter = router();

// Define routes for user-related operations
userRouter.post('/v1/users', UserController.createUser, authenticate);
// userRouter.post('/login', UserController.login);
// userRouter.get('/profile', UserController.getProfile);