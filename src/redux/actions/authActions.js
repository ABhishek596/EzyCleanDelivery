import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, LOADING, USER_DATA, USER_ROLE, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import { formDataHeader } from "../../services/formDataHeader";
import { GetAllCategory, GetAllService, GetDailyReport } from "./homeAction";
import { GetAssignOrder, GetCompletedOrder, GetOrderStatusList } from "./orderAction";
// import { GetAllNotification } from "./notificationAction";

export const AuthFunction = () => dispatch => {
    dispatch({
      type: AUTH_TOKEN,
      payload: 's',
    });
  };

export const InitialCall = () => async dispatch => {
    dispatch(GetDailyReport())
    dispatch(GetUserDataApi())
    dispatch(GetAssignOrder())
    dispatch(GetCompletedOrder())
    dispatch(GetOrderStatusList())
    // dispatch(GetAllNotification())
}

export const SignUpApi = (postData, navigation, cb) => async dispatch => {
    postData = await objectToFormData(postData)
 
    cb && cb(true)
    http.post(`delivery/register`, postData, formDataHeader)
        .then(async response => {
            if (response.data.data) {
                navigation?.navigate("Login");
                RNToasty.Success({
                    title: "Create account successfully",
                    duration: 2,
                });
                cb && cb(false)
            } else {
                cb && cb(false)
                RNToasty.Info({
                    title: response.data?.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            console.log("sign up error : ", error.response?.data)
            cb && cb(false)
            RNToasty.Error({
                title: error?.response?.data?.message,
                duration: 2,
            });
        })
};

export const LoginApi = (postData, cb) => async dispatch => {
    postData = await objectToFormData(postData)

    cb && cb(true)
    http.post("delivery/login", postData, formDataHeader)
        .then(async response => {
            console.log("login res : ", response?.data)
            if (response.data.data) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.data?.token
                })
                await AsyncStorage.setItem('@USER_TOKEN', response.data?.data.token);
                await AsyncStorage.setItem('@USER_ID', JSON.stringify(response.data?.data?.id))
                dispatch(InitialCall())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                // navigation && navigation.goBack()
                cb && cb(false)

            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("login error : ", error)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });

        })
};

export const GoogleLoginApi = (postData, cb) => async dispatch => {

    // postData = objectToFormData(postData)
    cb && cb(true)
    http.post("driver_google_login", postData)
        .then(async response => {
            console.log("GoogleLoginApi res : ", response.data.data)
            if (response.data.response) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: `${response.data.data?.id}`
                })
                // await AsyncStorage.setItem('@USER_TOKEN', response.data?.data?.token);
                await AsyncStorage.setItem('@USER_TOKEN', `${response.data?.data?.id}`);
                await AsyncStorage.setItem('@USER_ID', JSON.stringify(response.data?.data?.id))
                dispatch(InitialCall())
                // navigation && navigation.goBack()
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)

            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("GoogleLoginApi error : ", error)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });

        })
};

export const FacebookLoginApi = (postData, cb) => async dispatch => {
    // postData = await objectToFormData(postData)

    cb && cb(true)
    http.post("driver_login", postData)
        .then(async response => {
            if (response.data.response) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.data?.token
                })
                await AsyncStorage.setItem('@USER_TOKEN', response.data?.data.token);
                await AsyncStorage.setItem('@USER_ID', JSON.stringify(response.data?.data?.id))
                dispatch(InitialCall())
                // navigation && navigation.goBack()
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)

            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("login error : ", error)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });

        })
};

export const LogoutApi = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: null
    })
    dispatch({
        type: USER_DATA,
        payload: null,
    })
    AsyncStorage.removeItem('@USER_TOKEN')
    AsyncStorage.removeItem('@USER_ID')
}


export const UpdateUserApi = (postData, navigation, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("user id updata user : ", userId)

    postData = await objectToFormData(postData)
    // console.log("update user post data : ", postData)

    cb && cb(true)
    http.post(`delivery/update-profile`, postData, formDataHeader)
        .then(async response => {
            if (response.data.status === 200) {
                dispatch(GetUserDataApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
               cb && cb(false)
                navigation?.goBack()
            } else {
               cb && cb(false);
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("edit user error : ", error.response)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });
        })
};



export const GetUserDataApi = () => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("GetUserDataApi user id ; ", userId)
    // http.get(`driver_profile_details?did=${userId}`)
    dispatch({
        type: LOADING,
        payload: true,
    });
    http.get(`delivery/delivery-boy`)
        .then(async response => {
            console.log("delivery-boy ", response?.data?.data)
            if (response.data.data) {
                dispatch({
                    type: USER_DATA,
                    payload: response?.data?.data,
                })
                // RNToasty.Success({
                //     title: "get user data successfully",
                //     duration: 2,
                // });
                dispatch({
                    type: LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            console.log("user data error : ", error.response.data)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};


export const ForgetPasswordApi = (postDataIn, navigation, cb) => async (dispatch, getState) => {

    const postData = await objectToFormData(postDataIn)

    cb && cb(true)
    http.post(`request_otp`, postData, formDataHeader)
        .then(async response => {
            if (response.data.status) {
                console.log("otp user response.data : ", response.data)
                navigation?.navigate("Otp", {email:response.data.email})  //data: response.data.data[0],   before email in this line
                // navigation && navigation.navigate("Otp", { data: postDataIn, otp: response.data.data[0].otp, id: response.data.id })
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
            } else {
              
                cb && cb(false)
                RNToasty.Info({
                    title: response.data?.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("forget error : ", error)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });
        })
};

export const VerifyOtpApi = (postData, navigation, userId, cb) => async (dispatch, getState) => {
    
    // console.log("otp userId : ", userId)

    postData = await objectToFormData(postData)

    cb && cb(true)
    http.post(`verifyotpp`, postData, formDataHeader)
        .then(async response => {
            // console.log("verify otp res : ", response.data)
            if (response.data.status) {
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                navigation?.navigate("ResetPassword", { id: response.data });
               cb && cb(false)
            } else {
               cb && cb(false);
                RNToasty.Info({
                    title: response.data.massage,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("forget error OTP INPUT: --- ", error)
            RNToasty.Error({
                title: error.response?.data?.massage,
                duration: 2,
            });
        })
};

export const ResetPasswordApi = (postData, navigation, userId, cb) => async dispatch => {


    postData = await objectToFormData(postData)

    console.log("ResetPasswordApi data userid : ", postData, userId)

    cb && cb(true)
    http.post(`updatedriverpass`, postData, formDataHeader)
        .then(async response => {
            if (response.data) {
                
                // navigation?.replace("Login")
                // if (userId) {
                //     navigation?.goBack()
                //     dispatch(GetUserDataApi())
                // } else {
                //     navigation?.replace("Login")
                // }
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
                navigation?.replace("Login");
            } else {
                cb && cb(false);
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("reset password  error : ", error)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });
        })
};

export const UploadDocumentApi = (postData, navigation, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log("user id updata user : ", userId)

    postData = await objectToFormData(postData)
    // console.log("update user post data : ", postData)

    cb && cb(true)
    http.post(`driver_upload_doc?did=${userId}`, postData, formDataHeader)
        .then(async response => {
            if (response.data.response) {
                dispatch(GetUserDataApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
               cb && cb(false)
                navigation?.goBack()
            } else {
               cb && cb(false);
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("upload doc user error : ", error.response)
            RNToasty.Error({
                title: error.response?.data?.message,
                duration: 2,
            });
        })
};