import { validationResult } from "express-validator";

export function createCustomValidatorMiddleware(arr) {
    return [
        ...arr,
        (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
          }
          next();
        }
      ];
}