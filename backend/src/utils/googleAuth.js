import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (accessToken) => {
    try {
        // Verify the access token by calling Google's tokeninfo endpoint
        // Or fetch user profile directly using the access token
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error("Invalid Google token");
        }

        return data; // contains email, name, picture, sub (id)
    } catch (error) {
        console.error("Error verifying Google token:", error);
        return null;
    }
};
