export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const setAuthSignIn = (id) => {

    return {
        type: SIGN_IN,
        payload: id
    }

}
    export const setAUthSignOut = () =>{

        console.log("sign out action")
        return {
            type: SIGN_OUT
        }

    }