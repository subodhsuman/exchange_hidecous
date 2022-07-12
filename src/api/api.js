import axios from "axios";

export default class ApiClass {


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    

    // New local link
    static CAPTCHA_SITE_KEY = "6LeA8aMeAAAAAIZ430h3mJAoaOWKWOZJiIp_5Mag";
    static VUE_DOMAIN = "http://192.168.10.79:8080/";
    static nodeUrl = "http://192.168.11.116:4000/";
    static nodeWebsocket = "ws://192.168.11.116:4000/";
    static baseUrl = "http://192.168.11.116:8000/api/";
    static baseUrl = "http://192.168.11.209:8080/" 


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////


  

  // -------------------------------------------------------------------------------------
  //                                 Post api
  // -------------------------------------------------------------------------------------

  static postRequest( apiUrl, isToken = true, formData = null, headers = null, params = null) {
    return axios.post(this.baseUrl + apiUrl, formData, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                                 Get api
  // -------------------------------------------------------------------------------------

  static getRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios.get(this.baseUrl + apiUrl, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                           Update api / if form data with image
  // -------------------------------------------------------------------------------------

  static updateFormRequest(apiUrl, isToken = true, formData = null, headers = null, params = null) {
    baseParam = { _method: "PUT" };
    if (params != null) {
      var baseParam = Object.assign(params, baseParam);
    }
    return axios.post( this.baseUrl + apiUrl, formData, this.config(isToken, headers, baseParam)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                                Form data in json format
  // -------------------------------------------------------------------------------------

  static updateRequest( apiUrl, isToken = true, formData = null, headers = null, params = null ) {
    return axios.put( this.baseUrl + apiUrl, formData, this.config(isToken, headers, params) ).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                                       Delete Api
  // -------------------------------------------------------------------------------------

  static deleteRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios.delete(this.baseUrl + apiUrl, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                               Configrations of header and parameters
  // -------------------------------------------------------------------------------------

  static config(isToken = true, headers = null, parameters = null) {
    var defaultHeaders = {
      Accept: "application/json",
    };
    var merge = {};
    if (isToken) {
      var token = { Authorization: "Bearer " + localStorage.getItem("token") };
      merge = Object.assign(defaultHeaders, token);
    }
    merge = Object.assign(defaultHeaders, headers);
    return {
      headers: merge,
      params: parameters,
    };
  }

  // -------------------------------------------------------------------------------------
  //                            If the unautherntication Error.....
  // -------------------------------------------------------------------------------------

  static unauthenticateRedirect() {
    localStorage.clear();
    location.replace("/login");
  }

  // -------------------------------------------------------------------------------------
  //                            Node Api / Get
  // -------------------------------------------------------------------------------------

  static getNodeRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios.get(this.nodeUrl + apiUrl, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }

  // -------------------------------------------------------------------------------------
  //                            Node Api / Post
  // -------------------------------------------------------------------------------------

  static postNodeRequest(apiUrl, isToken = true, formData = null, headers = null, params = null) {
    return axios.post(this.nodeUrl + apiUrl, formData, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unauthenticateRedirect();
        }
      });
  }
}
