import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { verify } = jwt;

// Create a middleware function that blocks unauthicated users from triggering a route
export const blockGuests = (req: Request, res: Response, next: NextFunction) => {
  console.log("Cookies:", req.cookies); 
  // TODO: Retrieve the token cookie from req.cookies
  const token = req.cookies?.token;

  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    verify(token, process.env.JWT_SECRET as string);
    return next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
  // TODO: If the token cookie does not exist, send a 401 json response message and return
 
  // TODO: If the token exists, validate it with the verify function, ( ie. verify(token, process.env.JWT_SECRET) )
 
 
  // TODO: If it verifies, call next to move the request on to the controller function
 
  // TODO: If it doesn't verify send a 401 json response message and DO NOT call next


