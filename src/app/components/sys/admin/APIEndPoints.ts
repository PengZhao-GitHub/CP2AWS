export const APIEndpoints = {

    CMS_URL: 'http://54.83.109.61:1337',
    CMS_API_URLs: [
        {
            category: 'product lines',
            url: 'http://54.83.109.61:1337/product-lines'
        },
        {
            category: 'products',
            url: 'http://54.83.109.61:1337/products'
        },
        {
            category: 'coverages',
            url: 'http://54.83.109.61:1337/coverages'
        },
        {
            category: 'showcases',
            url :'http://54.83.109.61:1337/showcases'  //http://35.78.194.40/
        }
    ],
    PAS_URL: 'http://44.201.220.164:5000',
    AUTH_GATEWAY_URL: 'http://3.91.100.67:3000',
    AUTH_URLs: [
        {
            provider: 'google',
            url: 'http://3.91.100.67:3000/auth/google'
        },
        {
            provider: 'facebook',
            url: 'http://3.91.100.67:3000/auth/facebook'
        },
        {
            provider: 'twitter',
            url: 'http://3.91.100.67:3000/auth/twitter'
        },
        {
            provider: 'linkedin',
            url: 'http://3.91.100.67:3000/auth/linkedin'
        },
        {
            provider: 'line',
            url: 'http://3.91.100.67:3000/auth/line'
        },
        {
            provider: 'email',
            url: 'http://3.91.100.67:3000/local/login'
        }
    ],
    AUTH_CALLBACK_URL: 'http://localhost:4200/profile/:id'
}
