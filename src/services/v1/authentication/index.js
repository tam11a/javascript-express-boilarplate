const express = require("express");
const router = express.Router();
const schema = require("./authentication.schema");

router.post(
	"/login",
	schema.login
	/* 	
        #swagger.description = 'Sign a specific user in' 

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": ["email", "password"], 
                        "properties": { 
                            "email": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "hello@example.xyz" 
                            }, 
                            "password": { 
                                "type": "string", 
                                "minLength": 6, 
                                "example": "123456" 
                            } 
                            
                        } 
                    },
                }
            }
        }

        #swagger.responses[200] = {
            description: "Login Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Invalid Credentials",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.get(
	"/validate",
	schema.validate
	/* 	
        #swagger.description = 'Validate user' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.responses[200] = {
            description: "Authenticated",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[404] = {
            description: "No User Found",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

module.exports = router;
