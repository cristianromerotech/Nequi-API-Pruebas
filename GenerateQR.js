

  import axios from 'axios';

  const url = 'https://api.sandbox.nequi.com/payments/v2/-services-paymentservice-generatecodeqr';
  
  const requestData = {
    
        "RequestMessage": {
          "RequestHeader": {
            "Channel": "PQR03-C001",
            "RequestDate": "2017-06-21T20:26:12.654Z",
            "MessageID": "1122617890",
            "ClientID": "1234567",
            "Destination": {
              "ServiceName": "PaymentsService",
              "ServiceOperation": "generateCodeQR",
              "ServiceRegion": "C001",
              "ServiceVersion": "1.2.0"
            }
          },
          "RequestBody": {
            "any": {
              "generateCodeQRRQ": {
                "code": "NIT_1",
                "value": "1000",
                "reference1": "reference1",
                "reference2": "reference2",
                "reference3": "reference3"
              }
            }
          }
        }
      
  };
  
  // "Accept": "application/json",
  const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer itJreWQiOiJuHVhiaMBIVkREV3IxXC9sZTl2YVdVK0laNHlrSHRsUkF0bjFGanBRSVF3WT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJxODBta3BlM25yaTNmc2hhcQY5amtyNG9yMSIsInRva2KuX3VzZSI6ImFjY2VzcyAsInNjb3BlIjkiYXBpXC90aGlyZHBhcnR5YXBwcyBhcGlcL2FnZW50cyBhcGlcL25vdGlmaWNhdGlvbnMgYXBpXC9wYXJ0bmVycyBhcGlcL21vbmV5bWFuYWdlbWVudCBhcGlcL3BheW1lbnRzIGFwaVwvc3Vic2NyaXB0aW9ucyBhcGlcL3JlcG9ydHMgYXBzXC9kaXNwZXJzaW9ucyBhcGlcL2V7dGVybmFscGF5bWVudHMgLXBpXC90cmFuc3BvcnQlYXBpXC9naWZ0Y29kZXMiLCJhdXRoX3RpbWUiOjE3MjMiLCJhdXRoX3RpbWUiOjE3MjAwNTA5ODgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX202b21PQnFDWSIsImV4cCI6MTcyMDA1NDU4OCwiaWF0IjoxNzIwMDUwOTg4LCJ2ZXJzaW9uIjoyLCJqdGkiOiI0MWFmZmJlOC01MjdmLTQyM2ItYTM3ZC1mOTJmMzYzOWQyYTUiLCJjbGllbnRfaWQiOiIxODBta3BlM25yaTNmc2hhcTY5amtyNG9yMSJ9.Y4dI_3rJW4gL_mcdg1-pAbXa9luXLyM606OaD-pxfa3xjt8E7IH8xNB-0F0gEjnzCc-w4EU4kIevp-n4h1ha_-8EAS3uMEe6IW8plpx8m44hv9-V_NdoEMNbwaLsOQIke6Zd0RgN4cX3ArMlwycZHpn9PshYNEMyT17iZCJ2Bf7XmuM0WqUtbjNyL4SaKoNb1hCdsnrddwcY5sJnNaUzgvZXYm64gmQdIP0CTTOQUCbCtOEeKImhkAxJOi_UbPat3JenHlOZmMxO4OWslzPGBpzpDBD4ibiaZl2jDuvpAq20gUnYji-aiLARRiFkYH2pmo5wVFQWNAZsX1XuFSSzWw",
      "x-api-key": "4kLHt1p976aJFpNKuUSly1NAc64xQ8lM8QyaNZZ"
  };
  
  axios.post(url, requestData, { headers: headers })
      .then((response) => {
          console.log(response.data.ResponseMessage.ResponseHeader);
          console.log(response.data.ResponseMessage.ResponseBody);
      })
      .catch((error) => {
          //console.error('Error:', error);
      });
  
      //https://generator-qr.com/es/text-to-qr-code