/**
 * Module for util methods for checking method input.
 * 
 * @module
 */

// External imports
import { validate as uuidvalidate } from "uuid";

/**
 * Check the validity of a [Tokens]{@link types.Token} token string
 * 
 * Can not be undefined\
 * Has to be of length 32 (36 - 4 dashes)\
 * Has to be a valid UUID if dashes are added back into it
 * 
 * @param token the [Tokens]{@link types.Token} token string to be checked
 */
export function checkTokenKeyValidity(token: string): void {
    // Check if token is defined
    if (token === undefined) {
        throw(new Error("token is undefined"));
    }
    // Check length
    if (token.length != 32) {
        throw(new Error("token has to have length of 32"));
    }

    // Create uuid from token
    let uuid: string = token.slice(0, 8) + "-" + token.slice(8, 12)
                        + "-" + token.slice(12, 16) + "-" + token.slice(16, 20)
                        + "-" + token.slice(20, 32);
    // Check if valid uuid
    if (!uuidvalidate(uuid)) {
        throw(new Error("token structure is not valid"));
    }
}