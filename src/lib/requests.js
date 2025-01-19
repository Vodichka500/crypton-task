import axios from 'axios'

export async function register(registerData, setServerError){
    try {
        const {data} = await axios.post('https://backend-ashen-seven-22.vercel.app/register', registerData)
        localStorage.setItem('token', data.token);
        return data
    } catch (e) {
        setServerError("Sorry "+e.response.data.message || 'An unknown error occurred')
        throw new Error(e.response?.data?.message || 'An unknown error occurred');
    }
}

export async function login(loginData, setServerError){
    try {
        const {data} = await axios.post('https://backend-ashen-seven-22.vercel.app/login', loginData)
        localStorage.setItem('token', data.token);
        return data
    } catch (e) {
        setServerError("Sorry "+e.response.data.message || 'An unknown error occurred')
        throw new Error(e.response?.data?.message || 'An unknown error occurred');
    }
}

export async function getProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Token not found in localStorage');
    }

    try {
        const response = await axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://backend-ashen-seven-22.vercel.app/profile',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({"authorization": token})
        })
        return response.data
    } catch (e) {
        localStorage.removeItem('token');
        throw new Error(e.response?.data?.message || 'An unknown error occurred');
    }
}


export async function exit(){
    localStorage.removeItem('token');
}



