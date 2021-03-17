import dotenv from 'dotenv'
dotenv.config({path: '../../.env'})

export const CREDENTIALS  = {
    VALID_USER: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME: process.env.INVALIDUSER,
        PASSWORD: process.env.INVALIDPASSWORD
    },
    VALID_USER2: {
        USERNAME2: process.env.USERNAME2
    },
    VALID_USER3: {
        USERNAME3: process.env.USERNAME3
    },
    ERROR_MESSAGE: {
        NOTMATCH: 'Epic sadface: Username and password do not match any user in this service'
    }
}

export const INFORMATION = {
    USER_INFORMATION: {
        FIRSTNAME: process.env.FIRSTNAME,
        LASTNAME: process.env.LASTNAME,
        ZIPCODE: process.env.ZIPCODE
    },

    ERROR_MESSAGE: {
        FIRSTNAMEREQUIRED: 'Error: First Name is required',
        LASTNAMEREQUIRED: 'Error: Last Name is required',
        ZIPCODEREQUIRED: 'Error: Postal Code is required'
    }

}    
