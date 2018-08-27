export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "jeffmsmith-notes"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://4bea6tavcl.execute-api.us-west-2.amazonaws.com/prod/"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_6hRvXOPbg",
        APP_CLIENT_ID: "rp38pvocgh8fps4nbhea49p3c",
        IDENTITY_POOL_ID: "us-west-2:cfb91fe5-14a6-4509-953b-6951ba5468c3"
    }
};